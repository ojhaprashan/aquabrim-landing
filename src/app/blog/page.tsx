
import Blog from '@/components/blog';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: 'Aquabrim',
  description: "Aquabrim is a leading provider of smart water automation solutions since 2008. We offer advanced water level controllers and motorized valve systems for homes, apartments, and industries.  ",
}


const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;