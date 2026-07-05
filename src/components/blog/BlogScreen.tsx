'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import images
import blog_img_1 from "@/assets/images/resource/blog-inner1.jpg";
import blog_img_2 from "@/assets/images/resource/blog-inner2.jpg";
import blog_img_3 from "@/assets/images/resource/blog-inner3.jpg";
import blog_thumb_1 from "@/assets/images/resource/blog1.png";
import blog_thumb_2 from "@/assets/images/resource/blog2.png";
import blog_thumb_3 from "@/assets/images/resource/blog3.png";

const categories = [
  { id: 'all', name: 'All Posts', count: 24 },
  { id: 'automation', name: 'Water Automation', count: 8 },
  { id: 'conservation', name: 'Water Conservation', count: 6 },
  { id: 'updates', name: 'Product Updates', count: 5 },
  { id: 'insights', name: 'Industry Insights', count: 3 },
  { id: 'guides', name: 'Tips & Guides', count: 2 },
];

const blogPosts = [
  {
    id: 1,
    category: 'Water Automation',
    catId: 'automation',
    date: '10 May 2025',
    readTime: '5 min read',
    title: 'Why Smart Water Level Controllers Are Essential for Every Home',
    description: 'Save water, prevent overflow, and ensure uninterrupted supply with smart automation.',
    img: blog_img_1,
  },
  {
    id: 2,
    category: 'Product Updates',
    catId: 'updates',
    date: '06 May 2025',
    readTime: '4 min read',
    title: 'Introducing iBot 4G – Smarter, Faster & More Reliable',
    description: 'Our latest innovation comes with 4G connectivity, real-time alerts, and advanced safety.',
    img: blog_img_2,
  },
  {
    id: 3,
    category: 'Water Conservation',
    catId: 'conservation',
    date: '02 May 2025',
    readTime: '6 min read',
    title: '10 Simple Ways to Conserve Water and Reduce Waste',
    description: 'Small changes can make a big difference. Start your journey towards a water-secure future.',
    img: blog_img_3,
  },
  {
    id: 4,
    category: 'Industry Insights',
    catId: 'insights',
    date: '28 Apr 2025',
    readTime: '5 min read',
    title: 'Water Management Solutions for Apartments & Societies',
    description: 'How automation ensures fair usage, reduces wastage, and simplifies water management.',
    img: blog_thumb_1,
  },
  {
    id: 5,
    category: 'Water Automation',
    catId: 'automation',
    date: '24 Apr 2025',
    readTime: '4 min read',
    title: 'How Industrial Units Benefit from Smart Water Automation',
    description: 'Increase efficiency, reduce downtime, and optimize water usage with intelligent systems.',
    img: blog_thumb_2,
  },
  {
    id: 6,
    category: 'Tips & Guides',
    catId: 'guides',
    date: '20 Apr 2025',
    readTime: '3 min read',
    title: 'Dry Run Protection: Why It Can Save Your Motor & Money',
    description: 'Understand how dry run protection works and why it is crucial for your pumps and motors.',
    img: blog_thumb_3,
  },
];

const widgetBox = "rounded-2xl border border-solid border-[#e9ecef] bg-white p-4 shadow-sm";

const FeaturedWidget = () => (
  <div>
    <h6 className="mb-4 font-bold">Featured Post</h6>
    <div>
      <div className="mb-3 h-[140px] overflow-hidden rounded-lg">
        <Image src={blog_img_2} alt="Featured" className="h-full w-full object-cover" />
      </div>
      <span className="mb-2 inline-block rounded bg-[#006CD0]/10 px-2 py-1 text-[10px] font-semibold text-[#006CD0]">Product Updates</span>
      <div className="mb-2 text-[0.875rem] text-[#6c757d]">15 Apr 2025 • 4 min read</div>
      <h6 className="mb-2 text-[15px] font-bold leading-[1.4]">Understanding the Aquabrim Matrix Panel</h6>
      <p className="mb-3 text-[0.875rem] text-[#6c757d]">A complete overview of features, benefits, and real-world applications.</p>
      <Link href="/blog-details" className="text-[0.875rem] font-bold text-[#006CD0] no-underline">
        Read More <i className="bi bi-arrow-right"></i>
      </Link>
    </div>
  </div>
);

const StayUpdatedWidget = () => (
  <div className="text-center">
    <div className="mx-auto mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#006CD0]/10">
      <i className="bi bi-envelope-fill text-[1.5rem] text-[#006CD0]"></i>
    </div>
    <h6 className="mb-2 font-bold">Stay Updated</h6>
    <p className="mb-4 text-[0.875rem] text-[#6c757d]">Subscribe to our newsletter and get the latest insights and updates.</p>
    <div className="mb-3">
      <input type="email" className="w-full rounded-lg border border-solid border-[#dee2e6] px-3 py-2 text-center outline-none focus:border-[#006CD0]" placeholder="Enter your email" />
    </div>
    <button className="w-full rounded-lg bg-[#006CD0] py-2.5 font-bold text-white transition-colors hover:bg-[#005bb0]">Subscribe</button>
  </div>
);

const BlogScreen = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.catId === activeCategory);

  const pages = ['prev', '1', '2', '3', '4', '...', '8', 'next'];

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="container-app">
        <div className="mb-6 max-w-[620px]">
          <h1 className="text-[1.4rem] font-extrabold leading-[1.2] tracking-[-0.5px] text-[#0f172a] sm:text-[1.7rem] lg:text-[1.95rem]">
            Water Automation Blog
            <span className="mt-0.5 block bg-gradient-to-r from-[#006CD0] to-[#00a4ff] bg-clip-text text-transparent">
              Expert Guides, Tips &amp; Industry Insights
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post) => (
                <div key={post.id} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_1rem_3rem_rgba(0,0,0,0.1)]">
                  <div className="relative h-[220px]">
                    <Image
                      src={post.img}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-0 left-0 m-3 rounded bg-[#006CD0] px-3 py-2 text-[12px] font-semibold text-white">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-grow flex-col p-4">
                    <div className="mb-2 text-[0.875rem] text-[#6c757d]">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h5 className="mb-3 text-[18px] font-bold leading-[1.4]">
                      <Link href="/blog-details" className="text-[#212529] no-underline transition-colors hover:text-[#006CD0]">
                        {post.title}
                      </Link>
                    </h5>
                    <p className="mb-4 text-[0.875rem] leading-[1.6] text-[#6c757d]">
                      {post.description}
                    </p>
                    <Link href="/blog-details" className="mt-auto flex items-center gap-2 font-bold text-[#006CD0] no-underline">
                      Read More <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <ul className="flex list-none gap-2 p-0">
                {pages.map((p, i) => {
                  if (p === 'prev' || p === 'next') {
                    return (
                      <li key={i}>
                        <a href="#" className={`flex h-10 w-10 items-center justify-center rounded-lg bg-[#f8f9fa] text-[#6c757d] transition-all ${p === 'prev' ? 'pointer-events-none opacity-60' : 'hover:bg-[#006CD0] hover:text-white'}`}>
                          <i className={`bi ${p === 'prev' ? 'bi-chevron-left' : 'bi-chevron-right'}`}></i>
                        </a>
                      </li>
                    );
                  }
                  if (p === '...') {
                    return <li key={i}><span className="flex h-10 w-10 items-center justify-center bg-transparent text-[#212529]">...</span></li>;
                  }
                  const active = p === '1';
                  return (
                    <li key={i}>
                      <a href="#" className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all ${active ? 'bg-[#006CD0] text-white' : 'bg-[#f8f9fa] text-[#212529] hover:bg-[#006CD0] hover:text-white'}`}>{p}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-[100px]">
              {/* Search */}
              <div className={`mb-4 lg:mb-8 ${widgetBox}`}>
                <h6 className="mb-3 font-bold">Search Blogs</h6>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border border-solid border-[#dee2e6] py-2 pl-3 pr-10 outline-none focus:border-[#006CD0]"
                    placeholder="Search for blogs..."
                  />
                  <i className="bi bi-search absolute right-3 top-1/2 -translate-y-1/2 text-[#6c757d]"></i>
                </div>
              </div>

              {/* Categories */}
              <div className={`mb-4 lg:mb-8 ${widgetBox}`}>
                <h6 className="mb-4 font-bold">Categories</h6>
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
              <div className={`mb-4 lg:mb-8 ${widgetBox}`}>
                <FeaturedWidget />
              </div>

              {/* Stay Updated */}
              <div className={widgetBox}>
                <StayUpdatedWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogScreen;
