import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import PolicyPageContent from '../common/PolicyPageContent';
import terms_banner_img from '@/assets/images/policy/terms&condition.webp';
import { nav, fallbackBody } from './TermsConditionArea';

const TermsCondition = () => {
  return (
    <>
      <HeaderOne />
      <PolicyPageContent
        slug="terms-and-conditions"
        defaultBanner={{
          image: terms_banner_img,
          title: 'Terms & Conditions – Aquabrim Private Limited',
          subtitle: 'Read the terms and conditions for using our website and products.',
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

export default TermsCondition;
