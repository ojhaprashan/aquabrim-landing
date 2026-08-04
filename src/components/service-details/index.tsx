import React, { Suspense } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceDetailsArea from './ServiceDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';

const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Suspense fallback={<div className="container py-5 text-center text-muted fw-semibold">Loading product details...</div>}>
          <ServiceDetailsArea />
        </Suspense>
      </main>
      <FooterOne />
    </>
  );
};

export default ServiceDetails;