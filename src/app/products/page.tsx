

import Service from '@/components/service';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: 'Services | Aquabrim',
  description: "Aquabrim provides a wide range of water automation services, including smart water level controllers and motorized valve systems for residential and industrial use.",
}

const index = () => {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  );
};

export default index;