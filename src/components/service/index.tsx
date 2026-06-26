
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
      <CtaBanner
        title="Need Help Choosing the Right System?"
        subtitle="Our experts can help you find the best solution for your setup."
        btnText="Talk to Expert"
        btnLink="/contact-us"
        icon="bi-person-workspace"
        btnIcon="bi-chat-dots-fill"
      />
      <FooterOne />
    </>
  );
};

export default Service;