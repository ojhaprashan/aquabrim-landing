'use client'
import React from 'react';

const PrivacyPolicyArea = () => {
  return (
    <section className="privacy-policy-area py-5">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="sidebar p-4 bg-white rounded-4 shadow-sm border border-light sticky-top" style={{ top: '100px' }}>
              <h6 className="text-uppercase text-muted mb-4 small fw-bold" style={{ letterSpacing: '1px' }}>On This Page</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#overview" className="d-block p-3 rounded-3 text-primary text-decoration-none fw-bold shadow-sm" style={{ backgroundColor: '#f0f7ff', borderLeft: '4px solid #006CD0' }}>
                    Overview
                  </a>
                </li>
                <li className="mb-2"><a href="#info-collect" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Information We Collect</a></li>
                <li className="mb-2"><a href="#how-use" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">How We Use</a></li>
                <li className="mb-2"><a href="#data-protection" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Data Protection</a></li>
                <li className="mb-2"><a href="#cookies" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Cookies</a></li>
                <li className="mb-2"><a href="#your-rights" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Your Rights</a></li>
                <li className=""><a href="#contact-us" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-9 ps-lg-5">
            <div className="content-wrap wow slideInRight">
              <p className="text-muted small mb-4 fw-medium">Last Updated: 11 May 2026</p>

              <div id="overview" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>1. Overview</h3>
                <p className="lead text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                  Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
                </p>
              </div>

              <div id="info-collect" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>2. Information We Collect</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                  We may collect the following information:
                </p>
                <ul className="list-unstyled mb-5">
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    Name, email, phone number
                  </li>
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    Company or organization details
                  </li>
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    Usage data and device information
                  </li>
                </ul>

                <div className="alert border-0 rounded-4 p-4 d-flex align-items-center gap-3" style={{ backgroundColor: '#f0fdf4' }}>
                  <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', minWidth: '32px' }}>
                    <i className="bi bi-info-lg"></i>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-md-center gap-2">
                    <h6 className="fw-bold mb-0 text-success">Important:</h6>
                    <p className="mb-0 text-muted" style={{ fontSize: '15px' }}>We do not sell or share your personal information with third parties.</p>
                  </div>
                </div>
              </div>

              <div id="how-use" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>3. How We Use Information</h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  The information we collect is used to provide and improve our services, communicate with you regarding your orders, and ensure a personalized experience. We also use data for internal analytics to understand user behavior and optimize our platform.
                </p>
              </div>

              <div id="data-protection" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>4. Data Protection</h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. Our systems are regularly audited to maintain the highest standards of data security and privacy compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hover-sidebar {
          transition: all 0.2s ease;
        }
        .hover-sidebar:hover {
          background-color: #f8fafc;
          color: #006CD0 !important;
          padding-left: 1.5rem !important;
        }
        .privacy-policy-area {
           background-color: #ffffff;
        }
      `}</style>
    </section>
  );
};

export default PrivacyPolicyArea;
