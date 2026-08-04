
import Blog from '@/components/blog';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: 'Water Automation Blog – Tips, Guides & Insights | Aquabrim',
  description: "Expert articles on water level controllers, dry-run protection, smart automation, water conservation & industry insights from Aquabrim — India's water automation specialists since 2008.",
  alternates: {
    canonical: '/blogs/',
  },
}


const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;