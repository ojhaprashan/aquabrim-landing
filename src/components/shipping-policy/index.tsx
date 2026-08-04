import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import PolicyPageContent from '../common/PolicyPageContent';
import shipping_banner_img from '@/assets/images/policy/shipping.webp';
import { nav, fallbackBody } from './ShippingPolicyArea';

const ShippingPolicy = () => {
  return (
    <>
      <HeaderOne />
      <PolicyPageContent
        slug="shipping-policy"
        defaultBanner={{
          image: shipping_banner_img,
          title: 'Shipping & Delivery Policy – Aquabrim Orders',
          subtitle: 'Learn how we process and deliver your Aquabrim orders.',
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

export default ShippingPolicy;
