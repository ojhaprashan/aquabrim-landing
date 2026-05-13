
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import PricingPolicy from '@/components/pricing-policy';

export const metadata = {
  title: 'Pricing Policy | Aquabrim',
  description: "Learn about Aquabrim's transparent pricing structure, tax policies, and payment terms for our smart water automation solutions.",
}

const index = () => {
  return (
    <Wrapper>
      <PricingPolicy />
    </Wrapper>
  );
};

export default index;
