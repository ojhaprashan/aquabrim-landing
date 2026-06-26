import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';
import WarrantyPolicyBanner from './WarrantyPolicyBanner';
import WarrantyPolicyArea from './WarrantyPolicyArea';

const WarrantyPolicy = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <WarrantyPolicyBanner />
        <WarrantyPolicyArea />
      </main>
      <CtaBanner
        title="Still Need Help?"
        subtitle="Our team is here to assist you with any questions"
        btnText="Contact Support"
        btnLink="/contact-us"
        icon="bi-life-preserver"
        btnIcon="bi-headset"
      />
      <FooterOne />
    </>
  );
};

export default WarrantyPolicy;
