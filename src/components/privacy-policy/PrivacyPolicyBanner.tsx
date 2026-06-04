import React from 'react';
import PolicyBanner from '../common/PolicyBanner';
import privacy_banner_img from "@/assets/images/policy/privacy.png";

const PrivacyPolicyBanner = () => (
  <PolicyBanner
    image={privacy_banner_img}
    title="Privacy Policy"
    subtitle="Learn how we collect, use, and protect your personal information."
  />
);

export default PrivacyPolicyBanner;
