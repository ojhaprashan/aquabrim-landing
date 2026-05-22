'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import about_thumb from "@/assets/home/home page image.png";

const AboutAreaHomeOne = ({ style, hideClients, hideImpact }: any) => {

  const clients = [
    "/assets/client/1280px-Radisson_Blu_logo.svg.png",
    "/assets/client/Bharat_Heavy_Electricals_Limited-Logo.wine.png",
    "/assets/client/Bharat_Petroleum_logo.svg.png",
    "/assets/client/Coca-Cola_logo.svg.png",
    "/assets/client/EIL logo.png",
    "/assets/client/Indian-Oil-Logo-768x483.png",
    "/assets/client/Indian_Railway_Logo_2.png",
    "/assets/client/Unilever.svg.png",
    "/assets/client/Emaar-Properties-Logo-1.jpg.jpeg",
    "/assets/client/max healthcar.png",
    "/assets/client/bhutani infra logo.png",
    "/assets/client/hyatt regency.jpeg",
    "/assets/client/pwd.jpeg",
    "/assets/client/M3M.webp",
  ];

  return (
    <>
      <div className={`about-section pt-5 pb-120 ${style ? "style-three" : ""}`} style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div className="row align-items-center">

            {/* Left Column: Image & Floating Stats (Visible on Desktop only) */}
            <div className="col-lg-6 d-none d-lg-block about-image-col">
              <div className="wow slideInLeft">
                <div className="about-thumb position-relative">
                  <Image src={about_thumb} style={{ height: "auto", borderRadius: "8px" }} alt="Aquabrim Installation" />




                </div>
              </div>
            </div>

            {/* Right Column: Static Introduction Content (Always Visible, takes full width on mobile) */}
            <div className="col-lg-6 col-md-12">
              <div className="about-section-title mb-3 text-center text-lg-start">
                <div className="about-section-main-title wow slideInRight">
                  <h2 className="display-6 fw-bold mb-2">How Aquabrim’s Water Level Controllers works</h2>
                </div>
              </div>

              <div className="about-content-discription wow slideInLeft mb-4 text-center text-lg-start">
                <p className="text-muted mb-2" style={{ lineHeight: "1.7", fontSize: "0.95rem" }}>
                  Aquabrim Water Level Controllers keeps your water tank perfectly managed with no manual effort. It constantly checks two things: the incoming water supply (municipal line or borewell) and the water level inside the tank using built‑in sensors.
                </p>
                <p className="text-muted mb-2" style={{ lineHeight: "1.7", fontSize: "0.95rem" }}>
                  When the tank level drops below the set point and water is available, Aquabrim turns the motor ON to fill the tank. As the tank fills, it keeps monitoring the level in real time and switches the motor OFF the moment the tank reaches the set capacity, preventing overflow and saving water.
                </p>
                <p className="text-muted mb-3" style={{ lineHeight: "1.7", fontSize: "0.95rem" }}>
                  If there is no water in the supply line, Aquabrim keeps the motor off, so it never runs dry and stays protected. This smart control ensures the right water level, avoids wastage, and gives you a steady, reliable supply.
                </p>
              </div>

              {/* Mobile-Only Image & Badges (Visible on Mobile only, placed between Description and Bullet Points) */}
              <div className="d-block d-lg-none mobile-about-thumb-wrapper wow slideInLeft">
                <div className="about-thumb position-relative mx-auto" style={{ maxWidth: '480px' }}>
                  <Image src={about_thumb} style={{ height: "auto", borderRadius: "8px", width: "100%" }} alt="Aquabrim Installation" />




                </div>
              </div>

              {/* Feature List Grid - Modern CSS Grid Layout */}
              <div className="mb-4">
                <div className="about-list-grid wow slideInUp" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '10px 20px',
                  justifyContent: 'start',
                  textAlign: 'left'
                }}>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2" style={{ flexShrink: 0, fontSize: '0.95rem' }}></i>
                    <span style={{ fontSize: '0.92rem', fontWeight: '500', color: '#4a5568', lineHeight: '1.4' }}>Detects water supply availability</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2" style={{ flexShrink: 0, fontSize: '0.95rem' }}></i>
                    <span style={{ fontSize: '0.92rem', fontWeight: '500', color: '#4a5568', lineHeight: '1.4' }}>Prevents dry-run damage</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2" style={{ flexShrink: 0, fontSize: '0.95rem' }}></i>
                    <span style={{ fontSize: '0.92rem', fontWeight: '500', color: '#4a5568', lineHeight: '1.4' }}>Monitors tank water level</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2" style={{ flexShrink: 0, fontSize: '0.95rem' }}></i>
                    <span style={{ fontSize: '0.92rem', fontWeight: '500', color: '#4a5568', lineHeight: '1.4' }}>Avoids overflow and wastage</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2" style={{ flexShrink: 0, fontSize: '0.95rem' }}></i>
                    <span style={{ fontSize: '0.92rem', fontWeight: '500', color: '#4a5568', lineHeight: '1.4' }}>Starts motor when level is low</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2" style={{ flexShrink: 0, fontSize: '0.95rem' }}></i>
                    <span style={{ fontSize: '0.92rem', fontWeight: '500', color: '#4a5568', lineHeight: '1.4' }}>Maintains Consistent Water Supply</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2" style={{ flexShrink: 0, fontSize: '0.95rem' }}></i>
                    <span style={{ fontSize: '0.92rem', fontWeight: '500', color: '#4a5568', lineHeight: '1.4' }}>Stops motor when tank is full</span>
                  </div>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="solar-btn about wow slideInDown text-center text-lg-start">
                <Link href="/service" className="btn btn-primary px-4 py-3 fw-bold shadow-sm">
                  View Products <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {(!hideImpact || !hideClients) && (
          <div className="container mt-4 wow fadeInUp">
            <div className="p-3 p-md-5 rounded-4 shadow-sm border border-light overflow-hidden" style={{ backgroundColor: '#f0f4f8' }}>

              {!hideImpact && (
                <>
                  {/* Heading for the Stats Section */}
                  <div className="text-center mb-5">
                    <span className="text-primary text-uppercase fw-bold mb-2 d-block" style={{ letterSpacing: '1.5px', fontSize: '0.9rem' }}>Trusted by thousands</span>
                    <h3 className="fw-bold display-6 mb-2" style={{ fontSize: 'calc(1.375rem + 1.5vw)', color: '#0d1b2a' }}>Trusted by thousands across multiple sectors</h3>
                    <p className="text-muted fs-5">Installed across residential, commercial and institutional</p>
                  </div>

                  {/* Stats Row */}
                  <div className="row text-center g-4">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="stat-box p-4 bg-primary shadow-sm rounded-3 h-100 transition-hover border-0">
                        <h2 className="fw-bold text-white display-6 mb-2">50,000+</h2>
                        <p className="text-white fw-semibold mb-0">Customers Served</p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="stat-box p-4 bg-primary shadow-sm rounded-3 h-100 transition-hover border-0">
                        <h2 className="fw-bold text-white display-6 mb-2">5,000+</h2>
                        <p className="text-white fw-semibold mb-0">Systems Installed</p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="stat-box p-4 bg-primary shadow-sm rounded-3 h-100 transition-hover border-0">
                        <h2 className="fw-bold text-white display-6 mb-2">15+</h2>
                        <p className="text-white fw-semibold mb-0">Cities Served</p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="stat-box p-4 bg-primary shadow-sm rounded-3 h-100 transition-hover border-0">
                        <h2 className="fw-bold text-white display-6 mb-2">16+</h2>
                        <p className="text-white fw-semibold mb-0">Years Experience</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {!hideClients && (
                <>
                  {/* Divider */}
                  {!hideImpact && <hr className="my-5 text-muted" style={{ opacity: 0.15 }} />}

                  {/* --- NEW SECTION: Auto-scrolling Clients --- */}
                  <div className="text-center mb-4">
                    <h6 className="fw-bold text-muted text-uppercase" style={{ letterSpacing: '1.5px', fontSize: 'clamp(22px, 5vw, 28px)' }}>They trust Aquabrim</h6>
                  </div>

                  <div className="w-100 position-relative marquee-wrapper">
                    <div className="marquee-track d-flex align-items-center py-2">
                      {/* We map the array twice to create a seamless infinite loop */}
                      {[...clients, ...clients].map((img, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-3 mx-3 d-flex align-items-center justify-content-center"
                          style={{ minWidth: '180px', height: '80px' }}
                        >
                          <Image
                            src={img}
                            alt="Client Logo"
                            width={120}
                            height={60}
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
              {/* --- END NEW SECTION --- */}

            </div>
          </div>
        )}

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

        <style jsx>{`
          .about-list-grid {
            margin-top: 20px;
            margin-bottom: 30px;
          }

          /* Responsive spacing & styling adjustments */
          @media (max-width: 991px) {
            .about-image-col {
              margin-bottom: 45px !important;
            }
            .mobile-about-thumb-wrapper {
              margin-top: 25px !important;
              margin-bottom: 50px !important;
            }
            .about-section-main-title h2 {
              text-align: center !important;
              font-size: 1.85rem !important;
            }
            .about-content-discription p {
              text-align: center !important;
            }
            .about-list-grid {
              justify-items: center;
              justify-content: center !important;
            }
            .about-list-grid > div {
              width: 100%;
              max-width: 320px;
              justify-content: start !important;
            }
            .solar-btn.about {
              display: flex !important;
              justify-content: center !important;
            }
          }

          @media (max-width: 575px) {
            .about-counter {
              right: 15px !important;
              top: 15px !important;
            }
            .about-counter-two {
              left: 15px !important;
              right: 15px !important;
              width: auto !important;
              bottom: -25px !important;
              padding: 10px 15px !important;
            }
            .about-counter-two h4 {
              font-size: 1.3rem !important;
            }
            .about-counter-two h5 {
              font-size: 12px !important;
            }
          }
        `}</style>

      </div>
    </>
  );
};

export default AboutAreaHomeOne;