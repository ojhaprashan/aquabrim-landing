
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import FaqArea from './FaqArea';

const Faq = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <FaqArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Faq;