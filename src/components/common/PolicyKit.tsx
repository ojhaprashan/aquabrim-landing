import React from 'react';
import TrackedCallLink from './TrackedCallLink';

type NavItem = { href: string; label: string };

export const PolicyArea = ({
  lastUpdated,
  nav,
  children,
}: {
  lastUpdated: string;
  nav: NavItem[];
  children: React.ReactNode;
}) => (
  <section className="bg-white py-12">
    <div className="container-app">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Sidebar */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-solid border-[#e9ecef] bg-white p-4 shadow-sm lg:sticky lg:top-[100px]">
            <h6 className="mb-4 text-[0.8rem] font-bold uppercase tracking-[1px] text-[#6c757d]">On This Page</h6>
            <ul className="m-0 list-none p-0">
              {nav.map((n, i) => (
                <li key={i} className="mb-2 last:mb-0">
                  <a
                    href={n.href}
                    className="block rounded-lg p-3 font-bold text-[#212529] no-underline transition-all duration-200 hover:bg-[#f8fafc] hover:pl-6 hover:text-[#006CD0]"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-9 lg:pl-5">
          <p className="mb-4 text-[0.875rem] font-medium text-[#6c757d]">Last Updated: {lastUpdated}</p>
          {children}
        </div>
      </div>
    </div>
  </section>
);

export const PolicySection = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div id={id} className="mb-12 scroll-mt-28 pt-2">
    <h3 className="mb-3 text-[28px] font-bold text-[#1c1632]">{title}</h3>
    {children}
  </div>
);

export const PolicyP = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[1.05rem] leading-[1.8] text-[#6c757d] ${className}`}>{children}</p>
);

export const PolicySubheading = ({ children }: { children: React.ReactNode }) => (
  <h5 className="mb-3 mt-4 text-[1.1rem] font-bold text-[#212529]">{children}</h5>
);

export const PolicyList = ({
  items,
  icon = 'bi-circle-fill',
  danger = false,
  warning = false,
  className = '',
}: {
  items: React.ReactNode[];
  icon?: string;
  danger?: boolean;
  warning?: boolean;
  className?: string;
}) => {
  const isDot = icon === 'bi-circle-fill';
  const color = danger ? 'text-[#dc3545]' : warning ? 'text-[#ffc107]' : 'text-[#006CD0]';
  return (
    <ul className={`m-0 mt-3 list-none p-0 pl-3 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="mb-2 flex items-start gap-2 text-[#6c757d]">
          <i
            className={`bi ${icon} shrink-0 ${color} ${
              isDot ? 'mt-[0.6em] text-[6px]' : 'mt-[0.15em] text-[1.1rem]'
            }`}
          ></i>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
};

const ContactCard = ({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) => (
  <div className="rounded-2xl border border-solid border-[#e9ecef] bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#006CD0]/15 hover:shadow-[0_10px_20px_rgba(0,108,208,0.08)]">
    <div className="mx-auto mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#f8f9fa] text-[#006CD0]">
      <i className={`bi ${icon} text-[1.5rem]`}></i>
    </div>
    <h6 className="mb-2 font-bold text-[#1c1632]">{title}</h6>
    {children}
  </div>
);

export const PolicyContact = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
    <ContactCard icon="bi-envelope-fill" title="Email">
      <a href="mailto:save.water@aquabrim.com" className="font-medium text-[#006CD0] no-underline">save.water@aquabrim.com</a>
    </ContactCard>
    <ContactCard icon="bi-telephone-fill" title="Phone">
      <TrackedCallLink href="tel:+919560088791" className="font-medium text-[#212529] no-underline">+91 9560088791</TrackedCallLink>
    </ContactCard>
    <ContactCard icon="bi-geo-alt-fill" title="Address">
      <p className="mb-0 text-[0.875rem] font-medium text-[#6c757d]">Plot No. 35, 1st Floor, Union Bank of India Building, 100 Feet Road, Ghitorni, New Delhi – 110030</p>
    </ContactCard>
  </div>
);
