'use client';

import React from 'react';
import ContactForm from '../forms/ContactForm';
import { useDynamicCall } from '@/hooks/useDynamicCall';
import { trackPhoneCall } from '@/utils/gtag';
import type {
  ContactHeading,
  ContactForm as ContactFormContent,
  ContactOffices,
  ContactMap,
  ContactOffice,
} from '@/services/contact/contact.types';

const mailLink = "text-[#6c757d] no-underline transition-colors hover:text-[#006CD0]";

// Built-in defaults — used when the CMS has not supplied a value.
const DEFAULTS = {
  heading: {
    line1: 'Contact Aquabrim',
    line2: 'Get a Quote or Expert Support',
  },
  form: {
    formTitle: 'Send Us a Message',
    formSubtitle: 'Fill out the form below and our team will get back to you as soon as possible.',
  },
  map: {
    embedSrc:
      'https://www.google.com/maps?q=Aquabrim%20Pvt.%20Ltd.%2C%20Plot%20no.%2035%2C%20Union%20Bank%20of%20India%20Building%2C%20100%20Feet%20Road%2C%20Ghitorni%2C%20New%20Delhi%20110030&output=embed',
    linkUrl:
      'https://www.google.com/maps/search/?api=1&query=Aquabrim%20Pvt.%20Ltd.%2C%20Plot%20no.%2035%2C%20Union%20Bank%20of%20India%20Building%2C%20100%20Feet%20Road%2C%20Ghitorni%2C%20New%20Delhi%20110030',
    linkText: 'View on Google Maps',
  },
  offices: [
    {
      title: 'Head Office – New Delhi (Ghitorni)',
      address:
        'Aquabrim Pvt. Ltd.\nPlot no. 35, 1st Floor, Union Bank of India Building,\n100 Feet road, Ghitorni, Delhi – 110030',
      emails: ['save.water@aquabrim.com', 'sales@aquabrim.com'],
      phone: '+91-9560088791',
    },
    {
      title: 'Branch – Bangalore, Karnataka',
      addressLabel: 'STATE: KARNATAKA',
      address:
        'Aquabrim Pvt. Ltd.\nFlat no .20, Mahabala 2nd cross, Chamundi Narsari Road,\nJaraganahalli, Bangalore (Landmark: Shivanna Depo).',
      emails: ['save.water@aquabrim.com', 'sales@aquabrim.com'],
      phone: '+91-9560088781',
    },
    {
      title: 'Branch – Pune, Maharashtra',
      addressLabel: 'STATE: MAHARASHTRA',
      address:
        'Aquabrim Pvt. Ltd.\n16/B Elahi Residency, 3 No Colony, Ashoka Society,\nKalewadi Phata, Thergaon, Chinchwad,\nPune – 411033, Maharashtra',
      emails: [],
    },
    {
      title: 'Branch – Hyderabad, Telangana',
      person: 'Mr. Gajula Kesari Kumar',
      phone: '+91-9502855986',
      emails: [],
    },
  ] as ContactOffice[],
};

