'use client'
import accordion_data from '@/data/AccordionData';
import React, { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-3">
      {accordion_data.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-xl border-2 border-solid transition-all duration-300 ${
              isOpen
                ? 'border-[#006CD0] bg-white shadow-[0_6px_20px_rgba(0,108,208,0.08)]'
                : 'border-[#006CD0]/20 bg-[#f8fafc] hover:border-[#006CD0]/40'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className={`font-semibold transition-colors ${isOpen ? 'text-primary' : 'text-gray-900'}`}>{item.question}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-180 bg-primary text-white' : 'bg-primary/10 text-primary'
                }`}
              >
                <i className="bi bi-chevron-down text-sm"></i>
              </span>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="mb-0 px-5 pb-4 text-[0.95rem] leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
