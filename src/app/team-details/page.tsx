
import TeamDetails from '@/components/team-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Team Member Details | Aquabrim',
  description: "Learn more about the expert team members at Aquabrim dedicated to water automation.",
}

const index = () => {
  return (
    <Wrapper>
      <TeamDetails />
    </Wrapper>
  );
};

export default index;