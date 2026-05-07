'use client';
import React from 'react';

const feature_data = [
  {
    id: 1,
    icon: "bi-droplet",
    title: "Automatic Control",
    desc: "Automatically starts and stops the pump based on water level."
  },
  {
    id: 2,
    icon: "bi-shield-check",
    title: "Dry Run Protection",
    desc: "Protects the motor from running in dry conditions."
  },
  {
    id: 3,
    icon: "bi-water",
    title: "Overflow Protection",
    desc: "Stops the pump when tank is full and prevents overflow."
  },
  {
    id: 4,
    icon: "bi-hand-index-thumb",
    title: "Water Saving",
    desc: "Smart operation helps you save water and money."
  },
  {
    id: 5,
    icon: "bi-tools",
    title: "Easy Installation",
    desc: "Simple wiring and user-friendly installation."
  },
  {
    id: 6,
    icon: "bi-display",
    title: "LED Indication",
    desc: "Clear LED status for power, motor and water level."
  }
];

const ProductFeatureAreaHomeOne = () => {
  return (
    <section className="product-features-section py-5 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-5 wow fadeInUp">
          <h4 className="text-primary text-uppercase fw-bold mb-2" style={{ fontSize: 'clamp(22px, 5vw, 28px)', letterSpacing: '1px' }}>Product Features</h4>
        </div>
        
        <div className="w-100 position-relative feature-marquee-wrapper">
          <div className="feature-marquee-track d-flex align-items-stretch py-3">
            {/* Double the data for seamless looping */}
            {[...feature_data, ...feature_data].map((item, index) => (
              <div key={`${item.id}-${index}`} className="px-2 px-md-3" style={{ minWidth: '260px' }}>
                <div className="feature-card p-3 p-md-4 bg-white shadow-sm border border-light rounded-4 text-center h-100 transition-hover d-flex flex-column align-items-center justify-content-center" 
                     style={{ minHeight: '220px' }}>
                  <div className="icon-wrapper mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" 
                       style={{ width: '60px', height: '60px', backgroundColor: '#f0f7ff' }}>
                    <i className={`bi ${item.icon} text-primary fs-3`}></i>
                  </div>
                  <h6 className="fw-bold mb-2" style={{ fontSize: '16px' }}>{item.title}</h6>
                  <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .transition-hover {
          transition: all 0.3s ease;
        }
        .transition-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
          border-color: #007bff33 !important;
        }
        
        .feature-marquee-wrapper {
          position: relative;
          overflow: hidden;
        }
        
        /* Fade effect on edges */
        .feature-marquee-wrapper::before,
        .feature-marquee-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          width: 80px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        
        .feature-marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }
        
        .feature-marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }

        .feature-marquee-track {
          width: max-content;
          animation: featureScroll 30s linear infinite;
          display: flex;
          align-items: stretch;
          will-change: transform;
        }
        
        /* Only pause on actual mouse hover, not touch */
        @media (hover: hover) {
          .feature-marquee-track:hover {
            animation-play-state: paused;
          }
        }
        
        @keyframes featureScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }

        @media (max-width: 767px) {
          .feature-marquee-wrapper {
            height: 480px;
          }
          .feature-marquee-track {
            flex-direction: column;
            width: 100% !important;
            height: max-content;
            animation: verticalFeatureScroll 20s linear infinite;
          }
          .feature-marquee-track > div {
            width: 100% !important;
            padding: 10px 0 !important;
          }
          
          /* Adjust fades for vertical orientation */
          .feature-marquee-wrapper::before,
          .feature-marquee-wrapper::after {
            width: 100%;
            height: 60px;
            left: 0;
            right: 0;
          }
          .feature-marquee-wrapper::before {
            top: 0;
            background: linear-gradient(to bottom, white, transparent);
          }
          .feature-marquee-wrapper::after {
            bottom: 0;
            top: auto;
            background: linear-gradient(to top, white, transparent);
          }
        }
        
        @keyframes verticalFeatureScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </section>
  );
};

export default ProductFeatureAreaHomeOne;


