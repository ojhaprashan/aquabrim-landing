
import Faq from '@/components/faq';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'FAQ | Aquabrim',
  description: "Find answers to frequently asked questions about Aquabrim's water level controllers and motorized valve systems. Expert water automation support since 2008.",
}


const index = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  );
};

export default index;