import React from 'react';
import Accordion from './Accordion';

type FaqItem = { question: string; answer: string };

interface FaqSectionProps {
  faqs: FaqItem[];
  eyebrow?: string;
  title?: string;
  className?: string;
}

// Shared FAQ block: an eyebrow + heading + the site-wide Accordion.
// Reused across product details, blog details and any page that needs FAQs.
const FaqSection = ({
  faqs,
  eyebrow = 'FAQ',
  title = 'Frequently Asked Questions',
  className = '',
}: FaqSectionProps) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className={className}>
      <div className="mb-8 text-center">
        <h6 className="mb-2 text-[1rem] font-bold uppercase tracking-[2px] text-[#006CD0]">{eyebrow}</h6>
        <h2 className="text-[2rem] font-bold text-[#0f172a] max-sm:text-[1.6rem]">{title}</h2>
      </div>
      <div className="mx-auto max-w-[820px]">
        <Accordion faqs={faqs} />
      </div>
    </div>
  );
};

export default FaqSection;
