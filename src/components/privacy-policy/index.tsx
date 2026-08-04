import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import PolicyPageContent from '../common/PolicyPageContent';
import privacy_banner_img from '@/assets/images/policy/privacy.webp';
import { nav, fallbackBody } from './PrivacyPolicyArea';

const PrivacyPolicy = () => {
  return (
    <>
      <HeaderOne />
      <PolicyPageContent
        slug="privacy-policy"
        defaultBanner={{
          image: privacy_banner_img,
          title: 'Privacy Policy – How We Collect & Protect Your Data',
          subtitle: 'Learn how we collect, use, and protect your personal information.',
        }}
        defaultLastUpdated="20 May 2026"
        defaultNav={nav}
        defaultCta={{
          title: 'Still Need Help?',
          subtitle: 'Our team is here to assist you with any questions',
          btnText: 'Contact Support',
          btnLink: '/contact-us',
          icon: 'bi-life-preserver',
          btnIcon: 'bi-headset',
        }}
        fallbackBody={fallbackBody}
      />
      <FooterOne />
    </>
  );
};

export default PrivacyPolicy;
