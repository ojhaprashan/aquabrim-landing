'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ServiceAreaPanIndia = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const states = [
    { name: "Punjab", top: '22%', left: '38%' },
    { name: "Uttarakhand", top: '25%', left: '47%' },
    { name: "Delhi (Head Office)", displayName: "Delhi", isHeadOffice: true, top: '29%', left: '44%' },
    { name: "Rajasthan", top: '36%', left: '33%' },
    { name: "Uttar Pradesh", top: '34%', left: '52%' },
    { name: "Bihar", top: '37%', left: '66%' },
    { name: "West Bengal", top: '46%', left: '72%' },
    { name: "Odisha", top: '53%', left: '64%' },
    { name: "Maharashtra", top: '56%', left: '39%' },
    { name: "Goa", top: '69%', left: '35%' },
    { name: "Karnataka", top: '72%', left: '42%' },
    { name: "Tamil Nadu", top: '84%', left: '48%' },
    { name: "Kerala", top: '84%', left: '42%' }
  ];

  const states_col_1 = states.slice(0, 7);
  const states_col_2 = states.slice(7);

  return (
    <section className="service-pan-india py-5 bg-white overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Side: Stats & CTA */}
          <div className="col-lg-4 col-md-12 mb-5 mb-lg-0 wow fadeInLeft">
            <div className="section-title mb-4">
              <h6 className="text-primary text-uppercase fw-bold mb-2" style={{ letterSpacing: '1px' }}>Where We Serve</h6>
              <h2 className="fw-bold mb-4" style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>Serving Across India</h2>
            </div>
            
            <div className="service-stats">
              <div className="d-flex align-items-center mb-4">
                <div className="icon-box rounded-circle bg-light d-flex align-items-center justify-content-center p-3 me-3 border shadow-sm">
                  <i className="bi bi-geo-alt-fill text-primary fs-4"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">15+ Cities served</h6>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-4">
                <div className="icon-box rounded-circle bg-light d-flex align-items-center justify-content-center p-3 me-3 border shadow-sm">
                  <i className="bi bi-house-door-fill text-primary fs-4"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">50,000+ Customers</h6>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-4">
                <div className="icon-box rounded-circle bg-light d-flex align-items-center justify-content-center p-3 me-3 border shadow-sm">
                  <i className="bi bi-emoji-smile-fill text-primary fs-4"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Thousands of Happy Customers</h6>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <a href="/shop" className="btn btn-primary btn-lg rounded-pill px-4 py-2 shadow-sm transition-hover d-inline-flex align-items-center">
                View Products <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>

          {/* Middle: India Map with Pins */}
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 wow fadeInUp">
            <div className="map-container position-relative text-center d-inline-block">
              <Image 
                src="/assets/images/india_map.png" 
                alt="India Map" 
                width={400} 
                height={450} 
                style={{ width: '100%', height: 'auto', opacity: 0.8 }}
              />
              
              {/* Interactive Pins */}
              {states.map((state, idx) => {
                const isActive = hoveredState === state.name;
                return (
                  <div 
                    key={idx}
                    className={`pin-wrapper position-absolute ${isActive ? 'active' : ''}`}
                    style={{ 
                      top: state.top, 
                      left: state.left, 
                      transform: 'translate(-50%, -50%)', 
                      zIndex: isActive ? 10 : 2,
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredState(state.name)}
                    onMouseLeave={() => setHoveredState(null)}
                  >
                    {/* Radar Pulse Effect */}
                    {isActive && <div className="radar-pulse"></div>}
                    
                    {/* The Pin Icon */}
                    <div className={`map-pin ${isActive ? 'scale-up' : ''}`}>
                      <i className={`bi bi-geo-alt-fill ${isActive ? 'text-danger shadow-pin' : 'text-primary'}`}></i>
                    </div>

                    {/* Tooltip */}
                    <div className={`pin-tooltip shadow-sm rounded ${isActive ? 'visible' : ''}`}>
                      {state.isHeadOffice ? "Delhi (Head Office)" : state.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: State List */}
          <div className="col-lg-4 col-md-6 wow fadeInRight">
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  {states_col_1.map((state, idx) => (
                    <li 
                      key={idx} 
                      className="mb-3 d-flex align-items-center state-item"
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setHoveredState(state.name)}
                      onMouseLeave={() => setHoveredState(null)}
                    >
                      <i className={`bi bi-geo-alt-fill me-2 small icon-marker ${hoveredState === state.name ? 'text-primary scale-up' : 'text-muted'}`} style={{ transition: 'all 0.3s ease' }}></i>
                      {state.isHeadOffice ? (
                        <span className={`fw-bold d-flex flex-wrap align-items-center label-text ${hoveredState === state.name ? 'text-primary' : 'text-dark'}`} style={{ fontSize: '0.85rem', transition: 'all 0.3s ease' }}>
                          Delhi
                          <span className="badge bg-primary text-white ms-2" style={{ fontSize: '0.62rem', padding: '3px 8px' }}>
                            Head Office
                          </span>
                        </span>
                      ) : (
                        <span className={`small fw-medium label-text ${hoveredState === state.name ? 'text-primary fw-bold' : 'text-secondary'}`} style={{ transition: 'all 0.3s ease' }}>
                          {state.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  {states_col_2.map((state, idx) => (
                    <li 
                      key={idx} 
                      className="mb-3 d-flex align-items-center state-item"
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setHoveredState(state.name)}
                      onMouseLeave={() => setHoveredState(null)}
                    >
                      <i className={`bi bi-geo-alt-fill me-2 small icon-marker ${hoveredState === state.name ? 'text-primary scale-up' : 'text-muted'}`} style={{ transition: 'all 0.3s ease' }}></i>
                      <span className={`small fw-medium label-text ${hoveredState === state.name ? 'text-primary fw-bold' : 'text-secondary'}`} style={{ transition: 'all 0.3s ease' }}>
                        {state.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .pin-wrapper {
          transition: all 0.3s ease;
        }
        
        .map-pin {
          font-size: 1.6rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-pin.scale-up {
          transform: scale(1.3);
        }

        .shadow-pin {
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.25));
        }

        /* Radar Pulse Animation */
        .radar-pulse {
          position: absolute;
          width: 32px;
          height: 32px;
          background: rgba(220, 53, 69, 0.25);
          border: 1px solid rgba(220, 53, 69, 0.8);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 1.6s infinite ease-out;
          pointer-events: none;
        }

        @keyframes pulse {
          0% {
            width: 10px;
            height: 10px;
            opacity: 1;
          }
          100% {
            width: 48px;
            height: 48px;
            opacity: 0;
          }
        }

        /* Tooltip style */
        .pin-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          background: rgba(33, 37, 41, 0.95);
          color: #ffffff;
          padding: 4px 10px;
          font-size: 0.72rem;
          font-weight: 600;
          white-space: nowrap;
          border-radius: 4px;
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 100;
        }

        .pin-tooltip.visible {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(-10px);
        }

        .pin-tooltip::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 5px;
          border-style: solid;
          border-color: rgba(33, 37, 41, 0.95) transparent transparent transparent;
        }

        /* State list hover items styling */
        .state-item:hover .label-text {
          transform: translateX(6px);
        }
        
        .state-item .label-text {
          transition: all 0.3s ease;
        }
        
        .scale-up {
          transform: scale(1.2);
        }

        .icon-box {
          width: 54px;
          height: 54px;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};

export default ServiceAreaPanIndia;
