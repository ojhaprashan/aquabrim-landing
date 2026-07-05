import React from 'react';
import PolicyBanner from '../common/PolicyBanner';
import refund_banner_img from "@/assets/images/policy/refund.webp";

const RefundPolicyBanner = () => (
  <PolicyBanner
    image={refund_banner_img}
    title="Refund & Return Policy – Aquabrim Products"
    subtitle="Learn about our refund eligibility, timelines, and return process."
  />
);

export default RefundPolicyBanner;
