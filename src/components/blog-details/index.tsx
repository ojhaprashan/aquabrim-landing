import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import BlogDetailsArea from './BlogDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';
import type { Blog } from '@/data/blogs';

const BlogDetails = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <HeaderOne />
      <main>
        <BlogDetailsArea blog={blog} />
      </main>
      <CtaBanner
        title="Reliable Water Management Starts Here"
        subtitle="Explore automation solutions trusted across industries and homes."
        btnText="View Systems"
        btnLink="/products"
        icon="bi-droplet-half"
        btnIcon="bi-grid-fill"
      />
      <FooterOne />
    </>
  );
};

export default BlogDetails;
