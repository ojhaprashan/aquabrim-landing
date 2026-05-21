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
      <CtaBanner />
      <FooterOne />
    </>
  );
};

export default About;