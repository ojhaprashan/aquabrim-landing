'use client';
import React from 'react';

const AboutPortfolio = () => {
  return (
    <section className="about-portfolio-section">
      <div className="container">
        {/* Top Row: Image and Core Description */}
        <div className="row align-items-center g-4 g-lg-5 mb-5">
          {/* Left Column: Image with premium decorative borders */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="portfolio-image-wrapper position-relative">
              <img
                src="/assets/about/about.png"
                alt="India's Leading Water Level Informatory System & Automation Solutions"
                style={{ objectFit: 'cover', borderRadius: '16px', width: '100%', height: 'auto' }}
                className="shadow-lg main-portfolio-img"
              />
            </div>
          </div>

          {/* Right Column: Core text description */}
          <div className="col-lg-6 col-md-12">
            <div className="portfolio-content text-start">
              <span className="subtitle text-uppercase text-primary fw-bold">About Aquabrim</span>
              <div className="title-line"></div>

              <h2 className="main-title fw-bold mb-4 mt-2">
                India’s Smart Water Automation Company
              </h2>

              <p className="description mb-3">
                Aquabrim is built to simplify and modernize the way water is monitored, controlled, and managed across residential, commercial, and industrial infrastructure.
              </p>
              <p className="description mb-3">
                Founded in 2008, Aquabrim has grown into one of India’s trusted water automation companies, delivering intelligent solutions that help reduce water wastage, improve operational efficiency, and enable smarter infrastructure management.
              </p>
              <p className="description mb-3">
                From wireless water level automation systems to advanced industrial monitoring technologies, we design solutions that combine engineering reliability with smart automation to solve real-world water management challenges.
              </p>
              <p className="description mb-0">
                With a strong focus on innovation, scalability, and long-term performance, Aquabrim continues to help homes, businesses, industries, and infrastructure projects transition toward smarter and more efficient water management systems.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row: Our Expertise (Full-Width Grid) */}
        <div className="row mt-5">
          <div className="col-12">
            <h4 className="portfolio-title fw-bold text-center mb-4">OUR EXPERTISE</h4>
            
            <div className="portfolio-list">
              {/* Item 1: Smart Water Automation */}
              <div className="portfolio-item-custom">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-broadcast" viewBox="0 0 16 16">
                      <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.122a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.314.5.5 0 1 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>
                  </div>
                  <span className="item-text-title fw-bold">Smart Water Automation</span>
                </div>
                <p className="item-text-desc text-muted mb-0">
                  Intelligent automation systems designed for efficient water monitoring and control.
                </p>
              </div>

              {/* Item 2: Industrial Monitoring Solutions */}
              <div className="portfolio-item-custom">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 6a1 1 0 0 1 1-1h3.5v1H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3.5v1H1a1 1 0 0 1-1-1V6zm11.5-1H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.5v-1H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3.5v-1z" />
                      <path d="M5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" />
                      <path d="M7.5 5h1V1.5h-1V5zM6 1.5h4v1H6v-1z" />
                    </svg>
                  </div>
                  <span className="item-text-title fw-bold">Industrial Monitoring Solutions</span>
                </div>
                <p className="item-text-desc text-muted mb-0">
                  Advanced sensing, flow management, and automation technologies for industrial infrastructure.
                </p>
              </div>

              {/* Item 3: System Integration & Services */}
              <div className="portfolio-item-custom">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                  </div>
                  <span className="item-text-title fw-bold">System Integration & Services</span>
                </div>
                <p className="item-text-desc text-muted mb-0">
                  End-to-end implementation, integration, and technical support for automation projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-portfolio-section {
          background-color: #ffffff;
          padding: 100px 0;
          overflow: hidden;
          width: 100% !important;
          display: block !important;
        }

        .portfolio-image-wrapper {
          border-radius: 16px;
          transition: all 0.4s ease;
          padding: 8px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .portfolio-image-wrapper::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          width: 80px;
          height: 80px;
          border-top: 4px solid #006CD0;
          border-left: 4px solid #006CD0;
          border-top-left-radius: 16px;
          z-index: 1;
          pointer-events: none;
        }

        .portfolio-image-wrapper::after {
          content: '';
          position: absolute;
          bottom: -10px;
          right: -10px;
          width: 80px;
          height: 80px;
          border-bottom: 4px solid #006CD0;
          border-right: 4px solid #006CD0;
          border-bottom-right-radius: 16px;
          z-index: 1;
          pointer-events: none;
        }

        .main-portfolio-img {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 4px solid #ffffff;
          display: block;
        }

        .portfolio-image-wrapper:hover .main-portfolio-img {
          transform: scale(1.02) translateY(-4px);
          box-shadow: 0 25px 50px rgba(0, 108, 208, 0.18) !important;
        }

        .subtitle {
          font-size: 0.95rem;
          letter-spacing: 1.5px;
          display: inline-block;
          margin-bottom: 4px;
        }

        .title-line {
          width: 60px;
          height: 3px;
          background-color: #006CD0;
          margin-bottom: 25px;
          border-radius: 2px;
        }

        .text-center .title-line {
          margin-left: auto;
          margin-right: auto;
        }

        @media (min-width: 992px) {
          .text-lg-start .title-line {
            margin-left: 0;
            margin-right: 0;
          }
        }

        .main-title {
          font-size: 2.3rem;
          color: #1c1632;
          line-height: 1.35;
          letter-spacing: -0.01em;
        }

        .description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #64748b;
        }

        .portfolio-title {
          font-size: 1.3rem;
          color: #006CD0;
          margin-top: 35px;
        }

        .portfolio-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .portfolio-item-custom {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 20px 24px;
          border-radius: 16px;
          background: #f8fafc;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(226, 232, 240, 0.6);
          text-align: left;
        }

        .portfolio-item-custom:hover {
          background: #ffffff;
          border-color: rgba(0, 108, 208, 0.2);
          box-shadow: 0 12px 30px rgba(0, 108, 208, 0.06);
          transform: translateX(8px);
        }

        .icon-badge {
          width: 48px;
          height: 48px;
          min-width: 48px;
          background: linear-gradient(135deg, #006CD0 0%, #004a91 100%);
          border-radius: 50%;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 6px 16px rgba(0, 108, 208, 0.2);
        }

        .portfolio-item-custom:hover .icon-badge {
          transform: rotate(12deg) scale(1.08);
          background: linear-gradient(135deg, #004a91 0%, #006CD0 100%);
        }

        .item-text-title {
          font-size: 1.15rem;
          color: #1e293b;
          line-height: 1.4;
        }

        .item-text-desc {
          font-size: 0.96rem;
          color: #64748b;
          line-height: 1.6;
          padding-left: 64px;
        }

        @media (min-width: 992px) {
          .portfolio-list {
            flex-direction: row;
            gap: 16px;
          }

          .portfolio-item-custom {
            flex: 1;
            padding: 16px;
          }

          .portfolio-item-custom:hover {
            transform: translateY(-8px);
          }

          .item-text-desc {
            padding-left: 0;
            margin-top: 8px;
          }
        }

        @media (max-width: 991px) {
          .about-portfolio-section {
            padding: 60px 0;
          }

          .main-title {
            font-size: 1.95rem;
          }

          .portfolio-image-wrapper {
            max-width: 500px;
            margin-top: 20px;
          }
        }

        @media (max-width: 575px) {
          .about-portfolio-section {
            padding: 50px 0;
          }

          .main-title {
            font-size: 1.5rem;
            line-height: 1.4;
          }

          .description {
            font-size: 1rem;
            line-height: 1.7;
          }

          .portfolio-title {
            font-size: 1.15rem;
            margin-top: 25px;
          }

          .portfolio-item-custom {
            padding: 16px;
          }

          .icon-badge {
            width: 42px;
            height: 42px;
            min-width: 42px;
          }

          .item-text-title {
            font-size: 1rem;
          }

          .item-text-desc {
            font-size: 0.9rem;
            padding-left: 0;
            margin-top: 4px;
          }

          .portfolio-image-wrapper::before,
          .portfolio-image-wrapper::after {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutPortfolio;
