import React from 'react';
import PolicyBanner from '../common/PolicyBanner';
import terms_banner_img from "@/assets/images/policy/terms&condition.png";

const TermsConditionBanner = () => (
  <PolicyBanner
    image={terms_banner_img}
    title="Terms & Conditions"
    subtitle="Read the terms and conditions for using our website and products."
  />
);

export default TermsConditionBanner;
