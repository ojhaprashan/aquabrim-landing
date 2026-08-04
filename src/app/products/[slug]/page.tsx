import ServiceDetails from '@/components/service-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { getMergedProducts, getProductBySlug } from '@/services/products/products.service';

// Pre-render one static page per product slug (required for output: 'export').
// Slugs come from the CMS backend merged with products.json, so CMS-managed
// products get their own page. (New CMS products appear after the next build.)
export async function generateStaticParams() {
  const products = await getMergedProducts();
  return products.filter((p) => p.slug).map((p) => ({ slug: p.slug as string }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  return {
    title:
      product?.metaTitle ||
      (product ? `${product.title} | Aquabrim` : 'Product Details | Aquabrim'),
    description:
      product?.metaDescription ||
      product?.description ||
      'Learn more about the technical details of our smart water level control solutions.',
    alternates: {
      canonical: `/products/${params.slug}/`,
    },
  };
}

const ServiceDetailsPage = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  );
};

export default ServiceDetailsPage;
