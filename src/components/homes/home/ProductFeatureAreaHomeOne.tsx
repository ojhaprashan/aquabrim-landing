'use client';
import React from 'react';
import Image from 'next/image';

const feature_data = [
  { id: 1, img: "/assets/product_feature/WebApp Based Monitoring System.png", title: "App-based Water Control", wide: true, blue: true },
  { id: 2, img: "/assets/product_feature/Smart Scheduling.webp", title: "Smart Scheduling", wide: false, blue: false },
  { id: 3, img: "/assets/product_feature/Dry-run Protection.png", title: "Automatic Controller", wide: false, blue: true },
  { id: 4, img: "/assets/product_feature/Tank Level Monitoring.png", title: "Customizable Tank Levels", wide: false, blue: true },
  { id: 5, img: "/assets/product_feature/SMS Alert.png", title: "Real-time Updates", wide: false, blue: false },
  { id: 6, img: "/assets/product_feature/Wireless Technology.png", title: "IoT-based Water Level Controller", wide: true, blue: true },
];

const ProductFeatureAreaHomeOne = () => {
  return (
    <section className="overflow-hidden bg-white py-12">
      <div className="container-app">
        <div className="mb-10 text-center">
          <h4 className="mb-2 text-[clamp(22px,5vw,28px)] font-bold uppercase tracking-[1px] text-primary">Product Features</h4>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {feature_data.map((item) => (
            <div
              key={item.id}
              className={`min-h-[320px] overflow-hidden rounded-3xl border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] max-md:min-h-[280px] ${
                item.wide ? 'xl:col-span-2' : 'xl:col-span-1'
              } ${item.blue ? 'bg-[#0081ff]' : 'bg-[#f0f6ff]'}`}
            >
              <div className="flex h-full flex-col p-6">
                <h5 className={`z-[2] mb-6 text-[1.2rem] font-bold ${item.blue ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h5>
                <div className="relative mt-2 flex-grow">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
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
