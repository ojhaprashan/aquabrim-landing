'use client';
import React from 'react';
import Image from 'next/image';

const ServiceAreaPanIndia = () => {
  const cities_col_1 = [
    "Chennai", "Bengaluru", "Coimbatore", "Madurai", "Trichy", 
    "Salem", "Tiruppur", "Erode", "Hyderabad", "Vizag"
  ];
  
  const cities_col_2 = [
    "Pune", "Mumbai", "Delhi", "Ahmedabad", "Kolkata", 
    "Surat", "Vijayawada", "Visakhapatnam", "Kochi", "Mysuru"
  ];

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
                  <h6 className="fw-bold mb-0">20+ Cities</h6>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-4">
                <div className="icon-box rounded-circle bg-light d-flex align-items-center justify-content-center p-3 me-3 border shadow-sm">
                  <i className="bi bi-house-door-fill text-primary fs-4"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">5,000+ Installations</h6>
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
            <div className="map-container position-relative text-center">
              <Image 
                src="/assets/images/india_map.png" 
                alt="India Map" 
                width={400} 
                height={450} 
                style={{ width: '100%', height: 'auto', opacity: 0.8 }}
              />
              
              {/* Decorative Pins */}
              <div className="pin position-absolute" style={{ top: '20%', left: '45%' }}><i className="bi bi-geo-alt-fill text-primary"></i></div>
              <div className="pin position-absolute" style={{ top: '40%', left: '30%' }}><i className="bi bi-geo-alt-fill text-primary"></i></div>
              <div className="pin position-absolute" style={{ top: '60%', left: '35%' }}><i className="bi bi-geo-alt-fill text-primary"></i></div>
              <div className="pin position-absolute" style={{ top: '80%', left: '40%' }}><i className="bi bi-geo-alt-fill text-primary"></i></div>
              <div className="pin position-absolute" style={{ top: '50%', left: '60%' }}><i className="bi bi-geo-alt-fill text-primary"></i></div>
              <div className="pin position-absolute" style={{ top: '30%', left: '55%' }}><i className="bi bi-geo-alt-fill text-primary"></i></div>
              <div className="pin position-absolute" style={{ top: '70%', left: '50%' }}><i className="bi bi-geo-alt-fill text-primary"></i></div>
            </div>
          </div>

          {/* Right Side: City List */}
          <div className="col-lg-4 col-md-6 wow fadeInRight">
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  {cities_col_1.map((city, idx) => (
                    <li key={idx} className="mb-3 d-flex align-items-center">
                      <i className="bi bi-geo-alt-fill text-primary me-2 small"></i>
                      <span className="text-secondary small fw-medium">{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  {cities_col_2.map((city, idx) => (
                    <li key={idx} className="mb-3 d-flex align-items-center">
                      <i className="bi bi-geo-alt-fill text-primary me-2 small"></i>
                      <span className="text-secondary small fw-medium">{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .pin {
          font-size: 1.5rem;
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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
