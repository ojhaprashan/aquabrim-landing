'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './Menu/NavMenu';
import { TeamSocialLinks } from '@/components/common/SocialLinks';
import UseSticky from '@/hooks/UseSticky';
import MobileMeneu from './Menu/MobileMeneu';
import SearchPopup from '@/components/common/SearchPopup';
import { trackPhoneCall } from '@/utils/gtag';

const HeaderOne = ({ style }: any) => {

  const { sticky } = UseSticky()
  const [searchPopup, setSearchPopup] = useState<boolean>(false);

  return (
    <>
      {/* ===== Top bar (desktop only) ===== */}
      <div className="hidden bg-[#19142d] py-3 lg:block">
        <div className="container-app">
          <div className="grid grid-cols-2 items-center">
            <ul className="m-0 flex list-none items-center gap-x-9 p-0 text-sm text-white">
              <li><a href="#" className="text-white no-underline"><i className="bi bi-geo-alt mr-1.5 text-[15px] text-primary"></i> New Delhi, India</a></li>
              <li className="relative before:absolute before:-left-[18px] before:top-1/2 before:h-[18px] before:w-0.5 before:-translate-y-1/2 before:bg-[#3a3a42]/70">
                <a href="tel:+91-9560088791" onClick={trackPhoneCall} className="text-white no-underline"><i className="bi bi-telephone mr-1.5 text-[15px] text-primary"></i> +91-9560088791</a>
              </li>
              <li className="relative before:absolute before:-left-[18px] before:top-1/2 before:h-[18px] before:w-0.5 before:-translate-y-1/2 before:bg-[#3a3a42]/70">
                <a href="mailto:save.water@aquabrim.com" className="text-white no-underline"><i className="bi bi-envelope mr-1.5 text-[15px] text-primary"></i> save.water@aquabrim.com</a>
              </li>
            </ul>
            <div className="flex items-center justify-end gap-6">
              <select id="Language" className="cursor-pointer border-0 bg-transparent text-[15px] text-white outline-none [&>option]:text-black">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
              </select>
              <ul className="m-0 flex list-none items-center gap-3 p-0 [&_a]:text-sm [&_a]:text-white [&_a]:transition-colors hover:[&_a]:text-primary">
                <TeamSocialLinks />
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Desktop header ===== */}
      <header
        className={`relative z-[999] hidden overflow-hidden bg-white lg:block ${
          sticky ? 'animate-[slideInDown_0.5s] fixed left-0 top-0 z-[9999] w-full bg-[#f0f4f8] shadow-[0_10px_15px_rgba(25,25,25,0.1)]' : ''
        }`}
      >
        {/* angled blue brand banner behind the logo (matches the original .solar-header-section::before) */}
        <div aria-hidden="true" className="pointer-events-none absolute left-[-182%] top-0 h-full w-[215%] -skew-x-[30deg] bg-primary" />

        <div className="container-app relative">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative z-10 flex shrink-0 items-center py-3 no-underline">
              <Image src="/assets/images/logo.png" width={50} height={50} style={{ height: 'auto' }} alt="Aquabrim Logo" />
              <span className="ml-2 text-[30px] font-semibold text-white">Aquabrim</span>
            </Link>
            <div className="flex items-center gap-8">
              <NavMenu />
              <Link
                href="/contact"
                className="inline-block shrink-0 rounded-[3px] bg-primary px-6 py-3 text-[17px] font-medium tracking-wide text-white no-underline transition-colors duration-500 hover:bg-[#19142d]"
              >
                Get a Quote <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <MobileMeneu />
      <SearchPopup searchPopup={searchPopup} setSearchPopup={setSearchPopup} />
    </>
  );
};

export default HeaderOne;
