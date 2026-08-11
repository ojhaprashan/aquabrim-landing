'use client'
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { blogCategories, type Blog } from '@/data/blogs';
import type { BlogContent } from '@/services/blog/blog.types';

const widgetBox = "rounded-2xl border border-solid border-[#e9ecef] bg-white p-4 shadow-sm";

// --- Defaults derived from the built-in blog data source ---
// Kept identical to the previous hardcoded values so the page renders the same
// until the CMS supplies content.
const DEFAULTS = {
  hero: {
    headingLine1: 'Water Automation Blog',
    headingLine2: 'Expert Guides, Tips & Industry Insights',
  },
  newsletter: {
    heading: 'Stay Updated',
    body: 'Subscribe to our newsletter and get the latest insights and updates.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
  },
  search: {
    heading: 'Search Blogs',
    placeholder: 'Search for blogs...',
  },
  categoriesHeading: 'Categories',
  featuredWidgetHeading: 'Featured Post',
};

// Posts arrive already merged (src/data/blogs.ts + CMS overrides) from the page,
// so the listing and the article routes can never disagree about which posts exist.
const BlogScreen = ({ posts, data }: { posts: Blog[]; data?: BlogContent }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

  // --- Merge CMS content over defaults ---
  const heroLine1 = data?.hero?.headingLine1 || DEFAULTS.hero.headingLine1;
  const heroLine2 = data?.hero?.headingLine2 || DEFAULTS.hero.headingLine2;

  // Categories and their counts are derived from the posts themselves — there is
  // nothing to keep in sync by hand, and a count can never go stale.
  const categories = useMemo(() => {
    const used = blogCategories
      .map((c) => ({ ...c, count: posts.filter((p) => p.categoryId === c.id).length }))
      .filter((c) => c.count > 0);
    return [{ id: 'all', name: 'All Posts', count: posts.length }, ...used];
  }, [posts]);

  const newsletter = {
    heading: data?.newsletter?.heading || DEFAULTS.newsletter.heading,
    body: data?.newsletter?.body || DEFAULTS.newsletter.body,
    placeholder: data?.newsletter?.placeholder || DEFAULTS.newsletter.placeholder,
    buttonText: data?.newsletter?.buttonText || DEFAULTS.newsletter.buttonText,
  };

  // The CMS picks WHICH post to feature by slug — its text and image always come
  // from that post, so the widget can never drift out of sync with the article.
  const featuredPost =
    posts.find((p) => p.slug === data?.featured?.postSlug?.trim()) || posts[posts.length - 1];
  const featured = featuredPost && {
    widgetHeading: data?.featured?.widgetHeading || DEFAULTS.featuredWidgetHeading,
    image: featuredPost.image,
    imageAlt: featuredPost.imageAlt,
    category: featuredPost.category,
    date: featuredPost.date,
    readTime: featuredPost.readTime,
    title: featuredPost.title,
    description: featuredPost.excerpt,
    link: `/blogs/${featuredPost.slug}`,
  };

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = activeCategory === 'all' || post.categoryId === activeCategory;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [posts, activeCategory, query]);

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="container-app">
        <div className="mb-6 max-w-[620px]">
          <h1 className="text-[1.4rem] font-extrabold leading-[1.2] tracking-[-0.5px] text-[#0f172a] sm:text-[1.7rem] lg:text-[1.95rem]">
            {heroLine1}
            <span className="mt-0.5 block bg-gradient-to-r from-[#006CD0] to-[#00a4ff] bg-clip-text text-transparent">
              {heroLine2}
            </span>
          </h1>
        </div>

        {/* Top Category Chips */}
        <div className="mb-12 flex flex-nowrap gap-2 overflow-auto pb-2 md:gap-3 [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-[14px] font-semibold transition-all max-lg:px-4 max-lg:py-1.5 max-lg:text-[13px] ${
                activeCategory === cat.id
                  ? 'bg-[#006CD0] text-white shadow-sm'
                  : 'border border-solid border-[#dee2e6] bg-white text-[#212529] hover:border-[#006CD0] hover:text-[#006CD0]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main Content: Blog Grid */}
          <div className="lg:col-span-9">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {filteredPosts.map((post) => {
                  const href = post.slug ? `/blogs/${post.slug}` : '/blogs';
                  return (
                    <div key={post.id} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-solid border-[#eef1f4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_1rem_3rem_rgba(0,0,0,0.1)]">
                      <Link href={href} className="relative block h-[220px] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute bottom-0 left-0 m-3 rounded bg-[#006CD0] px-3 py-2 text-[12px] font-semibold text-white">
                          {post.category}
                        </span>
                      </Link>
                      <div className="flex flex-grow flex-col p-5">
                        <div className="mb-2 text-[0.875rem] text-[#6c757d]">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h5 className="mb-3 text-[18px] font-bold leading-[1.4]">
                          <Link href={href} className="text-[#212529] no-underline transition-colors hover:text-[#006CD0]">
                            {post.title}
                          </Link>
                        </h5>
                        <p className="mb-4 text-[0.875rem] leading-[1.6] text-[#6c757d]">
                          {post.excerpt}
                        </p>
                        <Link href={href} className="mt-auto flex items-center gap-2 font-bold text-[#006CD0] no-underline">
                          Read More <i className="bi bi-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#dee2e6] bg-[#f8fafc] p-12 text-center">
                <i className="bi bi-journal-text mb-3 block text-[2rem] text-[#006CD0]"></i>
                <p className="m-0 text-[#6c757d]">No articles found for this category yet. Check back soon!</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-[100px]">
              {/* Search */}
              <div className={`mb-4 lg:mb-8 ${widgetBox}`}>
                <h6 className="mb-3 font-bold">{DEFAULTS.search.heading}</h6>
                <div className="relative">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full rounded-lg border border-solid border-[#dee2e6] py-2 pl-3 pr-10 outline-none focus:border-[#006CD0]"
                    placeholder={DEFAULTS.search.placeholder}
                  />
                  <i className="bi bi-search absolute right-3 top-1/2 -translate-y-1/2 text-[#6c757d]"></i>
                </div>
              </div>

              {/* Categories */}
              <div className={`mb-4 lg:mb-8 ${widgetBox}`}>
                <h6 className="mb-4 font-bold">{DEFAULTS.categoriesHeading}</h6>
                <div>
                  {categories.map((cat) => (
                    <div key={cat.id} className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <i className={`bi ${cat.id === activeCategory ? 'bi-folder-fill text-[#006CD0]' : 'bi-folder text-[#6c757d]'}`}></i>
                        <span
                          className={`cursor-pointer text-[0.875rem] font-semibold ${cat.id === activeCategory ? 'text-[#006CD0]' : 'text-[#212529]'}`}
                          onClick={() => setActiveCategory(cat.id)}
                        >
                          {cat.name}
                        </span>
                      </div>
                      <span className="rounded-full bg-[#f8f9fa] px-2 py-0.5 text-[10px] text-[#6c757d]">({cat.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Post */}
              {featured && (
              <div className={`mb-4 lg:mb-8 ${widgetBox}`}>
                <h6 className="mb-4 font-bold">{featured.widgetHeading}</h6>
                <div>
                  <Link href={featured.link} className="mb-3 block h-[140px] overflow-hidden rounded-lg">
                    <Image src={featured.image} alt={featured.imageAlt} width={400} height={220} className="h-full w-full object-cover" />
                  </Link>
                  <span className="mb-2 inline-block rounded bg-[#006CD0]/10 px-2 py-1 text-[10px] font-semibold text-[#006CD0]">{featured.category}</span>
                  <div className="mb-2 text-[0.875rem] text-[#6c757d]">{featured.date} • {featured.readTime}</div>
                  <h6 className="mb-2 text-[15px] font-bold leading-[1.4]">{featured.title}</h6>
                  <p className="mb-3 text-[0.875rem] text-[#6c757d]">{featured.description}</p>
                  <Link href={featured.link} className="text-[0.875rem] font-bold text-[#006CD0] no-underline">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
              )}

              {/* Stay Updated */}
              <div className={widgetBox}>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#006CD0]/10">
                    <i className="bi bi-envelope-fill text-[1.5rem] text-[#006CD0]"></i>
                  </div>
                  <h6 className="mb-2 font-bold">{newsletter.heading}</h6>
                  <p className="mb-4 text-[0.875rem] text-[#6c757d]">{newsletter.body}</p>
                  <div className="mb-3">
                    <input type="email" className="w-full rounded-lg border border-solid border-[#dee2e6] px-3 py-2 text-center outline-none focus:border-[#006CD0]" placeholder={newsletter.placeholder} />
                  </div>
                  <button className="w-full rounded-lg bg-[#006CD0] py-2.5 font-bold text-white transition-colors hover:bg-[#005bb0]">{newsletter.buttonText}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogScreen;
