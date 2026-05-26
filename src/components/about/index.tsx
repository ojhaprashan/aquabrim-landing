import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MissionVision from './MissionVision';
import TestimonialAreaHomeOne from '../homes/home/TestimonialAreaHomeOne';
import ServiceAreaPanIndia from '../homes/home/ServiceAreaPanIndia';
import CtaBanner from '../common/CtaBanner';
import Founders from './Founders';
import AboutPortfolio from './AboutPortfolio';
import OurJourney from './OurJourney';

const About = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <AboutPortfolio />
        <MissionVision />
        <OurJourney />
        <TestimonialAreaHomeOne />
        <Founders />
        <ServiceAreaPanIndia />
      </main>
      <CtaBanner
        title="Want to See What We Build?"
        subtitle="Explore smart water Level controllers by Aquabrim."
        btnText="Explore Products"
        btnLink="/service"
        icon="bi-eye-fill"
        btnIcon="bi-arrow-right"
      />
      <FooterOne />
    </>
  );
};

export default About;