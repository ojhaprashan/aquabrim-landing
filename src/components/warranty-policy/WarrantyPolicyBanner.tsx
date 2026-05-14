'use client'
import React from 'react';
import Image from 'next/image';
import warranty_banner_img from "@/assets/images/policy/warranty.png";

const WarrantyPolicyBanner = () => {
  return (
    <section className="policy-banner-section d-flex align-items-center hero-new-bg" style={{ width: '100%', minHeight: '450px', position: 'relative', padding: '150px 0' }}>
       {/* Background Image */}
       <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
          <Image 
            src={warranty_banner_img} 
            alt="Warranty Policy Banner" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
       </div>

       <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center">
             <div className="col-12 col-lg-7">
                <div className="slider-content" style={{ visibility: 'visible', opacity: 1 }}>
                   <h1 className="main-title mb-2" style={{ color: '#1c1632', fontSize: '2.5rem' }}>
                      Warranty Policy
                   </h1>
                   <p className="mb-0" style={{ color: '#475569', maxWidth: '500px', lineHeight: '1.4', fontSize: '15px' }}>
                      Understand the warranty terms and coverage for Aquabrim products.
                   </p>
                </div>
             </div>
          </div>
       </div>

       <style jsx>{`
         @media (max-width: 991px) {
           .policy-banner-section {
              min-height: 180px !important;
              padding: 50px 0 !important;
           }
           .slider-content h1 {
             font-size: 2.2rem !important;
             line-height: 1.2;
           }
         }

         @media (max-width: 767px) {
           .hero-new-bg {
             padding: 80px 15px 30px !important; 
             text-align: center;
             min-height: auto !important;
           }
           
           .slider-content {
             padding-top: 0 !important; 
             margin-top: 0 !important;
           }

           .slider-content h1 {
             font-size: 28px !important;
             margin-bottom: 10px !important;
             line-height: 1.2 !important;
             white-space: normal !important;
           }
           
           .slider-content p {
             margin-top: 10px !important;
             margin-bottom: 15px !important;
             font-size: 14px !important;
             margin-left: auto;
             margin-right: auto;
           }
         }
       `}</style>
    </section>
  );
};

export default WarrantyPolicyBanner;
