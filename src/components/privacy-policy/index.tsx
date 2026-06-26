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

export default PrivacyPolicy;
