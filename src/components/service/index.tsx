
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ServiceAreaHomeOne from '../homes/home/ServiceAreaHomeOne';
import VedioAreaHomeOne from '../homes/home/VedioAreaHomeOne';
import ContactAreaHomeOne from '../homes/home/ContactAreaHomeOne';
import SubscribeAreaHomeOne from '../homes/home/SubscribeAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Service = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Service" title="Service" />
        <ServiceAreaHomeOne style={true} />
        <VedioAreaHomeOne />
        <ContactAreaHomeOne />
        <SubscribeAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default Service;