
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CopyRight, TeamSocialLinks } from '@/components/common/SocialLinks';

import footer_logo from  "@/assets/images/resource/footer-logo.png";


const footer_content = {
  sm_info: "Since 2008, Aquabrim has been delivering smart, affordable, and reliable water automation solutions for homes, apartments, and industries. Our systems ensure effortless water management.",
  list_title: "Industry Sectors",
  list_items: [
    {
      title: "Contact us",
      link: "/contact",
    },
    {
      title: "About us",
      link: "/about",
    },
    {
      title: "How it Works",
      link: "#",
    },
    {
      title: "Office Create",
      link: "#",
    },
    {
      title: "Residential Explore",
      link: "#",
    },
    {
      title: "Terms & Services",
      link: "#",
    },
  ],
  title: "Get In Touch",
  address: "New Delhi, India",
  phone: "+91-9560088791",
  email: "save.water@aquabrim.com",
  bootom_links: [
    'Privercy',
    'Term & Conditions',
    'Legal',
  ]
}
const { sm_info, list_title, list_items, title, address, phone, email, bootom_links } = footer_content;

const FooterOne = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-wiget wow animate__zoomIn">
                <div className="footer-wiget-log">
                 <Link href="/" className="d-flex align-items-center text-decoration-none">
                  <Image src="/assets/images/logo.png" width={50} height={50} style={{height: 'auto'}} alt="Aquabrim Logo" />
                  <span className='LogoHeader ms-2'>Aquabrim</span>
                 </Link>
                </div>
                <div className="footer-wiget-text">
                  <p>{sm_info}</p>
                </div>
                <div className="footer-wiget-social">
                  <ul>
                    <TeamSocialLinks /> 
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-wiget wow animate__slideInDown">
                <div className="footer-wiget-title">
                  <h4>{list_title}</h4>
                </div>
                <div className="footer-wiget-menu">
                  <ul>
                    {list_items.map((item, i) => (
                      <li key={i}><Link href={item.link}>{item.title}</Link></li>
                    ))} 
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-wiget-quick-contanct wow animate__slideInUp">
                <div className="footer-wiget-title">
                  <h4>{title}</h4>
                </div>
                <div className="footer-wiget-contact-menu">
                  <ul>
                    <li>{address}</li>
                    <li><a href={`tel:${phone}`}>{phone}</a></li>
                    <li><a href={`mailto:${email}`}>{email}</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          <div className="row footer-line">
            <div className="col-lg-3 col-md-6">
             
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-condition wow animate__slideInDown">
                <ul>
                  {bootom_links.map((item, i) => (
                    <li key={i}><Link href="#">{item}</Link></li>
                  ))} 
                </ul>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;