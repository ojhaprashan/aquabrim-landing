import React from 'react';
import PolicyBanner from '../common/PolicyBanner';
import warranty_banner_img from "@/assets/images/policy/warranty.png";

const WarrantyPolicyBanner = () => (
  <PolicyBanner
    image={warranty_banner_img}
    title="Warranty Policy"
    subtitle="Understand the warranty terms and coverage for Aquabrim products."
  />
);

export default WarrantyPolicyBanner;
