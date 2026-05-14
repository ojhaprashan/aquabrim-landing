import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';
import RefundPolicyBanner from './RefundPolicyBanner';
import RefundPolicyArea from './RefundPolicyArea';

const RefundPolicy = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <RefundPolicyBanner />
        <RefundPolicyArea />
      </main>
      <CtaBanner />
      <FooterOne />
    </>
  );
};

export default RefundPolicy;
