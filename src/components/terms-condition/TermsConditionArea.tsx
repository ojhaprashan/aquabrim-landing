'use client'
import React from 'react';

const TermsConditionArea = () => {
  return (
    <section className="terms-condition-area py-5">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="sidebar p-4 bg-white rounded-4 shadow-sm border border-light sticky-top" style={{ top: '100px', zIndex: 10 }}>
              <h6 className="text-uppercase text-muted mb-4 small fw-bold" style={{ letterSpacing: '1px' }}>On This Page</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#overview" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">1. Overview</a></li>
                <li className="mb-2"><a href="#acceptance" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">2. Acceptance</a></li>
                <li className="mb-2"><a href="#company" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">3. Company Info</a></li>
                <li className="mb-2"><a href="#website-use" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">4. Use of Website</a></li>
                <li className="mb-2"><a href="#product-info" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">5. Product Info</a></li>
                <li className="mb-2"><a href="#pricing-payments" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">6. Pricing & Payments</a></li>
                <li className="mb-2"><a href="#intellectual-property" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">7. Intellectual Property</a></li>
                <li className="mb-2"><a href="#links" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">8. Third-Party Links</a></li>
                <li className="mb-2"><a href="#liability" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">9. Liability Limit</a></li>
                <li className="mb-2"><a href="#responsibilities" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">10. User Conduct</a></li>
                <li className="mb-2"><a href="#force-majeure" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">11. Force Majeure</a></li>
                <li className="mb-2"><a href="#governing-law" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">12. Governing Law</a></li>
                <li className="mb-2"><a href="#changes" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">13. Changes to Terms</a></li>
                <li className=""><a href="#contact" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">14. Contact Us</a></li>
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
                  Welcome to Aquabrim. By accessing or using our website, products, services, or platform, you agree to comply with and be bound by the following Terms & Conditions.
                </p>
                <p className="text-muted animate-box" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  These terms govern your use of the Aquabrim website and all related services, products, content, and communications provided by Aquabrim Home Appliance Pvt. Ltd.
                </p>
                <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Please read these terms carefully before using the platform.
                </p>
              </div>

              <div id="acceptance" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>2. Acceptance of Terms</h3>
                <p className="text-muted mb-3">By accessing, browsing, or using this website, you acknowledge that:</p>
                <ul className="list-unstyled mb-4 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> You have read and understood these Terms & Conditions</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> You agree to comply with all applicable policies and guidelines</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> You are legally authorized to enter into this agreement</li>
                </ul>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  If you do not agree with any part of these terms, please discontinue use of the website and services.
                </p>
              </div>

              <div id="company" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>3. Company Information</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  This platform is owned and operated by:
                </p>
                
                <div className="alert alert-primary border-0 rounded-4 p-4 mb-0" style={{ backgroundColor: '#f0f7ff' }}>
                  <h6 className="fw-bold text-dark mb-2">AQUABRIM HOME APPLIANCE PVT. LTD.</h6>
                  <p className="mb-0 text-muted">
                    <strong>Registered Office:</strong> 1st Floor, Khasra No. 369, 370, 371 & 382, 100 Feet Road, MG Road, Ghitorni Village, New Delhi – 110030, India
                  </p>
                </div>
              </div>

              <div id="website-use" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>4. Use of Website & Services</h3>
                <p className="text-muted mb-3">Users agree to:</p>
                <ul className="list-unstyled mb-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Provide accurate and complete information when submitting forms or inquiries</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Use the website and services only for lawful purposes</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Avoid any misuse, unauthorized access, or disruption of the platform</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Not attempt to copy, reproduce, or exploit website content without permission</li>
                </ul>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim reserves the right to restrict or terminate access if misuse or violation of terms is detected.
                </p>
              </div>

              <div id="product-info" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>5. Product & Service Information</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim strives to ensure that all product, service, and technical information displayed on the website is accurate and updated.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  However:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Information may occasionally contain errors or inaccuracies</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Product specifications and availability may change without prior notice</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Visuals, diagrams, and representations are for reference purposes only</li>
                </ul>
                <p className="text-muted mt-3 mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Users are advised to independently verify product suitability for their specific requirements.
                </p>
              </div>

              <div id="pricing-payments" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>6. Pricing & Payments</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  All pricing, quotations, and service charges displayed or communicated by Aquabrim are subject to change without prior notice.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  By placing an order or availing services, users agree to:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-wallet2 text-primary me-2 fs-5"></i> Pay applicable charges</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-credit-card text-primary me-2 fs-5"></i> Provide valid payment information</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-clipboard-check text-primary me-2 fs-5"></i> Comply with applicable payment terms</li>
                </ul>
              </div>

              <div id="intellectual-property" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>7. Intellectual Property Rights</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  All content available on this platform, including:
                </p>
                <ul className="list-unstyled mb-4 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Website design</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Graphics and product content</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Logos and branding elements</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Images and technical materials</li>
                </ul>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  are the intellectual property of Aquabrim unless otherwise stated.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Unauthorized use, reproduction, or distribution of website content is strictly prohibited.
                </p>
              </div>

              <div id="links" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>8. Third-Party Links</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  The website may contain links to external or third-party websites for informational purposes.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim is not responsible for:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Third-party content</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Website availability</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-x-circle text-danger me-2"></i> Privacy practices and external policies</li>
                </ul>
                <p className="text-muted mt-3 mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Users accessing third-party links do so at their own discretion and risk.
                </p>
              </div>

              <div id="liability" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>9. Limitation of Liability</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim shall not be held liable for:
                </p>
                <ul className="list-unstyled mb-4 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-exclamation-octagon text-warning me-2"></i> Direct or indirect damages</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-exclamation-octagon text-warning me-2"></i> Service interruptions or technical errors</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-exclamation-octagon text-warning me-2"></i> Data loss or logistical delays</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-exclamation-octagon text-warning me-2"></i> Misuse of products or services</li>
                </ul>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Use of the website and services is entirely at the user’s own risk.
                </p>
              </div>

              <div id="responsibilities" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>10. User Responsibilities</h3>
                <p className="text-muted mb-3">Users agree not to:</p>
                <ul className="list-unstyled mb-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-shield-slash text-danger me-2"></i> Use the platform for unlawful activities</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-shield-slash text-danger me-2"></i> Attempt unauthorized access to systems or data</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-shield-slash text-danger me-2"></i> Interfere with website functionality or security</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-shield-slash text-danger me-2"></i> Upload malicious software or harmful content</li>
                </ul>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Violation of these conditions may result in legal action or restricted access.
                </p>
              </div>

              <div id="force-majeure" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>11. Force Majeure</h3>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim shall not be held responsible for delays or failure in performance caused by circumstances beyond reasonable control, including natural disasters, power failures, government restrictions, network disruptions, technical failures, or acts of God.
                </p>
              </div>

              <div id="governing-law" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>12. Governing Law & Jurisdiction</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  These Terms & Conditions shall be governed and interpreted in accordance with the laws of India.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Any disputes arising from the use of this platform shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.
                </p>
              </div>

              <div id="changes" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>13. Changes to Terms</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim reserves the right to update, modify, or revise these Terms & Conditions at any time without prior notice.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Users are encouraged to review this page periodically for updates.
                </p>
              </div>

              <div id="contact" className="mb-5 pt-2">
                <h3 className="fw-bold mb-4" style={{ color: '#1c1632', fontSize: '28px' }}>14. Contact Us</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                  For any questions, concerns, or legal communications regarding these Terms & Conditions, please contact:
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
        .terms-condition-area {
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

export default TermsConditionArea;
