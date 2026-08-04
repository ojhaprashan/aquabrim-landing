'use client';
import React from 'react';
import type { AboutMissionVision } from '@/services/about/about.types';

const DEFAULT_HEADING = 'Our Mission & Vision';

const DEFAULT_CARDS = [
  {
    icon: 'bi-bullseye',
    title: 'Our Mission',
    desc: 'To develop reliable water level monitoring and automation systems that improve operational efficiency and support smarter infrastructure management.',
    accent: 'bg-[#006CD0]',
  },
  {
    icon: 'bi-eye',
    title: 'Our Vision',
    desc: 'To lead the future of water automation with intelligent, connected, and efficient infrastructure solutions.',
    accent: 'bg-[#3b82f6]',
  },
];

// Accent colours are coded per position; other fields merge over CMS values.
const ACCENTS = ['bg-[#006CD0]', 'bg-[#3b82f6]'];

const MissionVision = ({ data }: { data?: AboutMissionVision }) => {
  const heading = data?.heading || DEFAULT_HEADING;
  const cards = data?.cards?.length
    ? data.cards.map((c, i) => ({
        icon: c.icon || DEFAULT_CARDS[i]?.icon || 'bi-bullseye',
        title: c.title || DEFAULT_CARDS[i]?.title || '',
        desc: c.desc || DEFAULT_CARDS[i]?.desc || '',
        accent: ACCENTS[i % ACCENTS.length],
      }))
    : DEFAULT_CARDS;

  return (
    <section className="overflow-hidden bg-[#f8fafc] py-12 sm:py-16 lg:py-20">
      <div className="container-app">
        <div className="mb-10 text-center">
          <h2 className="text-[1.7rem] font-extrabold text-[#1e293b] sm:text-[2.1rem] lg:text-[2.5rem]">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative z-[1] h-full overflow-hidden rounded-2xl border border-solid border-[#e2e8f0]/80 bg-white p-8 shadow-sm transition-all duration-[400ms] hover:-translate-y-2.5 hover:border-[#006CD0]/20 hover:shadow-[0_20px_40px_rgba(0,108,208,0.08)] md:p-12"
            >
              <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                <div className="mb-4 flex h-20 w-20 min-w-20 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#006CD0] to-[#004a91] text-[2rem] text-white shadow-lg transition-all duration-[400ms] group-hover:scale-110 md:mb-0 md:mr-4 md:h-[90px] md:w-[90px] md:min-w-[90px] md:rounded-3xl md:text-[2.5rem]">
                  <i className={`bi ${card.icon}`}></i>
                </div>
                <div>
                  <h3 className="mb-3 text-[1.5rem] font-bold tracking-[-0.02em] text-[#1c1632] md:text-[1.75rem]">
                    {card.title}
                  </h3>
                  <p className="mb-0 text-[1rem] leading-[1.7] text-[#64748b] md:text-[1.1rem]">
                    {card.desc}
                  </p>
                </div>
              </div>
              {/* bottom accent line that fills on hover */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 rounded-bl-2xl transition-[width] duration-[400ms] group-hover:w-full group-hover:rounded-b-2xl ${card.accent}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
