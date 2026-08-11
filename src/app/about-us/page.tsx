
import About from '@/components/about';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import JsonLd from '@/components/common/JsonLd';
import { breadcrumbSchema, webPageSchema } from '@/utils/schema';

export const metadata = {
  title: 'About Aquabrim | Water Automation Company Since 2008',
  description: "Aquabrim has pioneered smart water automation in India since 2008. Serving 50,000+ customers in 15+ cities with wireless controllers, industrial systems & IoT-based water management.",
  alternates: {
    canonical: '/about-us/',
  },
}

const index = () => {
  return (
    <Wrapper>
      <JsonLd
        data={[
          {
            ...webPageSchema({
              path: '/about-us',
              name: metadata.title,
              description: metadata.description,
            }),
            '@type': 'AboutPage',
          },
          breadcrumbSchema([{ name: 'About Us', path: '/about-us' }]),
        ]}
      />
      <About />
    </Wrapper>
  );
};

export default index;