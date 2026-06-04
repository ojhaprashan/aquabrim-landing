'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TeamSocialLinks } from '@/components/common/SocialLinks';

const footer_content = {
  brand_info: {
    app_text: "Aquabrim app is available on",
    tagline: "Transform Your Water System with Aquabrim ",
  },
  company: [
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "/contact" },
    { title: "Blogs", link: "/blog" },
    { title: "Products", link: "/service" },
  ],
  support: [
    { title: "Pricing Policy", link: "/pricing-policy" },
    { title: "Privacy Policy", link: "/privacy-policy" },
    { title: "Refund Policy", link: "/refund-policy" },
    { title: "Shipping Policy", link: "/shipping-policy" },
    { title: "Warranty Policy", link: "/warranty-policy" },
    { title: "Terms & Condition", link: "/terms-condition" },
  ],
  social: {
    title: "SOCIAL",
    text: "Follow Our Journey on Social Media!",
  },
  bottom: {
    copyright: "© Aquabrim Private Limited",
    address: "New Delhi, India",
    phone: "+91-9560088791",
  }
};

const FooterOne = () => {
  const { brand_info, company, support, social, bottom } = footer_content;

  return (
    <footer className="border-t-2 border-[#b6d4fe] bg-[#f0f4f8] py-12 text-gray-800">
      <div className="container-app">

        <div className="mb-4 grid grid-cols-12 gap-8">

          {/* Column 1: Logo & App Info */}
          <div className="col-span-12 lg:col-span-4">
            <Link href="/" className="mb-3 flex items-center no-underline">
              <Image src="/assets/images/logo_blue.png" width={40} height={40} style={{ height: 'auto' }} alt="Aquabrim Logo" />
              <span className="ms-2 text-xl font-bold text-gray-900">Aquabrim</span>
            </Link>
            <p className="mb-2 text-sm text-gray-500">{brand_info.app_text}</p>

            <div className="mb-4 flex gap-4">
              <a href="#" className="inline-block text-2xl text-primary transition-transform duration-300 hover:-translate-y-1" title="Web Platform">
                <i className="bi bi-globe2"></i>
              </a>
              <a href="#" className="inline-block text-2xl text-primary transition-transform duration-300 hover:-translate-y-1" title="Android App">
                <i className="bi bi-google-play"></i>
              </a>
              <a href="#" className="inline-block text-2xl text-primary transition-transform duration-300 hover:-translate-y-1" title="iOS App">
                <i className="bi bi-apple"></i>
              </a>
            </div>

            <p className="text-sm text-gray-500">
              {brand_info.tagline.split('Aquabrim')[0]}
              <span className="font-medium text-primary">Aquabrim</span>
              {brand_info.tagline.split('Aquabrim')[1]}
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="col-span-6 lg:col-span-2">
            <h6 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Company</h6>
            <ul className="m-0 list-none p-0">
              {company.map((item, i) => (
                <li key={i} className="mb-2">
                  <Link href={item.link} className="text-sm text-gray-800 no-underline transition-colors hover:text-primary">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="col-span-6 lg:col-span-3">
            <h6 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Support</h6>
            <ul className="m-0 list-none p-0">
              {support.map((item, i) => (
                <li key={i} className="mb-2">
                  <Link href={item.link} className="text-sm text-gray-800 no-underline transition-colors hover:text-primary">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="col-span-12 lg:col-span-3">
            <h6 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">{social.title}</h6>
            <p className="mb-3 text-sm text-gray-800">{social.text}</p>
            <ul className="m-0 flex list-none gap-3 p-0 [&_a]:text-lg [&_a]:text-primary [&_a]:transition-colors hover:[&_a]:text-primary-600">
              <TeamSocialLinks />
            </ul>
          </div>

        </div>

        <hr className="my-8 border-[#b6d4fe] opacity-60" />

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">

          {/* Bottom Left: Startup Badges */}
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <div className="flex items-center gap-2 rounded border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-500">
              🦁 <span>Make In India</span>
            </div>
            <div className="flex items-center gap-2 rounded border border-gray-200 bg-gray-50 px-2 py-1 text-xs">
              <span className="font-medium text-primary">#startupindia</span>
            </div>
          </div>

          {/* Bottom Right: Copyright & Address */}
          <div className="text-center text-sm text-gray-500 md:text-right">
            <p className="mb-1">{bottom.copyright}</p>
            <p className="mb-0">{bottom.address} • Ph: {bottom.phone}</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
