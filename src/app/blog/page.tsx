
import Blog from '@/components/blog';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: 'Blog | Aquabrim',
  description: "Read the latest news and updates from Aquabrim about smart water level controllers and motorized valve systems. Expert advice on water automation since 2008.",
}


const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;