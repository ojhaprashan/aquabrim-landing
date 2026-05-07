'use client'
import React from 'react';
import Image from 'next/image';

import about_thumb from "@/assets/images/about/about-thumb.jpg";
import about_shape from "@/assets/images/about/about-shape.png";

const AboutAreaHomeOne = ({ style }: any) => {

  // Dummy data for the client slider
  const dummyClients = [
    { name: "RailTech", icon: "bi-train-freight-front" },
    { name: "AquaCorp", icon: "bi-water" },
    { name: "MetroBuild", icon: "bi-building" },
    { name: "EcoFlow", icon: "bi-lightning-charge" },
    { name: "PureDrop", icon: "bi-droplet-half" },
    { name: "UrbanGear", icon: "bi-house-gear" },
  ];

  return (
    <>
      <div className={`about-section pt-5 pb-5 ${style ? "style-three" : ""}`}>
        <div className="container">
          <div className="row align-items-center">

            {/* Left Column: Image & Floating Stats */}
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
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
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 order-1 order-lg-2">
              <div className="about-section-title mb-4 text-center text-lg-start">
                <div className="about-section-main-title wow slideInRight">
                  <h2 className="display-6 fw-bold mb-3">Developing Smart Water Solutions</h2>
                </div>
              </div>

              <div className="about-content-discription wow slideInLeft mb-4 text-center text-lg-start">
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
              <div className="solar-btn about wow slideInDown text-center text-lg-start">
                <a href="/about" className="btn btn-primary px-4 py-3 fw-bold shadow-sm">
                  Discover About Us <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Stats & Clients inside a large grey box --- */}
        <div className="container mt-4 wow fadeInUp">
          <div className="bg-light p-3 p-md-5 rounded-4 shadow-sm border border-light overflow-hidden">

            {/* Heading for the Stats Section */}
            <div className="text-center mb-5">
              <h3 className="fw-bold display-6 mb-2" style={{ fontSize: 'calc(1.375rem + 1.5vw)' }}>Our Impact in Numbers</h3>
              <p className="text-muted fs-5">Delivering reliable automation across thousands of installations.</p>
            </div>

            {/* Stats Row */}
            <div className="row text-center g-4">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="stat-box p-4 bg-primary shadow-sm rounded-3 h-100 transition-hover border-0">
                  <h2 className="fw-bold text-white display-6 mb-2">5,000+</h2>
                  <p className="text-white fw-semibold mb-0">Systems Installed</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="stat-box p-4 bg-primary shadow-sm rounded-3 h-100 transition-hover border-0">
                  <h2 className="fw-bold text-white display-6 mb-2">3,000+</h2>
                  <p className="text-white fw-semibold mb-0">Clients Served</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="stat-box p-4 bg-primary shadow-sm rounded-3 h-100 transition-hover border-0">
                  <h2 className="fw-bold text-white display-6 mb-2">20+</h2>
                  <p className="text-white fw-semibold mb-0">Cities Covered</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="stat-box p-4 bg-primary shadow-sm rounded-3 h-100 transition-hover border-0">
                  <h2 className="fw-bold text-white display-6 mb-2">Tracked</h2>
                  <p className="text-white fw-semibold mb-0">Water Saved</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-5 text-muted" style={{ opacity: 0.15 }} />

            {/* --- NEW SECTION: Auto-scrolling Clients --- */}
            <div className="text-center mb-4">
              <h6 className="fw-bold text-muted text-uppercase" style={{ letterSpacing: '1.5px', fontSize: 'clamp(22px, 5vw, 28px)' }}>Trusted By Leading Organizations</h6>
            </div>

            <div className="w-100 position-relative marquee-wrapper">
              <div className="marquee-track d-flex align-items-center py-2">
                {/* We map the array twice to create a seamless infinite loop */}
                {[...dummyClients, ...dummyClients].map((client, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow-sm rounded-3 px-4 py-3 mx-3 d-flex align-items-center justify-content-center"
                    style={{ minWidth: '180px' }}
                  >
                    <i className={`bi ${client.icon} fs-3 me-2 text-primary`}></i>
                    <span className="fw-bold text-secondary" style={{ fontSize: '15px' }}>{client.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* --- END NEW SECTION --- */}

          </div>
        </div>

        {/* CSS for the seamless infinite slider */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .marquee-track {
              width: max-content;
              animation: marqueeScroll 25s linear infinite;
              display: flex;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); } 
            }

            @media (max-width: 767px) {
              .marquee-wrapper {
                height: 350px;
                overflow: hidden;
              }
              .marquee-track {
                flex-direction: column;
                width: 100% !important;
                height: max-content;
                animation: verticalMarqueeScroll 20s linear infinite;
                align-items: center;
              }
              .marquee-track > div {
                margin: 10px 0 !important;
              }
            }

            @keyframes verticalMarqueeScroll {
              0% { transform: translateY(0); }
              100% { transform: translateY(-50%); }
            }
          `
        }} />

      </div>
    </>
  );
};

export default AboutAreaHomeOne;