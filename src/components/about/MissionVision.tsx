'use client';
import React from 'react';

const MissionVision = () => {
  return (
    <section className="mission-vision-section pb-5">
      <div className="container">
        <div className="mission-vision-wrapper p-4 p-md-5 rounded-4 shadow-sm border border-light-subtle" style={{ backgroundColor: '#f9fbfd' }}>
          <div className="row align-items-center">
            
            {/* Mission */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 border-end-lg">
              <div className="d-flex align-items-start p-2">
                <div className="icon-box me-4 rounded-circle d-flex align-items-center justify-content-center bg-white shadow-sm" style={{ width: '80px', height: '80px', minWidth: '80px' }}>
                  <i className="bi bi-bullseye text-primary fs-1"></i>
                </div>
                <div>
                  <h4 className="fw-bold mb-2" style={{ color: '#1c1632' }}>Our Mission</h4>
                  <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                    To make water management effortless, safe and efficient through smart automation solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical Divider for Desktop (handled by border-end-lg above and CSS) */}
            
            {/* Vision */}
            <div className="col-lg-6 col-md-12">
              <div className="d-flex align-items-start p-2 ms-lg-4">
                <div className="icon-box me-4 rounded-circle d-flex align-items-center justify-content-center bg-white shadow-sm" style={{ width: '80px', height: '80px', minWidth: '80px' }}>
                  <i className="bi bi-eye text-primary fs-1"></i>
                </div>
                <div>
                  <h4 className="fw-bold mb-2" style={{ color: '#1c1632' }}>Our Vision</h4>
                  <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                    To become the most trusted brand in water automation and contribute to a sustainable future.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .mission-vision-wrapper {
          transition: transform 0.3s ease;
        }
        .mission-vision-wrapper:hover {
          transform: translateY(-5px);
        }
        .icon-box i {
          transition: transform 0.3s ease;
        }
        .mission-vision-wrapper:hover .icon-box i {
          transform: scale(1.1);
        }
        
        @media (min-width: 992px) {
          .border-end-lg {
            border-right: 1px solid #e2e8f0 !important;
          }
        }
        @media (max-width: 991px) {
          .icon-box {
            width: 60px !important;
            height: 60px !important;
            min-width: 60px !important;
          }
          .icon-box i {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default MissionVision;
