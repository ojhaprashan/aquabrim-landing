'use client';
import React from 'react';
import Image from 'next/image';
import mockup from "@/assets/Application/application.webp";

const PlatformAreaHomeOne = () => {
  return (
    <section className="overflow-hidden border-y border-[#eee] bg-[#f0f4f8] py-12 max-lg:pb-0 max-lg:pt-8">
      <div className="container-app">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Image src={mockup} alt="Multi-device support" style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-center lg:pl-12 lg:text-left">
              <h2 className="mb-4 text-[26px] font-bold leading-[1.2] text-gray-900 lg:text-[2.5rem]">
                Control Your Water System from <span className="text-primary">Anywhere</span>
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-500">
                Track water levels, motor performance, tank conditions, and system notifications in real time with <span className="font-bold text-gray-900">Aquabrim&apos;s</span> smart web and mobile platform. Remotely access and manage your water automation system, receive instant alerts, and monitor operations seamlessly from anywhere with <span className="font-bold text-primary">complete control and convenience</span>.
              </p>

              <div>
                <h6 className="mb-3 text-sm font-bold uppercase tracking-[1px] text-gray-500">Get the Aquabrim App on</h6>
                <div className="flex items-center justify-center gap-4 lg:justify-start">
                  <a href="#" className="transition-transform duration-300 hover:-translate-y-1" title="Web Platform">
                    <i className="bi bi-globe2 text-[2rem] text-primary"></i>
                  </a>
                  <a href="#" className="transition-transform duration-300 hover:-translate-y-1" title="Android App">
                    <i className="bi bi-google-play text-[2rem] text-primary"></i>
                  </a>
                  <a href="#" className="transition-transform duration-300 hover:-translate-y-1" title="iOS App">
                    <i className="bi bi-apple text-[2rem] text-primary"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformAreaHomeOne;
