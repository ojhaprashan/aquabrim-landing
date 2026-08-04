'use client';
import React, { useEffect, useState } from 'react';

export interface TocItem {
  id: string;
  text: string;
}

// Sticky "On this page" navigation shown on desktop. Highlights the section
// currently in view using an IntersectionObserver scroll-spy.
const ArticleToc = ({ items }: { items: TocItem[] }) => {
  const [active, setActive] = useState<string>(items[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-100px 0px -70% 0px', threshold: 0 }
    );

    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents">
      <p className="mb-4 flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[1.5px] text-[#94a3b8]">
        <i className="bi bi-list-ul text-[#006CD0]"></i> On this page
      </p>
      <ul className="m-0 list-none space-y-1 border-l-2 border-solid border-[#e2e8f0] p-0">
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={`-ml-0.5 block border-l-2 border-solid py-1.5 pl-4 text-[0.9rem] leading-snug no-underline transition-all ${
                  isActive
                    ? 'border-[#006CD0] font-semibold text-[#006CD0]'
                    : 'border-transparent text-[#64748b] hover:text-[#0f172a]'
                }`}
              >
                {it.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ArticleToc;
