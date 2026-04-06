
import React from 'react'; 
import HeroAreaHomeTwo from './HeroAreaHomeTwo';
import AboutAreaHomeTwo from './AboutAreaHomeTwo';
import OfferAreaHomeTwo from './OfferAreaHomeTwo';
import CtaAreaHomeOne from '../home/CtaAreaHomeOne';
import TeamAreaHomeOne from '../home/TeamAreaHomeOne';
import VedioAreaHomeOne from '../home/VedioAreaHomeOne';
import ContactAreaHomeOne from '../home/ContactAreaHomeOne';
import TestiomonialAreaHomeTwo from './TestiomonialAreaHomeTwo';
import CtaAreaHomeTwo from './CtaAreaHomeTwo';
import BlogAreaHomeOne from '../home/BlogAreaHomeOne';
import SubscribeAreaHomeOne from '../home/SubscribeAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

const HomeTwo = () => {
  return (
    <> 
      <HeaderOne style={true} />
      <main>
        <HeroAreaHomeTwo />
        <AboutAreaHomeTwo />
        <OfferAreaHomeTwo />
        <CtaAreaHomeOne />
        <TeamAreaHomeOne style={true} />
        <VedioAreaHomeOne style={true} />
        <ContactAreaHomeOne />
        <TestiomonialAreaHomeTwo />
        <CtaAreaHomeTwo />
        <BlogAreaHomeOne />
        <SubscribeAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeTwo;