'use client';
import React, { useEffect, useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';
import BlogScreen from './BlogScreen';
import { getBlogContent } from '@/services/blog/blog.service';
import type { BlogContent } from '@/services/blog/blog.types';

const Blog = () => {
  // Content is managed in the CMS and fetched in the browser so edits reflect
  // live without a rebuild. Until it arrives, sections render their defaults.
  const [content, setContent] = useState<BlogContent | null>(null);

  useEffect(() => {
    getBlogContent().then(setContent);
  }, []);

  const cta = content?.cta;

  return (
    <>
      <HeaderOne />
      <main>
        <BlogScreen data={content ?? undefined} />
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
