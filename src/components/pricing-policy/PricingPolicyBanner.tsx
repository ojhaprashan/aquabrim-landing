import React from 'react';
import PolicyBanner from '../common/PolicyBanner';
import pricing_banner_img from "@/assets/images/policy/pricing.png";

const PricingPolicyBanner = () => (
  <PolicyBanner
    image={pricing_banner_img}
    title="Pricing Policy"
    subtitle="This page explains our product pricing, changes, and applicable conditions."
  />
);

export default PricingPolicyBanner;
