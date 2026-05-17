import React, { Suspense } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceDetailsArea from './ServiceDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';

const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Suspense fallback={<div className="container py-5 text-center text-muted fw-semibold">Loading product details...</div>}>
          <ServiceDetailsArea />
        </Suspense>
      </main>
      <CtaBanner />
      <FooterOne />
    </>
  );
};

export default ServiceDetails;