import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';
import PrivacyPolicyBanner from './PrivacyPolicyBanner';
import PrivacyPolicyArea from './PrivacyPolicyArea';

const PrivacyPolicy = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <PrivacyPolicyBanner />
        <PrivacyPolicyArea />
      </main>
      <CtaBanner />
      <FooterOne />
    </>
  );
};

export default PrivacyPolicy;
