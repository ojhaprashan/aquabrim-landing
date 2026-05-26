'use client';
import React from 'react';
import Image from 'next/image';
import mockup from "@/assets/Application/application.png";

const PlatformAreaHomeOne = () => {
  return (
    <section className="platform-area py-5 overflow-hidden" style={{ backgroundColor: '#f0f4f8' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1 wow slideInLeft">
            <div className="platform-thumb position-relative mt-lg-0">
              <Image 
                src={mockup} 
                alt="Multi-device support" 
                style={{ width: '100%', height: 'auto', borderRadius: '15px' }} 
              />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 wow slideInRight">
            <div className="platform-content ps-lg-5 text-center text-lg-start">
              <h2 className="display-6 fw-bold mb-4 text-dark" style={{ lineHeight: '1.2' }}>
                Control Your Water System from <span className="text-primary">Anywhere</span>
              </h2>
              <p className="text-muted mb-4 fs-5" style={{ lineHeight: '1.6' }}>
                Track water levels, motor performance, tank conditions, and system notifications in real time with <span className="fw-bold text-dark">Aquabrim&apos;s</span> smart web and mobile platform. Remotely access and manage your water automation system, receive instant alerts, and monitor operations seamlessly from anywhere with <span className="text-primary fw-bold">complete control and convenience</span>.
              </p>
              
              <div className="download-apps">
                <h6 className="fw-bold mb-3 text-uppercase small text-muted" style={{ letterSpacing: '1px' }}>Get the Aquabrim App on</h6>
                <div className="d-flex gap-4 align-items-center justify-content-center justify-content-lg-start">
                  <a href="#" className="platform-icon" title="Web Platform">
                    <i className="bi bi-globe2 fs-2 text-primary"></i>
                  </a>
                  <a href="#" className="platform-icon" title="Android App">
                    <i className="bi bi-google-play fs-2 text-primary"></i>
                  </a>
                  <a href="#" className="platform-icon" title="iOS App">
                    <i className="bi bi-apple fs-2 text-primary"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .platform-icon {
          transition: transform 0.3s ease;
        }
        .platform-icon:hover {
          transform: translateY(-5px);
        }
        .platform-area {
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }
        @media (max-width: 991px) {
          .platform-area {
            padding-top: 2rem !important;
            padding-bottom: 0 !important;
          }
          .platform-content {
            margin-bottom: 1rem;
          }
          .platform-content h2 {
            font-size: 26px;
          }
          .platform-thumb {
            margin-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PlatformAreaHomeOne;
