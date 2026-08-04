import { notFound } from 'next/navigation';
import Wrapper from '@/layouts/Wrapper';
import BlogDetails from '@/components/blog-details';
import { blogs, getBlogBySlug } from '@/data/blogs';

const SITE_URL = 'https://aquabrim.com';

// Pre-render one static page per blog slug (required for output: 'export').
export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug);
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

const BlogDetailsPage = ({ params }: { params: { slug: string } }) => {
  const blog = getBlogBySlug(params.slug);
  if (!blog) notFound();

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.metaDescription,
    image: `${SITE_URL}${blog.image}`,
    author: { '@type': 'Organization', name: blog.author },
    publisher: {
      '@type': 'Organization',
      name: 'Aquabrim',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blogs/${blog.slug}/`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: blog.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogDetails blog={blog} />
    </Wrapper>
  );
};

export default BlogDetailsPage;
