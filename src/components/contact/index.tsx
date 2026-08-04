'use client';

import React, { useEffect, useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ContactArea from './ContactArea';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';
import { getContactContent } from '@/services/contact/contact.service';
import type { ContactContent } from '@/services/contact/contact.types';

const Contact = () => {
  // Content is managed in the CMS and fetched in the browser so edits reflect
  // live without a rebuild. Until it arrives, sections render their defaults.
  const [content, setContent] = useState<ContactContent | null>(null);

  useEffect(() => {
    getContactContent().then(setContent);
  }, []);

  const cta = content?.cta;

  return (
    <>
      <HeaderOne />
      <main>
        <ContactArea
          heading={content?.heading}
          form={content?.form}
          offices={content?.offices}
          map={content?.map}
        />
      </main>
      <CtaBanner
        title={cta?.title ?? "Let's Talk About Your Requirement"}
        subtitle={cta?.subtitle ?? 'Connect with our experts for the right solution.'}
        btnText={cta?.btnText ?? 'Call Now'}
        btnLink={cta?.btnLink ?? 'tel:+919560088791'}
        icon={cta?.icon ?? 'bi-headset'}
        btnIcon={cta?.btnIcon ?? 'bi-telephone-fill'}
      />
      <FooterOne />
    </>
  );
};

export default Contact;
