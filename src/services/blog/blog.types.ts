// Shape of the Blog content managed in the CMS.
// Every field is optional — anything left blank falls back to what the site
// already ships in src/data/blogs.ts, so the blog always renders.
// Mirrors D:\Aquabrim_cms\admin\src\templates\blogs.js exactly.

export interface BlogSeo {
  metaTitle?: string;
  metaDescription?: string;
  canonical?: string;
}

export interface BlogHero {
  headingLine1?: string;
  headingLine2?: string;
}

// --- Article body ------------------------------------------------------------
// The CMS models an article the way the SEO team's Word doc is written:
// a quick answer, some intro paragraphs, then one Section per H2 heading.
// There are no "block types" to choose — the renderer turns this into the
// ContentBlock[] that src/data/blogs.ts uses.

export interface BlogHighlight {
  title?: string;
  text?: string;
}

export interface BlogTableRow {
  label?: string;
  value?: string;
}

export interface BlogTable {
  col1Label?: string;
  col2Label?: string;
  rows?: BlogTableRow[];
}

export interface BlogSubsection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  paragraphsAfter?: string[];
}

export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  paragraphsAfter?: string[];
  highlight?: BlogHighlight;
  table?: BlogTable;
  subsections?: BlogSubsection[];
}

export interface BlogFaq {
  question?: string;
  answer?: string;
}

// One complete article as authored in the CMS.
export interface BlogPost {
  slug?: string;
  title?: string;
  category?: string;
  categoryId?: string;
  date?: string;
  readTime?: string;
  author?: string;
  metaTitle?: string;
  metaDescription?: string;
  image?: string;
  imageAlt?: string;
  excerpt?: string;
  tags?: string[];
  quickAnswer?: string;
  intro?: string[];
  sections?: BlogSection[];
  faqs?: BlogFaq[];
}

export interface BlogPosts {
  posts?: BlogPost[];
}

export interface BlogFeatured {
  widgetHeading?: string;
  /** URL slug of the post to feature. Blank = newest post. */
  postSlug?: string;
}

export interface BlogNewsletter {
  heading?: string;
  body?: string;
  placeholder?: string;
  buttonText?: string;
}

export interface BlogCta {
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnLink?: string;
  icon?: string;
  btnIcon?: string;
}

export interface BlogContent {
  seo?: BlogSeo;
  hero?: BlogHero;
  posts?: BlogPosts;
  featured?: BlogFeatured;
  newsletter?: BlogNewsletter;
  cta?: BlogCta;
}
