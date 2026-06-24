'use client';
import React from 'react';
import Link from 'next/link';
import { trackPhoneCall } from '@/utils/gtag';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnLink?: string;
  icon?: string;
  btnIcon?: string;
}

const CtaBanner = ({
  title = "Need Immediate Assistance?",
  subtitle = "Call our support team for quick help and solutions.",
  btnText = "Call Now",
  btnLink = "tel:+919560088791",
  icon = "bi-headset",
  btnIcon = "bi-telephone-fill"
}: CtaBannerProps) => {
  return (
    <div className="container-app mb-20">
      <div className="flex flex-col items-center justify-between rounded-2xl bg-primary p-4 shadow-sm md:flex-row">
        <div className="mb-4 flex flex-col items-center text-center md:mb-0 md:flex-row md:text-left">
          <div className="mb-3 flex h-[60px] w-[60px] min-w-[60px] items-center justify-center rounded-full bg-white/20 md:mb-0 md:mr-4">
            <i className={`bi ${icon} text-[1.75rem] text-white`}></i>
          </div>
          <div>
            <h4 className="mb-1 text-[20px] font-bold text-white">{title}</h4>
            <p className="mb-0 text-[15px] text-white/80">{subtitle}</p>
          </div>
        </div>
        <div>
          <Link
            href={btnLink}
            onClick={btnLink.startsWith('tel:') ? trackPhoneCall : undefined}
            className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-[15px] font-bold text-primary no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
          >
            {btnText} <i className={`bi ${btnIcon} text-sm`}></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
