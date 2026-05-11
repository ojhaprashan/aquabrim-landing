
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import AboutAreaHomeOne from '../homes/home/AboutAreaHomeOne';
import ServiceAreaHomeOne from '../homes/home/ServiceAreaHomeOne';
import CtaAreaHomeOne from '../homes/home/CtaAreaHomeOne';
import TeamAreaHomeOne from '../homes/home/TeamAreaHomeOne';
import ServiceAreaPanIndia from '../homes/home/ServiceAreaPanIndia';
import TestimonialAreaHomeOne from '../homes/home/TestimonialAreaHomeOne';
import CtaBanner from '../common/CtaBanner';

const About = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="About Us" title="About Us" />
        <AboutAreaHomeOne style={true} />
        <TestimonialAreaHomeOne />
        {/* <ServiceAreaHomeOne /> */}
        {/* <CtaAreaHomeOne /> */}
        <TeamAreaHomeOne />
        <ServiceAreaPanIndia />
        {/* <SubscribeAreaHomeOne /> */}
      </main>
      <CtaBanner />
      <FooterOne />
    </>
  );
};

export default About;