const InfoRow = ({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) => (
  <div className="mb-4 flex items-start">
    <div className="mr-3 flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#f8f9fa] text-[#006CD0]">
      <i className={`bi ${icon} text-[1.25rem]`}></i>
    </div>
    <div>
      {title && <h5 className="mb-1 text-[1rem] font-bold text-[#1c1632]">{title}</h5>}
      <p className="mb-0 text-[#6c757d]">{children}</p>
    </div>
  </div>
);

const Divider = () => <div className="my-8 h-px w-full bg-[#212529]/[0.15]"></div>;

// Renders multi-line text (CMS stores line breaks as \n) with <br /> separators.
const renderLines = (text: string) =>
  text.split('\n').map((line, i, arr) => (
    <React.Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));

interface ContactAreaProps {
  heading?: ContactHeading;
  form?: ContactFormContent;
  offices?: ContactOffices;
  map?: ContactMap;
}

const ContactArea = ({ heading, form, offices, map }: ContactAreaProps) => {
  const { number: callNumber, href: callHref } = useDynamicCall();

  const line1 = heading?.line1 || DEFAULTS.heading.line1;
  const line2 = heading?.line2 || DEFAULTS.heading.line2;
  const formTitle = form?.formTitle || DEFAULTS.form.formTitle;
  const formSubtitle = form?.formSubtitle || DEFAULTS.form.formSubtitle;
  const embedSrc = map?.embedSrc || DEFAULTS.map.embedSrc;
  const mapLinkUrl = map?.linkUrl || DEFAULTS.map.linkUrl;
  const mapLinkText = map?.linkText || DEFAULTS.map.linkText;
  const officeList = offices?.offices?.length ? offices.offices : DEFAULTS.offices;

  return (
    <div className="bg-white py-12">
      <div className="container-app">
        <div className="mb-6 max-w-[620px]">
          <h1 className="text-[1.4rem] font-extrabold leading-[1.2] tracking-[-0.5px] text-[#1c1632] sm:text-[1.7rem] lg:text-[1.95rem]">
            {line1}
            <span className="mt-0.5 block bg-gradient-to-r from-[#006CD0] to-[#00a4ff] bg-clip-text text-transparent">
              {line2}
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">

          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-[20px] bg-white p-6 shadow-sm md:p-12">
              <div className="mb-6">
                <h3 className="mb-2 text-[1.5rem] font-bold text-[#1c1632]">{formTitle}</h3>
                <p className="text-[#6c757d]">{formSubtitle}</p>
              </div>
              <ContactForm
                submitText={form?.submitText}
                successMessage={form?.successMessage}
                queryTypes={form?.queryTypes}
              />
            </div>
          </div>

          {/* Right Column: Contact Information & Map */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-[20px] bg-white p-6 shadow-sm md:p-12">
              <div className="mb-4">
                {officeList.map((office, index) => {
                  const emails = office.emails ?? [];
                  // The Head Office (first entry) uses the shift-based dynamic sales number.
                  const isHeadOffice = index === 0;
                  return (
                    <React.Fragment key={index}>
                      {index > 0 && <Divider />}
                      <h3 className="mb-4 text-[1.5rem] font-bold text-[#1c1632]">{office.title}</h3>

                      {office.address && (
                        <InfoRow icon="bi-geo-alt-fill" title={office.addressLabel || 'Address'}>
                          {renderLines(office.address)}
                        </InfoRow>
                      )}

                      {office.person && (
                        <InfoRow icon="bi-person-fill" title="">
                          {office.person}
                        </InfoRow>
                      )}

                      {emails.length > 0 && (
                        <InfoRow icon="bi-envelope-fill" title="Mail us">
                          {emails.map((email, i) => (
                            <React.Fragment key={email}>
                              <a href={`mailto:${email}`} className={mailLink}>{email}</a>
                              {i < emails.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </InfoRow>
                      )}

                      {office.phone && (
                        <InfoRow icon="bi-telephone-fill" title="Phone">
                          {isHeadOffice ? (
                            <a href={callHref} onClick={trackPhoneCall} className={mailLink}>+91-{callNumber}</a>
                          ) : (
                            <a href={`tel:${office.phone.replace(/[^+\d]/g, '')}`} onClick={trackPhoneCall} className={mailLink}>{office.phone}</a>
                          )}
                        </InfoRow>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Map Integration */}
              <div className="relative mt-auto h-[200px] overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <iframe
                  src={embedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Aquabrim Pvt. Ltd. location"
                ></iframe>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/40 to-transparent p-3 text-center">
                  <a href={mapLinkUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[0.85rem] text-[#212529] no-underline shadow-sm transition-colors hover:bg-[#f8f9fa]">
                    {mapLinkText} <i className="bi bi-arrow-right text-[0.8rem]"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
