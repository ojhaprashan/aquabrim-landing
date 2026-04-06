
'use client';
import React from 'react'
import Link from 'next/link';
import service_data from '@/data/Solarworking';
import Image from 'next/image'
import testiomonial_data from '@/data/TestiomonialData';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Pagination } from 'swiper/modules'; 
import testi_icon from "@/assets/images/resource/testi-icon.png";
const services = service_data.filter(item => item.path === "home_1");

const hero_content = {
    subtitle: "Let's learn about water automation",
    title: "Welcome to our Operations Page",
  }
const Operationdata = ({ style, style_2 }) => {
    const data = style ? service_data : services;

  return (
   <>
         <div className="slider-section style-five">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="slider-content style-two wow animate__slideInRight">
                <h4>{hero_content.subtitle}</h4>
                <h1>{hero_content.title}</h1>
                <div className="solar-btn slider1">
                  <Link href="/service-details">Working <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>





      <div className={`service-section ${style ? "style-two" : style_2 ? "style-three" : ""}`}>
        <div className="container">
          {!style_2 && 
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title wow slideInLeft">
                  <h4>Our Operations</h4>
                </div>
                <div className="section-main-title wow slideInLeft">
                  <h2>Working of Water System</h2>
                </div>
              </div>
            </div>
          </div>      
          
          }
          <div className="row">
            {data.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`service-box ${style ? "style-two" : ""} wow animate__backInUp`}>
                  <div className="service-thumb">
                    <Image src={item.img} style={{height: 'auto'}} alt="image-title" />
                    <div className="service-content">
                      <div className="service-icon-thumb">
                        <Image src={item.icon} alt="image-title" />
                      </div>
                      <div className="service-text">
                        <h4><Link href="/service-details">{item.title}</Link></h4>
                        <p>{item.sm_des}</p>
                        <Link href="/service-details">Read More <i className="bi bi-arrow-up-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      
      <div className="testimonial-section wow animate__slideInUp" style={{marginTop:"20px"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center wow animate__zoomIn">
                <div className="section-sub-title">
                  <h4>Installation Process</h4>
                </div>
                <div className="section-main-title ">
                  <h2>Simple Installation Process</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
             loop={true}
             modules={[Navigation, Pagination]}
             pagination={true}
             slidesPerView={3}
             spaceBetween={20}
             autoplay={{
               delay: 5000,
               disableOnInteraction: false
             }}
             breakpoints={{
               0: {
                 slidesPerView: 1,
                 spaceBetween: 20
               },
               576: {
                 slidesPerView: 1,
                 spaceBetween: 20
               },
               768: {
                 slidesPerView: 2,
                 spaceBetween: 20
               },
               992: {
                 slidesPerView: 3,
                 spaceBetween: 20
               },
               1200: {
                 slidesPerView: 3,
                 spaceBetween: 20
               }
             }}
             
             className="testi_list owl-carousel">
              {testiomonial_data.map((item, i) =>
                <SwiperSlide key={i} className="col-lg-12">
                  <div className="testi-item-box">
                    <div className="testi-content">
                      <div className="testi-icon-thumb">
                        <Image src={testi_icon} alt="image-title" />
                      </div>
                      <div className="testi-title">
                        <h4>{item.title}</h4>
                       
                      </div>
                      <div className="testi-discription">
                        <p>{item.sm_des}</p>
                      </div>
                    
                    </div>
                  </div>
                </SwiperSlide>

              )}

</Swiper>
          </div>
        </div>
      </div>
    


   </>
  )
}

export default Operationdata