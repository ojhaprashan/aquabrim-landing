import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import PolicyPageContent from '../common/PolicyPageContent';
import pricing_banner_img from '@/assets/images/policy/pricing.webp';
import { nav, fallbackBody } from './PricingPolicyArea';

const PricingPolicy = () => {
  return (
    <>
      <HeaderOne />
      <PolicyPageContent
        slug="pricing-policy"
        defaultBanner={{
          image: pricing_banner_img,
          title: 'Pricing Policy – Aquabrim Water Level Controllers & Automation Systems',
          subtitle: 'This page explains our product pricing, changes, and applicable conditions.',
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

export default PricingPolicy;
