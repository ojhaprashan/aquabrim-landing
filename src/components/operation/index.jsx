import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';

import FooterOne from '@/layouts/footers/FooterOne';
import Operationdata from './Operationdata';

const Operation = () => {
  return (
    <>
      <HeaderOne />
      <main>
        
       <Operationdata />
      </main>
      <FooterOne />
    </>
  );
};

export default Operation;