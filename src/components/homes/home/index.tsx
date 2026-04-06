
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroAreaHomeOne from './HeroAreaHomeOne';
import AboutAreaHomeOne from './AboutAreaHomeOne';
import ServiceAreaHomeOne from './ServiceAreaHomeOne';
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

const HomeOne = () => {

  return (
    <>
      <HeaderOne />
      <main>
        <HeroAreaHomeOne />
        <AboutAreaHomeOne />
        <ServiceAreaHomeOne />
        <CtaAreaHomeOne />
        <PricingAreaHomeOne />
        <VedioAreaHomeOne />
        <ContactAreaHomeOne />
        <ProtfolioAreaHomeOne />
        <OfferAreaHomeOne />
        <TeamAreaHomeOne />
        <AppointmentAreaHomeOne />
        <BlogAreaHomeOne />
        <SubscribeAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;