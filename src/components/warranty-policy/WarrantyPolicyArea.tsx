'use client'
import React from 'react';

const WarrantyPolicyArea = () => {
  return (
    <section className="warranty-policy-area py-5">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="sidebar p-4 bg-white rounded-4 shadow-sm border border-light sticky-top" style={{ top: '100px', zIndex: 10 }}>
              <h6 className="text-uppercase text-muted mb-4 small fw-bold" style={{ letterSpacing: '1px' }}>On This Page</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#overview" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">1. Overview</a></li>
                <li className="mb-2"><a href="#coverage" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">2. Coverage</a></li>
                <li className="mb-2"><a href="#process" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">3. Service Process</a></li>
                <li className="mb-2"><a href="#warranty-terms" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">4. Warranty Terms</a></li>
                <li className="mb-2"><a href="#amc-terms" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">5. AMC Terms</a></li>
                <li className="mb-2"><a href="#exclusions" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">6. Exclusions</a></li>
                <li className="mb-2"><a href="#relocation" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">7. Relocation</a></li>
                <li className="mb-2"><a href="#liability" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">8. Liability Limits</a></li>
                <li className="mb-2"><a href="#spares" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar fw-bold">9. Spares & Service</a></li>
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
                  Aquabrim products are designed and manufactured to deliver reliable performance and long-term operational efficiency. Our Warranty and Annual Maintenance Contract (AMC) policies are intended to ensure smooth service support and customer assistance throughout the product lifecycle.
                </p>
                <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Please review the terms and conditions carefully before requesting warranty or AMC support.
                </p>
              </div>

              <div id="coverage" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>2. Warranty & AMC Coverage</h3>
                <ul className="list-unstyled mb-4 ps-3">
                  <li className="d-flex align-items-start mb-3 text-muted"><i className="bi bi-shield-check text-primary me-3 fs-5"></i> Warranty and AMC benefits are applicable only to the original purchaser of the product</li>
                  <li className="d-flex align-items-start mb-3 text-muted"><i className="bi bi-shield-check text-primary me-3 fs-5"></i> Coverage is non-transferable unless approved by Aquabrim</li>
                  <li className="d-flex align-items-start mb-3 text-muted"><i className="bi bi-shield-check text-primary me-3 fs-5"></i> Services under warranty or AMC will be carried out only by authorized Aquabrim service personnel</li>
                </ul>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  For support assistance, customers may contact:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2"></i> Authorized service centers</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2"></i> Aquabrim support team</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2"></i> Official customer helpline</li>
                </ul>
              </div>

              <div id="process" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>3. Service & Support Process</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Customers can request support through authorized service centers, official support channels, or our customer helpline.
                </p>

                <div className="alert alert-primary border-0 rounded-4 p-4 mb-4" style={{ backgroundColor: '#f0f7ff' }}>
                  <h6 className="fw-bold text-dark mb-3"><i className="bi bi-headset me-2 text-primary"></i> Support Contact</h6>
                  <p className="mb-2 text-muted"><strong>Phone:</strong> +91 9560088791</p>
                  <p className="mb-0 text-muted"><strong>Email:</strong> <a href="mailto:save.water@aquabrim.com" className="text-decoration-none" style={{ color: '#006CD0' }}>save.water@aquabrim.com</a></p>
                </div>
                
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  For installations located outside municipal limits or serviceable areas, customers may be required to coordinate with the nearest authorized service center at their own cost and risk.
                </p>
              </div>

              <div id="warranty-terms" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>4. Warranty Terms</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Warranty support includes repair or replacement of defective components subject to inspection and approval by Aquabrim.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Please note:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Warranty remains valid only for the original warranty period</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Repair or transit time does not extend the warranty duration</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Product inspection may be required before warranty approval</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right text-primary me-2"></i> Warranty applies only for intended product usage and recommended operating conditions</li>
                </ul>
              </div>

              <div id="amc-terms" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>5. AMC Terms & Conditions</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Annual Maintenance Contract (AMC) services cover maintenance support as defined in the selected AMC plan.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  AMC services may include:
                </p>
                <ul className="list-unstyled mt-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> System inspection</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Product servicing</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Technical assistance</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-check-lg text-primary me-2 fs-5"></i> Operational support</li>
                </ul>
                <p className="text-muted mt-3 mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Specific AMC inclusions may vary depending on the product and service agreement.
                </p>
              </div>

              <div id="exclusions" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>6. Conditions Where Warranty / AMC May Not Apply</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Warranty or AMC support may not be applicable under the following conditions:
                </p>
                <ul className="list-unstyled mb-4 ps-3">
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-x-square-fill text-danger me-3 mt-1" style={{ fontSize: '10px' }}></i> Product purchased from unauthorized sources</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-x-square-fill text-danger me-3 mt-1" style={{ fontSize: '10px' }}></i> Physical damage, mishandling, or misuse</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-x-square-fill text-danger me-3 mt-1" style={{ fontSize: '10px' }}></i> Unauthorized repair, modification, or relocation</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-x-square-fill text-danger me-3 mt-1" style={{ fontSize: '10px' }}></i> Product overload beyond rated capacity</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-x-square-fill text-danger me-3 mt-1" style={{ fontSize: '10px' }}></i> Missing invoice, warranty card, or AMC documentation</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-x-square-fill text-danger me-3 mt-1" style={{ fontSize: '10px' }}></i> Altered or removed serial number</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-x-square-fill text-danger me-3 mt-1" style={{ fontSize: '10px' }}></i> Damage caused by improper installation or unsuitable site conditions</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-x-square-fill text-danger me-3 mt-1" style={{ fontSize: '10px' }}></i> Electrical issues such as abnormal voltage, lightning, or power fluctuations</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-x-square-fill text-danger me-3 mt-1" style={{ fontSize: '10px' }}></i> Damage caused by pets, insects, rodents, or external environmental factors</li>
                  <li className="d-flex align-items-start mb-2 text-muted"><i className="bi bi-x-square-fill text-danger me-3 mt-1" style={{ fontSize: '10px' }}></i> Product used for purposes other than intended applications</li>
                </ul>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Any such repairs may be treated as chargeable services subject to inspection and spare availability.
                </p>
              </div>

              <div id="relocation" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>7. Product Relocation & Address Changes</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  If the installed product is relocated or the customer address changes, the customer must inform Aquabrim or the authorized service center in advance.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Warranty or AMC continuation will be subject to inspection and approval by authorized personnel.
                </p>
              </div>

              <div id="liability" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>8. Limitation of Liability</h3>
                <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim’s responsibility under warranty or AMC shall be limited to:
                </p>
                <ul className="list-unstyled mb-3 ps-3">
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right-short text-primary me-2 fs-5"></i> Repair of defective components, or</li>
                  <li className="d-flex align-items-center mb-2 text-muted"><i className="bi bi-arrow-right-short text-primary me-2 fs-5"></i> Replacement of eligible parts</li>
                </ul>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  The company’s liability shall not exceed the original purchase value or the maximum retail price of the product, whichever is lower.
                </p>
              </div>

              <div id="spares" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>9. Spare Parts & Service Availability</h3>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  In rare cases where specific spare parts are unavailable or discontinued, Aquabrim may provide commercially reasonable alternatives based on prevailing service and depreciation policies.
                </p>
              </div>

              <div id="updates" className="mb-5 pt-2">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>10. Policy Updates</h3>
                <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Aquabrim reserves the right to modify, update, or revise these Warranty and AMC Terms at any time without prior notice. Updated policies will be available on this page.
                </p>
              </div>

              <div id="contact" className="mb-5 pt-2">
                <h3 className="fw-bold mb-4" style={{ color: '#1c1632', fontSize: '28px' }}>11. Contact Us</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                  For warranty support, AMC assistance, or service-related queries, please contact:
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
        .warranty-policy-area {
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

export default WarrantyPolicyArea;
