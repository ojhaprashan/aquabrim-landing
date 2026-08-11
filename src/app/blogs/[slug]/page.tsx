import { notFound } from 'next/navigation';
import Wrapper from '@/layouts/Wrapper';
import BlogDetails from '@/components/blog-details';
import { getMergedBlogs, getMergedBlogBySlug } from '@/services/blog/blog.service';
import JsonLd from '@/components/common/JsonLd';
import { blogPostingSchema, breadcrumbSchema, faqSchema } from '@/utils/schema';

// Pre-render one static page per blog slug (required for output: 'export').
// Uses the same merged source as the listing, so a post authored in the CMS
// gets its own page on the next build.
export async function generateStaticParams() {
  const blogs = await getMergedBlogs();
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = await getMergedBlogBySlug(params.slug);
  if (!blog) return { title: 'Blog Details | Aquabrim' };
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    alternates: {
      canonical: `/blogs/${blog.slug}/`,
    },
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [{ url: blog.image, alt: blog.imageAlt }],
      type: 'article',
    },
  };
}

const BlogDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await getMergedBlogBySlug(params.slug);
  if (!blog) notFound();

  return (
    <Wrapper>
      <JsonLd
        data={[
          blogPostingSchema(blog),
          faqSchema(blog.faqs),
          breadcrumbSchema([
            { name: 'Blogs', path: '/blogs' },
            { name: blog.title, path: `/blogs/${blog.slug}` },
          ]),
        ]}
      />
      <BlogDetails blog={blog} />
    </Wrapper>
  );
};

export default BlogDetailsPage;
