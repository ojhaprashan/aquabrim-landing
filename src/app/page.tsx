
import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: 'Wireless Water Level Controller India | Aquabrim',
  description: "Aquabrim's wireless water level controllers stop tank overflow, prevent dry-run damage & automate your motor 24/7. Trusted by 50,000+ homes & industries across India since 2008.",
}


const MainHome = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;