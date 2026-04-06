
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ServiceDetailsArea from './ServiceDetailsArea';
import ServiceAreaHomeOne from '../homes/home/ServiceAreaHomeOne';
import SubscribeAreaHomeOne from '../homes/home/SubscribeAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';



const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title='Service Details' title='Service Details' />
        <ServiceDetailsArea />
        <ServiceAreaHomeOne style_2={true} />
        <SubscribeAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default ServiceDetails;