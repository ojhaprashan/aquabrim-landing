import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';

import FooterOne from '@/layouts/footers/FooterOne';
import Financedata from './Financedata';

const Finance = () => {
  return (
    <>
      <HeaderOne />
      <main>
        
        <Financedata />
      </main>
      <FooterOne />
    </>
  );
};

export default Finance;