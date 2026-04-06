
import Team from '@/components/team';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: 'Our Team | Aquabrim',
  description: "Meet the experts at Aquabrim dedicated to providing smart, sustainable water management solutions.",
}


const index = () => {
  return (
    <Wrapper>
      <Team />
    </Wrapper>
  );
};

export default index;