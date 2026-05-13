
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';
import PricingPolicyArea from './PricingPolicyArea';

const PricingPolicy = () => {
  return (
    <>
      <HeaderOne />
      <main>
        {/* <Breadcrumb top_title='Pricing Policy' title='Pricing Policy' /> */}
        <PricingPolicyArea />
      </main>
      <CtaBanner />
      <FooterOne />
    </>
  );
};

export default PricingPolicy;
