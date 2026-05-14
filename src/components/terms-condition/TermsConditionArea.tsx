'use client'
import React from 'react';

const TermsConditionArea = () => {
  return (
    <section className="terms-condition-area py-5">
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
                <li className="mb-2"><a href="#use-website" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Use of Website</a></li>
                <li className="mb-2"><a href="#product-usage" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Product Usage</a></li>
                <li className="mb-2"><a href="#orders-payments" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Orders & Payments</a></li>
                <li className="mb-2"><a href="#intellectual-property" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Intellectual Property</a></li>
                <li className="mb-2"><a href="#limitation-liability" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Limitation of Liability</a></li>
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
                  These Terms & Conditions govern your use of the Aquabrim website and the purchase of our products.
                </p>
              </div>

              <div id="use-website" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>2. Use of Website</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                  By using our website, you agree to:
                </p>
                <ul className="list-unstyled mb-5">
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    Provide accurate and complete information
                  </li>
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    Use the website for lawful purposes only
                  </li>
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    Not misuse or attempt to damage the website
                  </li>
                </ul>

                <div className="alert border-0 rounded-4 p-4 d-flex align-items-center gap-3" style={{ backgroundColor: '#f0f7ff' }}>
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', minWidth: '32px' }}>
                    <i className="bi bi-info-lg"></i>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-md-center gap-2">
                    <h6 className="fw-bold mb-0 text-dark">Note:</h6>
                    <p className="mb-0 text-muted" style={{ fontSize: '15px' }}>We reserve the right to update these terms at any time without prior notice.</p>
                  </div>
                </div>
              </div>

              <div id="product-usage" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>3. Product Usage</h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  Our products must be used according to the provided instructions and safety guidelines. Aquabrim is not liable for damages resulting from improper installation or use of the products in environments not specified in the product manual.
                </p>
              </div>

              <div id="intellectual-property" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>4. Intellectual Property</h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  All content, trademarks, and intellectual property on this website are the property of Aquabrim Private Limited. You may not reproduce, distribute, or use any materials without explicit written permission from us.
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
        .terms-condition-area {
           background-color: #ffffff;
        }
      `}</style>
    </section>
  );
};

export default TermsConditionArea;
