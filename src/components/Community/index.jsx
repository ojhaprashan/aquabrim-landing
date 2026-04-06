import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';

import FooterOne from '@/layouts/footers/FooterOne';
import Communitydata from './Communitydata';

const Community = () => {
  return (
    <>
      <HeaderOne />
      <main>
        
        <Communitydata />
      </main>
      <FooterOne />
    </>
  );
};

export default Community;