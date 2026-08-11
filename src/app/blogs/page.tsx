
import Blog from '@/components/blog';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import JsonLd from '@/components/common/JsonLd';
import { getMergedBlogs } from '@/services/blog/blog.service';
import { breadcrumbSchema, pageUrl, toIsoDate, webPageSchema } from '@/utils/schema';


export const metadata = {
  title: 'Water Automation Blog – Tips, Guides & Insights | Aquabrim',
  description: "Expert articles on water level controllers, dry-run protection, smart automation, water conservation & industry insights from Aquabrim — India's water automation specialists since 2008.",
  alternates: {
    canonical: '/blogs/',
  },
}


const index = async () => {
  // Merged at build time: src/data/blogs.ts with CMS overrides applied by slug.
  const blogs = await getMergedBlogs();

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${pageUrl('/blogs')}#blog`,
    url: pageUrl('/blogs'),
    name: 'Aquabrim Water Automation Blog',
    blogPost: blogs.map((b) => {
      const published = toIsoDate(b.date);
      return {
        '@type': 'BlogPosting',
        headline: b.title,
        url: pageUrl(`/blogs/${b.slug}`),
        ...(published ? { datePublished: published } : {}),
      };
    }),
  };

  return (
    <Wrapper>
      <JsonLd
        data={[
          {
            ...webPageSchema({
              path: '/blogs',
              name: metadata.title,
              description: metadata.description,
            }),
            '@type': 'CollectionPage',
          },
          blogListSchema,
          breadcrumbSchema([{ name: 'Blogs', path: '/blogs' }]),
        ]}
      />
      <Blog posts={blogs} />
    </Wrapper>
  );
};

export default index;