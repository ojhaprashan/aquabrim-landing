'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import service_icon_1 from "@/assets/images/resource/service-icon1.png";
import service_icon_2 from "@/assets/images/resource/service-icon2.png";
import service_icon_3 from "@/assets/images/resource/service-icon3.png";

import { products } from '../../service/ProductList';

const icons = [service_icon_1, service_icon_2, service_icon_3];

// Only the Domestic + Industrial products from the product list.
const home_products = products.filter(
  (p: any) => p.category === 'domestic' || p.category === 'industrial'
);

const ServiceAreaHomeOne = ({ style_2 }: any) => {
  const data = home_products;
  return (
    <div className="bg-[#f0f4f8] py-[106px] pb-[110px]">
      <div className="container-app">
        {!style_2 &&
          <div className="text-center">
            <h4 className="relative mb-2 inline-block px-[50px] text-2xl font-medium text-primary before:absolute before:right-0 before:top-[14px] before:h-0.5 before:w-[35px] before:bg-primary after:absolute after:left-0 after:top-[14px] after:h-0.5 after:w-[35px] after:bg-primary">
              Our Products
            </h4>
            <h2 className="mb-[42px] text-[48px] font-semibold text-[#1c1632] max-md:text-[32px]">Advanced Automation Products</h2>
          </div>
        }

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="equal-height-slider"
        >
          {data.map((item: any, index: number) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-lg">
                {/* Full product image — always fully visible */}
                <div className="relative aspect-[2/3] w-full bg-white">
                  <Image src={item.img} alt={item.title} fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                {/* Info panel attached directly below */}
                <div className="relative flex flex-1 flex-col bg-primary px-7 pb-7">
                  <div className="-mt-8 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md ring-4 ring-primary">
                    <Image src={icons[index % icons.length]} alt={item.title} className="h-8 w-auto" />
                  </div>
                  <h4 className="mb-1">
                    <Link href={`/service-details/${item.slug}`} className="text-[26px] font-medium text-white no-underline">{item.title}</Link>
                  </h4>
                  <h6 className="mb-3 text-[0.85rem] font-semibold text-white/85">{item.subtitle || item.categoryName}</h6>
                  <p className="mb-4 line-clamp-3 text-[0.9rem] leading-[1.5] text-[#f1f5f9]">{item.description}</p>
                  <Link href={`/service-details/${item.slug}`} className="mt-auto inline-flex items-center gap-1 text-white no-underline hover:underline">
                    Product Details <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .equal-height-slider .swiper-wrapper { align-items: stretch; }
        .equal-height-slider .swiper-slide { height: auto; display: flex; }
        .equal-height-slider .swiper-slide > div { width: 100%; }
      `}</style>
    </div>
  );
};

export default ServiceAreaHomeOne;
