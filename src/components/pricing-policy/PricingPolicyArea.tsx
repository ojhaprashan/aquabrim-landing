'use client'
import React from 'react';

const PricingPolicyArea = () => {
  return (
    <section className="pricing-policy-area py-5">
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
                <li className="mb-2"><a href="#pricing-structure" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Pricing Structure</a></li>
                <li className="mb-2"><a href="#price-changes" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Price Changes</a></li>
                <li className="mb-2"><a href="#taxes" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Taxes & Fees</a></li>
                <li className="mb-2"><a href="#payment-terms" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Payment Terms</a></li>
                <li className="mb-2"><a href="#refunds" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Refunds</a></li>
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
                  At Aquabrim, we strive to offer transparent and fair pricing for all our products and services. 
                  This policy outlines how pricing is determined and communicated.
                </p>
              </div>

              <div id="pricing-structure" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>2. Pricing Structure</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                  Our pricing is based on product type, features, technology, and support services. 
                  Prices may vary for different regions and distributors.
                </p>
                <ul className="list-unstyled mb-5">
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check2 text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    Competitive and value-based pricing
                  </li>
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check2 text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    Includes product, standard packaging, and basic support
                  </li>
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check2 text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    Custom solutions may have separate pricing
                  </li>
                </ul>

                <div className="alert alert-primary border-0 rounded-4 p-4 d-flex align-items-center gap-3" style={{ backgroundColor: '#f0f7ff' }}>
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', minWidth: '32px' }}>
                    <i className="bi bi-info-lg"></i>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-md-center gap-2">
                    <h6 className="fw-bold mb-0 text-dark">Please Note:</h6>
                    <p className="mb-0 text-muted" style={{ fontSize: '15px' }}>Prices displayed on our website are subject to change without prior notice.</p>
                  </div>
                </div>
              </div>

              <div id="price-changes" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>3. Price Changes</h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>We reserve the right to adjust prices based on market conditions, raw material costs, and technological advancements. Any such changes will be reflected on our official website or communicated through our authorized channels.</p>
              </div>

              <div id="taxes" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>4. Taxes & Fees</h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>All prices are exclusive of applicable taxes unless stated otherwise. Shipping fees, installation charges, and other service-related costs will be added at checkout or provided in the formal quotation.</p>
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
        .pricing-policy-area {
           background-color: #ffffff;
        }
      `}</style>
    </section>
  );
};

export default PricingPolicyArea;
