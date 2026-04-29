
import Accordion from '@/components/common/Accordion'; 
import React from 'react';
import Image from 'next/image';
import faq_img from '@/assets/images/resource/faq.png';


const PricingAreaHomeOne = () => {
  return (
    <>
      <div className="pricing-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <div className="section-sub-title pricing wow animate__fadeInDown">
                  <h4>FAQ</h4>
                </div>
                <div className="section-main-title pricing wow animate__fadeInUp">
                  <h2>Want to Ask Something</h2>
                  <h2>from Us?</h2>
                </div>
              </div>
              <Accordion /> 
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="pricing-image-column wow animate__fadeInRight">
                <Image 
                  src={faq_img} 
                  alt="FAQ Image" 
                  style={{ width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingAreaHomeOne;