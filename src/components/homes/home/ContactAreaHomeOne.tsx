
import React from 'react';
import ContactFormHomeOne from '@/components/forms/ContactFormHomeOne';
import contact_img_1 from "@/assets/images/resource/choose-thumb.png";
import Image from 'next/image';


const contact_area_content = {
  subtitle: 'Why Choose Us',
  title: 'Best Solution For Your Water Needs',
  sm_des: "Aquabrim ensures accurate water level detection, smooth motor operation, and long-term protection for your water infrastructure.",
  festures: [
    "Smart Water Level Indicators",
    "Dry-Run Protection for Motors",
    "Energy Efficient Systems",
  ],
  btn_text: "Get A Quote",
  phone: <>Call Us Now <span>+91-9560088791</span></>,

}

const { subtitle, title, sm_des, festures, btn_text, phone } = contact_area_content

const ContactAreaHomeOne = () => {
  return (
    <>
      <div className="choose-us-section">
        <div className="container">
          <div className="row choose">
            <div className="col-lg-6 col-md-12">
              <div className="section-title wow animate__slideInUp">
                <div className="section-sub-title choose">
                  <h4>{subtitle}</h4>
                </div>
                <div className="section-main-title choose">
                  <h2>{title}</h2>
                </div>
              </div>
              <div className="choose-us-discription wow animate__slideInUp">
                <p>{sm_des}</p>
              </div>
              <div className="choose-us-content wow animate__zoomIn">
                <div className="choose-us-thumb">
                  <Image src={contact_img_1} alt="image-title" />
                </div>
                <div className="choose-us-list">
                  <ul>
                    {festures.map((item, index) => (
                      <li key={index}><i className="bi bi-check"></i> {item}</li>
                    ))} 
                  </ul>
                </div>
                <div className="choose-us-info">
                  <div className="solar-btn choose">
                    <a href="#">{btn_text} <i className="bi bi-arrow-right"></i></a>
                  </div>
                  <div className="choose-us-icon">
                    <i className="bi bi-telephone-plus"></i>
                  </div>
                  <div className="choose-us-phone">
                    <h5>{phone}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="choose-contact-box wow animate__slideInRight">
                <div className="choose-contact-title">
                  <h4>Make an Appointment</h4>
                </div>

                <ContactFormHomeOne /> 


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAreaHomeOne;