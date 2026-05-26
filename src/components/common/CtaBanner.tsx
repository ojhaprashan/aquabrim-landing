'use client';
import React from 'react';
import Link from 'next/link';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnLink?: string;
  icon?: string;
  btnIcon?: string;
}

const CtaBanner = ({
  title = "Need Immediate Assistance?",
  subtitle = "Call our support team for quick help and solutions.",
  btnText = "Call Now",
  btnLink = "tel:+919560088791",
  icon = "bi-headset",
  btnIcon = "bi-telephone-fill"
}: CtaBannerProps) => {
  return (
    <div className="container mb-5 wow fadeInUp">
      <div className="cta-banner-wrapper p-4 p-md-4 rounded-4 shadow-sm d-flex flex-column flex-md-row align-items-center justify-content-between" 
           style={{ backgroundColor: '#006CD0', border: 'none' }}>
        <div className="d-flex align-items-center mb-4 mb-md-0 text-center text-md-start flex-column flex-md-row">
          <div className="icon-box me-md-4 mb-3 mb-md-0 d-flex align-items-center justify-content-center rounded-circle" 
               style={{ width: '60px', height: '60px', minWidth: '60px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <i className={`bi ${icon} text-white fs-3`}></i>
          </div>
          <div className="text-content">
            <h4 className="fw-bold mb-1 text-white" style={{ fontSize: '20px' }}>{title}</h4>
            <p className="mb-0 text-white-50" style={{ fontSize: '15px' }}>{subtitle}</p>
          </div>
        </div>
        <div className="cta-btn-wrapper">
          <Link href={btnLink} className="btn btn-light text-primary px-4 py-2 fw-bold d-flex align-items-center gap-2 cta-btn-custom" style={{ borderRadius: '12px' }}>
            {btnText} <i className={`bi ${btnIcon} small`}></i>
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        .cta-btn-custom {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 15px;
          border: none;
        }
        .cta-btn-custom:hover {
          background-color: #ffffff;
          color: #006CD0;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .text-white-50 {
          color: rgba(255, 255, 255, 0.8) !important;
        }
      `}</style>
    </div>
  );
};

export default CtaBanner;
