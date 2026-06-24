import ServiceDetails from '@/components/service-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import productsData from '@/data/products.json';
import { slugify } from '@/utils/slug';

// Pre-render one static page per product slug (required for output: 'export').
export function generateStaticParams() {
  return productsData.map((p) => ({ slug: slugify(p.title) }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = productsData.find((p) => slugify(p.title) === params.slug);
  return {
    title: product ? `${product.title} | Aquabrim` : 'Product Details | Aquabrim',
    description:
      (product as any)?.description ||
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
