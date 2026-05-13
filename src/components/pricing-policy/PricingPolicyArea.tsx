'use client'
import React from 'react';

const PricingPolicyArea = () => {
  return (
    <section className="pricing-policy-area py-5">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3">
            <div className="sidebar p-4 bg-light rounded shadow-sm mb-4">
              <h6 className="text-uppercase text-muted mb-4 small fw-bold">On This Page</h6>
              <ul className="list-unstyled">
                <li className="mb-3"><a href="#overview" className="text-primary text-decoration-none fw-medium border-start border-primary ps-3 border-3">Overview</a></li>
                <li className="mb-3"><a href="#pricing-structure" className="text-dark text-decoration-none hover-primary ps-3">Pricing Structure</a></li>
                <li className="mb-3"><a href="#price-changes" className="text-dark text-decoration-none hover-primary ps-3">Price Changes</a></li>
                <li className="mb-3"><a href="#taxes" className="text-dark text-decoration-none hover-primary ps-3">Taxes & Fees</a></li>
                <li className="mb-3"><a href="#payment-terms" className="text-dark text-decoration-none hover-primary ps-3">Payment Terms</a></li>
                <li className="mb-3"><a href="#refunds" className="text-dark text-decoration-none hover-primary ps-3">Refunds</a></li>
                <li className="mb-3"><a href="#contact-us" className="text-dark text-decoration-none hover-primary ps-3">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-9 ps-lg-5">
            <div className="content-wrap">
              <p className="text-muted small mb-4">Last Updated: 11 May 2026</p>

              <div id="overview" className="mb-5">
                <h3 className="fw-bold text-primary mb-3">1. Overview</h3>
                <p className="lead text-muted fs-6">
                  At Aquabrim, we strive to offer transparent and fair pricing for all our products and services. 
                  This policy outlines how pricing is determined and communicated.
                </p>
              </div>

              <div id="pricing-structure" className="mb-5">
                <h3 className="fw-bold text-primary mb-3">2. Pricing Structure</h3>
                <p className="text-muted mb-4">
                  Our pricing is based on product type, features, technology, and support services. 
                  Prices may vary for different regions and distributors.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check2 text-primary fs-4 me-3"></i>
                    Competitive and value-based pricing
                  </li>
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check2 text-primary fs-4 me-3"></i>
                    Includes product, standard packaging, and basic support
                  </li>
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check2 text-primary fs-4 me-3"></i>
                    Custom solutions may have separate pricing
                  </li>
                </ul>

                <div className="alert alert-primary border-0 rounded-4 p-4 d-flex align-items-start gap-3" style={{ backgroundColor: '#eef6ff' }}>
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', minWidth: '28px', fontSize: '14px' }}>
                    <i className="bi bi-info"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Please Note:</h6>
                    <p className="mb-0 text-dark small">Prices displayed on our website are subject to change without prior notice.</p>
                  </div>
                </div>
              </div>

              {/* Placeholders for other sections to make it look "Perfectly" */}
              <div id="price-changes" className="mb-5">
                <h3 className="fw-bold text-primary mb-3">3. Price Changes</h3>
                <p className="text-muted">We reserve the right to adjust prices based on market conditions, raw material costs, and technological advancements. Any such changes will be reflected on our official website or communicated through our authorized channels.</p>
              </div>

              <div id="taxes" className="mb-5">
                <h3 className="fw-bold text-primary mb-3">4. Taxes & Fees</h3>
                <p className="text-muted">All prices are exclusive of applicable taxes unless stated otherwise. Shipping fees, installation charges, and other service-related costs will be added at checkout or provided in the formal quotation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hover-primary {
          transition: all 0.3s ease;
          border-start: 3px solid transparent;
        }
        .hover-primary:hover {
          color: #006CD0 !important;
          padding-left: 1.25rem !important;
        }
        .pricing-policy-area h3 {
          font-size: 1.75rem;
        }
      `}</style>
    </section>
  );
};

export default PricingPolicyArea;
