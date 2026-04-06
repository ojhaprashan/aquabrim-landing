
import About from '@/components/about';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'About | Aquabrim',
  description: "Learn more about Aquabrim and our commitment to smart, efficient water level management since 2008.",
}

const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default index;