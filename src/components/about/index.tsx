
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import AboutAreaHomeOne from '../homes/home/AboutAreaHomeOne';
import MissionVision from './MissionVision';
import TestimonialAreaHomeOne from '../homes/home/TestimonialAreaHomeOne';
import TeamAreaHomeOne from '../homes/home/TeamAreaHomeOne';
import ServiceAreaPanIndia from '../homes/home/ServiceAreaPanIndia';
import CtaBanner from '../common/CtaBanner';
import Founders from './Founders';

const About = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <AboutAreaHomeOne style={true} hideClients={true} />
        <MissionVision />
        <TestimonialAreaHomeOne />
        <Founders />
        {/* <ServiceAreaHomeOne /> */}
        {/* <CtaAreaHomeOne /> */}
        {/* <TeamAreaHomeOne /> */}
        <ServiceAreaPanIndia />
        {/* <SubscribeAreaHomeOne /> */}
      </main>
      <CtaBanner />
      <FooterOne />
    </>
  );
};

export default About;