'use client'
import React from 'react';

const RefundPolicyArea = () => {
  return (
    <section className="refund-policy-area py-5">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="sidebar p-4 bg-white rounded-4 shadow-sm border border-light sticky-top" style={{ top: '100px', zIndex: 10 }}>
              <h6 className="text-uppercase text-muted mb-4 small fw-bold" style={{ letterSpacing: '1px' }}>On This Page</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#overview" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">1. Overview</a></li>
                <li className="mb-2"><a href="#eligibility" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">2. Refund Eligibility</a></li>
                <li className="mb-2"><a href="#request" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">3. How to Request</a></li>
                <li className="mb-2"><a href="#process" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">4. Approval Process</a></li>
                <li className="mb-2"><a href="#timeline" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">5. Refund Timeline</a></li>
                <li className="mb-2"><a href="#non-refundable" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">6. Non-Refundable</a></li>
                <li className="mb-2"><a href="#damaged" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">7. Damaged/Defective</a></li>
                <li className="mb-2"><a href="#updates" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">8. Policy Updates</a></li>
                <li className=""><a href="#contact" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">9. Contact Us</a></li>
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
                  At Aquabrim, customer satisfaction is important to us. If you experience any issue with your purchase, we offer a transparent and hassle-free refund process subject to the terms outlined below.
                </p>
                <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Please review our refund policy carefully before initiating a request.
                </p>
              </div>

              <div id="eligibility" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>2. Refund Eligibility</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Refund requests may be considered under the following conditions:
                </p>
                <ul className="list-unstyled mb-4 ps-3">
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-check-circle-fill text-primary me-3 mt-1" style={{ fontSize: '12px' }}></i> The product must be returned in its original condition</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-check-circle-fill text-primary me-3 mt-1" style={{ fontSize: '12px' }}></i> The item should be unused and free from physical damage</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-check-circle-fill text-primary me-3 mt-1" style={{ fontSize: '12px' }}></i> Original packaging, accessories, and documents must be included</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-check-circle-fill text-primary me-3 mt-1" style={{ fontSize: '12px' }}></i> Refund requests must be raised within 7 days of product delivery</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-check-circle-fill text-primary me-3 mt-1" style={{ fontSize: '12px' }}></i> Refund approval is subject to product inspection and verification by Aquabrim</li>
                </ul>
                <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Products that do not meet these conditions may not qualify for a refund.
                </p>
              </div>

              <div id="request" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>3. How to Request a Refund</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  To initiate a refund request, customers can contact our support team with the following details:
                </p>
                <ul className="list-unstyled mb-4 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Order number</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Reason for refund request</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Supporting images or videos (if applicable)</li>
                </ul>

                <div className="alert alert-primary border-0 rounded-4 p-4 mb-0" style={{ backgroundColor: '#f0f7ff' }}>
                  <h6 className="fw-bold text-dark mb-3"><i className="bi bi-headset me-2 text-primary"></i> Contact Support</h6>
                  <p className="mb-2 text-muted"><strong>Phone:</strong> +91 9560088791</p>
                  <p className="mb-2 text-muted"><strong>Email:</strong> <a href="mailto:save.water@aquabrim.com" className="text-decoration-none" style={{ color: '#006CD0' }}>save.water@aquabrim.com</a></p>
                  <p className="mb-0 text-muted" style={{ fontSize: '15px' }}>Once the request is received, our team will review the details and provide an update on the approval status within a reasonable timeframe.</p>
                </div>
              </div>

              <div id="process" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>4. Refund Approval Process</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Refunds are processed only after the returned product successfully passes inspection and meets the eligibility criteria mentioned above.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  If approved:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> The refund amount will be credited to the original payment method used during purchase</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Customers will receive confirmation once the refund has been initiated</li>
                </ul>
              </div>

              <div id="timeline" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>5. Refund Timeline</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Approved refunds are generally processed within 7 business days.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  The final credit timeline may vary depending on:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-calendar-event text-primary me-2"></i> Bank processing time</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-card-checklist text-primary me-2"></i> Payment gateway policies</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-wallet2 text-primary me-2"></i> Original payment method used</li>
                </ul>
              </div>

              <div id="non-refundable" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>6. Non-Refundable Conditions</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Refunds may not be applicable in the following situations:
                </p>
                <ul className="list-unstyled mb-4 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Products returned in damaged or used condition</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Missing packaging, accessories, or components</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Customized or special-order products</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Physical damage caused after delivery</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Requests raised beyond the eligible return period</li>
                </ul>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Shipping charges, handling fees, or processing charges are non-refundable unless the product received is damaged or defective.
                </p>
              </div>

              <div id="damaged" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>7. Damaged or Defective Products</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  If you receive a damaged, defective, or incorrect product, please contact our support team immediately with supporting photos or videos.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Our team will review the issue and provide an appropriate resolution, which may include:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right-circle text-primary me-2"></i> Replacement</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right-circle text-primary me-2"></i> Repair support</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right-circle text-primary me-2"></i> Refund approval</li>
                </ul>
              </div>

              <div id="updates" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>8. Policy Updates</h3>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim reserves the right to modify, update, or revise this Refund Policy at any time without prior notice. Updated versions will be published on this page.
                </p>
              </div>

              <div id="contact" className="mb-5 pt-2">
                <h3 className="fw-bold mb-4" style={{ color: '#1c1632', fontSize: '28px' }}>9. Contact Us</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                  For any refund-related queries or assistance, please contact:
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
        .refund-policy-area {
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

export default RefundPolicyArea;
