'use client';
import React from 'react';
import Link from 'next/link';

type DataType = {
  top_title: string;
  title: string;
  subtitle?: string;
}

const Breadcrumb = ({ top_title, title, subtitle }: DataType) => {
  return (
    <div className="bg-[#f0f4f8] py-[50px] max-md:py-10 max-md:text-center">
      <div className="container-app">
        <h1 className="mb-[5px] text-[2rem] font-extrabold text-[#0d1b2a]">{top_title}</h1>
        {subtitle && (
          <p className="mb-[15px] mt-2 max-w-[800px] text-base text-gray-500 max-md:mx-auto">
            {subtitle}
          </p>
        )}
        <ul className="m-0 flex list-none items-center p-0 max-md:justify-center">
          <li>
            <Link href="/" className="text-[13px] font-semibold uppercase tracking-[0.5px] text-[#4a5568] no-underline transition-colors hover:text-primary">Home</Link>
          </li>
          <li className="text-[13px] font-semibold uppercase tracking-[0.5px] text-[#4a5568] before:mx-2.5 before:text-[#cbd5e0] before:content-['/']">{title}</li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
