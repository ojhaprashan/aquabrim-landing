'use client';
import React from 'react';
import Image from 'next/image';
import founders_img from "@/assets/images/team/founders.png";

const TeamAreaHomeOne = () => {
  return (
    <section className="team-section py-4 my-2" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h3 className="fw-bold h2" style={{ color: '#1c1632' }}>The People Behind Aquabrim</h3>
          </div>
        </div>

        <div className="row align-items-center g-4 g-lg-5">
          {/* Image Column */}
          <div className="col-lg-6 col-md-12">
            <div className="founders-thumb wow slideInLeft">
              <Image
                src={founders_img}
                alt="Aquabrim Founders"
                className="img-fluid rounded-4 shadow-sm"
                style={{ width: '100%', height: 'auto', maxWidth: '540px' }}
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-6 col-md-12">
            <div className="founders-content wow slideInRight">
              <p className="text-muted mb-3" style={{ lineHeight: '1.6', fontSize: '1rem' }}>
                Aquabrim was co-founded by two passionate engineers who saw a major gap in the water management industry – the lack of smart, reliable and user-friendly automation solutions.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: '1.6', fontSize: '1rem' }}>
                With a vision to build technology that truly helps people in their daily life, they created Aquabrim.
              </p>

              <div className="founder-grid d-flex align-items-center flex-wrap">
                <div className="founder-item pe-md-4 border-end-md">
                  <div className="founder-info">
                    <h5 className="fw-bold mb-0" style={{ color: '#1c1632', fontSize: '1.1rem' }}>Vigneshwaran S</h5>
                    <span className="text-primary fw-semibold" style={{ fontSize: '13px' }}>Co-founder & Director</span>
                  </div>
                </div>

                <div className="founder-item ps-md-4 mt-2 mt-md-0">
                  <div className="founder-info">
                    <h5 className="fw-bold mb-0" style={{ color: '#1c1632', fontSize: '1.1rem' }}>Praveen Kumar S</h5>
                    <span className="text-primary fw-semibold" style={{ fontSize: '13px' }}>Co-founder & Director</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .team-section {
            position: relative;
            z-index: 20;
            background: #fff;
            overflow: visible;
        }
        .founders-thumb img {
          transition: transform 0.5s ease;
        }
        .founders-thumb:hover img {
          transform: scale(1.02);
        }
        @media (min-width: 768px) {
          .border-end-md {
            border-right: 1px solid #e2e8f0;
          }
        }
        @media (max-width: 991px) {
          .founders-content {
            text-align: center;
            margin-top: 20px;
          }
          .founders-content p {
            margin-bottom: 15px !important;
          }
          .founder-grid {
            justify-content: center;
          }
          .founder-item {
            padding: 0 15px !important;
          }
        }
        @media (max-width: 767px) {
          .founder-grid {
            flex-direction: column;
          }
          .founder-info h5 {
            font-size: 1.1rem !important;
          }
          .founder-info span {
            font-size: 13px !important;
          }
          .founder-item {
            width: 100%;
            margin-bottom: 20px;
            padding: 0 !important;
            border-right: none !important;
          }
          .border-end-md {
            border-right: none;
          }
          .team-section {
            padding: 40px 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamAreaHomeOne;
