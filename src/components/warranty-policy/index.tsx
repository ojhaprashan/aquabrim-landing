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
      <CtaBanner />
      <FooterOne />
    </>
  );
};

export default WarrantyPolicy;
