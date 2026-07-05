'use client';
import React from 'react';

type Pill = { label: string; icon: React.ReactNode };

const praveenPills: Pill[] = [
  {
    label: "IIM-C Alumni",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5" />
      </svg>
    )
  },
  {
    label: "Serial Entrepreneur",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  },
  {
    label: "Venture Capitalist",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    )
  },
  {
    label: "Startup Ecosystem Mentor",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    label: "Business & Growth Strategist",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  }
];

const rakeshPills: Pill[] = [
  {
    label: "Wireless Technology Expert",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5M12 12h.01M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5M19.1 4.9C23 8.8 23 15.2 19.1 19.1" />
      </svg>
    )
  },
  {
    label: "Electronics Engineer",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    )
  },
  {
    label: "Automation Specialist",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )
  },
  {
    label: "Patent Holder",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    )
  },
  {
    label: "Industrial IoT Innovator",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6M10 22h4" />
      </svg>
    )
  }
];

type FounderCardProps = {
  name: string;
  role: string;
  pills: Pill[];
  desc: string;
  image: string;
  imageSide: 'left' | 'right';
  className?: string;
};

const FounderCard = ({ name, role, pills, desc, image, imageSide, className = '' }: FounderCardProps) => {
  const isRight = imageSide === 'right';
  return (
    <div
      className={`group rounded-[24px] border border-solid border-[#e9ecef] bg-white px-[15px] py-[25px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,108,208,0.06)] sm:px-5 sm:py-[30px] lg:p-10 ${className}`}
    >
      <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-12 lg:gap-10">
        {/* Image */}
        <div className={`lg:col-span-4 ${isRight ? 'lg:order-2' : ''}`}>
          <div className="relative flex justify-center p-2.5">
            {/* blue corner badge */}
            <div
              className={`absolute top-[-2px] z-[2] h-[60px] w-[60px] rounded-2xl bg-[#006CD0] ${
                isRight ? 'right-[-2px]' : 'left-[-2px]'
              }`}
            ></div>
            {/* dotted pattern */}
            <div
              className={`absolute bottom-5 z-[1] hidden h-20 w-[50px] bg-[length:8px_8px] bg-[radial-gradient(rgba(0,108,208,0.2)_1.5px,transparent_1.5px)] md:block ${
                isRight ? 'right-[-20px]' : 'left-[-20px]'
              }`}
            ></div>
            <div className="relative z-[5] aspect-[0.8] w-full max-w-[280px] overflow-hidden rounded-[20px] border-4 border-solid border-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover object-top transition-transform duration-[400ms] group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`lg:col-span-8 ${isRight ? 'lg:order-1' : ''}`}>
          <div className="text-center lg:text-left">
            <h3 className="mb-1 text-[1.5rem] font-bold text-[#1c1632] sm:text-[1.85rem]">{name}</h3>
            <span className="mb-2 inline-block text-[0.9rem] font-semibold text-[#006CD0] sm:text-[1rem]">{role}</span>
            <div className="mx-auto mb-6 h-[3px] w-[35px] rounded-[2px] bg-[#006CD0] transition-[width] duration-300 group-hover:w-[55px] lg:mx-0"></div>

            {/* Pills */}
            <div className="mb-4 flex flex-wrap justify-center gap-2 lg:justify-start">
              {pills.map((pill, pIdx) => (
                <div
                  key={pIdx}
                  className="inline-flex items-center gap-2 rounded-xl border border-solid border-[#e2e8f0]/80 bg-[#f1f5f9] px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#006CD0]/15 hover:bg-[#e2e8f0] sm:px-4 sm:py-2"
                >
                  <span className="flex items-center text-[#006CD0]">{pill.icon}</span>
                  <span className="text-[0.72rem] font-bold text-[#334155] sm:text-[0.8rem]">{pill.label}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[0.92rem] font-normal leading-[1.7] text-[#64748b] lg:text-[0.98rem] lg:leading-[1.8]">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Founders = () => {
  return (
    <section className="block w-full bg-white py-[60px] sm:py-20">
      <div className="container-app">
        {/* Title */}
        <div className="mx-auto mb-12 max-w-[680px] text-center">
          <span className="text-[14px] font-bold uppercase tracking-[2px] text-[#006CD0]">OUR FOUNDERS</span>
          <h2 className="mt-2 text-[1.7rem] font-extrabold text-[#1e293b] sm:text-[2.1rem] lg:text-[2.5rem]">Meet Our Founders</h2>
          <div className="mx-auto mt-[15px] h-[3px] w-[60px] rounded-[2px] bg-[#006CD0]"></div>
        </div>

        {/* Founders Cards */}
        <div className="mt-[50px]">
          <FounderCard
            name="Praveen Sinha"
            role="Co-Founder & Strategic Advisor"
            pills={praveenPills}
            desc="Bringing strong entrepreneurial vision and strategic leadership, Praveen Sinha has played a key role in shaping Aquabrim’s growth, innovation roadmap, and long-term expansion in intelligent infrastructure solutions."
            image="/assets/images/team/praveen.png"
            imageSide="left"
          />
          <FounderCard
            name="Rakesh Kumar"
            role="Co-Founder & Technology Head"
            pills={rakeshPills}
            desc="With deep expertise in wireless technologies and industrial automation, Rakesh Kumar leads the technology and product innovation initiatives at Aquabrim, driving the development of reliable and future-ready automation systems."
            image="/assets/images/team/rakesh.png"
            imageSide="right"
            className="mt-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Founders;
