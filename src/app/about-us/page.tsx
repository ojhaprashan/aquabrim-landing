
import About from '@/components/about';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

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
      <About />
    </Wrapper>
  );
};

export default index;