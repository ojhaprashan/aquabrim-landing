
import service_data from '@/data/ServiceData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const services = service_data.filter(item => item.path === "home_1");

const ServiceAreaHomeOne = ({style, style_2}: any) => {
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
                  <h4>Our Most Service</h4>
                </div>
                <div className="section-main-title wow slideInLeft">
                  <h2>Smart Water Solutions</h2>
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
    </>
  );
};

export default ServiceAreaHomeOne;