'use client';
import React from 'react';
import Link from 'next/link';

const HeroAreaHomeOne = () => {
  return (
    <section 
      className="slider-section hero_slider d-flex align-items-center"
      style={{
        backgroundImage: `url(/assets/images/slider/hero-banner.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '800px',
        width: '100%'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="slider-content wow animate__zoomIn">
              <h4>Precision Control</h4>
              <h1>Smart Water Automation <br />by Aquabrim</h1>
              <p>Prevent tank overflow, protect motors from dry-run, and maintain a consistent water supply completely automatically.</p>
              <div className='buttons'>
                <div className="solar-btn slider1 wow slideInLeft">
                  <Link href="/service-details">Our Service <i className="bi bi-arrow-right"></i></Link>
                </div>
                <div className="solar-btn slider2 wow slideInRight">
                  <Link href="/about">More About! <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .hero_slider {
            min-height: 500px !important;
            text-align: center;
          }
          .slider-content h1 {
            font-size: 32px !important;
            line-height: 1.2;
          }
          .buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          .solar-btn {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroAreaHomeOne;