'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import service_icon_1 from "@/assets/images/resource/service-icon1.png";
import service_icon_2 from "@/assets/images/resource/service-icon2.png";
import service_icon_3 from "@/assets/images/resource/service-icon3.png";

import service_img_1 from "../../../../public/assets/Product/ripple_1.png";
import service_img_2 from "../../../../public/assets/Product/flexibell_1.png";
import service_img_3 from "../../../../public/assets/Product/ibot_1.png";
import service_img_4 from "../../../../public/assets/Product/ibot_3.png";
import service_img_5 from "../../../../public/assets/Product/matrix_2.png";

const custom_products = [
  {
    id: 1,
    img: service_img_1,
    icon: service_icon_1,
    title: "Ripple",
    category: "Smart Municipal Water Level Controller",
    sm_des: "Automatically senses municipal water availability and operates the motor to maintain a continuous water supply for homes and residential buildings."
  },
  {
    id: 2,
    img: service_img_3,
    icon: service_icon_3,
    title: "iBot A",
    category: "Smart Water Tank Level Controller",
    sm_des: "Tracks overhead tank water levels in real time and automatically controls the motor to avoid overflow and ensure smooth water management."
  },
  {
    id: 3,
    img: service_img_4,
    icon: service_icon_1,
    title: "iBot P",
    category: "Smart Borewell Water Controller",
    sm_des: "Built for borewell and submersible pumps with intelligent water level monitoring, automatic motor operation, and motor safety protection."
  },
  {
    id: 4,
    img: service_img_5,
    icon: service_icon_2,
    title: "Matrix",
    category: "Multi-Tank Water Level Controller",
    sm_des: "Smart automation solution for managing multiple water tanks, monitoring water levels, and controlling motors across commercial and industrial spaces."
  },
  {
    id: 5,
    img: service_img_2,
    icon: service_icon_2,
    title: "Flexibell",
    category: "Wireless Water Level Alarm",
    sm_des: "Wireless tank monitoring system that sends instant alerts for low water level, full tank, and overflow conditions across multiple tanks."
  }
];

const ServiceAreaHomeOne = ({ style, style_2 }: any) => {
  const data = custom_products;
  return (
    <>
      <div className={`service-section ${style ? "style-two" : style_2 ? "style-three" : ""}`} style={{ backgroundColor: '#f0f4f8' }}>
        <div className="container">
          {!style_2 &&
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="section-sub-title wow slideInLeft">
                    <h4>Our Products</h4>
                  </div>
                  <div className="section-main-title wow slideInLeft">
                    <h2>Advanced Automation Products</h2>
                  </div>
                </div>
              </div>
            </div>
          }

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className="service-slider equal-height-slider"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className={`service-box ${style ? "style-two" : ""} wow animate__backInUp`}>
                  <div className="service-thumb">
                    <div className="service-img-wrapper">
                      <Image src={item.img} alt={item.title} fill style={{ objectFit: 'contain', objectPosition: 'center' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                    <div className="service-content">
                      <div className="service-icon-thumb">
                        <Image src={item.icon} alt={item.title} />
                      </div>
                      <div className="service-text">
                        <h4 className="mb-1"><Link href="/service-details">{item.title}</Link></h4>
                        <h6 className="fw-semibold mb-3 service-subtitle">{item.category}</h6>
                        <p className="service-desc mb-3">{item.sm_des}</p>
                        <Link href="/service-details" className="service-details-link">Product Details <i className="bi bi-arrow-up-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .service-subtitle {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.85) !important;
          transition: color 0.4s ease-in-out;
        }
        .service-box:hover .service-subtitle {
          color: #38bdf8 !important;
        }
        .service-desc {
          font-size: 0.88rem;
          line-height: 1.5;
          color: #f1f5f9;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: calc(0.88rem * 1.5 * 3);
        }
        .service-img-wrapper {
          position: relative;
          width: 100%;
          height: 460px;
          overflow: hidden;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .service-box {
          margin-bottom: 30px;
          height: 100%;
        }
      `}</style>
      <style jsx global>{`
        .equal-height-slider .swiper-wrapper {
          align-items: stretch;
        }
        .equal-height-slider .swiper-slide {
          height: auto;
          display: flex;
        }
        .equal-height-slider .swiper-slide > div {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default ServiceAreaHomeOne;