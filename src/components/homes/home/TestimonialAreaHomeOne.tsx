'use client';
import React, { useEffect, useState } from 'react';
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

const fallback_data: Testimonial[] = [
  {
    id: 1,
    name: "Ramesh Kumar",
    designation: "Homeowner, Coimbatore",
    review: "Aquabrim controller has completely solved our water overflow issue. Very reliable and easy to use.",
    avatar: "/assets/images/testimonials/ramesh.png",
    rating: 5
  },
  {
    id: 2,
    name: "Sunita Rao",
    designation: "Apartment Manager, Chennai",
    review: "We installed Aquabrim in our apartment complex. It works perfectly and the motor is well protected.",
    avatar: "/assets/images/testimonials/sunita.png",
    rating: 5
  },
  {
    id: 3,
    name: "Arun Mehta",
    designation: "Builder, Bengaluru",
    review: "Best water level controller we have used. Installation was easy and support is excellent.",
    avatar: "/assets/images/testimonials/arun.png",
    rating: 5
  }
];

const TestimonialAreaHomeOne = () => {
  const [testimonial_data, setTestimonialData] = useState<Testimonial[]>(fallback_data);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((data: { reviews?: Testimonial[] }) => {
        if (cancelled) return;
        if (data?.reviews && data.reviews.length > 0) {
          setTestimonialData(data.reviews.filter((r) => r.rating === 5));
        }
      })
      .catch(() => {
        // keep fallback
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="testimonial-section py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-primary text-uppercase fw-bold mb-2" style={{ letterSpacing: '2px' }}>What Our Clients Say</h6>
          <h2 className="fw-bold" style={{ fontSize: 'clamp(32px, 5vw, 42px)' }}>Trusted by Thousands</h2>
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
          className="testimonial-swiper pb-2"
        >
          {testimonial_data.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="testimonial-card p-4 p-md-5 rounded-4 shadow-sm h-100 position-relative border border-light transition-hover"
                style={{ backgroundColor: '#f8fbff' }}>

                {/* Quote Icon */}
                <div className="quote-icon mb-4 d-flex align-items-center justify-content-center rounded-circle"
                  style={{ width: '50px', height: '50px', backgroundColor: '#e6f0ff' }}>
                  <i className="bi bi-quote fs-3 text-primary"></i>
                </div>

                <p className="text-muted mb-4 fs-6" style={{ lineHeight: '1.7', minHeight: '80px' }}>
                  "{item.review}"
                </p>

                <div className="d-flex align-items-center mt-auto">
                  <div className="flex-shrink-0">
                    <div className="avatar-wrapper rounded-circle overflow-hidden border border-3 border-white shadow-sm"
                      style={{ width: '60px', height: '60px' }}>
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
                  <div className="ms-3">
                    <h6 className="fw-bold mb-0">{item.name}</h6>
                    <p className="text-muted small mb-1">{item.designation}</p>
                    <div className="rating-stars text-warning small">
                      {[...Array(item.rating)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill me-1"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Controls */}
        <div className="d-flex justify-content-center align-items-center mt-4 gap-3">
          <button type="button" className="testimonial-nav-btn testimonial-prev" aria-label="Previous">
            <i className="bi bi-arrow-left"></i>
          </button>
          <div className="testimonial-pagination d-flex justify-content-center"></div>
          <button type="button" className="testimonial-nav-btn testimonial-next" aria-label="Next">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      <style jsx>{`
        .testimonial-card {
          transition: all 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.05) !important;
          border-color: #007bff33 !important;
        }
        .bg-primary-light {
          background-color: #f0f7ff;
        }
      `}</style>

      <style jsx global>{`
        .testimonial-swiper .swiper-slide {
          height: auto;
          display: flex;
        }
        .testimonial-swiper .swiper-slide > div {
          width: 100%;
        }
        .testimonial-nav-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid #e6f0ff;
          background: #f8fbff;
          color: #007bff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }
        .testimonial-nav-btn:hover {
          background: #007bff;
          color: #fff;
          border-color: #007bff;
        }
        .testimonial-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cfe1ff;
          opacity: 1;
          margin: 0 4px !important;
          transition: all 0.25s ease;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #007bff;
          width: 24px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default TestimonialAreaHomeOne;
