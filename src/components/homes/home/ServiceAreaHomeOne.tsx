
'use client';
import service_data from '@/data/ServiceData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const services = service_data.filter(item => item.path === "home_1");

const ServiceAreaHomeOne = ({ style, style_2 }: any) => {
  const data = style ? service_data : services
  return (
    <>
      <div className={`service-section ${style ? "style-two" : style_2 ? "style-three" : ""}`}>
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
            className="service-slider"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`service-box ${style ? "style-two" : ""} wow animate__backInUp`} style={{ marginBottom: '30px' }}>
                  <div className="service-thumb">
                    <Image src={item.img} style={{ height: 'auto', width: '100%' }} alt="image-title" />
                    <div className="service-content">
                      <div className="service-icon-thumb">
                        <Image src={item.icon} alt="image-title" />
                      </div>
                      <div className="service-text">
                        <h4><Link href="/service-details">{item.title}</Link></h4>
                        <p>{item.sm_des}</p>
                        <Link href="/service-details">Product Details <i className="bi bi-arrow-up-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaHomeOne;