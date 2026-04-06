import React from 'react'
import Link from 'next/link';

import Image from 'next/image';

import offer_thumb from "@/assets/images/resource/offer-thumb.png";

import offer_icon_1 from "@/assets/images/resource/offer-icon2.png";
import offer_icon_2 from "@/assets/images/resource/offer-icon2.png";
import offer_icon_3 from "@/assets/images/resource/offer-icon3.png";
import offer_icon_4 from "@/assets/images/resource/offer-icon4.png";
import offer_icon_5 from "@/assets/images/resource/offer-icon5.png";
import offer_icon_6 from "@/assets/images/resource/offer-icon6.png";

const offer_content = {
  title: "Top Benefits of Water Automation",
  feature: [
    {
      icon: offer_icon_1,
      anim: "slideInRight",
      title: "Tax Incentives and Rebates",
      sm_des: "Many financing options enable customers to take advantage of federal tax credits, state rebates, and local incentives for water conservation",
    },
    {
      icon: offer_icon_2,
      anim: "slideInLeft",
      title: "Increased Property Value",
      sm_des: "Homes and businesses with integrated smart water systems often see an increase in property value, making them more attractive to potential buyers",
    },
    {
      icon: offer_icon_3,
      anim: "slideInRight",
      title: "Cost Savings      ",
      sm_des: "Installing automated valves and controllers eliminates water overflow, which can significantly reduce or prevent steep monthly utility penalties",
    },
    {
      icon: offer_icon_4,
      anim: "slideInUp",
      title: "Investment",
      sm_des: "Smart water systems are a long-term investment with a relatively high return. The upfront costs are quickly neutralized by water and electricity savings",
    },
    {
      icon: offer_icon_5,
      anim: "zoomIn",
      title: "Lower Upfront Costs",
      sm_des: "Our wireless systems bypass expensive wiring and structural changes, allowing customers to install automation without the need for substantial upfront investment.",
    },
    {
      icon: offer_icon_6,
      anim: "slideInDown",
      title: "Motor Protection      ",
      sm_des: "Prevent dry running and burning out. Buildings with automated sensors protect their expensive pumping equipment from damage.",
    },
  ],
};

const { subtitle, title, feature } = offer_content;

const hero_content = {
  subtitle: "Water Management Made Simple",
  title: "Maximize Your Savings with Automation",
}
const Financedata = () => {
  return (
    <>
      <div className="slider-section style-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="slider-content style-two wow animate__slideInRight">
                <h4>{hero_content.subtitle}</h4>
                <h1>{hero_content.title}</h1>
                <div className="solar-btn slider1">
                  <Link href="/service-details">Start Saving <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>
    


      <div className="offer-section style-two" style={{marginTop:"20px"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="section-title wow animate__slideInDown">
              
                <div className="section-main-title offer">
                  <h2>{title}</h2>
                </div>
              </div>
              <div className="row inner">
                {feature.map((item, i) => (
                  <div key={i} className={`col-lg-4 col-md-4 col-sm-6 col-6`}>
                    <div className={`offer-items-box wow animate__${item.anim}`}>
                      <div className="offer-icon-thumb">
                        <Image src={item.icon} alt="image-title" />
                      </div>
                      <div className="offer-content">
                        <h4>{item.title}</h4>
                        <p>{item.sm_des}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 col-md-12 pl-0">
              <div className="offer-thumb wow animate__slideInUp">
                <Image src={offer_thumb} style={{ height: 'auto' }} alt="image-title" />
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Financedata