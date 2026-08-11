
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import PricingPolicy from '@/components/pricing-policy';
import JsonLd from '@/components/common/JsonLd';
import { breadcrumbSchema, webPageSchema } from '@/utils/schema';

export const metadata = {
  title: 'Pricing Policy | Aquabrim Water Level Controllers',
  description: "Understand Aquabrim's pricing, payment terms & discount policy for water level controllers and automation systems. Transparent pricing from ₹2,000 for homes to industrial custom quotes.",
  alternates: {
    canonical: '/pricing-policy/',
  },
}

const index = () => {
  return (
    <Wrapper>
      <JsonLd
        data={[
          webPageSchema({
            path: '/pricing-policy',
            name: metadata.title,
            description: metadata.description,
          }),
          breadcrumbSchema([{ name: 'Pricing Policy', path: '/pricing-policy' }]),
        ]}
      />
      <PricingPolicy />
    </Wrapper>
  );
};

export default index;
