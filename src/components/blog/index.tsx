'use client';
import React, { useEffect, useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';
import BlogScreen from './BlogScreen';
import { getBlogContent } from '@/services/blog/blog.service';
import type { BlogContent } from '@/services/blog/blog.types';
import type { Blog as BlogPost } from '@/data/blogs';

const Blog = ({ posts }: { posts: BlogPost[] }) => {
  // Page chrome (headings, newsletter, CTA, which post is featured) is fetched
  // live from the CMS so copy edits show without a rebuild. The posts themselves
  // are passed in from the build — every card must point at a page that exists.
  const [content, setContent] = useState<BlogContent | null>(null);

  useEffect(() => {
    getBlogContent().then(setContent);
  }, []);

  const cta = content?.cta;

  return (
    <>
      <HeaderOne />
      <main>
        <BlogScreen posts={posts} data={content ?? undefined} />
      </main>
      <CtaBanner
        title={cta?.title ?? 'Reliable Water Management Starts Here'}
        subtitle={cta?.subtitle ?? 'Explore automation solutions trusted across industries and homes.'}
        btnText={cta?.btnText ?? 'View Systems'}
        btnLink={cta?.btnLink ?? '/products'}
        icon={cta?.icon ?? 'bi-droplet-half'}
        btnIcon={cta?.btnIcon ?? 'bi-grid-fill'}
      />
      <FooterOne />
    </>
  );
};

export default Blog;
