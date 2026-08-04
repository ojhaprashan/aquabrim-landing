'use client';
import Accordion from '@/components/common/Accordion';
import Link from 'next/link';
import React from 'react';
import type { HomeFaqArea } from '@/services/home/home.types';

const DEFAULT_SUPPORT_POINTS = [
  { icon: 'bi-chat-dots', label: 'Expert Support' },
  { icon: 'bi-lightning', label: 'Quick Response' },
  { icon: 'bi-tools', label: 'Installation Guidance' },
];

const PricingAreaHomeOne = ({ data }: { data?: HomeFaqArea }) => {
  const eyebrow = data?.eyebrow || 'FAQ';
  const heading = data?.heading || 'Frequently Asked Questions';
  const faqs = data?.faqs?.length ? (data.faqs as { question: string; answer: string }[]) : undefined;
  const supportHeading = data?.supportHeading || 'Still Have Questions?';
  const supportParagraph = data?.supportParagraph || 'Our team is here to help you find the right solution for your water automation needs.';
  const supportPoints = data?.supportPoints?.length ? data.supportPoints : DEFAULT_SUPPORT_POINTS;
  const primaryBtnText = data?.supportPrimaryBtnText || 'Get in Touch';
  const primaryBtnLink = data?.supportPrimaryBtnLink || '/contact-us';
  const secondaryBtnText = data?.supportSecondaryBtnText || 'View Products';
  const secondaryBtnLink = data?.supportSecondaryBtnLink || '/products';

  return (
    <div className="overflow-hidden py-12">
      <div className="container-app">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">

          {/* Left: FAQ */}
          <div className="mb-4 lg:mb-0">
            <h4 className="mb-2 text-[18px] font-bold uppercase text-primary">{eyebrow}</h4>
            <h2 className="mb-4 text-[28px] font-bold leading-tight text-[#0d1b2a] md:text-[2.5rem]">
              {heading}
            </h2>
            <Accordion faqs={faqs} />
          </div>

          {/* Right: Support card */}
          <div>
            <div className="group mx-auto overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 text-center transition-all duration-300 hover:border-primary/20 md:p-12">
              <div className="mb-4 inline-flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#f8faff] max-md:h-[80px] max-md:w-[80px]">
                <i className="bi bi-headset text-[40px] text-primary max-md:text-[30px]"></i>
              </div>

              <h3 className="mb-3 text-2xl font-bold max-md:text-[22px]">{supportHeading}</h3>
              <p className="mb-4 text-gray-500">{supportParagraph}</p>

              <ul className="mb-4 inline-block list-none p-0 text-left">
                {supportPoints.map((p, i) => (
                  <li key={i} className="mb-3 flex items-center">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#f8f9fa] transition-colors duration-300 group-hover:bg-primary">
                      <i className={`bi ${p.icon} text-[14px] text-primary transition-colors duration-300 group-hover:text-white`}></i>
                    </div>
                    <span className="font-semibold">{p.label}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={primaryBtnLink} className="flex flex-grow items-center justify-center rounded-xl bg-primary px-4 py-3 font-bold text-white no-underline shadow-sm transition-colors hover:bg-primary-600">
                  {primaryBtnText} <i className="bi bi-arrow-right ml-2"></i>
                </Link>
                <Link href={secondaryBtnLink} className="flex flex-grow items-center justify-center rounded-xl border border-primary px-4 py-3 font-bold text-primary no-underline shadow-sm transition-colors hover:bg-primary hover:text-white">
                  {secondaryBtnText} <i className="bi bi-box-seam ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAreaHomeOne;
