'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const feature_data = [
  {
    id: 1,
    icon: "bi-droplet",
    title: "Automatic Control",
    desc: "Automatically starts and stops the pump based on water level."
  },
  {
    id: 2,
    icon: "bi-shield-check",
    title: "Dry Run Protection",
    desc: "Protects the motor from running in dry conditions."
  },
  {
    id: 3,
    icon: "bi-water",
    title: "Overflow Protection",
    desc: "Stops the pump when tank is full and prevents overflow."
  },
  {
    id: 4,
    icon: "bi-hand-index-thumb",
    title: "Water Saving",
    desc: "Smart operation helps you save water and money."
  },
  {
    id: 5,
    icon: "bi-tools",
    title: "Easy Installation",
    desc: "Simple wiring and user-friendly installation."
  },
  {
    id: 6,
    icon: "bi-display",
    title: "LED Indication",
    desc: "Clear LED status for power, motor and water level."
  }
];

const ProductFeatureAreaHomeOne = () => {
  return (
    <section className="product-features-section py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5 wow fadeInUp">
          <h4 className="text-primary text-uppercase fw-bold mb-2" style={{ fontSize: '14px', letterSpacing: '1px' }}>Product Features</h4>
        </div>
        
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="feature-slider pb-5"
        >
          {feature_data.map((item) => (
            <SwiperSlide key={item.id} className="d-flex">
              <div className="feature-card p-4 bg-white shadow-sm border border-light rounded-4 text-center h-100 transition-hover w-100 d-flex flex-column align-items-center justify-content-center" 
                   style={{ minHeight: '220px' }}>
                <div className="icon-wrapper mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" 
                     style={{ width: '60px', height: '60px', backgroundColor: '#f0f7ff' }}>
                  <i className={`bi ${item.icon} text-primary fs-3`}></i>
                </div>
                <h6 className="fw-bold mb-2" style={{ fontSize: '16px' }}>{item.title}</h6>
                <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .transition-hover {
          transition: all 0.3s ease;
        }
        .transition-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
          border-color: #007bff33 !important;
        }
        .feature-slider :global(.swiper-wrapper) {
          display: flex;
        }
        .feature-slider :global(.swiper-slide) {
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default ProductFeatureAreaHomeOne;


