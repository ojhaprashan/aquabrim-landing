
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';
import PricingPolicyBanner from './PricingPolicyBanner';
import PricingPolicyArea from './PricingPolicyArea';

const PricingPolicy = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <PricingPolicyBanner />
        <PricingPolicyArea />
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

export default PricingPolicy;
