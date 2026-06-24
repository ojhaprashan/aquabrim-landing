'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ServiceAreaPanIndia = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const states = [
    { name: "Punjab", top: '22%', left: '33%' },
    { name: "Uttarakhand", top: '24%', left: '41%' },
    { name: "Delhi (Head Office)", displayName: "Delhi", isHeadOffice: true, top: '28%', left: '36%' },
    { name: "Rajasthan", top: '36%', left: '29%' },
    { name: "Uttar Pradesh", top: '33%', left: '43%' },
    { name: "Bihar", top: '38%', left: '53%' },
    { name: "West Bengal", top: '46%', left: '57%' },
    { name: "Odisha", top: '52%', left: '50%' },
    { name: "Maharashtra", top: '54%', left: '34%' },
    { name: "Goa", top: '64%', left: '30%' },
    { name: "Karnataka", top: '71%', left: '35%' },
    { name: "Tamil Nadu", top: '80%', left: '42%' },
    { name: "Kerala", top: '82%', left: '34%' }
  ];

  const states_col_1 = states.slice(0, 7);
  const states_col_2 = states.slice(7);

  const stats = [
    { icon: 'bi-geo-alt-fill', label: '15+ Cities served' },
    { icon: 'bi-house-door-fill', label: '50,000+ Customers' },
    { icon: 'bi-emoji-smile-fill', label: 'Thousands of Happy Customers' },
  ];

  return (
    <section className="overflow-hidden bg-white py-12">
      <div className="container-app">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Left Side: Stats & CTA */}
          <div className="mb-2 md:col-span-2 lg:col-span-1 lg:mb-0">
            <div className="mb-4">
              <h6 className="mb-2 text-[1rem] font-bold uppercase tracking-[1px] text-[#006CD0]">Where We Serve</h6>
              <h2 className="mb-4 text-[clamp(28px,4vw,36px)] font-bold text-[#1c1632]">Serving Across India</h2>
            </div>

            <div>
              {stats.map((s, i) => (
                <div key={i} className="mb-4 flex items-center">
                  <div className="mr-3 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-solid border-[#dee2e6] bg-[#f8f9fa] shadow-sm">
                    <i className={`bi ${s.icon} text-[1.5rem] text-[#006CD0]`}></i>
                  </div>
                  <div>
                    <h6 className="mb-0 text-[1rem] font-bold text-[#1c1632]">{s.label}</h6>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <a
                href="/service"
                className="inline-block rounded-md bg-[#006CD0] px-4 py-3 font-bold text-white no-underline shadow-sm transition-colors hover:bg-[#005bb0]"
              >
                View Products <i className="bi bi-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* Middle: India Map with Pins */}
          <div className="mb-2 flex justify-center md:col-span-1 lg:mb-0">
            <div className="relative inline-block text-center">
              <Image
                src="/assets/images/india_map.webp"
                alt="India Map"
                width={400}
                height={450}
                style={{ width: '100%', height: 'auto', opacity: 0.8 }}
              />

              {/* Interactive Pins */}
              {states.map((state, idx) => {
                const isActive = hoveredState === state.name;
                return (
                  <div
                    key={idx}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300"
                    style={{ top: state.top, left: state.left, zIndex: isActive ? 10 : 2 }}
                    onMouseEnter={() => setHoveredState(state.name)}
                    onMouseLeave={() => setHoveredState(null)}
                  >
                    {/* Radar Pulse Effect */}
                    {isActive && (
                      <div className="pointer-events-none absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-radar-pulse rounded-full border border-solid border-[rgba(220,53,69,0.8)] bg-[rgba(220,53,69,0.25)]"></div>
                    )}

                    {/* The Pin Icon */}
                    <div className={`flex items-center justify-center text-[1.6rem] transition-all duration-300 ${isActive ? 'scale-[1.3]' : ''}`}>
                      <i className={`bi bi-geo-alt-fill ${isActive ? 'text-[#dc3545] drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]' : 'text-[#006CD0]'}`}></i>
                    </div>

                    {/* Tooltip */}
                    <div
                      className={`pointer-events-none absolute bottom-full left-1/2 z-[100] -translate-x-1/2 whitespace-nowrap rounded bg-[rgba(33,37,41,0.95)] px-2.5 py-1 text-[0.72rem] font-semibold text-white shadow-sm transition-all duration-[250ms] after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-[5px] after:border-solid after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-[rgba(33,37,41,0.95)] after:content-[''] ${
                        isActive ? 'visible -translate-y-2.5 opacity-100' : 'invisible -translate-y-1.5 opacity-0'
                      }`}
                    >
                      {state.isHeadOffice ? "Delhi (Head Office)" : state.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: State List */}
          <div className="md:col-span-1">
            <div className="grid grid-cols-2 gap-x-2">
              {[states_col_1, states_col_2].map((col, colIdx) => (
                <ul key={colIdx} className="m-0 list-none p-0">
                  {col.map((state, idx) => {
                    const isActive = hoveredState === state.name;
                    return (
                      <li
                        key={idx}
                        className="group mb-3 flex cursor-pointer items-center"
                        onMouseEnter={() => setHoveredState(state.name)}
                        onMouseLeave={() => setHoveredState(null)}
                      >
                        <i className={`bi bi-geo-alt-fill mr-2 text-[0.875rem] transition-all duration-300 ${isActive ? 'scale-[1.2] text-[#006CD0]' : 'text-[#6c757d]'}`}></i>
                        {state.isHeadOffice ? (
                          <span className={`flex flex-wrap items-center text-[0.85rem] font-bold transition-all duration-300 group-hover:translate-x-1.5 ${isActive ? 'text-[#006CD0]' : 'text-[#212529]'}`}>
                            Delhi
                            <span className="ml-2 rounded bg-[#006CD0] px-2 py-[3px] text-[0.62rem] text-white">
                              Head Office
                            </span>
                          </span>
                        ) : (
                          <span className={`text-[0.875rem] font-medium transition-all duration-300 group-hover:translate-x-1.5 ${isActive ? 'font-bold text-[#006CD0]' : 'text-[#6c757d]'}`}>
                            {state.name}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceAreaPanIndia;
