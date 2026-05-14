import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';
import ShippingPolicyBanner from './ShippingPolicyBanner';
import ShippingPolicyArea from './ShippingPolicyArea';

const ShippingPolicy = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <ShippingPolicyBanner />
        <ShippingPolicyArea />
      </main>
      <CtaBanner />
      <FooterOne />
    </>
  );
};

export default ShippingPolicy;
