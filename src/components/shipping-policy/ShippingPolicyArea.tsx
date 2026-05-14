'use client'
import React from 'react';

const ShippingPolicyArea = () => {
  return (
    <section className="shipping-policy-area py-5">
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
                <li className="mb-2"><a href="#processing-time" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Processing Time</a></li>
                <li className="mb-2"><a href="#shipping-methods" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Shipping Methods</a></li>
                <li className="mb-2"><a href="#delivery-time" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Delivery Time</a></li>
                <li className="mb-2"><a href="#shipping-charges" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Shipping Charges</a></li>
                <li className="mb-2"><a href="#tracking" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Tracking</a></li>
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
                  We ensure safe and timely delivery of all Aquabrim products. 
                  This policy explains our shipping methods, timelines, and charges.
                </p>
              </div>

              <div id="processing-time" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>2. Processing Time</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                  Orders are processed within 1-2 business days after payment confirmation.
                </p>
                <ul className="list-unstyled mb-5">
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    Orders placed on weekends/holidays processed on next working day
                  </li>
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    You will receive a confirmation email with order details
                  </li>
                </ul>

                <div className="alert border-0 rounded-4 p-4 d-flex align-items-center gap-3" style={{ backgroundColor: '#f0f7ff' }}>
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', minWidth: '32px' }}>
                    <i className="bi bi-info-lg"></i>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-md-center gap-2">
                    <h6 className="fw-bold mb-0 text-dark">Note:</h6>
                    <p className="mb-0 text-muted" style={{ fontSize: '15px' }}>Delivery times may vary based on location and external courier service.</p>
                  </div>
                </div>
              </div>

              <div id="shipping-methods" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>3. Shipping Methods</h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  We partner with leading logistics providers to ensure your products reach you safely. Depending on your location, we offer standard and express shipping options. The available methods will be displayed during the checkout process.
                </p>
              </div>

              <div id="delivery-time" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>4. Delivery Time</h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  Standard delivery typically takes 3-7 business days across India. Remote locations may take slightly longer. We always strive to deliver your order as quickly as possible.
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
        .shipping-policy-area {
           background-color: #ffffff;
        }
      `}</style>
    </section>
  );
};

export default ShippingPolicyArea;
