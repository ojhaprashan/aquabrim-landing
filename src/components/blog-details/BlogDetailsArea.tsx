import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SocialLinks from '../common/SocialLinks';
import FaqSection from '../common/FaqSection';
import ArticleToc, { type TocItem } from './ArticleToc';
import { slugify } from '@/utils/slug';
import type { Blog, ContentBlock } from '@/data/blogs';

const renderBlock = (block: ContentBlock, i: number) => {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={i} id={slugify(block.text)} className="mb-4 mt-12 scroll-mt-28 text-[1.5rem] font-bold leading-snug text-[#0f172a] sm:text-[1.85rem]">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={i} className="mb-3 mt-8 text-[1.2rem] font-bold text-[#0f172a] sm:text-[1.4rem]">
          {block.text}
        </h3>
      );
    case 'p':
      return (
        <p key={i} className="mb-5 text-[1.05rem] leading-[1.85] text-[#334155]">
          {block.text}
        </p>
      );
    case 'list':
      return (
        <ul key={i} className="mb-6 list-none space-y-3 p-0">
          {block.items.map((item, li) => (
            <li key={li} className="flex items-start gap-3 text-[1.05rem] leading-[1.7] text-[#334155]">
              <i className="bi bi-check-circle-fill mt-1 shrink-0 text-[#006CD0]"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'callout':
      return (
        <div key={i} className="my-8 rounded-2xl border border-solid border-[#bfdbfe] bg-gradient-to-br from-[#eff6ff] to-[#f0f9ff] p-6 shadow-[0_4px_20px_rgba(0,108,208,0.06)]">
          {block.title && (
            <div className="mb-2 flex items-center gap-2 text-[0.95rem] font-bold uppercase tracking-wide text-[#006CD0]">
              <i className="bi bi-lightbulb-fill"></i> {block.title}
            </div>
          )}
          <p className="m-0 text-[1.05rem] leading-[1.75] text-[#1e3a5f]">{block.text}</p>
        </div>
      );
    case 'table':
      return (
        <div key={i} className="my-8 overflow-x-auto rounded-2xl border border-solid border-[#e2e8f0] shadow-sm">
          <table className="w-full border-collapse text-left text-[0.98rem]">
            <thead>
              <tr className="bg-[#006CD0] text-white">
                {block.headers.map((h, hi) => (
                  <th key={hi} className="px-5 py-4 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 ? 'bg-[#f8fafc]' : 'bg-white'}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`border-t border-solid border-[#e2e8f0] px-5 py-4 align-top leading-[1.65] text-[#475569] ${ci === 0 ? 'font-bold text-[#0f172a] sm:whitespace-nowrap' : ''}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
};

const BlogDetailsArea = ({ blog }: { blog: Blog }) => {
  // Build the table-of-contents from the article's H2 sections.
  const tocItems: TocItem[] = blog.content
    .filter((b): b is Extract<ContentBlock, { type: 'h2' }> => b.type === 'h2')
    .map((b) => ({ id: slugify(b.text), text: b.text }));

  return (
    <article className="bg-white pb-16">
      {/* Hero header */}
      <header className="border-b border-solid border-[#eef1f4] bg-[#f8fafc] py-12 lg:py-16">
        <div className="mx-auto max-w-[820px] px-4 text-center">
          <Link
            href="/blogs"
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#006CD0]/10 px-4 py-1.5 text-[13px] font-semibold text-[#006CD0] no-underline transition-colors hover:bg-[#006CD0] hover:text-white"
          >
            {blog.category}
          </Link>

          <h1 className="mx-auto mb-5 max-w-[760px] text-[1.75rem] font-extrabold leading-tight text-[#0f172a] sm:text-[2.3rem] lg:text-[2.6rem]">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.9rem] text-[#64748b]">
            <span className="flex items-center gap-2"><i className="bi bi-person-fill text-[#006CD0]"></i>{blog.author}</span>
            <span className="flex items-center gap-2"><i className="bi bi-calendar-month text-[#006CD0]"></i>{blog.date}</span>
            <span className="flex items-center gap-2"><i className="bi bi-clock text-[#006CD0]"></i>{blog.readTime}</span>
          </div>
        </div>
      </header>

      {/* Feature image */}
      <div className="mx-auto max-w-[980px] px-4">
        <div className="-mt-8 mb-12 overflow-hidden rounded-2xl shadow-[0_20px_50px_-24px_rgba(15,23,42,0.35)] lg:-mt-10">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            width={1200}
            height={800}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>

      {/* Content grid: sticky TOC (desktop) + article */}
      <div className="mx-auto flex max-w-[1120px] justify-center gap-10 px-4 xl:gap-16">
        {/* TOC — desktop only */}
        <aside className="hidden w-[240px] shrink-0 lg:block">
          <div className="sticky top-[110px]">
            <ArticleToc items={tocItems} />
          </div>
        </aside>

        {/* Article column */}
        <div className="min-w-0 flex-1 lg:max-w-[740px]">
          <div className="blog-article">
            {blog.content.map(renderBlock)}
          </div>

          {/* Inline CTA */}
          <div className="my-12 overflow-hidden rounded-3xl bg-gradient-to-br from-[#006CD0] to-[#004c99] px-6 py-10 text-center shadow-[0_20px_50px_-20px_rgba(0,108,208,0.5)] sm:px-12">
            <h3 className="mb-3 text-[1.5rem] font-bold text-white sm:text-[1.75rem]">Ready to stop manually managing your tank?</h3>
            <p className="mx-auto mb-6 max-w-[560px] text-[1rem] leading-[1.7] text-white/85">
              Aquabrim makes smart water level controllers for every home setup, municipal supply, borewell, or multiple tanks. Trusted by 50,000+ homes across India.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/products" className="rounded-xl bg-white px-6 py-3 text-[15px] font-bold text-[#006CD0] no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg">
                Explore Products
              </Link>
              <Link href="/contact-us" className="rounded-xl border border-solid border-white/60 px-6 py-3 text-[15px] font-bold text-white no-underline transition-all hover:bg-white/10">
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <FaqSection faqs={blog.faqs} className="my-12" />

          {/* Share */}
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-solid border-[#eef1f4] bg-[#f8fafc] px-6 py-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-3">
              <h6 className="m-0 font-bold text-[#0f172a]">Share this article</h6>
              <SocialLinks />
            </div>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-xl bg-[#006CD0] px-5 py-2.5 text-[14px] font-bold text-white no-underline transition-all hover:-translate-y-0.5"
            >
              <i className="bi bi-arrow-left"></i> Back to all articles
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetailsArea;
