'use client'
import React from 'react';
import Image from 'next/image';
import founders_img from "@/assets/images/team/founders.png";

const Founders = () => {
  return (
    <section className="founders-section pb-120 pt-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center mb-50 wow fadeInUp">
              <span className="subtitle text-primary text-uppercase fw-bold mb-2 d-block" style={{ letterSpacing: '2px', fontSize: '14px' }}>OUR FOUNDERS</span>
              <h2 className="title display-5 fw-bold text-dark">The People Behind Aquabrim</h2>
            </div>
          </div>
        </div>

        <div className="row align-items-center g-5">
          {/* Founders Image */}
          <div className="col-lg-6 wow fadeInLeft">
            <div className="founders-thumb position-relative">
              <div className="rounded-4 overflow-hidden shadow-lg border border-light">
                <Image 
                  src={founders_img} 
                  alt="Aquabrim Founders" 
                  className="img-fluid w-100"
                  style={{ height: "auto", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Founders Content */}
          <div className="col-lg-6 wow fadeInRight">
            <div className="founders-content ps-lg-4">
              <p className="text-muted mb-4 fs-5" style={{ lineHeight: "1.8" }}>
                Aquabrim was co-founded by two passionate engineers who saw a major gap in the water management industry – the lack of smart, reliable and user-friendly automation solutions.
              </p>
              <p className="text-muted mb-5 fs-5" style={{ lineHeight: "1.8" }}>
                With a vision to build technology that truly helps people in their daily life, they created Aquabrim.
              </p>

              <div className="founder-details">
                {/* Founder 1 */}
                <div className="founder-info">
                  <h4 className="fw-bold mb-1" style={{ fontSize: '20px' }}>Vigneshwaran S</h4>
                  <span className="text-muted small">Co-founder & Director</span>
                </div>

                {/* Founder 2 */}
                <div className="founder-info">
                  <h4 className="fw-bold mb-1" style={{ fontSize: '20px' }}>Praveen Kumar S</h4>
                  <span className="text-muted small">Co-founder & Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .founders-section {
          background-color: #fff;
        }
        .pb-120 {
          padding-bottom: 120px;
        }
        .pt-50 {
          padding-top: 50px;
        }
        .founder-details {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 2rem;
        }
        .founder-info {
          position: relative;
        }
        .founder-info:not(:last-child)::after {
          content: "";
          position: absolute;
          right: -1rem;
          top: 50%;
          transform: translateY(-50%);
          height: 40px;
          width: 1px;
          background-color: #dee2e6;
        }
        @media (max-width: 991px) {
          .founder-details {
             flex-direction: column;
             align-items: center;
             text-align: center;
             gap: 1.5rem;
          }
          .founder-info:not(:last-child)::after {
            display: none;
          }
          .founders-content {
            text-align: center;
          }
        }
      `}} />
    </section>
  );
};

export default Founders;
