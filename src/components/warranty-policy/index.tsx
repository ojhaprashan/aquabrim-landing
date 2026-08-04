import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import PolicyPageContent from '../common/PolicyPageContent';
import warranty_banner_img from '@/assets/images/policy/warranty.webp';
import { nav, fallbackBody } from './WarrantyPolicyArea';

const WarrantyPolicy = () => {
  return (
    <>
      <HeaderOne />
      <PolicyPageContent
        slug="warranty-policy"
        defaultBanner={{
          image: warranty_banner_img,
          title: 'Product Warranty Policy – Aquabrim Water Level Controllers',
          subtitle: 'Understand the warranty terms and coverage for Aquabrim products.',
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

export default WarrantyPolicy;
