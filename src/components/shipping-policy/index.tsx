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
      <CtaBanner
        title="Still Need Help?"
        subtitle="Our team is here to assist you with any questions"
        btnText="Contact Support"
        btnLink="/contact"
        icon="bi-life-preserver"
        btnIcon="bi-headset"
      />
      <FooterOne />
    </>
  );
};

export default ShippingPolicy;
