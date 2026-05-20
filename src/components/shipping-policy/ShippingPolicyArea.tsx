'use client'
import React from 'react';

const ShippingPolicyArea = () => {
  return (
    <section className="shipping-policy-area py-5">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="sidebar p-4 bg-white rounded-4 shadow-sm border border-light sticky-top" style={{ top: '100px', zIndex: 10 }}>
              <h6 className="text-uppercase text-muted mb-4 small fw-bold" style={{ letterSpacing: '1px' }}>On This Page</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#overview" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">1. Overview</a></li>
                <li className="mb-2"><a href="#processing" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">2. Order Processing</a></li>
                <li className="mb-2"><a href="#shipping" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">3. Shipping & Delivery</a></li>
                <li className="mb-2"><a href="#timelines" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">4. Delivery Timelines</a></li>
                <li className="mb-2"><a href="#charges" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">5. Shipping Charges</a></li>
                <li className="mb-2"><a href="#tracking" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">6. Tracking & Support</a></li>
                <li className="mb-2"><a href="#incorrect-info" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">7. Incorrect Address</a></li>
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
                  Aquabrim is committed to delivering products safely and efficiently across India. All orders are processed and shipped through trusted courier partners and postal services to ensure timely delivery.
                </p>
                <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Please review our shipping policy carefully before placing an order.
                </p>
              </div>

              <div id="processing" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>2. Order Processing</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Orders are generally processed and dispatched within 7 business days from:
                </p>
                <ul className="list-unstyled mb-4 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Order confirmation, or</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Successful payment completion</li>
                </ul>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Delivery timelines may vary depending on:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-box-seam text-primary me-2"></i> Product availability</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-geo-alt text-primary me-2"></i> Delivery location</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-truck text-primary me-2"></i> Courier partner operations</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-calendar-x text-primary me-2"></i> Public holidays or unforeseen circumstances</li>
                </ul>
              </div>

              <div id="shipping" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>3. Shipping & Delivery</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  All orders are shipped through registered domestic courier companies and/or speed post services.
                </p>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Products will be delivered to the shipping address provided by the customer during checkout. Customers are requested to ensure that all shipping details entered are accurate and complete.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Once the order is shipped, delivery updates and confirmations may be shared through:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-envelope text-primary me-2"></i> Email</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-chat-left-text text-primary me-2"></i> SMS</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-telephone text-primary me-2"></i> Phone communication</li>
                </ul>
              </div>

              <div id="timelines" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>4. Delivery Timelines</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Estimated delivery timelines may vary based on:
                </p>
                <ul className="list-unstyled mb-4 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> City or region</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Courier partner serviceability</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Operational or logistical delays</li>
                </ul>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  While Aquabrim strives for timely delivery, we are not responsible for delays caused by:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Courier companies</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Postal authorities</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Weather conditions</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Natural events or unforeseen disruptions</li>
                </ul>
              </div>

              <div id="charges" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>5. Shipping Charges</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Shipping charges, if applicable, will be displayed during checkout or order confirmation.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Unless otherwise specified:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-exclamation-triangle text-warning me-2"></i> Shipping and handling charges are non-refundable</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-exclamation-triangle text-warning me-2"></i> Additional delivery charges for remote locations may apply</li>
                </ul>
              </div>

              <div id="tracking" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>6. Order Tracking & Support</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  For order tracking or shipping-related assistance, customers may contact our support team with their order details.
                </p>
                
                <div className="alert alert-primary border-0 rounded-4 p-4 mb-0" style={{ backgroundColor: '#f0f7ff' }}>
                  <h6 className="fw-bold text-dark mb-3"><i className="bi bi-headset me-2 text-primary"></i> Contact Support</h6>
                  <p className="mb-2 text-muted"><strong>Phone:</strong> +91 9560088791</p>
                  <p className="mb-0 text-muted"><strong>Email:</strong> <a href="mailto:save.water@aquabrim.com" className="text-decoration-none" style={{ color: '#006CD0' }}>save.water@aquabrim.com</a></p>
                </div>
              </div>

              <div id="incorrect-info" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>7. Incorrect Shipping Information</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim shall not be responsible for delivery issues arising due to:
                </p>
                <ul className="list-unstyled mb-4 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Incorrect address details</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Incomplete contact information</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Customer unavailability during delivery</li>
                </ul>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Customers are advised to verify shipping information before confirming the order.
                </p>
              </div>

              <div id="updates" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>8. Policy Updates</h3>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim reserves the right to modify or update this Shipping Policy at any time without prior notice. Updated versions will be available on this page.
                </p>
              </div>

              <div id="contact" className="mb-5 pt-2">
                <h3 className="fw-bold mb-4" style={{ color: '#1c1632', fontSize: '28px' }}>9. Contact Us</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                  For shipping-related queries or support, please contact:
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
        .shipping-policy-area {
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

export default ShippingPolicyArea;
