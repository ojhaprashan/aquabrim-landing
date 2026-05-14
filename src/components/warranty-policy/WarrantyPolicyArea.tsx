'use client'
import React from 'react';

const WarrantyPolicyArea = () => {
  return (
    <section className="warranty-policy-area py-5">
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
                <li className="mb-2"><a href="#warranty-coverage" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Warranty Coverage</a></li>
                <li className="mb-2"><a href="#warranty-period" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Warranty Period</a></li>
                <li className="mb-2"><a href="#not-covered" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">What's Not Covered</a></li>
                <li className="mb-2"><a href="#claim-process" className="d-block p-3 rounded-3 text-dark text-decoration-none hover-sidebar">Claim Process</a></li>
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
                  Aquabrim products are covered under warranty against manufacturing defects and workmanship issues.
                </p>
              </div>

              <div id="warranty-coverage" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>2. Warranty Coverage</h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                  Our warranty covers:
                </p>
                <ul className="list-unstyled mb-5">
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    Manufacturing defects
                  </li>
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    Component failures under normal usage
                  </li>
                  <li className="d-flex align-items-center mb-3 text-muted">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3 bg-light p-1 rounded"></i>
                    Performance issues due to product malfunction
                  </li>
                </ul>

                <div className="alert border-0 rounded-4 p-4 d-flex align-items-center gap-3" style={{ backgroundColor: '#fff9eb' }}>
                  <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', minWidth: '32px' }}>
                    <i className="bi bi-exclamation-triangle-fill"></i>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-md-center gap-2">
                    <h6 className="fw-bold mb-0 text-dark">Important:</h6>
                    <p className="mb-0 text-muted" style={{ fontSize: '15px' }}>Warranty is valid only if the product is installed and used as per the guidelines.</p>
                  </div>
                </div>
              </div>

              <div id="warranty-period" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>3. Warranty Period</h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  The standard warranty period for most Aquabrim products is 1 year from the date of purchase. Specific components or industrial models may have different warranty terms, which will be clearly stated in the product documentation or invoice.
                </p>
              </div>

              <div id="claim-process" className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#1c1632', fontSize: '28px' }}>4. Claim Process</h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  To file a warranty claim, please contact our service department with your original purchase invoice and product serial number. Our technicians will perform a diagnostic check to determine the cause of the issue and proceed with repair or replacement accordingly.
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
        .warranty-policy-area {
           background-color: #ffffff;
        }
      `}</style>
    </section>
  );
};

export default WarrantyPolicyArea;
