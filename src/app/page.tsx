
import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import JsonLd from '@/components/common/JsonLd';
import accordion_data from '@/data/AccordionData';
import { faqSchema, organizationSchema, webSiteSchema } from '@/utils/schema';


export const metadata = {
  title: 'Wireless Water Level Controller India | Aquabrim',
  description: "Aquabrim's wireless water level controllers stop tank overflow, prevent dry-run damage & automate your motor 24/7. Trusted by 50,000+ homes & industries across India since 2008.",
  alternates: {
    canonical: '/',
  },
}


const MainHome = () => {
  return (
    <Wrapper>
      {/* The FAQ block on this page renders accordion_data by default, so the
          markup mirrors what a crawler sees. */}
      {/* No BreadcrumbList here — the homepage IS the root, so a one-item trail
          carries no information for Google. */}
      <JsonLd data={[organizationSchema(), webSiteSchema(), faqSchema(accordion_data)]} />
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;
