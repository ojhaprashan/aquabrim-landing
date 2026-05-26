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
      <CtaBanner
        title="Ready to Automate Your Water System?"
        subtitle="Get pricing, installation support, and product guidance."
        btnText="Get a Quote"
        btnLink="/contact"
        icon="bi-droplet-fill"
        btnIcon="bi-file-earmark-text-fill"
      />
      <FooterOne />
    </>
  );
};

export default ServiceDetails;