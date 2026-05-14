'use client'
import React from 'react';

const RefundPolicyArea = () => {
  return (
    <section className="refund-policy-area py-5">
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
                <li className="mb-2"><a href="#eligibility" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Eligibility</a></li>
                <li className="mb-2"><a href="#request-process" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">How to Request</a></li>
                <li className="mb-2"><a href="#refund-timeline" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Refund Process</a></li>
                <li className="mb-2"><a href="#non-refundable" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Non-Refundable Items</a></li>
                <li className="mb-2"><a href="#important-notes" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Important Notes</a></li>
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
                  We want you to be completely satisfied with your Aquabrim purchase. If you are not satisfied, 
                  we offer a fair and transparent refund process.
                </p>
              </div>

              <div id="eligibility" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>2. Eligibility for Refund</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                  You may be eligible for a refund if:
                </p>
                <ul className="list-unstyled mb-5">
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    The product is defective or not functioning as described
                  </li>
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    The request is raised within 7 days of delivery
                  </li>
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    The product is unused and in original condition with all accessories
                  </li>
                </ul>

                <div className="alert border-0 rounded-4 p-4 d-flex align-items-center gap-3" style={{ backgroundColor: '#f0fdf4' }}>
                  <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', minWidth: '32px' }}>
                    <i className="bi bi-info-lg"></i>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-md-center gap-2">
                    <h6 className="fw-bold mb-0 text-success">Important:</h6>
                    <p className="mb-0 text-muted" style={{ fontSize: '15px' }}>Refunds are not applicable for products damaged due to misuse or improper installation.</p>
                  </div>
                </div>
              </div>

              <div id="request-process" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>3. How to Request a Refund</h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  To initiate a refund, please contact our support team through the official contact form or email us at support@aquabrim.com with your order details and reason for the request. Our team will review your request and get back to you within 2-3 business days.
                </p>
              </div>

              <div id="refund-timeline" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>4. Refund Process & Timeline</h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  Once your refund request is approved, the product must be returned to our warehouse. After receiving and inspecting the product, the refund will be processed to your original payment method within 7-10 business days.
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
        .refund-policy-area {
           background-color: #ffffff;
        }
      `}</style>
    </section>
  );
};

export default RefundPolicyArea;
