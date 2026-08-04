import React from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
};

const PolicyBanner = ({ image, title, subtitle }: Props) => {
  return (
    <section className="relative flex w-full items-center px-[15px] pb-[30px] pt-20 text-center md:min-h-[180px] md:px-0 md:py-[50px] md:text-left lg:min-h-[260px] lg:py-[90px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={`${title} Banner`} className="h-full w-full object-cover" priority />
      </div>

      <div className="container-app relative z-[1]">
        <div className="lg:max-w-[60%]">
          <h1 className="mb-2 text-[28px] font-bold text-[#1c1632] md:text-[2.2rem] lg:text-[2.5rem]">
            {title}
          </h1>
          <p className="mb-0 max-w-[500px] text-[14px] leading-[1.4] text-[#475569] max-md:mx-auto md:text-[15px]">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PolicyBanner;
