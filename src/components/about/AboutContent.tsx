'use client';
import React, { useEffect, useState } from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MissionVision from './MissionVision';
import TestimonialAreaHomeOne from '../homes/home/TestimonialAreaHomeOne';
import ServiceAreaPanIndia from '../homes/home/ServiceAreaPanIndia';
import CtaBanner from '../common/CtaBanner';
import Founders from './Founders';
import AboutPortfolio from './AboutPortfolio';
import OurJourney from './OurJourney';
import { getAboutContent } from '@/services/about/about.service';
import type { AboutContent as AboutContentType } from '@/services/about/about.types';
import type { Review } from '@/lib/reviews';

const AboutContent = ({ reviews }: { reviews?: Review[] }) => {
  // Content is managed in the CMS and fetched in the browser so edits reflect
  // live without a rebuild. Until it arrives, sections render their defaults.
  const [content, setContent] = useState<AboutContentType | null>(null);

  useEffect(() => {
    getAboutContent().then(setContent);
  }, []);

  const cta = content?.ctaBanner;
  const testimonials = content?.testimonials;

  return (
    <>
      <HeaderOne />
      <main>
        <AboutPortfolio data={content?.aboutIntro} />
        <MissionVision data={content?.missionVision} />
        <OurJourney data={content?.journey} />
        <TestimonialAreaHomeOne
          reviews={reviews}
          eyebrow={testimonials?.eyebrow}
          heading={testimonials?.heading}
        />
        <Founders data={content?.founders} />
        <ServiceAreaPanIndia data={content?.serviceArea} />
      </main>
      <CtaBanner
        title={cta?.title ?? 'Want to See What We Build?'}
        subtitle={cta?.subtitle ?? 'Explore smart water Level controllers by Aquabrim.'}
        btnText={cta?.btnText ?? 'Explore Products'}
        btnLink={cta?.btnLink ?? '/products'}
        icon={cta?.icon ?? 'bi-eye-fill'}
        btnIcon={cta?.btnIcon ?? 'bi-arrow-right'}
      />
      <FooterOne />
    </>
  );
};

export default AboutContent;
