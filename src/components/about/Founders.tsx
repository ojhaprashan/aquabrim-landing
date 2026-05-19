'use client';
import React from 'react';

const Founders = () => {
  const praveenPills = [
    {
      label: "IIM-C Alumni",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5" />
        </svg>
      )
    },
    {
      label: "Serial Entrepreneur",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      label: "Venture Capitalist",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    },
    {
      label: "Startup Ecosystem Mentor",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      label: "Business & Growth Strategist",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    }
  ];

  const rakeshPills = [
    {
      label: "Wireless Technology Expert",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5M12 12h.01M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5M19.1 4.9C23 8.8 23 15.2 19.1 19.1" />
        </svg>
      )
    },
    {
      label: "Electronics Engineer",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      )
    },
    {
      label: "Automation Specialist",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      label: "Patent Holder",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      )
    },
    {
      label: "Industrial IoT Innovator",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6M10 22h4" />
        </svg>
      )
    }
  ];

  return (
    <section className="founders-section py-5 bg-white">
      <div className="container">
        {/* Title Area */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span className="subtitle text-uppercase text-primary fw-bold" style={{ letterSpacing: '2px', fontSize: '14px' }}>
              OUR FOUNDERS
            </span>
            <div className="title-line"></div>
          </div>
        </div>

        {/* Founders Cards Stack */}
        <div className="founders-stack">
          
          {/* Card 1: Praveen Sinha (Image Left, Content Right) */}
          <div className="founder-card shadow-sm border border-light">
            <div className="row align-items-center g-4 g-lg-5">
              {/* Image Column */}
              <div className="col-lg-4 col-md-12">
                <div className="image-wrapper left-corner">
                  <div className="corner-decor decor-top-left"></div>
                  <div className="dots-decor decor-left d-none d-md-block"></div>
                  <div className="founder-img-container">
                    <img 
                      src="/assets/images/team/praveen.png" 
                      alt="Praveen Sinha" 
                      className="img-fluid founder-image shadow-sm"
                    />
                  </div>
                </div>
              </div>
              {/* Content Column */}
              <div className="col-lg-8 col-md-12">
                <div className="founder-info text-center text-lg-start">
                  <h3 className="founder-name fw-bold">Praveen Sinha</h3>
                  <span className="founder-role fw-semibold text-primary">Co-Founder & Strategic Advisor</span>
                  <div className="role-underline"></div>
                  
                  {/* Pills */}
                  <div className="pills-container d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 mb-4">
                    {praveenPills.map((pill, pIdx) => (
                      <div key={pIdx} className="pill-badge">
                        <span className="pill-icon">{pill.icon}</span>
                        <span className="pill-text">{pill.label}</span>
                      </div>
                    ))}
                  </div>

                  <p className="founder-desc text-muted">
                    Bringing strong entrepreneurial vision and strategic leadership, Praveen Sinha has played a key role in shaping Aquabrim’s growth, innovation roadmap, and long-term expansion in intelligent infrastructure solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Rakesh Kumar (Content Left, Image Right on Desktop) */}
          <div className="founder-card shadow-sm border border-light mt-5">
            <div className="row align-items-center g-4 g-lg-5">
              {/* Content Column (Appears left on desktop, stacks below on mobile) */}
              <div className="col-lg-8 col-md-12 order-2 order-lg-1">
                <div className="founder-info text-center text-lg-start">
                  <h3 className="founder-name fw-bold">Rakesh Kumar</h3>
                  <span className="founder-role fw-semibold text-primary">Co-Founder & Technology Head</span>
                  <div className="role-underline"></div>
                  
                  {/* Pills */}
                  <div className="pills-container d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 mb-4">
                    {rakeshPills.map((pill, pIdx) => (
                      <div key={pIdx} className="pill-badge">
                        <span className="pill-icon">{pill.icon}</span>
                        <span className="pill-text">{pill.label}</span>
                      </div>
                    ))}
                  </div>

                  <p className="founder-desc text-muted">
                    With deep expertise in wireless technologies and industrial automation, Rakesh Kumar leads the technology and product innovation initiatives at Aquabrim, driving the development of reliable and future-ready automation systems.
                  </p>
                </div>
              </div>
              
              {/* Image Column (Appears right on desktop, stacks top on mobile) */}
              <div className="col-lg-4 col-md-12 order-1 order-lg-2">
                <div className="image-wrapper right-corner">
                  <div className="corner-decor decor-top-right"></div>
                  <div className="dots-decor decor-right d-none d-md-block"></div>
                  <div className="founder-img-container">
                    <img 
                      src="/assets/images/team/rakesh.png" 
                      alt="Rakesh Kumar" 
                      className="img-fluid founder-image shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .founders-section {
          background-color: #ffffff;
          padding: 80px 0;
          width: 100% !important;
          display: block !important;
        }

        .title-line {
          width: 60px;
          height: 3px;
          background-color: #006CD0;
          margin: 15px auto 0;
          border-radius: 2px;
        }

        .founders-stack {
          margin-top: 50px;
        }

        .founder-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          transition: all 0.3s ease;
        }

        .founder-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 108, 208, 0.06) !important;
        }

        /* Image decorative layout */
        .image-wrapper {
          position: relative;
          padding: 10px;
          display: flex;
          justify-content: center;
        }

        .founder-img-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          z-index: 5;
          width: 100%;
          max-width: 280px;
          aspect-ratio: 0.8;
          border: 4px solid #ffffff;
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }

        .founder-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.4s ease;
        }

        .founder-card:hover .founder-image {
          transform: scale(1.03);
        }

        /* Corner shapes from reference */
        .corner-decor {
          position: absolute;
          width: 60px;
          height: 60px;
          background-color: #006cd0;
          z-index: 2;
          border-radius: 16px;
        }

        .decor-top-left {
          top: -2px;
          left: -2px;
        }

        .decor-top-right {
          top: -2px;
          right: -2px;
        }

        /* Dotted patterns from reference */
        .dots-decor {
          position: absolute;
          width: 50px;
          height: 80px;
          background-image: radial-gradient(rgba(0, 108, 208, 0.2) 1.5px, transparent 1.5px);
          background-size: 8px 8px;
          z-index: 1;
        }

        .decor-left {
          left: -20px;
          bottom: 20px;
        }

        .decor-right {
          right: -20px;
          bottom: 20px;
        }

        /* Typography & Info */
        .founder-name {
          font-size: 1.85rem;
          color: #1c1632;
          margin-bottom: 4px;
        }

        .founder-role {
          font-size: 1rem;
          color: #006CD0;
          display: inline-block;
          margin-bottom: 8px;
        }

        .role-underline {
          width: 35px;
          height: 3px;
          background-color: #006CD0;
          margin-bottom: 24px;
          border-radius: 2px;
        }

        .founder-card:hover .role-underline {
          width: 55px;
          transition: width 0.3s ease;
        }

        /* Pill Badge Styles from Reference */
        .pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #f1f5f9;
          border-radius: 12px;
          transition: all 0.3s ease;
          border: 1px solid rgba(226, 232, 240, 0.8);
        }

        .pill-badge:hover {
          background: #e2e8f0;
          transform: translateY(-2px);
          border-color: rgba(0, 108, 208, 0.15);
        }

        .pill-icon {
          color: #006cd0;
          display: flex;
          align-items: center;
        }

        .pill-text {
          font-size: 0.8rem;
          font-weight: 700;
          color: #334155;
        }

        .founder-desc {
          font-size: 0.98rem;
          line-height: 1.8;
          color: #64748b;
          margin-top: 15px;
          font-weight: 450;
        }

        /* ===================================================
           Responsive Rules
        ==================================================== */
        @media (max-width: 991px) {
          .founder-card {
            padding: 30px 20px;
          }

          .role-underline {
            margin-left: auto;
            margin-right: auto;
          }

          .founder-desc {
            font-size: 0.92rem;
            line-height: 1.7;
          }
        }

        @media (max-width: 575px) {
          .founders-section {
            padding: 60px 0;
          }

          .founder-card {
            padding: 25px 15px;
          }

          .founder-name {
            font-size: 1.5rem;
          }

          .founder-role {
            font-size: 0.9rem;
          }

          .pill-badge {
            padding: 6px 12px;
          }

          .pill-text {
            font-size: 0.72rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Founders;
