
import service_data from '@/data/ServiceData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const data = service_data.filter((item) => item.path === 'home_1')

const ServiceArea = () => {
  return (
    <>
      <div className="service-section style-three">
        <div className="container">
          <div className="row">
            {data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="service-box style-two">
                  <div className="service-thumb">
                    <Image src={item.img} style={{ height: "auto" }} alt="image-title" />
                    <div className="service-content">
                      <div className="service-icon-thumb">
                        <Image src={item.icon} alt="image-title" />
                      </div>
                      <div className="service-text">
                        <h4><Link href="/service-details">{item.title}</Link></h4>
                        <p>{item.sm_des}</p>
                        <a href="#">Read More <i className="bi bi-arrow-up-right"></i></a>
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

export default ServiceArea;