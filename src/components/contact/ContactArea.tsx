'use client';

import React from 'react';
import ContactForm from '../forms/ContactForm';
import { useDynamicCall } from '@/hooks/useDynamicCall';
import { trackPhoneCall } from '@/utils/gtag';

const mailLink = "text-[#6c757d] no-underline transition-colors hover:text-[#006CD0]";

const InfoRow = ({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) => (
  <div className="mb-4 flex items-start">
    <div className="mr-3 flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#f8f9fa] text-[#006CD0]">
      <i className={`bi ${icon} text-[1.25rem]`}></i>
    </div>
    <div>
      <h5 className="mb-1 text-[1rem] font-bold text-[#1c1632]">{title}</h5>
      <p className="mb-0 text-[#6c757d]">{children}</p>
    </div>
  </div>
);

const Divider = () => <div className="my-8 h-px w-full bg-[#212529]/[0.15]"></div>;

const ContactArea = () => {
  const { number: callNumber, href: callHref } = useDynamicCall();
  return (
    <div className="bg-white py-12">
      <div className="container-app">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">

          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-[20px] bg-white p-6 shadow-sm md:p-12">
              <div className="mb-6">
                <h3 className="mb-2 text-[1.5rem] font-bold text-[#1c1632]">Send Us a Message</h3>
                <p className="text-[#6c757d]">Fill out the form below and our team will get back to you as soon as possible.</p>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Right Column: Contact Information & Map */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-[20px] bg-white p-6 shadow-sm md:p-12">
              <div className="mb-4">
                <h3 className="mb-4 text-[1.5rem] font-bold text-[#1c1632]">Head office</h3>

                <InfoRow icon="bi-geo-alt-fill" title="Address">
                  Aquabrim Pvt. Ltd.<br />Plot no. 35, 1st Floor, Union Bank of India Building,<br />100 Feet road, Ghitorni, Delhi – 110030
                </InfoRow>

                <InfoRow icon="bi-envelope-fill" title="Mail us">
                  <a href="mailto:save.water@aquabrim.com" className={mailLink}>save.water@aquabrim.com</a><br />
                  <a href="mailto:sales@aquabrim.com" className={mailLink}>sales@aquabrim.com</a>
                </InfoRow>

                <InfoRow icon="bi-telephone-fill" title="Phone">
                  <a href={callHref} onClick={trackPhoneCall} className={mailLink}>+91-{callNumber}</a>
                </InfoRow>

                <Divider />

                <h3 className="mb-4 text-[1.5rem] font-bold text-[#1c1632]">Branch address</h3>

                <InfoRow icon="bi-geo-alt-fill" title="STATE: KARNATAKA">
                  Aquabrim Pvt. Ltd.<br />Flat no .20, Mahabala 2nd cross, Chamundi Narsari Road,<br />Jaraganahalli, Bangalore (Landmark: Shivanna Depo).
                </InfoRow>

                <InfoRow icon="bi-envelope-fill" title="Mail us">
                  <a href="mailto:save.water@aquabrim.com" className={mailLink}>save.water@aquabrim.com</a><br />
                  <a href="mailto:sales@aquabrim.com" className={mailLink}>sales@aquabrim.com</a>
                </InfoRow>

                <InfoRow icon="bi-telephone-fill" title="Phone">
                  <a href="tel:+919560088781" onClick={trackPhoneCall} className={mailLink}>+91-9560088781</a>
                </InfoRow>

                <Divider />

                <h3 className="mb-4 text-[1.5rem] font-bold text-[#1c1632]">Branch address</h3>

                <InfoRow icon="bi-geo-alt-fill" title="STATE: MAHARASHTRA">
                  Aquabrim Pvt. Ltd.<br />16/B Elahi Residency, 3 No Colony, Ashoka Society,<br />Kalewadi Phata, Thergaon, Chinchwad,<br />Pune – 411033, Maharashtra
                </InfoRow>
              </div>

              {/* Map Integration */}
              <div className="relative mt-auto h-[200px] overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.95373021!2d85.84621250756469!3d23.452185887261447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1635150422284!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/40 to-transparent p-3 text-center">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[0.85rem] text-[#212529] no-underline shadow-sm transition-colors hover:bg-[#f8f9fa]">
                    View on Google Maps <i className="bi bi-arrow-right text-[0.8rem]"></i>
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
