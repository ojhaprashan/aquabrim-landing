
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroAreaHomeOne from './HeroAreaHomeOne';
import AboutAreaHomeOne from './AboutAreaHomeOne';
import ServiceAreaHomeOne from './ServiceAreaHomeOne';
import ProductFeatureAreaHomeOne from './ProductFeatureAreaHomeOne';
import PlatformAreaHomeOne from './PlatformAreaHomeOne';
import PricingAreaHomeOne from './PricingAreaHomeOne';

import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '@/components/common/CtaBanner';

const HomeOne = () => {

  return (
    <>
      <HeaderOne />
      <main>
        <HeroAreaHomeOne />
        <AboutAreaHomeOne />
        <ServiceAreaHomeOne />
        <ProductFeatureAreaHomeOne />
        <PlatformAreaHomeOne />
        <PricingAreaHomeOne />
        <CtaBanner
          title="Tired of Managing Water Manually?"
          subtitle="Switch to smarter and automated water management."
          btnText="Explore Products"
          btnLink="/service"
          icon="bi-droplet-half"
          btnIcon="bi-arrow-right"
        />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;