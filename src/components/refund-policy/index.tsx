import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import PolicyPageContent from '../common/PolicyPageContent';
import refund_banner_img from '@/assets/images/policy/refund.webp';
import { nav, fallbackBody } from './RefundPolicyArea';

const RefundPolicy = () => {
  return (
    <>
      <HeaderOne />
      <PolicyPageContent
        slug="refund-policy"
        defaultBanner={{
          image: refund_banner_img,
          title: 'Refund & Return Policy – Aquabrim Products',
          subtitle: 'Learn about our refund eligibility, timelines, and return process.',
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

export default RefundPolicy;
