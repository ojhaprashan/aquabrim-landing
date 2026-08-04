'use client';
import React from 'react';
import type { AboutJourney } from '@/services/about/about.types';

const DEFAULTS = {
  eyebrow: 'OUR ROADMAP',
  heading: 'The Journey of Innovation (2008–2025)',
};

const OurJourney = ({ data }: { data?: AboutJourney }) => {
  const eyebrow = data?.eyebrow || DEFAULTS.eyebrow;
  const heading = data?.heading || DEFAULTS.heading;

  // SVG icons stay in code (not CMS-editable) and are assigned by position.
  const defaultMilestones = [
    {
      year: "2008",
      title: "Foundation & Vision",
      desc: "Aquabrim was founded with a vision to build smarter technologies for efficient water monitoring and automation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M3 21h18M5 21V7l8-4v18M13 21v-6h4v6M17 11h2v4h-2z" />
        </svg>
      )
    },
    {
      year: "2010",
      title: "Residential Automation",
      desc: "Expanded into residential automation by developing solutions tailored for domestic water management requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      year: "2012",
      title: "Industrial-Grade Systems",
      desc: "Introduced industrial-grade automation systems for commercial buildings and large-scale infrastructure projects.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M22 10v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10M2 10l10-7 10 7M12 22V12M12 12H7M12 12h5" />
        </svg>
      )
    },
    {
      year: "2015",
      title: "Web Telemetry & IoT",
      desc: "Integrated remote monitoring and web-enabled technologies to improve operational visibility and control.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="12" x="2" y="3" rx="2" />
          <path d="M12 15v6M5 21h14" />
        </svg>
      )
    },
    {
      year: "2018",
      title: "PAN India Leadership",
      desc: "Strengthened nationwide presence through continuous innovation, reliable support, and scalable automation systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    {
      year: "2021",
      title: "Advanced Flow Portfolios",
      desc: "Expanded the product portfolio with advanced flow management systems, motorised valves, and intelligent sensing technologies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M21 10h-3M3 10h3M12 6V3M12 18v3M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
        </svg>
      )
    },
    {
      year: "2023",
      title: "Connected Infrastructure",
      desc: "Diversified into broader industrial automation and connected infrastructure management solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    },
    {
      year: "2025",
      title: "Future-Ready Grids",
      desc: "Continuing to build future-ready intelligent automation systems focused on sustainability, digital connectivity, and smarter water infrastructure.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
  ];

  // Merge CMS year/title/desc over the coded milestones, keeping the SVG icons.
  const milestones = data?.milestones?.length
    ? data.milestones.map((m, i) => ({
        year: m.year || defaultMilestones[i]?.year || '',
        title: m.title || defaultMilestones[i]?.title || '',
        desc: m.desc || defaultMilestones[i]?.desc || '',
        icon: defaultMilestones[i]?.icon ?? defaultMilestones[0].icon,
      }))
    : defaultMilestones;

  return (
    <section className="relative block w-full bg-white py-[60px] sm:py-20 lg:py-[100px]">
      <div className="container-app">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-[680px] text-center">
          <span className="inline-block text-[0.9rem] font-bold uppercase tracking-[3px] text-[#006CD0]">
            {eyebrow}
          </span>
          <h2 className="mt-2 text-[1.7rem] font-extrabold text-[#1e293b] sm:text-[2.1rem] lg:text-[2.5rem]">
            {heading}
          </h2>
          <div className="mx-auto mt-[18px] h-1 w-20 rounded bg-gradient-to-r from-[#006CD0] to-[#00d2ff] shadow-[0_2px_10px_rgba(0,108,208,0.3)]"></div>
        </div>

        {/* Timeline */}
        <div className="relative mt-[70px] w-full py-5">
          {/* Central / left connector line */}
          <div className="absolute bottom-0 top-0 left-[20px] w-1 -translate-x-1/2 rounded bg-gradient-to-b from-[#006CD0]/5 via-[#006CD0]/80 to-[#00d2ff]/5 sm:left-[30px] lg:left-1/2"></div>

          {milestones.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`group relative z-[2] mb-[50px] flex w-full last:mb-0 lg:mb-[70px] ${
                  isLeft ? 'justify-start' : 'justify-start lg:justify-end'
                }`}
              >
                {/* Dot on the line */}
                <div className="absolute left-[20px] top-[25px] z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center sm:left-[30px] lg:left-1/2 lg:top-[30px]">
                  <div className="absolute h-8 w-8 animate-pulse-ring rounded-full bg-[#006CD0]/15"></div>
                  <div className="h-4 w-4 rounded-full border-[3px] border-solid border-white bg-[#006CD0] shadow-[0_0_10px_rgba(0,108,208,0.4)] transition-all duration-300 group-hover:scale-[1.3] group-hover:bg-[#00d2ff] group-hover:shadow-[0_0_18px_rgba(0,210,255,0.8)]"></div>
                </div>

                {/* Milestone card */}
                <div
                  className={`relative ml-[50px] flex w-[calc(100%-50px)] flex-col items-start rounded-[24px] border border-solid border-[#006CD0]/[0.08] bg-white/85 px-5 py-6 text-left backdrop-blur-[12px] transition-all duration-[400ms] hover:-translate-y-2 hover:border-[#006CD0]/25 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,108,208,0.08)] sm:ml-[75px] sm:w-[calc(100%-75px)] sm:p-[30px] lg:w-[calc(50%-60px)] ${
                    isLeft
                      ? 'lg:ml-0 lg:mr-[50%] lg:items-end lg:text-right'
                      : 'lg:ml-[50%] lg:mr-0 lg:items-start lg:text-left'
                  }`}
                >
                  <div
                    className={`mb-[18px] flex w-full items-center gap-4 ${
                      isLeft ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <span className="rounded-[30px] bg-gradient-to-br from-[#006CD0] to-[#004a91] px-3.5 py-1 text-[0.95rem] font-extrabold text-white shadow-[0_4px_12px_rgba(0,108,208,0.2)] sm:px-[18px] sm:py-1.5 sm:text-[1.15rem]">
                      {item.year}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-solid border-[#006CD0]/5 bg-[#f1f5f9] text-[#006CD0] transition-all duration-[400ms] group-hover:rotate-[15deg] group-hover:bg-gradient-to-br group-hover:from-[#006CD0] group-hover:to-[#00d2ff] group-hover:text-white group-hover:shadow-[0_6px_15px_rgba(0,108,208,0.25)] sm:h-12 sm:w-12">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="mb-3 text-[1.15rem] font-bold text-[#1e293b] sm:text-[1.35rem]">
                    {item.title}
                  </h3>
                  <p className="m-0 text-[0.88rem] font-normal leading-[1.7] text-[#64748b] sm:text-[0.95rem]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
