
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ServiceAreaHomeOne from '../homes/home/ServiceAreaHomeOne';
import VedioAreaHomeOne from '../homes/home/VedioAreaHomeOne';
import ContactAreaHomeOne from '../homes/home/ContactAreaHomeOne';
import SubscribeAreaHomeOne from '../homes/home/SubscribeAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';
import ProductList from './ProductList';

const Service = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <ProductList />
      </main>
      <CtaBanner />
      <FooterOne />
    </>
  );
};

export default Service;