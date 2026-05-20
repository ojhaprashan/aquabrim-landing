'use client'
import React from 'react';

const PrivacyPolicyArea = () => {
  return (
    <section className="privacy-policy-area py-5">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="sidebar p-4 bg-white rounded-4 shadow-sm border border-light sticky-top" style={{ top: '100px', zIndex: 10 }}>
              <h6 className="text-uppercase text-muted mb-4 small fw-bold" style={{ letterSpacing: '1px' }}>On This Page</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#overview" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">1. Overview</a></li>
                <li className="mb-2"><a href="#collect" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">2. Information We Collect</a></li>
                <li className="mb-2"><a href="#use" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">3. How We Use Information</a></li>
                <li className="mb-2"><a href="#sharing" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">4. Data Sharing & Disclosure</a></li>
                <li className="mb-2"><a href="#cookies" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">5. Cookies & Tracking</a></li>
                <li className="mb-2"><a href="#security" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">6. Data Security</a></li>
                <li className="mb-2"><a href="#rights" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">7. Your Rights</a></li>
                <li className="mb-2"><a href="#links" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">8. Third-Party Links</a></li>
                <li className="mb-2"><a href="#children" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">9. Children’s Privacy</a></li>
                <li className="mb-2"><a href="#updates" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">10. Policy Updates</a></li>
                <li className=""><a href="#contact" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">11. Contact Us</a></li>
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
                  At Aquabrim, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website, interact with our services, or use our products.
                </p>
              </div>

              <div id="collect" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>2. Information We Collect</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  We may collect personal and non-personal information when you interact with our website or services.
                </p>
                
                <h5 className="fw-bold text-dark mb-3">Personal Information</h5>
                <p className="text-muted mb-3">This may include:</p>
                <ul className="list-unstyled mb-4 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Name</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Email address</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Phone number</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Billing or mailing address</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Company details</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Payment information</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Information submitted through contact or inquiry forms</li>
                </ul>

                <h5 className="fw-bold text-dark mb-3">Non-Personal Information</h5>
                <p className="text-muted mb-3">This may include:</p>
                <ul className="list-unstyled mb-0 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Browser and device information</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> IP address</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Website usage data</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Pages visited and session activity</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '6px' }}></i> Cookies and analytics data</li>
                </ul>
              </div>

              <div id="use" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>3. How We Use Your Information</h3>
                <p className="text-muted mb-3">The information collected may be used to:</p>
                <ul className="list-unstyled mb-0 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Process inquiries, orders, and service requests</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Provide customer support and communication</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Improve website functionality and user experience</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Personalize content and services</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Share product updates, offers, or important notifications</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Maintain website security and prevent fraudulent activity</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Comply with legal and regulatory obligations</li>
                </ul>
              </div>

              <div id="sharing" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>4. Data Sharing & Disclosure</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim does not sell, rent, or trade your personal information to third parties.
                </p>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  We may share information with trusted service providers and partners who assist us in:
                </p>
                <ul className="list-unstyled mb-4 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right-short text-primary me-2 fs-5"></i> Payment processing</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right-short text-primary me-2 fs-5"></i> Product delivery</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right-short text-primary me-2 fs-5"></i> Website operations</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right-short text-primary me-2 fs-5"></i> Technical support and analytics</li>
                </ul>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  These partners are required to maintain confidentiality and use information only for authorized purposes.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  We may also disclose information if required by law or to protect our legal rights, users, or services.
                </p>
              </div>

              <div id="cookies" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>5. Cookies & Tracking Technologies</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Our website may use cookies and similar technologies to improve browsing experience, analyze website traffic, and enhance platform performance.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  You may choose to disable cookies through your browser settings. However, certain website features may not function properly if cookies are disabled.
                </p>
              </div>

              <div id="security" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>6. Data Security</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  We implement reasonable security measures to protect your personal information from unauthorized access, misuse, or disclosure.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  While we strive to maintain secure systems and processes, no online transmission or storage system can be guaranteed as completely secure.
                </p>
              </div>

              <div id="rights" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>7. Your Rights & Choices</h3>
                <p className="text-muted mb-3">You may have the right to:</p>
                <ul className="list-unstyled mb-0 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-shield-check text-primary me-2 fs-5"></i> Access the personal information we hold about you</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-shield-check text-primary me-2 fs-5"></i> Request correction or update of your information</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-shield-check text-primary me-2 fs-5"></i> Request deletion of your personal data, subject to applicable legal obligations</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-shield-check text-primary me-2 fs-5"></i> Opt out of marketing communications at any time</li>
                </ul>
                <p className="text-muted mt-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  For such requests, you may contact us directly using the details below.
                </p>
              </div>

              <div id="links" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>8. Third-Party Links</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Our website may contain links to third-party websites or services. Aquabrim is not responsible for the privacy practices, content, or policies of external websites.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  We encourage users to review the privacy policies of third-party platforms before sharing personal information.
                </p>
              </div>

              <div id="children" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>9. Children’s Privacy</h3>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim does not knowingly collect personal information from children below the age of 13. If such information is identified, appropriate steps will be taken to remove it from our systems.
                </p>
              </div>

              <div id="updates" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>10. Policy Updates</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim reserves the right to modify or update this Privacy Policy at any time. Updated versions will be published on this page along with the revised effective date.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  We encourage users to review this page periodically for updates.
                </p>
              </div>

              <div id="contact" className="mb-5 pt-2">
                <h3 className="fw-bold mb-4" style={{ color: '#1c1632', fontSize: '28px' }}>11. Contact Us</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                  For any questions, concerns, or requests related to this Privacy Policy, please contact:
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
        .privacy-policy-area {
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

export default PrivacyPolicyArea;
