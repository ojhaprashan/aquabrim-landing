import React from 'react';
import PolicyBanner from '../common/PolicyBanner';
import shipping_banner_img from "@/assets/images/policy/shipping.webp";

const ShippingPolicyBanner = () => (
  <PolicyBanner
    image={shipping_banner_img}
    title="Shipping & Delivery Policy – Aquabrim Orders"
    subtitle="Learn how we process and deliver your Aquabrim orders."
  />
);

export default ShippingPolicyBanner;
