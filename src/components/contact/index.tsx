

import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ContactArea from './ContactArea';
import MapArea from './MapArea';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';

const Contact = () => {
  return (
    <>
      <HeaderOne />
      <main>
        {/* <Breadcrumb top_title='Contact' title='Contact' /> */}
        <ContactArea />
      </main>
      <CtaBanner
        title="Let's Talk About Your Requirement"
        subtitle="Connect with our experts for the right solution."
        btnText="Call Now"
        btnLink="tel:+919560088791"
        icon="bi-headset"
        btnIcon="bi-telephone-fill"
      />
      <FooterOne />
    </>
  );
};

export default Contact;