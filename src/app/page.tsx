
import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: 'Aquabrim | Advanced Water Level Controllers & Smart Water Automation',
  description: "Aquabrim delivers smart, affordable, and reliable water automation solutions for homes, apartments, and industries. Efficient water level management since 2008.",
}


const MainHome = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;