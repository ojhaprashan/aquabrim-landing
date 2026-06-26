
import Contact from '@/components/contact';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Contact Us | Aquabrim',
  description: "Get in touch with Aquabrim for smart water level controllers and automation solutions. We provide expert support and services since 2008.",
}

const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;