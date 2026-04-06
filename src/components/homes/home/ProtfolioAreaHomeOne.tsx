
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import protfolio_thumb from '@/assets/images/project/protfolio-thumb.png'
import prot_hover from '@/assets/images/project/prot-hover.png'


interface DataType {
  subtitle: string;
  title: string;
  portfolio_data: {
      id: number;
      title_1: string;
      title_2: string;
  }[];
}


const protfolio_content: DataType = {
  subtitle: "Our Projects",
  title: "Water Automation Projects",
  portfolio_data: [
    {
      id: 1,
      title_1: "Residential Water", 
      title_2: "Level Controller", 
    },
    {
      id: 2,
      title_1: "Apartment Housing", 
      title_2: "Society Automation", 
    },
    {
      id: 3,
      title_1: "Industrial Smart", 
      title_2: "Water Management", 
    }
  ]
}

const { subtitle, title, portfolio_data } = protfolio_content

const ProtfolioAreaHomeOne = () => {
  return (
    <>
      <div className="protfolio-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="section-title">
                <div className="section-sub-title protfolio">
                  <h4>{subtitle}</h4>
                </div>
                <div className="section-main-title protfolio ">
                  <h2>{title}</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="solar-btn protfolio">
                <Link href="/project-details">All  Projects <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="protfolio-thumb wow animate__zoomIn">
                <Image src={protfolio_thumb} style={{height:  'auto'}} alt="image-title" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              {portfolio_data.map((item) => (
                <div className={`protfolio-item wow animate__backInUp ${item.id === 3 ? 'style-two' : ''}`}>
                <div className="protfolio-item-content">
                  <div className="protfolio-item-numbar">
                    <span>0{item.id}</span>
                  </div>
                  <div className="protfolio-item-title">
                    <h3><Link href="/project-details">{item.title_1}</Link></h3> 
                    <h3><Link href="/project-details">{item.title_2}</Link></h3>  
                  </div>
                </div>
                <div className="protfolio-itme-hover">
                  <Image src={prot_hover} alt="image-title" />
                </div>
                <div className="protfolio-item-icon">
                  <i className="bi bi-arrow-up-right"></i>
                </div>
              </div>
              ))} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProtfolioAreaHomeOne;