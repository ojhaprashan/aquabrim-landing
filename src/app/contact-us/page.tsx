
import Contact from '@/components/contact';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import JsonLd from '@/components/common/JsonLd';
import { breadcrumbSchema, contactPageSchema } from '@/utils/schema';

export const metadata = {
  title: 'Contact Aquabrim | Get a Quote – Delhi, Bangalore, Pune',
  description: "Contact Aquabrim for water level controllers, installation support & expert advice. Offices in Delhi, Bangalore & Pune. Call +91-9560088791 or send us a message for a quick response.",
  alternates: {
    canonical: '/contact-us/',
  },
}

const index = () => {
  return (
    <Wrapper>
      <JsonLd
        data={[
          contactPageSchema(),
          breadcrumbSchema([{ name: 'Contact Us', path: '/contact-us' }]),
        ]}
      />
      <Contact />
    </Wrapper>
  );
};

export default index;