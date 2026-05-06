'use client';
import Accordion from '@/components/common/Accordion'; 
import React from 'react';
const PricingAreaHomeOne = () => {
  return (
    <>
      <div className="pricing-section py-5 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="section-title">
                <div className="section-sub-title pricing wow animate__fadeInDown">
                  <h4 className="text-primary text-uppercase fw-bold mb-2" style={{ fontSize: '18px' }}>FAQ</h4>
                </div>
                <div className="section-main-title pricing wow animate__fadeInUp mb-4">
                  <h2 className="display-6 fw-bold">Want to Ask Something <br /> from Us?</h2>
                </div>
              </div>
              <Accordion /> 
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="support-card-wrapper wow animate__fadeInRight">
                <div className="support-card p-3 p-md-5 bg-white rounded-4 border border-light text-center mx-auto overflow-hidden" style={{ maxWidth: '100%' }}>
                  <div className="support-icon-box mb-4 d-inline-flex align-items-center justify-content-center rounded-circle" 
                       style={{ width: '100px', height: '100px', backgroundColor: '#f8faff' }}>
                    <i className="bi bi-headset text-primary" style={{ fontSize: '40px' }}></i>
                  </div>
                  
                  <h3 className="fw-bold mb-3">Still Have Questions?</h3>
                  <p className="text-muted mb-4">Our team is here to help you find the right solution for your water automation needs.</p>
                  
                  <ul className="list-unstyled text-start d-inline-block mb-4">
                    <li className="mb-3 d-flex align-items-center">
                      <div className="icon-circle me-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '32px', height: '32px', backgroundColor: '#f8f9fa' }}>
                        <i className="bi bi-chat-dots text-primary" style={{ fontSize: '14px' }}></i>
                      </div>
                      <span className="fw-semibold">Expert Support</span>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <div className="icon-circle me-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '32px', height: '32px', backgroundColor: '#f8f9fa' }}>
                        <i className="bi bi-lightning text-primary" style={{ fontSize: '14px' }}></i>
                      </div>
                      <span className="fw-semibold">Quick Response</span>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <div className="icon-circle me-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '32px', height: '32px', backgroundColor: '#f8f9fa' }}>
                        <i className="bi bi-tools text-primary" style={{ fontSize: '14px' }}></i>
                      </div>
                      <span className="fw-semibold">Installation Guidance</span>
                    </li>
                  </ul>
                  
                  <div className="solar-btn d-grid">
                    <a href="/contact" className="btn btn-primary py-3 fw-bold shadow-sm d-flex align-items-center justify-content-center">
                      Get in Touch <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .support-card {
            transition: all 0.3s ease;
          }
          .support-card:hover {
            border-color: #007bff33 !important;
          }
          .icon-circle {
            transition: all 0.3s ease;
          }
          .support-card:hover .icon-circle {
            background-color: #007bff;
          }
          .support-card:hover .icon-circle i {
            color: white !important;
          }
          @media (max-width: 767px) {
            .section-main-title h2 {
              font-size: 28px !important;
            }
            .support-card h3 {
              font-size: 22px !important;
            }
            .support-icon-box {
              width: 80px !important;
              height: 80px !important;
            }
            .support-icon-box i {
              font-size: 30px !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default PricingAreaHomeOne;