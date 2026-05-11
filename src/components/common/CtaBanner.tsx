'use client';
import React from 'react';
import Link from 'next/link';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnLink?: string;
  icon?: string;
}

const CtaBanner = ({ 
  title = "Need Immediate Assistance?", 
  subtitle = "Call our support team for quick help and solutions.", 
  btnText = "Call Now", 
  btnLink = "tel:+919560088791",
  icon = "bi-headset"
}: CtaBannerProps) => {
  return (
    <div className="container mb-5 wow fadeInUp">
      <div className="cta-banner-wrapper p-4 p-md-4 rounded-4 shadow-sm d-flex flex-column flex-md-row align-items-center justify-content-between" 
           style={{ backgroundColor: '#f0f4f8', border: '1px solid rgba(0, 108, 208, 0.1)' }}>
        <div className="d-flex align-items-center mb-4 mb-md-0 text-center text-md-start flex-column flex-md-row">
          <div className="icon-box me-md-4 mb-3 mb-md-0 d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm" 
               style={{ width: '60px', height: '60px', minWidth: '60px' }}>
            <i className={`bi ${icon} text-primary fs-3`}></i>
          </div>
          <div className="text-content">
            <h4 className="fw-bold mb-1" style={{ fontSize: '20px', color: '#1c1632' }}>{title}</h4>
            <p className="text-muted mb-0" style={{ fontSize: '15px' }}>{subtitle}</p>
          </div>
        </div>
        <div className="cta-btn-wrapper">
          <Link href={btnLink} className="btn btn-outline-primary px-4 py-2 fw-bold d-flex align-items-center gap-2 cta-btn-custom" style={{ borderRadius: '12px' }}>
            {btnText} <i className="bi bi-telephone-fill small"></i>
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        .cta-btn-custom {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-width: 2px;
          font-size: 15px;
        }
        .cta-btn-custom:hover {
          background-color: #006CD0;
          border-color: #006CD0;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 108, 208, 0.15);
        }
      `}</style>
    </div>
  );
};

export default CtaBanner;
