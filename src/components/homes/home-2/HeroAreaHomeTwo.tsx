
import Link from 'next/link';
import React from 'react';

const hero_content = {
  subtitle: "Welcome To Our Solar",
  title: "We Provide Solar Energy Source & Bast",
}

const HeroAreaHomeTwo = () => {
  return (
    <>
      <div className="slider-section style-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="slider-content style-two wow animate__slideInRight">
                <h4>{hero_content.subtitle}</h4>
                <h1>{hero_content.title}</h1>
                <div className="solar-btn slider1">
                  <Link href="/service-details">Our Service <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAreaHomeTwo;