'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Accordion from '../common/Accordion';

import service_details_thumb_1 from '@/assets/images/resource/blog-inner1.jpg';
import service_details_thumb_2 from '@/assets/images/resource/blog-inner2.jpg';
import service_details_thumb_3 from '@/assets/images/resource/blog-inner3.jpg';

interface DataType {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
  title_2: string;
  categories: string[];
  help_title: string;
  help_info: string;
  phone: string;
  email: string;
}


const service_details_content: DataType = {
  title: "Advanced Water Management Systems",
  sm_des_1: "Aquabrim provides end-to-end smart water management solutions designed for modern homes and large-scale industrial complexes. Our systems ensure precise water level detection, automated pumping control, and real-time monitoring to prevent overflow and protect your infrastructure from dry-run damage. With over 16 years of experience, we deliver reliability you can trust.",
  sm_des_2: "Our patented wireless valve technology and intelligent controllers allow for seamless integration with multiple tanks, providing accurate data and effortless control through intuitive dashboards. Whether you are managing a residential society or an industrial plant, Aquabrim's solutions optimize water usage and energy efficiency.",
  title_2: "Why Choose Our Smart Solutions?",

  categories: [
    "Water Level Control ",
    "Multi-Tank Automation ",
    "Wireless Valve Systems ",
    "Smart Tank Monitoring ",
    "Industrial Solutions ",
    "Residential Automation ",
    "Digital Dashboards ",
  ],
  help_title: "Need Expert Help?",
  help_info: "Our engineering team is ready to help you design the perfect water management system for your needs. From site inspection to final installation and 24/7 support, Aquabrim is your partner in smart automation.",
  phone: "+91 12345 67890",
  email: "support@aquabrim.com",
}
const { title, sm_des_1, sm_des_2, title_2, categories, help_title, help_info, phone, email } = service_details_content


const ServiceDetailsArea = () => {
  return (
    <>
      <div className="service-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="service-details-thumb">
                <Image src={service_details_thumb_1} style={{ width: '100%', height: 'auto' }} alt="service-details" />
              </div>
              <div className="service-details-title">
                <h4>{title}</h4>
              </div>
              <div className="service-details-discription">
                <p>{sm_des_1}</p>
                <p>{sm_des_2}</p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="service-details-thumb-two">
                    <Image src={service_details_thumb_2} style={{height: "auto"}} alt="image-title" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service-details-thumb-two">
                    <Image src={service_details_thumb_3} style={{height: "auto"}} alt="image-title" />
                  </div>
                </div>
              </div>
              <div className="service-details-title">
                <h4>{title_2}</h4>
              </div>
              <div className="service-details-discription">
                <p>{sm_des_1}</p>
              </div>
              <Accordion />
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <!-- widget search --> */}
              <div className="widget_search box mb-30">
                <form onSubmit={e => e.preventDefault()} method="get">
                  <input type="text" name="s" value="" placeholder="Search Here" title="Search for:" />
                    <button type="submit" className="icons">
                      <i className="fa fa-search"></i>
                    </button>
                </form>
              </div>
              <div className="widget-categories-box two">
                {/* <!-- widget categories menu --> */}
                <div className="widget-categories-menu asd">
                  <ul>
                    {categories.map((item, i) => (
                      <li><Link href="/service-details" style={{ color: "#000" }}>{item}<span><i className="bi bi-arrow-right"></i></span></Link></li>                      
                    ))} 
                  </ul>
                </div>
              </div>
              <div className="widget-help-box">
                <div className="widget-content">
                  <h4>{help_title}</h4>
                  <p>{help_info}</p>
                  <div className="widget-info-social-link">
                    <ul>
                      <li><a href="tel:(555)123-4567"><i className="bi bi-telephone"></i> <span>{phone}</span></a></li>
                      <li><a href="mailto:support@sertom.com"><i className="bi bi-envelope"></i> <span>{email}</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;