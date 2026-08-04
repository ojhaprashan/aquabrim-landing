'use client';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React, { useEffect, useState } from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';
import ProductList from './ProductList';
import { getProductsContent } from '@/services/products/products.service';
import type { ProductsContent } from '@/services/products/products.types';

const Service = () => {
  // Content is managed in the CMS and fetched in the browser so edits reflect
  // live without a rebuild. Until it arrives, sections render their defaults
  // (the products.json-derived catalog inside ProductList).
  const [content, setContent] = useState<ProductsContent | null>(null);

  useEffect(() => {
    getProductsContent().then(setContent);
  }, []);

  const hero = content?.hero;
  const cta = content?.cta;

  return (
    <>
      <HeaderOne />
      <main>
        <ProductList
          cmsProducts={content?.catalog?.products}
          headingLine1={hero?.headingLine1}
          headingLine2={hero?.headingLine2}
          sidebarLabel={hero?.sidebarLabel}
        />
      </main>
      <CtaBanner
        title={cta?.title ?? 'Need Help Choosing the Right System?'}
        subtitle={cta?.subtitle ?? 'Our experts can help you find the best solution for your setup.'}
        btnText={cta?.btnText ?? 'Talk to Expert'}
        btnLink={cta?.btnLink ?? '/contact-us'}
        icon={cta?.icon ?? 'bi-person-workspace'}
        btnIcon={cta?.btnIcon ?? 'bi-chat-dots-fill'}
      />
      <FooterOne />
    </>
  );
};

export default Service;
