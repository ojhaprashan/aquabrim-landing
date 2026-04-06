
import ProjectGrid from '@/components/project-grid';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Projects | Aquabrim',
  description: "Explore our successful water automation projects across residential and industrial sectors. Aquabrim – since 2008.",
}



const index = () => {
  return (
    <Wrapper>
      <ProjectGrid />
    </Wrapper>
  );
};

export default index;