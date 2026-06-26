'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import images
import prod_controller from "@/assets/images/resource/prod_controller.webp";
import prod_starter from "@/assets/images/resource/prod_starter.webp";
import prod_tank_monitor from "@/assets/images/resource/prod_tank_monitor.webp";
import prod_valve from "@/assets/images/resource/prod_valve.webp";
import accessories_img from "@/assets/images/resource/service-details3.png";

// Import JSON data
import productsData from "@/data/products.json";
import { productSlug } from "@/utils/slug";

const imageMap: Record<string, any> = {
  prod_controller,
  prod_starter,
  prod_tank_monitor,
  prod_valve,
  accessories_img
};

export const products = productsData.map((item) => {
  const customImages = (item as any).images;
  const images = customImages && customImages.length > 0
    ? customImages
    : [imageMap[item.imgKey] || accessories_img];
  return {
    ...item,
    slug: productSlug(item as any),
    img: images[0],
    images: images
  };
});

const ProductList = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'domestic' | 'industrial'>('all');

  const domesticCount = products.filter(p => p.category === 'domestic').length;
  const industrialCount = products.filter(p => p.category === 'industrial').length;
  const totalCount = products.length;

  const handleReset = () => {
    setActiveFilter('all');
  };

  const filters: { key: 'all' | 'domestic' | 'industrial'; icon: string; label: string; count: number }[] = [
    { key: 'all', icon: 'bi-grid-fill', label: 'All', count: totalCount },
    { key: 'domestic', icon: 'bi-house-fill', label: 'Domestic', count: domesticCount },
    { key: 'industrial', icon: 'bi-building', label: 'Industrial', count: industrialCount },
  ];

  const filteredProducts = products.filter(product => {
    if (activeFilter === 'domestic' && product.category !== 'domestic') return false;
    if (activeFilter === 'industrial' && product.category !== 'industrial') return false;
    return true;
  });

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-[#f8fafc] to-[#eef2f6] pb-[60px] pt-6 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[300px] before:bg-gradient-to-b before:from-[#006CD0]/[0.03] before:to-transparent before:content-[''] sm:pt-10 lg:pb-[120px] lg:pt-14">
      <div className="container-app relative">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-6">

          {/* Sidebar Left: Categories */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="md:sticky md:top-[130px] md:z-10">
              <p className="mb-3 hidden text-[0.72rem] font-bold uppercase tracking-[1.5px] text-[#94a3b8] md:block">Categories</p>
              <div className="flex flex-col gap-2.5 max-md:-mx-3 max-md:flex-row max-md:flex-nowrap max-md:gap-2 max-md:overflow-x-auto max-md:px-3 max-md:pb-1 max-md:[-ms-overflow-style:none] max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden">
                {filters.map((f) => {
                  const active = activeFilter === f.key;
                  return (
                    <button
                      key={f.key}
                      onClick={() => setActiveFilter(f.key)}
                      className={`group flex h-[46px] w-full min-w-0 items-center justify-between gap-2 rounded-xl border border-solid px-3.5 text-left text-[0.9rem] font-semibold transition-all duration-300 ease-out max-md:h-auto max-md:w-auto max-md:shrink-0 max-md:justify-center max-md:rounded-full max-md:px-4 max-md:py-2.5 max-md:text-[0.82rem] ${
                        active
                          ? 'border-transparent bg-gradient-to-br from-[#006CD0] to-[#004c99] text-white'
                          : 'border-[#006CD0]/15 bg-white text-[#475569] hover:border-[#006CD0]/30 hover:text-[#006CD0]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <i className={`bi ${f.icon} shrink-0 text-[0.95rem] ${active ? 'text-white' : 'text-[#94a3b8] group-hover:text-[#006CD0]'}`}></i>
                        <span className="whitespace-nowrap">{f.label}</span>
                      </span>
                      <span className={`shrink-0 rounded-full px-[7px] py-0.5 text-[0.72rem] font-bold ${active ? 'bg-white/20 text-white' : 'bg-black/[0.04] text-[#64748b]'}`}>
                        {f.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Grid Right: Products */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="mb-3">
              <p className="text-[0.82rem] font-medium text-[#94a3b8]">
                Showing {filteredProducts.length} of {totalCount} products
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {filteredProducts.map((product) => {
                const isDomestic = product.category === 'domestic';
                const isIndustrial = product.category === 'industrial';
                const categoryLabel = isDomestic ? 'Domestic' : isIndustrial ? 'Industrial' : 'Accessory';
                const categoryIcon = isDomestic ? 'bi-house-fill' : isIndustrial ? 'bi-building' : 'bi-cpu-fill';
                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="group block h-full no-underline"
                  >
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[20px] border-2 border-solid border-[#dbe7f5] bg-white shadow-[0_4px_22px_-10px_rgba(15,23,42,0.18)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#006CD0] hover:shadow-[0_26px_50px_-18px_rgba(0,108,208,0.3)]">
                      {/* Image */}
                      <div className="relative flex aspect-[1024/1536] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_30%,#ffffff_0%,#eef4fb_100%)] max-sm:aspect-[4/5]">
                        <div className={`absolute left-3.5 top-3.5 z-[2] inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.66rem] font-extrabold uppercase tracking-[0.6px] shadow-[0_6px_16px_-6px_rgba(15,23,42,0.25)] ring-1 ring-inset backdrop-blur-[10px] ${
                          isDomestic
                            ? 'bg-[#006CD0]/[0.12] text-[#006CD0] ring-[#006CD0]/15'
                            : isIndustrial
                              ? 'bg-[#0f172a]/[0.08] text-[#0f172a] ring-[#0f172a]/10'
                              : 'bg-[#0ea5a4]/[0.12] text-[#0d9488] ring-[#0d9488]/15'
                        }`}>
                          <i className={`bi ${categoryIcon}`}></i>
                          {categoryLabel}
                        </div>
                        <div className="flex h-full w-full items-center justify-center transition-transform duration-[600ms] ease-out group-hover:scale-[1.07]">
                          <Image
                            src={product.img}
                            alt={product.title}
                            width={1024}
                            height={1536}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        {/* Subtle gradient veil for depth */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/70 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-grow flex-col border-t border-solid border-[#006CD0]/[0.06] bg-white p-5 max-sm:p-4">
                        <h5 className="mb-1.5 text-[1.2rem] font-extrabold leading-snug tracking-[-0.3px] text-[#0f172a] transition-colors duration-300 group-hover:text-[#006CD0]">{product.title}</h5>
                        {(product as any).subtitle && (
                          <h6 className="mb-2 text-[0.92rem] font-semibold tracking-[-0.2px] text-[#006CD0]">{(product as any).subtitle}</h6>
                        )}
                        <p className="mb-4 line-clamp-3 text-[0.875rem] leading-[1.55] text-[#64748b]">{product.description}</p>
                        <div className="mt-auto flex items-center gap-1.5 text-[0.82rem] font-bold text-[#006CD0]">
                          <span>View Details</span>
                          <i className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1.5"></i>
                        </div>
                      </div>

                      {/* Accent line */}
                      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#006CD0] to-[#00a4ff] transition-[width] duration-[450ms] ease-out group-hover:w-full"></div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="rounded-lg border border-solid border-[#dee2e6] bg-white p-4 py-12 text-center">
                <div className="mx-auto mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#006CD0]/[0.06] text-[1.4rem] text-[#006CD0]">
                  <i className="bi bi-search"></i>
                </div>
                <h4 className="mb-2 font-bold">No Match Found</h4>
                <p className="mb-4 text-[#6c757d]">
                  Try clearing your search query or selecting a different category.
                </p>
                <button onClick={handleReset} className="rounded-lg bg-gradient-to-br from-[#006CD0] to-[#0052a3] px-4 py-2 font-semibold text-white shadow-[0_4px_10px_rgba(0,108,208,0.1)]">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
