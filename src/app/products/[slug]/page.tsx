import ServiceDetails from '@/components/service-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { getMergedProducts, getProductBySlug } from '@/services/products/products.service';
import JsonLd from '@/components/common/JsonLd';
import { breadcrumbSchema, faqSchema, productSchema } from '@/utils/schema';

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

const ServiceDetailsPage = async ({ params }: { params: { slug: string } }) => {
  // Schema is built from the same merged CMS/JSON record the page renders, so a
  // price or spec change in the CMS flows into the structured data on rebuild.
  const product = await getProductBySlug(params.slug);

  return (
    <Wrapper>
      {product && (
        <JsonLd
          data={[
            productSchema(product),
            faqSchema(product.faqs),
            breadcrumbSchema([
              { name: 'Products', path: '/products' },
              { name: product.title || params.slug, path: `/products/${params.slug}` },
            ]),
          ]}
        />
      )}
      <ServiceDetails />
    </Wrapper>
  );
};

export default ServiceDetailsPage;
