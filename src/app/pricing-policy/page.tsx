
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import PricingPolicy from '@/components/pricing-policy';

export const metadata = {
  title: 'Pricing Policy | Aquabrim Water Level Controllers',
  description: "Understand Aquabrim's pricing, payment terms & discount policy for water level controllers and automation systems. Transparent pricing from ₹2,000 for homes to industrial custom quotes.",
}

const index = () => {
  return (
    <Wrapper>
      <PricingPolicy />
    </Wrapper>
  );
};

export default index;
