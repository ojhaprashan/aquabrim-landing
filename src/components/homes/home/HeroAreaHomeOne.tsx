'use client';
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


interface DataType {
  id: number;
  subtitle: string;
  title: React.JSX.Element;
  sm_des: string;
  bg_img: string; // Add bg_img property
}

const hero_slider_data: DataType[] = [
  {
    id: 1,
    bg_img: "slider-bg.png",
    subtitle: "Smart Water Automation",
    title: <>Advanced Water Level <br />Controllers</>,
    sm_des: "Smart, affordable, and reliable water automation solutions for homes, apartments, and industries.",
  },
  {
    id: 2,
    bg_img: "slider2.png",
    subtitle: "Precision Control",
    title: <>Smart Water Automation <br />by Aquabrim</>,
    sm_des: "Prevent tank overflow, protect motors from dry-run, and maintain a consistent water supply completely automatically.",
  },
  // update for swiper 
  {
    id: 3,
    bg_img: "slider3.png",
    subtitle: "Energy Efficient",
    title: <>Wireless Motorized <br />Valve Systems</>,
    sm_des: "Our patented controllers offer precise control for overhead and underground tanks, easy to install and energy-efficient.",
  },
  {
    id: 4,
    bg_img: "slider4.png",
    subtitle: "Choosing Aquabrim",
    title: <>Effortless Water <br />Management</>,
    sm_des: "Enhance safety and deliver long-lasting performance with Aquabrim's dependable automation systems.",
  },
]

const HeroAreaHomeOne = () => {
  return (
    <>
      <Swiper
        loop={true}
        modules={[Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        // Navigation arrows
        navigation={{
          nextEl: ".hero-button-next-1",
          prevEl: ".hero-button-prev-1",
        }}
        className="slider-list owl-carousel">

        <div className="owl-nav d-none d-md-block">
          <div className="owl-prev hero-button-prev-1">
            <i className="bi bi-arrow-right"></i>
          </div>
          <div className="owl-next hero-button-next-1">
            <i className="bi bi-arrow-left"></i>
          </div>
        </div>

        {hero_slider_data.map((item, i) =>
          <SwiperSlide key={i}
            className={`slider-section hero_slider d-flex align-items-center`}
            style={{ 
              backgroundImage: `url(/assets/images/slider/${item.bg_img})` // Dynamic background
            }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="slider-content wow animate__zoomIn">
                    <h4>{item.subtitle}</h4>
                    <h1>{item.title}</h1>
                    <p>{item.sm_des}</p>
                    <div className='buttons'>
                    <div className="solar-btn slider1 wow slideInLeft">
                      <Link href="/service-details">Our Service <i className="bi bi-arrow-right"></i></Link>
                    </div>
                    <div className="solar-btn slider2  wow slideRight">
                      <Link href="/about">More About! <i className="bi bi-arrow-right"></i></Link>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

export default HeroAreaHomeOne;