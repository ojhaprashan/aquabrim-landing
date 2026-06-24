'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import post_thumb_1 from "@/assets/images/resource/recent1.png";
import post_thumb_2 from "@/assets/images/resource/recent2.png";
import post_thumb_3 from "@/assets/images/resource/recent3.png";
import Link from 'next/link';

interface DataType {
  categories: {
    title: string;
    items: string;
  }[];
  latest_posts: {
    img: StaticImageData;
    title: string;
    date: string;
  }[];
  tags: string[];
}

const blog_sidebar_data: DataType = {
  categories: [
    { title: "Apartment Housing", items: "09" },
    { title: "Installation", items: "10" },
    { title: "Water Controllers", items: "45" },
    { title: "Motorized Valves", items: "19" },
    { title: "Sensors", items: "10" },
    { title: "Industrial Automation", items: "34" },
    { title: "Water Management", items: "76" },
  ],
  latest_posts: [
    { img: post_thumb_1, title: "Reducing Daily Water Waste", date: "July 24" },
    { img: post_thumb_2, title: "How Controllers Save Time", date: "July 24" },
    { img: post_thumb_3, title: "Top 5 Sensor Integrations", date: "July 24" },
  ],
  tags: ["Water", "Automation", "Controllers", "Industrial", "Sensors", "Society", "Management"]
};

const { categories, latest_posts, tags } = blog_sidebar_data;

const widgetBox = "mb-6 rounded-2xl border border-solid border-[#e9ecef] bg-white p-5 shadow-sm";
const widgetTitle = "mb-4 inline-block border-b-2 border-solid border-[#006CD0] pb-1 text-[1.1rem] font-bold text-[#0f172a]";

const BlogSidebar = () => {
  return (
    <div className="lg:col-span-4">
      {/* Search */}
      <div className="relative mb-6">
        <input
          type="text"
          name="s"
          placeholder="Search Here"
          title="Search for:"
          className="w-full rounded-lg border border-solid border-[#dee2e6] py-3 pl-4 pr-12 outline-none focus:border-[#006CD0]"
        />
        <button type="submit" className="absolute right-0 top-0 flex h-full w-12 items-center justify-center rounded-r-lg bg-[#006CD0] text-white">
          <i className="bi bi-search"></i>
        </button>
      </div>

      {/* Categories */}
      <div className={widgetBox}>
        <h4 className={widgetTitle}>Categories</h4>
        <ul className="m-0 list-none p-0">
          {categories.map((item, i) => (
            <li key={i}>
              <Link
                href="/service"
                className="flex items-center justify-between border-b border-solid border-[#f1f5f9] py-2.5 text-[0.9rem] text-[#475569] no-underline transition-colors last:border-0 hover:text-[#006CD0]"
              >
                {item.title} <span className="text-[#94a3b8]">({item.items})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Latest Post */}
      <div className={widgetBox}>
        <h4 className={widgetTitle}>Latest Post</h4>
        {latest_posts.map((item, i) => (
          <div className="mb-4 flex gap-3 last:mb-0" key={i}>
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
              <Image src={item.img} alt="image-title" className="h-full w-full object-cover" />
            </div>
            <div>
              <a href="#" className="text-[0.88rem] font-semibold text-[#1e293b] no-underline transition-colors hover:text-[#006CD0]">{item.title}</a>
              <span className="mt-1 flex items-center gap-1 text-[0.78rem] text-[#94a3b8]">
                <i className="bi bi-calendar-event"></i>
                {new Date().toLocaleString('default', { month: 'long' })} {new Date().getDate()} {new Date().getFullYear()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Tag Cloud */}
      <div className={widgetBox}>
        <h4 className={widgetTitle}>Tag Cloud</h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((item, i) => (
            <Link
              href="#"
              key={i}
              className="rounded-md border border-solid border-[#e2e8f0] bg-[#f8fafc] px-3 py-1.5 text-[0.8rem] text-[#475569] no-underline transition-colors hover:border-[#006CD0] hover:bg-[#006CD0] hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className={widgetBox}>
        <h4 className={widgetTitle}>Newsletter</h4>
        <form onSubmit={e => e.preventDefault()} className="relative">
          <input
            type="text"
            placeholder="Newsletter"
            className="w-full rounded-lg border border-solid border-[#dee2e6] py-3 pl-4 pr-12 outline-none focus:border-[#006CD0]"
          />
          <button type="submit" className="absolute right-0 top-0 flex h-full w-12 items-center justify-center rounded-r-lg bg-[#006CD0] text-white">
            <i className="bi bi-envelope"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogSidebar;
