
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroAreaHomeOne from './HeroAreaHomeOne';
import AboutAreaHomeOne from './AboutAreaHomeOne';
import ServiceAreaHomeOne from './ServiceAreaHomeOne';
import ProductFeatureAreaHomeOne from './ProductFeatureAreaHomeOne';
import PlatformAreaHomeOne from './PlatformAreaHomeOne';
import CtaAreaHomeOne from './CtaAreaHomeOne';
import PricingAreaHomeOne from './PricingAreaHomeOne';
import VedioAreaHomeOne from './VedioAreaHomeOne';
import ContactAreaHomeOne from './ContactAreaHomeOne';
import ProtfolioAreaHomeOne from './ProtfolioAreaHomeOne';
import OfferAreaHomeOne from './OfferAreaHomeOne';
import TeamAreaHomeOne from './TeamAreaHomeOne';
import AppointmentAreaHomeOne from './AppointmentAreaHomeOne';
import BlogAreaHomeOne from './BlogAreaHomeOne';
import SubscribeAreaHomeOne from './SubscribeAreaHomeOne';

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
        {/* <CtaAreaHomeOne /> */}
        <PricingAreaHomeOne />
        {/* <VedioAreaHomeOne /> */}
        {/* <ContactAreaHomeOne /> */}
        {/* <ProtfolioAreaHomeOne /> */}
        {/* <OfferAreaHomeOne /> */}
        {/* <TeamAreaHomeOne /> */}
        {/* <AppointmentAreaHomeOne /> */}
        {/* <BlogAreaHomeOne /> */}
        {/* <SubscribeAreaHomeOne /> */}
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