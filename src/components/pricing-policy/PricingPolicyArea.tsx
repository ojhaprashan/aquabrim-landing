'use client'
import React from 'react';

const PricingPolicyArea = () => {
  return (
    <section className="pricing-policy-area py-5">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="sidebar p-4 bg-white rounded-4 shadow-sm border border-light sticky-top" style={{ top: '100px', zIndex: 10 }}>
              <h6 className="text-uppercase text-muted mb-4 small fw-bold" style={{ letterSpacing: '1px' }}>On This Page</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#overview" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">1. Overview</a></li>
                <li className="mb-2"><a href="#pricing-structure" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">2. Custom Pricing</a></li>
                <li className="mb-2"><a href="#quotes" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">3. Quotations</a></li>
                <li className="mb-2"><a href="#taxes" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">4. Taxes & Charges</a></li>
                <li className="mb-2"><a href="#payments" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">5. Payment Terms</a></li>
                <li className="mb-2"><a href="#offers" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">6. Promotional Offers</a></li>
                <li className="mb-2"><a href="#accuracy" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">7. Pricing Accuracy</a></li>
                <li className="mb-2"><a href="#refunds" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">8. Refunds & Adjusts</a></li>
                <li className="mb-2"><a href="#updates" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">9. Policy Updates</a></li>
                <li className=""><a href="#contact" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">10. Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-9 ps-lg-5">
            <div className="content-wrap wow slideInRight">
              <p className="text-muted small mb-4 fw-medium">Last Updated: 20 May 2026</p>

              <div id="overview" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>1. Overview</h3>
                <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim provides customized water automation and smart water management solutions for residential, commercial, and industrial applications. As most solutions depend on project requirements, installation scope, and system configuration, product pricing is generally shared upon inquiry or consultation.
                </p>
                <p className="text-muted animate-box" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  By interacting with Aquabrim for products or services, customers agree to the terms outlined in this Pricing Policy.
                </p>
              </div>

              <div id="pricing-structure" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>2. Custom Pricing Structure</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Pricing for Aquabrim products and solutions may vary based on:
                </p>
                <ul className="list-unstyled mb-4 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Product model and configuration</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Site requirements</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Number of tanks or motors</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Automation scope</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Installation complexity</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Add-on features and integrations</li>
                </ul>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  For this reason, pricing may not always be displayed directly on the website. Customers can request product quotations, consultation support, and solution recommendations through Aquabrim's sales or support team.
                </p>
              </div>

              <div id="quotes" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>3. Quotations & Validity</h3>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Official quotations shared by Aquabrim:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Are valid only for the specified duration mentioned in the quotation</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> May vary depending on project scope or technical requirements</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Are subject to stock availability and operational conditions</li>
                </ul>
                <p className="text-muted mt-3 mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim reserves the right to revise quotations if there are changes in:
                </p>
                <ul className="list-unstyled mt-2 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Product specifications</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Site conditions</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Taxes or logistics costs</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Market pricing</li>
                </ul>
              </div>

              <div id="taxes" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>4. Taxes & Additional Charges</h3>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Applicable charges may include:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-plus-circle text-primary me-2"></i> GST and government taxes</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-plus-circle text-primary me-2"></i> Shipping or logistics charges</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-plus-circle text-primary me-2"></i> Installation and setup costs</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-plus-circle text-primary me-2"></i> AMC or service-related charges</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-plus-circle text-primary me-2"></i> Custom integration costs</li>
                </ul>
                <p className="text-muted mt-3 mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Final pricing details will be communicated during quotation sharing, consultation, or order confirmation.
                </p>
              </div>

              <div id="payments" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>5. Payment Terms</h3>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Orders and services may be processed only after:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-shield-check text-primary me-2"></i> Payment confirmation</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-shield-check text-primary me-2"></i> Advance payment (if applicable)</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-shield-check text-primary me-2"></i> Completion of required documentation</li>
                </ul>
                <p className="text-muted mt-3 mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim reserves the right to hold or cancel orders in case of payment issues, revise pricing before final confirmation, or decline services in case of incomplete payment compliance.
                </p>
              </div>

              <div id="offers" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>6. Promotional Offers</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  From time to time, Aquabrim may offer promotional campaigns, limited-time offers, bundle solutions, or service benefits.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Such offers:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-tags text-primary me-2"></i> Are subject to specific terms and timelines</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-tags text-primary me-2"></i> May be withdrawn or modified without prior notice</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-tags text-primary me-2"></i> Cannot be combined unless explicitly mentioned</li>
                </ul>
              </div>

              <div id="accuracy" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>7. Pricing Accuracy</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  While Aquabrim strives to maintain accurate information, occasional pricing or quotation errors may occur.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim reserves the right to:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Correct pricing inaccuracies</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Update quotations</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Modify product or service details without prior notice</li>
                </ul>
                <p className="text-muted mt-3 mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Customers will be informed in case any correction affects an active inquiry or order.
                </p>
              </div>

              <div id="refunds" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>8. Refunds & Adjustments</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Refund-related matters shall be governed by Aquabrim’s Refund Policy.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim does not guarantee:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Retroactive discounts</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Price matching</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Adjustments based on future pricing revisions</li>
                </ul>
              </div>

              <div id="updates" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>9. Policy Updates</h3>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim reserves the right to update or modify this Pricing Policy at any time without prior notice. Updated versions will be published on this page.
                </p>
              </div>

              <div id="contact" className="mb-5 pt-2">
                <h3 className="fw-bold mb-4" style={{ color: '#1c1632', fontSize: '28px' }}>10. Contact Us</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                  For quotations, pricing inquiries, or consultation requests, please contact:
                </p>

                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="contact-card p-4 rounded-4 shadow-sm text-center border border-light h-100">
                      <div className="icon-badge mx-auto mb-3 bg-light text-primary d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px' }}>
                        <i className="bi bi-envelope-fill fs-4"></i>
                      </div>
                      <h6 className="fw-bold mb-2">Email</h6>
                      <a href="mailto:save.water@aquabrim.com" className="text-decoration-none fw-medium" style={{ color: '#006CD0' }}>save.water@aquabrim.com</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="contact-card p-4 rounded-4 shadow-sm text-center border border-light h-100">
                      <div className="icon-badge mx-auto mb-3 bg-light text-primary d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px' }}>
                        <i className="bi bi-telephone-fill fs-4"></i>
                      </div>
                      <h6 className="fw-bold mb-2">Phone</h6>
                      <a href="tel:+919560088791" className="text-decoration-none fw-medium text-dark">+91 9560088791</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="contact-card p-4 rounded-4 shadow-sm text-center border border-light h-100">
                      <div className="icon-badge mx-auto mb-3 bg-light text-primary d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px' }}>
                        <i className="bi bi-geo-alt-fill fs-4"></i>
                      </div>
                      <h6 className="fw-bold mb-2">Address</h6>
                      <p className="text-muted small mb-0 fw-medium">Plot No. 35, 1st Floor, Union Bank of India Building, 100 Feet Road, Ghitorni, New Delhi – 110030</p>
                    </div>
                  </div>
                </div>
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
        .contact-card {
          background: #ffffff;
          transition: all 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 108, 208, 0.08) !important;
          border-color: rgba(0, 108, 208, 0.15) !important;
        }
      `}</style>
    </section>
  );
};

export default PricingPolicyArea;
