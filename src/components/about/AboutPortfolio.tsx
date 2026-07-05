'use client';
import React from 'react';

const EXPERTISE = [
  {
    title: 'Smart Water Automation',
    desc: 'Intelligent automation systems designed for efficient water monitoring and control.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.122a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.314.5.5 0 1 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
      </svg>
    ),
  },
  {
    title: 'Industrial Monitoring Solutions',
    desc: 'Advanced sensing, flow management, and automation technologies for industrial infrastructure.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 6a1 1 0 0 1 1-1h3.5v1H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3.5v1H1a1 1 0 0 1-1-1V6zm11.5-1H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.5v-1H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3.5v-1z" />
        <path d="M5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" />
        <path d="M7.5 5h1V1.5h-1V5zM6 1.5h4v1H6v-1z" />
      </svg>
    ),
  },
  {
    title: 'System Integration & Services',
    desc: 'End-to-end implementation, integration, and technical support for automation projects.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
      </svg>
    ),
  },
];

const AboutPortfolio = () => {
  return (
    <section className="block w-full overflow-hidden bg-white py-[50px] sm:py-[60px] lg:py-[100px]">
      <div className="container-app">
        {/* Top Row: Image and Core Description */}
        <div className="mb-12 grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Left: Image with premium decorative corners */}
          <div className="mb-2 lg:mb-0">
            <div className="group relative mx-auto max-w-[600px] rounded-2xl p-2 transition-all duration-[400ms] max-lg:mt-5 before:pointer-events-none before:absolute before:-left-2.5 before:-top-2.5 before:z-[1] before:h-[50px] before:w-[50px] before:rounded-tl-2xl before:border-b-0 before:border-r-0 before:border-l-4 before:border-t-4 before:border-solid before:border-[#006CD0] before:content-[''] after:pointer-events-none after:absolute after:-bottom-2.5 after:-right-2.5 after:z-[1] after:h-[50px] after:w-[50px] after:rounded-br-2xl after:border-l-0 after:border-t-0 after:border-b-4 after:border-r-4 after:border-solid after:border-[#006CD0] after:content-[''] sm:before:h-20 sm:before:w-20 sm:after:h-20 sm:after:w-20">
              <img
                src="/assets/about/about.webp"
                alt="India's Leading Water Level Informatory System & Automation Solutions"
                className="block h-auto w-full rounded-2xl border-4 border-solid border-white object-cover shadow-lg transition-transform duration-[400ms] group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:shadow-[0_25px_50px_rgba(0,108,208,0.18)]"
              />
            </div>
          </div>

          {/* Right: Core text description */}
          <div className="text-left">
            <span className="mb-1 inline-block text-[0.95rem] font-bold uppercase tracking-[1.5px] text-[#006CD0]">
              About Aquabrim
            </span>
            <div className="mb-6 mt-1 h-[3px] w-[60px] rounded-[2px] bg-[#006CD0]"></div>

            <h1 className="mb-4 mt-2 text-[1.5rem] font-bold leading-[1.4] tracking-[-0.01em] text-[#1c1632] sm:text-[1.95rem] lg:text-[2.3rem] lg:leading-[1.35]">
              India&rsquo;s Smart Water Automation Company &ndash; Aquabrim Since 2008
            </h1>

            <p className="mb-3 text-[1rem] leading-[1.7] text-[#64748b] sm:text-[1.1rem] sm:leading-[1.8]">
              Aquabrim is built to simplify and modernize the way water is monitored, controlled, and managed across residential, commercial, and industrial infrastructure.
            </p>
            <p className="mb-3 text-[1rem] leading-[1.7] text-[#64748b] sm:text-[1.1rem] sm:leading-[1.8]">
              Founded in 2008, Aquabrim has grown into one of India&rsquo;s trusted water automation companies, delivering intelligent solutions that help reduce water wastage, improve operational efficiency, and enable smarter infrastructure management.
            </p>
            <p className="mb-3 text-[1rem] leading-[1.7] text-[#64748b] sm:text-[1.1rem] sm:leading-[1.8]">
              From wireless water level automation systems to advanced industrial monitoring technologies, we design solutions that combine engineering reliability with smart automation to solve real-world water management challenges.
            </p>
            <p className="mb-0 text-[1rem] leading-[1.7] text-[#64748b] sm:text-[1.1rem] sm:leading-[1.8]">
              With a strong focus on innovation, scalability, and long-term performance, Aquabrim continues to help homes, businesses, industries, and infrastructure projects transition toward smarter and more efficient water management systems.
            </p>
          </div>
        </div>

        {/* Bottom Row: Our Expertise */}
        <div className="mt-12">
          <h2 className="mb-4 mt-[25px] text-center text-[1.15rem] font-bold text-[#006CD0] sm:mt-[35px] sm:text-[1.3rem]">
            Who We Are &amp; What We Build
          </h2>

          <div className="flex flex-col gap-4 lg:flex-row">
            {EXPERTISE.map((item, i) => (
              <div
                key={i}
                className="group/item flex flex-1 flex-col gap-2 rounded-2xl border border-solid border-[#e2e8f0]/60 bg-[#f8fafc] p-4 text-left transition-all duration-300 hover:translate-x-2 hover:border-[#006CD0]/20 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,108,208,0.06)] lg:hover:translate-x-0 lg:hover:-translate-y-2"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-[42px] w-[42px] min-w-[42px] items-center justify-center rounded-full bg-gradient-to-br from-[#006CD0] to-[#004a91] text-white shadow-[0_6px_16px_rgba(0,108,208,0.2)] transition-all duration-300 group-hover/item:rotate-12 group-hover/item:scale-[1.08] sm:h-12 sm:w-12 sm:min-w-12">
                    {item.icon}
                  </div>
                  <span className="text-[1rem] font-bold leading-[1.4] text-[#1e293b] sm:text-[1.15rem]">
                    {item.title}
                  </span>
                </div>
                <p className="mb-0 mt-1 text-[0.9rem] leading-[1.6] text-[#64748b] sm:mt-2 sm:text-[0.96rem]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPortfolio;
