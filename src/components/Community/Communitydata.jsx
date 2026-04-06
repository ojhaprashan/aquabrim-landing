import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import offer_thumb from "@/assets/images/resource/offer-thumb.png";
import FeedbackForm from '@/components/forms/FeedbackForm'; 

const appointment_content = {
  subtitle1: "Your Feedback Matters",
  title_1: "Help Us Improve by Sharing Your Experience and Suggestions",
  title_2: "And Success",
  phone: <>Emergency Call <span>+123956(6565)556-02</span></>
}
const offer_content = {
    title: "Engage in Water Automation Conversations",
    feature: [
      {
       
        anim: "slideInRight",
        title: "General Automation Discussion",
        sm_des: "Join the Discussion: Share Insights, Ask Questions, and Learn from Fellow Automation Enthusiasts",
      },
      {
        anim: "slideInLeft",
        title: "Installation Experiences",
        sm_des: "Discuss your controller installation process, including any challenges and solutions you encountered",
      },
      {
        anim: "slideInRight",
        title: "Savings Tips      ",
        sm_des: "Exchange tips on how to reduce your water waste and get the most out of your monitoring systems.",
      },
      {
        anim: "slideInUp",
        title: "Technical Support",
        sm_des: "Seek advice from experts and fellow users on common problems, maintenance tips, and system upgrades.",
      },
      {
        anim: "zoomIn",
        title: "Tank Setup Configurations",
        sm_des: "Discuss the various ways to configure sensors for multiple underground and overhead tanks.",
      },
      {
        anim: "slideInDown",
        title: "Device Maintenance Tips      ",
        sm_des: "Share tips and best practices for maintaining and optimizing the performance of your water sensors.",
      },
    ],
  };
  
  const { subtitle, title, feature } = offer_content;
  const { subtitle1, title_1, title_2, phone } = appointment_content

const hero_content = {
    subtitle: "Be Part of the Water Saving Revolution",
    title: "Join Our Automation Community",
  }
const Communitydata = () => {

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
                  <Link href="/service-details">Let's Connect <i className="bi bi-arrow-right"></i></Link>
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
      <div className="appointment-section">
        <div className="container">
          <div className="row appointment">
            <div className="col-lg-7 col-md-6">
              <div className="section-title wow animate__zoomIn">
                <div className="section-sub-title offer appointment">
                  <h4>{subtitle1}</h4>
                </div>
                <div className="section-main-title offer wow animate__zoomIn">
                  <h2>{title_1}</h2>
                </div>
              </div>
              <div className="choose-us-info wow animate__slideInUp">
               
               
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="choose-contact-box appointment wow animate__slideInRight">
                <FeedbackForm /> 

              </div>
            </div>
          </div>
        </div>
      </div>


   </>
  )
}

export default Communitydata