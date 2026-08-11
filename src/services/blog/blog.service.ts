import { fetchPageContent } from '../apiClient';
import type { BlogContent, BlogPost, BlogSection, BlogSubsection } from './blog.types';
import { blogs as localBlogs, type Blog, type ContentBlock } from '@/data/blogs';

// Fetches the Blog content from the CMS.
// Returns null if the API is unreachable — the pages then use their defaults.
export const getBlogContent = (): Promise<BlogContent | null> =>
  fetchPageContent<BlogContent>('blogs');

// --- CMS article -> renderer blocks ------------------------------------------
// The CMS models an article as: quick answer + intro paragraphs + Sections.
// The detail page renders a flat ContentBlock[]. This is the one place that
// translates between the two, so the CMS never has to expose "block types".

const clean = (list?: (string | undefined)[]): string[] =>
  (list ?? []).map((t) => (t ?? '').trim()).filter(Boolean);

const paragraphBlocks = (list?: string[]): ContentBlock[] =>
  clean(list).map((text) => ({ type: 'p', text }));

const bulletBlock = (list?: string[]): ContentBlock[] => {
  const items = clean(list);
  return items.length ? [{ type: 'list', items }] : [];
};

const subsectionBlocks = (sub: BlogSubsection): ContentBlock[] => {
  const heading = (sub.heading ?? '').trim();
  const body = [
    ...paragraphBlocks(sub.paragraphs),
    ...bulletBlock(sub.bullets),
    ...paragraphBlocks(sub.paragraphsAfter),
  ];
  if (!heading && !body.length) return [];
  return [...(heading ? [{ type: 'h3' as const, text: heading }] : []), ...body];
};

const sectionBlocks = (section: BlogSection): ContentBlock[] => {
  const blocks: ContentBlock[] = [];

  const heading = (section.heading ?? '').trim();
  if (heading) blocks.push({ type: 'h2', text: heading });

  blocks.push(...paragraphBlocks(section.paragraphs));
  blocks.push(...bulletBlock(section.bullets));
  blocks.push(...paragraphBlocks(section.paragraphsAfter));

  // Highlight box — only when it actually has text.
  const highlightText = (section.highlight?.text ?? '').trim();
  if (highlightText) {
    const title = (section.highlight?.title ?? '').trim();
    blocks.push({ type: 'callout', ...(title ? { title } : {}), text: highlightText });
  }

  // Two-column table — only when it has at least one non-empty row.
  const rows = (section.table?.rows ?? [])
    .map((r) => [(r.label ?? '').trim(), (r.value ?? '').trim()])
    .filter((r) => r[0] || r[1]);
  if (rows.length) {
    blocks.push({
      type: 'table',
      headers: [section.table?.col1Label?.trim() || '', section.table?.col2Label?.trim() || ''],
      rows,
    });
  }

  for (const sub of section.subsections ?? []) blocks.push(...subsectionBlocks(sub));

  return blocks;
};

/** Build the full ContentBlock[] for a CMS-authored article, or [] if it has no body. */
const cmsPostToBlocks = (post: BlogPost): ContentBlock[] => {
  const blocks: ContentBlock[] = [];

  const quickAnswer = (post.quickAnswer ?? '').trim();
  if (quickAnswer) blocks.push({ type: 'callout', title: 'Quick Answer', text: quickAnswer });

  blocks.push(...paragraphBlocks(post.intro));
  for (const section of post.sections ?? []) blocks.push(...sectionBlocks(section));

  return blocks;
};

// --- Merge --------------------------------------------------------------------

// A CMS value only wins when the author actually filled it in — blank strings
// and empty lists fall through to the shipped default for that slug.
const pick = <T,>(cmsValue: T | undefined, fallback: T): T => {
  if (cmsValue == null) return fallback;
  if (typeof cmsValue === 'string' && cmsValue.trim() === '') return fallback;
  if (Array.isArray(cmsValue) && cmsValue.length === 0) return fallback;
  return cmsValue;
};

const mergeBlog = (base: Blog, cms: BlogPost): Blog => {
  const content = cmsPostToBlocks(cms);
  const faqs = (cms.faqs ?? [])
    .map((f) => ({ question: (f.question ?? '').trim(), answer: (f.answer ?? '').trim() }))
    .filter((f) => f.question && f.answer);

  return {
    ...base,
    slug: base.slug,
    title: pick(cms.title, base.title),
    category: pick(cms.category, base.category),
    categoryId: pick(cms.categoryId, base.categoryId),
    date: pick(cms.date, base.date),
    readTime: pick(cms.readTime, base.readTime),
    author: pick(cms.author, base.author),
    metaTitle: pick(cms.metaTitle, base.metaTitle),
    metaDescription: pick(cms.metaDescription, base.metaDescription),
    image: pick(cms.image, base.image),
    imageAlt: pick(cms.imageAlt, base.imageAlt),
    excerpt: pick(cms.excerpt, base.excerpt),
    tags: pick(cms.tags, base.tags),
    content: content.length ? content : base.content,
    faqs: faqs.length ? faqs : base.faqs,
  };
};

// Turn a CMS-only post (no matching slug in src/data/blogs.ts) into a full Blog.
const cmsPostToBlog = (cms: BlogPost, index: number): Blog => ({
  id: 1000 + index,
  slug: (cms.slug ?? '').trim(),
  title: cms.title ?? '',
  category: cms.category ?? '',
  categoryId: cms.categoryId ?? '',
  date: cms.date ?? '',
  readTime: cms.readTime ?? '',
  author: cms.author ?? 'Aquabrim Team',
  metaTitle: cms.metaTitle ?? cms.title ?? '',
  metaDescription: cms.metaDescription ?? cms.excerpt ?? '',
  excerpt: cms.excerpt ?? '',
  image: cms.image ?? '',
  imageAlt: cms.imageAlt ?? cms.title ?? '',
  tags: cms.tags ?? [],
  content: cmsPostToBlocks(cms),
  faqs: (cms.faqs ?? [])
    .map((f) => ({ question: (f.question ?? '').trim(), answer: (f.answer ?? '').trim() }))
    .filter((f) => f.question && f.answer),
});

/**
 * Build-time source of truth for blog ROUTES + content.
 * Starts from src/data/blogs.ts, applies CMS overrides by slug, and appends any
 * CMS-only posts so each gets its own static page on the next build.
 * If the CMS is unreachable at build, falls back to src/data/blogs.ts alone.
 */
export const getMergedBlogs = async (): Promise<Blog[]> => {
  const content = await getBlogContent();
  const cmsList = (content?.posts?.posts ?? []).filter((p) => (p.slug ?? '').trim());

  const cmsBySlug = new Map(cmsList.map((p) => [(p.slug as string).trim(), p]));

  const merged = localBlogs.map((base) => {
    const cms = cmsBySlug.get(base.slug);
    if (!cms) return base;
    cmsBySlug.delete(base.slug);
    return mergeBlog(base, cms);
  });

  // CMS-only posts. Skip any that have no article body — a slug with an empty
  // body would publish a blank page.
  let i = 0;
  for (const cms of cmsBySlug.values()) {
    const blog = cmsPostToBlog(cms, i++);
    if (blog.title && blog.content.length) merged.push(blog);
  }

  return merged;
};

export const getMergedBlogBySlug = async (slug: string): Promise<Blog | undefined> =>
  (await getMergedBlogs()).find((b) => b.slug === slug);
