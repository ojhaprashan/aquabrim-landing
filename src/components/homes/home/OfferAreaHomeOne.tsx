'use client';
import React, { useEffect, useState } from 'react';
import offer_icon_1 from "@/assets/images/resource/offer-icon2.png";
import offer_icon_2 from "@/assets/images/resource/offer-icon2.png";
import offer_icon_3 from "@/assets/images/resource/offer-icon3.png";
import offer_thumb from "@/assets/images/resource/offer-thumb.png";

import Image, { StaticImageData } from 'next/image';


interface DataType {
  subtitle: string;
  title_1: string;
  title_2: string;
  feature: {
    icon: StaticImageData;
    title: string;
    sm_des: string;
  }[];
}


const offer_content: DataType = {
  subtitle: "What We Offer",
  title_1: "Taking The Effort Out Of",
  title_2: "Water Management",
  feature: [
    {
      icon: offer_icon_1,
      title: "Automatic Operation",
      sm_des: "Completely automated water level control.",
    },
    {
      icon: offer_icon_2,
      title: "Dry-Run Protection",
      sm_des: "Protect your motors from running dry.",
    },
    {
      icon: offer_icon_3,
      title: "Overflow Prevention",
      sm_des: "Smart systems that prevent tank overflow.",
    }

  ]
}

const { subtitle, title_1, title_2, feature } = offer_content

const OfferAreaHomeOne = () => {

  const [percentage1, setPercentage1] = useState(90);
  const [percentage2, setPercentage2] = useState(69);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPercentage1(75);
      setPercentage2(50);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);



  return (
    <>
      <div className="offer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="section-title wow animate__slideInUp">
                <div className="section-sub-title offer">
                  <h4>{subtitle}</h4>
                </div>
                <div className="section-main-title offer">
                  <h2>{title_1}</h2>
                  <h2>{title_2}</h2>
                </div>
              </div>
              <div className="row">
                {feature.map((item, i) => (
                  <div key={i} className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div className="offer-items-box wow animate__slideInDown">
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

              <div className="process-ber-plugin">
                <span className="process-bar">Customer Satisfied</span>
                <div id="bar1" className="barfiller">
                  <span
                    className="fill"
                    style={{ background: '#006CD0', width: `${percentage1}%`, transition: 'width 7s ease-in-out 0s' }}
                  ></span>
                </div>
                <span className="process-bar">Customer Satisfied</span>
                <div id="bar2" className="barfiller">
                  <span
                    className="fill my-class"
                    style={{ background: '#006CD0', width: `${percentage2}%`, transition: 'width 7s ease-in-out 0s' }}
                  ></span>
                </div>
              </div>

            </div>
            <div className="col-lg-5 col-md-12">
              <div className="offer-thumb wow animate__slideInRight">
                <Image src={offer_thumb} style={{ height: 'auto' }} alt="image-title" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferAreaHomeOne;