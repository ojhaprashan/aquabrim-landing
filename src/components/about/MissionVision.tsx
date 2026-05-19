'use client';
import React from 'react';

const MissionVision = () => {
  return (
    <section className="mission-vision-section py-5">
      <div className="container">
        <div className="row g-4">
          
          {/* Mission Card */}
          <div className="col-lg-6">
            <div className="premium-card h-100 p-4 p-md-5 rounded-4 shadow-sm wow slideInLeft">
              <div className="card-content d-flex flex-column flex-md-row align-items-center align-items-md-start text-center text-md-start">
                <div className="icon-wrapper mb-4 mb-md-0 me-md-4 d-flex align-items-center justify-content-center shadow-lg">
                  <i className="bi bi-bullseye"></i>
                </div>
                <div className="text-content">
                  <h3 className="card-title fw-bold mb-3">Our Mission</h3>
                  <p className="card-description mb-0">
                    To develop reliable water level monitoring and automation systems that improve operational efficiency and support smarter infrastructure management.
                  </p>
                </div>
              </div>
              <div className="card-accent accent-primary"></div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="col-lg-6">
            <div className="premium-card h-100 p-4 p-md-5 rounded-4 shadow-sm wow slideInRight">
              <div className="card-content d-flex flex-column flex-md-row align-items-center align-items-md-start text-center text-md-start">
                <div className="icon-wrapper mb-4 mb-md-0 me-md-4 d-flex align-items-center justify-content-center shadow-lg">
                  <i className="bi bi-eye"></i>
                </div>
                <div className="text-content">
                  <h3 className="card-title fw-bold mb-3">Our Vision</h3>
                  <p className="card-description mb-0">
                    To lead the future of water automation with intelligent, connected, and efficient infrastructure solutions.
                  </p>
                </div>
              </div>
              <div className="card-accent accent-secondary"></div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .mission-vision-section {
          background-color: #f8fafc;
          overflow: hidden;
        }

        .premium-card {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.8);
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .premium-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 108, 208, 0.08) !important;
          border-color: rgba(0, 108, 208, 0.2);
        }

        .icon-wrapper {
          width: 90px;
          height: 90px;
          min-width: 90px;
          background: linear-gradient(135deg, #006CD0 0%, #004a91 100%);
          border-radius: 24px;
          color: white;
          font-size: 2.5rem;
          transition: all 0.4s ease;
        }

        .premium-card:hover .icon-wrapper {
          transform: scale(1.1);
          background: linear-gradient(135deg, #004a91 0%, #006CD0 100%);
        }

        .card-title {
          color: #1c1632;
          font-size: 1.75rem;
          letter-spacing: -0.02em;
        }

        .card-description {
          color: #64748b;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .card-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 4px;
          transition: width 0.4s ease;
          border-radius: 0 0 0 16px;
        }

        .accent-primary { background-color: #006CD0; }
        .accent-secondary { background-color: #3b82f6; }

        .premium-card:hover .card-accent {
          width: 100%;
          border-radius: 0 0 16px 16px;
        }

        @media (max-width: 768px) {
          .icon-wrapper {
            width: 80px;
            height: 80px;
            min-width: 80px;
            font-size: 2rem;
            border-radius: 20px;
          }
          .card-title {
            font-size: 1.5rem;
          }
          .card-description {
            font-size: 1rem;
          }
          .premium-card {
            padding: 2rem !important;
          }
        }

        @media (max-width: 576px) {
          .mission-vision-section {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default MissionVision;

