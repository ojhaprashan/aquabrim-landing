import ServiceDetails from '@/components/service-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import productsData from '@/data/products.json';
import { productSlug } from '@/utils/slug';

// Pre-render one static page per product slug (required for output: 'export').
export function generateStaticParams() {
  return productsData.map((p) => ({ slug: productSlug(p) }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = productsData.find((p) => productSlug(p) === params.slug) as any;
  return {
    title:
      product?.metaTitle ||
      (product ? `${product.title} | Aquabrim` : 'Product Details | Aquabrim'),
    description:
      product?.metaDescription ||
      product?.description ||
      'Learn more about the technical details of our smart water level control solutions.',
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
