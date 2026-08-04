'use client';
import React, { useEffect, useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroAreaHomeOne from './HeroAreaHomeOne';
import AboutAreaHomeOne from './AboutAreaHomeOne';
import ServiceAreaHomeOne from './ServiceAreaHomeOne';
import ProductFeatureAreaHomeOne from './ProductFeatureAreaHomeOne';
import PlatformAreaHomeOne from './PlatformAreaHomeOne';
import PricingAreaHomeOne from './PricingAreaHomeOne';

import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '@/components/common/CtaBanner';
import { getHomeContent } from '@/services/home/home.service';
import type { HomeContent } from '@/services/home/home.types';

const HomeOne = () => {
  // Content is managed in the CMS and fetched in the browser so edits reflect
  // live without a rebuild. Until it arrives, sections render their defaults.
  const [content, setContent] = useState<HomeContent | null>(null);

  useEffect(() => {
    getHomeContent().then(setContent);
  }, []);

  const cta = content?.cta;

  return (
    <>
      <HeaderOne />
      <main>
        <HeroAreaHomeOne data={content?.hero} />
        <AboutAreaHomeOne
          data={content?.aboutArea}
          impact={content?.aboutImpact}
          clients={content?.aboutClients}
        />
        <ServiceAreaHomeOne data={content?.services} />
        <ProductFeatureAreaHomeOne data={content?.productFeatures} />
        <PlatformAreaHomeOne data={content?.platformArea} />
        <PricingAreaHomeOne data={content?.faqArea} />
        <CtaBanner
          title={cta?.title ?? 'Tired of Managing Water Manually?'}
          subtitle={cta?.subtitle ?? 'Switch to smarter and automated water management.'}
          btnText={cta?.btnText ?? 'Explore Products'}
          btnLink={cta?.btnLink ?? '/products'}
          icon={cta?.icon ?? 'bi-droplet-half'}
          btnIcon={cta?.btnIcon ?? 'bi-arrow-right'}
        />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;
