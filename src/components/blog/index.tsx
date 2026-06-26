
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import BlogArea from './BlogArea';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';
import BlogScreen from './BlogScreen';

const Blog = () => {
  return (
    <>
      <HeaderOne />
      <main>
        {/* <Breadcrumb top_title='Blog' title='Blog' /> */}
        {/* <BlogArea /> */}
        <BlogScreen />
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

export default Blog;