'use client';
import React from 'react';
import Image from 'next/image';
import type { HomeProductFeatures } from '@/services/home/home.types';

const DEFAULT_ITEMS = [
  { img: "/assets/product_feature/WebApp Based Monitoring System.png", title: "App-Based Remote Control", wide: true, blue: true, w: 397, h: 354 },
  { img: "/assets/product_feature/Smart Scheduling.webp", title: "Smart Scheduling", wide: false, blue: false, w: 1024, h: 1024 },
  { img: "/assets/product_feature/Dry-run Protection.png", title: "Dry-Run Motor Protection", wide: false, blue: true, w: 373, h: 299 },
  { img: "/assets/product_feature/Tank Level Monitoring.png", title: "Prevents Tank Overflow", wide: false, blue: true, w: 500, h: 500 },
  { img: "/assets/product_feature/SMS Alert.png", title: "Real-Time Alerts", wide: false, blue: false, w: 500, h: 500 },
  { img: "/assets/product_feature/Wireless Technology.png", title: "Wireless Sensor Technology", wide: true, blue: true, w: 283, h: 220 },
];

const ProductFeatureAreaHomeOne = ({ data }: { data?: HomeProductFeatures }) => {
  const heading = data?.heading || 'Product Features';
  // Map CMS items onto the layout shape; keep default sizes when CMS omits them.
  const items = data?.items?.length
    ? data.items.map((it) => ({ img: it.image || '', title: it.title || '', wide: !!it.wide, blue: !!it.blue, w: 500, h: 500 }))
    : DEFAULT_ITEMS;

  return (
    <section className="overflow-hidden bg-white py-12">
      <div className="container-app">
        <div className="mb-10 text-center">
          <h4 className="mb-2 text-[clamp(22px,5vw,28px)] font-bold uppercase tracking-[1px] text-primary">{heading}</h4>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`min-h-[320px] overflow-hidden rounded-3xl border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] max-md:min-h-[280px] ${
                item.wide ? 'xl:col-span-2' : 'xl:col-span-1'
              } ${item.blue ? 'bg-[#0081ff]' : 'bg-[#f0f6ff]'}`}
            >
              <div className="flex h-full flex-col p-6">
                <h5 className={`z-[2] mb-6 text-[1.2rem] font-bold ${item.blue ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h5>
                <div className="relative mt-2 flex-grow">
                  {item.img && (
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={item.w}
                      height={item.h}
                      className="h-full w-full object-contain object-bottom"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatureAreaHomeOne;
