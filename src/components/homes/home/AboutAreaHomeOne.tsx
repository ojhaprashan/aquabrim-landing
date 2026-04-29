'use client'
import React from 'react';
import Image from 'next/image';

import about_thumb from "@/assets/images/about/about-thumb.jpg";
import about_shape from "@/assets/images/about/about-shape.png";

const AboutAreaHomeOne = ({ style }: any) => {

  return (
    <>
      <div className={`about-section pt-5 pb-5 ${style ? "style-three" : ""}`}>
        <div className="container">
          <div className="row align-items-center">

            {/* Left Column: Image & Floating Stats */}
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
              <div className="wow slideInLeft">
                <div className="about-thumb position-relative">
                  <Image src={about_thumb} style={{ height: "auto", borderRadius: "8px" }} alt="Aquabrim Installation" />

                  {/* Floating Box 1: Experience */}
                  <div className="about-counter">
                    <div className="about-counter-text">
                      <div className="about-numbar">
                        <h4 className="counter">16</h4>
                        <span>+</span>
                      </div>
                      <div className="about-text">
                        <h5>Years Experience</h5>
                      </div>
                    </div>
                  </div>

                  {/* Floating Box 2: Satisfied Clients */}
                  <div className="about-counter-two d-flex align-items-center shadow-lg bg-white rounded p-3">
                    <div className="about-counter-img me-3">
                      <Image src={about_shape} alt="Client Icon" width={50} height={50} />
                    </div>
                    <div className="about-number-two">
                      <h4 className="counter text-primary mb-0 fw-bold">3000+</h4>
                      <h5 className="text-muted mb-0" style={{ fontSize: '14px' }}>Clients Served</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Static Introduction Content */}
            <div className="col-lg-6 col-md-12">
              <div className="about-section-title mb-4">
                <div className="about-section-sub-title wow slideInUp">
                  <h4 className="text-primary text-uppercase fw-bold">Our Introduction</h4>
                </div>
                <div className="about-section-main-title wow slideInRight">
                  <h2 className="display-5 fw-bold mb-3">Developing Smart Water Solutions</h2>
                </div>
              </div>

              <div className="about-content-discription wow slideInLeft mb-4">
                <p className="text-muted" style={{ lineHeight: "1.8" }}>
                  Since 2008, Aquabrim has been delivering smart, affordable, and reliable water automation solutions. Our mission is to provide intelligent automation that ensures accurate water level detection, prevents overflow, and protects motors for your water infrastructure.
                </p>
              </div>

              {/* Feature List Grid */}
              <div className="row mb-4">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="about-list wow slideInLeft">
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="bi bi-chevron-double-right text-primary me-2"></i> Prevent Water Waste</li>
                      <li className="mb-2"><i className="bi bi-chevron-double-right text-primary me-2"></i> Enhance Safety</li>
                      <li className="mb-2"><i className="bi bi-chevron-double-right text-primary me-2"></i> Smart Automation</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="about-list wow slideInRight">
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="bi bi-chevron-double-right text-primary me-2"></i> Affordable Solutions</li>
                      <li className="mb-2"><i className="bi bi-chevron-double-right text-primary me-2"></i> Trusted Since 2008</li>
                      <li className="mb-2"><i className="bi bi-chevron-double-right text-primary me-2"></i> 24/7 Monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="solar-btn about wow slideInDown">
                <a href="/about" className="btn btn-primary px-4 py-3 rounded-pill fw-bold shadow-sm">
                  Discover About Us <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: Stats in Polished Blue Boxes --- */}
        <div className="container mt-5 pt-5 wow fadeInUp">
          <div className="row text-center g-4">

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="stat-box p-4 bg-primary shadow-sm border-0 rounded h-100 transition-hover">
                <h2 className="fw-bold text-white display-6 mb-2">5,000+</h2>
                <p className="text-white fw-semibold mb-0">Systems Installed</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="stat-box p-4 bg-primary shadow-sm border-0 rounded h-100 transition-hover">
                <h2 className="fw-bold text-white display-6 mb-2">3,000+</h2>
                <p className="text-white fw-semibold mb-0">Clients Served</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="stat-box p-4 bg-primary shadow-sm border-0 rounded h-100 transition-hover">
                <h2 className="fw-bold text-white display-6 mb-2">20+</h2>
                <p className="text-white fw-semibold mb-0">Cities Covered</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="stat-box p-4 bg-primary shadow-sm border-0 rounded h-100 transition-hover">
                <h2 className="fw-bold text-white display-6 mb-2">Tracked</h2>
                <p className="text-white fw-semibold mb-0">Water Saved</p>
              </div>
            </div>

          </div>
        </div>
        {/* --- END NEW SECTION --- */}

      </div>
    </>
  );
};

export default AboutAreaHomeOne;