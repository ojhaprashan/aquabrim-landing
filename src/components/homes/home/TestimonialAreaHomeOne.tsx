'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Testimonial = {
  id: number;
  name: string;
  designation: string;
  review: string;
  avatar: string;
  rating: number;
};

// Show only real 5-star Google reviews — no fallback data.
const getLiveReviews = (reviews?: Testimonial[]): Testimonial[] =>
  (reviews || []).filter((r) => r.rating === 5).map((item, idx) => ({ ...item, id: idx + 1 }));

// Longer reviews are clamped with a "Read more" toggle so every card stays
// roughly the same height in the slider.
const REVIEW_CHAR_LIMIT = 230;

const TestimonialCard = ({ item }: { item: Testimonial }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = item.review.length > REVIEW_CHAR_LIMIT;
  const text =
    isLong && !expanded ? `${item.review.slice(0, REVIEW_CHAR_LIMIT).trimEnd()}…` : item.review;

  return (
    <div className="group relative flex h-full w-full flex-col rounded-2xl border border-solid border-[#e9ecef] bg-[#f8fbff] p-4 shadow-sm transition-all duration-300 hover:-translate-y-2.5 hover:border-[#007bff]/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] md:p-8">
      {/* Quote Icon */}
      <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#e6f0ff]">
        <i className="bi bi-quote text-[1.75rem] text-[#006CD0]"></i>
      </div>

      <p className="mb-2 min-h-[80px] text-[1rem] leading-[1.7] text-[#6c757d]">
        &ldquo;{text}&rdquo;
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="ml-1 cursor-pointer border-0 bg-transparent p-0 font-semibold text-[#006CD0] hover:underline"
          >
            {expanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </p>

      <div className="mt-auto flex items-center pt-2">
        <div className="flex-shrink-0">
          <div className="h-[60px] w-[60px] overflow-hidden rounded-full border-[3px] border-solid border-white shadow-sm">
            <Image
              src={item.avatar}
              alt={item.name}
              width={60}
              height={60}
              style={{ objectFit: 'cover' }}
              unoptimized
            />
          </div>
        </div>
        <div className="ml-3">
          <h6 className="mb-0 text-[1rem] font-bold text-[#1c1632]">{item.name}</h6>
          <p className="mb-1 text-[0.875rem] text-[#6c757d]">{item.designation}</p>
          <div className="text-[0.875rem] text-[#ffc107]">
            {[...Array(item.rating)].map((_, i) => (
              <i key={i} className="bi bi-star-fill mr-1"></i>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialAreaHomeOne = ({ reviews }: { reviews?: Testimonial[] }) => {
  // Reviews are fetched on the server at build time and passed in as a prop,
  // so there is no client-side request that could break under a subfolder.
  // Only real Google reviews (4★+) are shown — no curated fallback.
  const testimonial_data: Testimonial[] = getLiveReviews(reviews);

  // Nothing to show if there are no real reviews — hide the section entirely
  // rather than showing curated/fallback content.
  if (testimonial_data.length === 0) return null;

  return (
    <section className="bg-white py-12">
      <div className="container-app">
        <div className="mb-12 text-center">
          <h6 className="mb-2 text-[1rem] font-bold uppercase tracking-[2px] text-[#006CD0]">What Our Clients Say</h6>
          <h2 className="text-[clamp(32px,5vw,42px)] font-bold text-[#1c1632]">Trusted by 50,000+ Customers</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={testimonial_data.length > 3}
          spaceBetween={24}
          slidesPerView={3}
          pagination={{ clickable: true, el: '.testimonial-pagination' }}
          navigation={{ prevEl: '.testimonial-prev', nextEl: '.testimonial-next' }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-2"
        >
          {testimonial_data.map((item) => (
            <SwiperSlide key={item.id} className="flex !h-auto">
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Controls */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            className="testimonial-prev flex h-[42px] w-[42px] items-center justify-center rounded-full border border-solid border-[#e6f0ff] bg-[#f8fbff] text-[#007bff] transition-all duration-[250ms] hover:border-[#007bff] hover:bg-[#007bff] hover:text-white"
            aria-label="Previous"
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <div className="testimonial-pagination flex justify-center [&_.swiper-pagination-bullet-active]:!w-6 [&_.swiper-pagination-bullet-active]:!rounded-md [&_.swiper-pagination-bullet-active]:!bg-[#007bff] [&_.swiper-pagination-bullet]:!mx-1 [&_.swiper-pagination-bullet]:!h-2.5 [&_.swiper-pagination-bullet]:!w-2.5 [&_.swiper-pagination-bullet]:!bg-[#cfe1ff] [&_.swiper-pagination-bullet]:!opacity-100"></div>
          <button
            type="button"
            className="testimonial-next flex h-[42px] w-[42px] items-center justify-center rounded-full border border-solid border-[#e6f0ff] bg-[#f8fbff] text-[#007bff] transition-all duration-[250ms] hover:border-[#007bff] hover:bg-[#007bff] hover:text-white"
            aria-label="Next"
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAreaHomeOne;
