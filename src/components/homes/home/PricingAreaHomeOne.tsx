
import Accordion from '@/components/common/Accordion'; 
import React from 'react';


interface DataType {
  id: number;
  price_date: string;
  price: number;
  time: string;
  sm_des: string;
  price_value: string;
}

const priceing_data: DataType[] = [
  {
    id: 1,
    price_date: "Yearly",
    price: 148,
    time: "15 Days Free",
    sm_des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    price_value: "Best Value",
  },
  {
    id: 2,
    price_date: "Yearly",
    price: 121,
    time: "12 Days Free",
    sm_des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    price_value: "Best Value",
  }
]


const PricingAreaHomeOne = () => {
  return (
    <>
      <div className="pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <div className="section-sub-title pricing wow animate__fadeInDown">
                  <h4>Our Prlcing Table</h4>
                </div>
                <div className="section-main-title pricing wow animate__fadeInUp">
                  <h2>Want to Ask Something</h2>
                  <h2>from Us?</h2>
                </div>
              </div>
              <Accordion /> 
            </div>
            <div className="col-lg-6 col-md-12">
              {priceing_data.map((item, i) =>
                <div key={i} className="pricing-box wow animate__fadeInTopRight">
                  <div className="pricing-info">
                    <div className="pricing-year">
                      <h4>{item.price_date}</h4>
                    </div>
                    <div className="pricing-rate">
                      <h2>${item.price}<span>.99</span></h2>
                    </div>
                  </div>
                  <div className="pricing-icon">
                    <i className="bi bi-check2"></i>
                  </div>
                  <div className="pricing-content">
                    <h4>{item.time}</h4>
                    <p>{item.sm_des}</p>
                  </div>
                  <div className="pricing-value">
                    <h5>{item.price_value}</h5>
                  </div>
                </div>
              )} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingAreaHomeOne;