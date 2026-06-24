'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import about_thumb from "@/assets/home/home page image.webp";

const FEATURES = [
  "Detects water supply availability",
  "Prevents dry-run damage",
  "Monitors tank water level",
  "Avoids overflow and wastage",
  "Starts motor when level is low",
  "Maintains Consistent Water Supply",
  "Stops motor when tank is full",
];

const STATS = [
  { value: "50,000+", label: "Customers Served" },
  { value: "5,000+", label: "Systems Installed" },
  { value: "15+", label: "Cities Served" },
  { value: "16+", label: "Years Experience" },
];

const AboutAreaHomeOne = ({ hideClients, hideImpact }: any) => {

  const clients = [
    "/assets/client/1280px-Radisson_Blu_logo.svg.png",
    "/assets/client/Bharat_Heavy_Electricals_Limited-Logo.wine.png",
    "/assets/client/Bharat_Petroleum_logo.svg.png",
    "/assets/client/Coca-Cola_logo.svg.png",
    "/assets/client/EIL logo.png",
    "/assets/client/Indian-Oil-Logo-768x483.png",
    "/assets/client/Indian_Railway_Logo_2.png",
    "/assets/client/Unilever.svg.png",
    "/assets/client/Emaar-Properties-Logo-1.jpg.jpeg",
    "/assets/client/max healthcar.png",
    "/assets/client/bhutani infra logo.png",
    "/assets/client/hyatt regency.jpeg",
    "/assets/client/pwd.jpeg",
    "/assets/client/M3M.webp",
  ];

  return (
    <div className="pb-16 pt-8 lg:pb-[120px] lg:pt-12">
      <div className="container-app">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">

          {/* Left: Image (desktop only) */}
          <div className="hidden lg:block">
            <Image src={about_thumb} style={{ width: "100%", height: "auto", borderRadius: "8px" }} alt="Aquabrim Installation" />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="mb-2 text-center text-[1.85rem] font-bold leading-tight text-[#0d1b2a] lg:text-left lg:text-[2.4rem]">
              How Aquabrim&rsquo;s Water Level Controllers works
            </h2>

            <div className="mb-4 text-center lg:text-left">
              <p className="mb-2 text-[0.95rem] leading-[1.7] text-gray-500">
                Aquabrim Water Level Controllers keeps your water tank perfectly managed with no manual effort. It constantly checks two things: the incoming water supply (municipal line or borewell) and the water level inside the tank using built&#8209;in sensors.
              </p>
              <p className="mb-2 text-[0.95rem] leading-[1.7] text-gray-500">
                When the tank level drops below the set point and water is available, Aquabrim turns the motor ON to fill the tank. As the tank fills, it keeps monitoring the level in real time and switches the motor OFF the moment the tank reaches the set capacity, preventing overflow and saving water.
              </p>
              <p className="mb-3 text-[0.95rem] leading-[1.7] text-gray-500">
                If there is no water in the supply line, Aquabrim keeps the motor off, so it never runs dry and stays protected. This smart control ensures the right water level, avoids wastage, and gives you a steady, reliable supply.
              </p>
            </div>

            {/* Mobile-only image */}
            <div className="mx-auto mb-12 mt-6 block max-w-[480px] lg:hidden">
              <Image src={about_thumb} style={{ height: "auto", borderRadius: "8px", width: "100%" }} alt="Aquabrim Installation" />
            </div>

            {/* Feature list */}
            <div className="mb-[30px] mt-5 grid grid-cols-1 gap-x-5 gap-y-2.5 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex items-center max-lg:mx-auto max-lg:w-full max-lg:max-w-[320px]">
                  <i className="bi bi-check-circle-fill mr-2 shrink-0 text-[0.95rem] text-primary"></i>
                  <span className="text-[0.92rem] font-medium leading-snug text-[#4a5568]">{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center lg:text-left">
              <Link href="/service" className="inline-flex items-center rounded-md bg-primary px-4 py-3 font-bold text-white no-underline shadow-sm transition-colors hover:bg-primary-600">
                View Products <i className="bi bi-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {(!hideImpact || !hideClients) && (
        <div className="container-app mt-4">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-[#f0f4f8] p-3 shadow-sm md:p-12">

            {!hideImpact && (
              <>
                <div className="mb-10 text-center">
                  <span className="mb-2 block text-[0.9rem] font-bold uppercase tracking-[1.5px] text-primary">Trusted by thousands</span>
                  <h3 className="mb-2 text-[clamp(1.375rem,1.375rem+1.5vw,2.5rem)] font-bold text-[#0d1b2a]">Trusted by thousands across multiple sectors</h3>
                  <p className="text-lg text-gray-500">Installed across residential, commercial and institutional</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center lg:grid-cols-4">
                  {STATS.map((s, i) => (
                    <div key={i} className="h-full rounded-lg bg-primary p-4 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1">
                      <h2 className="mb-2 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[2.5rem]">{s.value}</h2>
                      <p className="mb-0 text-sm font-semibold text-white sm:text-base">{s.label}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {!hideClients && (
              <>
                {!hideImpact && <hr className="my-10 border-gray-400/15" />}

                <div className="mb-4 text-center">
                  <h6 className="text-[clamp(22px,5vw,28px)] font-bold uppercase tracking-[1.5px] text-gray-500">They trust Aquabrim</h6>
                </div>

                <div className="marquee-wrapper relative w-full">
                  <div className="marquee-track flex items-center py-2">
                    {[...clients, ...clients].map((img, idx) => (
                      <div key={idx} className="mx-3 flex h-[80px] min-w-[180px] items-center justify-center px-4 py-3">
                        <Image src={img} alt="Client Logo" width={120} height={60} style={{ objectFit: 'contain' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Component-scoped marquee animation (horizontal on desktop, vertical on mobile) */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .marquee-track {
            width: max-content;
            animation: marqueeScroll 25s linear infinite;
            display: flex;
          }
          .marquee-track:hover { animation-play-state: paused; }
          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (max-width: 767px) {
            .marquee-wrapper { height: 350px; overflow: hidden; }
            .marquee-track {
              flex-direction: column;
              width: 100% !important;
              height: max-content;
              animation: verticalMarqueeScroll 20s linear infinite;
              align-items: center;
            }
            .marquee-track > div { margin: 10px 0 !important; }
          }
          @keyframes verticalMarqueeScroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
        `
      }} />
    </div>
  );
};

export default AboutAreaHomeOne;
