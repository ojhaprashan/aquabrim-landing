'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TeamSocialLinks } from '@/components/common/SocialLinks';

const footer_content = {
  brand_info: {
    app_text: "Aquabrim app is available on",
    tagline: "Make your water tank an Aquabrim Tank",
  },
  products: [
    { title: "Residential Monitor", link: "#" },
    { title: "Industrial Flow", link: "#" },
    { title: "Motor Controllers", link: "#" },
    { title: "IoT Sensors", link: "#" },
  ],
  company: [
    { title: "About Us", link: "/about" },
    { title: "Privacy Policy", link: "#" },
    { title: "Terms of Use", link: "#" },
    { title: "Terms of Service", link: "#" },
    { title: "Pricing Policy", link: "#" },
  ],
  support: [
    { title: "FAQs", link: "#" },
    { title: "Write to us", link: "/contact" },
    { title: "Blogs", link: "#" },
    { title: "Careers", link: "#" },
  ],
  social: {
    title: "SOCIAL",
    text: "Follow Our Journey on Social Media!",
  },
  bottom: {
    copyright: "© Aquabrim Private Limited",
    address: "New Delhi, India",
    phone: "+91-9560088791",
  }
};

const FooterOne = () => {
  const { brand_info, products, company, support, social, bottom } = footer_content;

  return (
    <>
      {/* Changed background to a very light blue to match the brand theme */}
      <footer className="footer-section text-dark py-5" style={{ borderTop: '2px solid #b6d4fe', backgroundColor: '#f0f4f8' }}>
        <div className="container">

          <div className="row mb-4">

            {/* Column 1: Logo & App Info */}
            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
              <Link href="/" className="d-flex align-items-center text-decoration-none mb-3">
                <Image src="/assets/images/logo_blue.png" width={40} height={40} style={{ height: 'auto' }} alt="Aquabrim Logo" />
                <span className='LogoHeader ms-2 fw-bold text-dark fs-5'>Aquabrim</span>
              </Link>
              <p className="text-muted small mb-2">{brand_info.app_text}</p>

              <div className="d-flex gap-4 mb-4">
                <a href="#" className="text-primary fs-4 transition-hover" title="Web Platform">
                  <i className="bi bi-globe2"></i>
                </a>
                <a href="#" className="text-primary fs-4 transition-hover" title="Android App">
                  <i className="bi bi-google-play"></i>
                </a>
                <a href="#" className="text-primary fs-4 transition-hover" title="iOS App">
                  <i className="bi bi-apple"></i>
                </a>
              </div>

              <p className="text-muted small">
                {brand_info.tagline.split('Aquabrim')[0]}
                <span className="text-primary fw-medium">Aquabrim</span>
                {brand_info.tagline.split('Aquabrim')[1]}
              </p>
            </div>

            {/* Column 2: Products */}
            <div className="col-lg-2 col-md-3 col-6 mb-4">
              <h6 className="text-muted text-uppercase mb-3" style={{ fontSize: '0.8rem' }}>Products</h6>
              <ul className="list-unstyled">
                {products.map((item, i) => (
                  <li key={i} className="mb-2">
                    <Link href={item.link} className="text-dark text-decoration-none small hover-primary">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="col-lg-2 col-md-3 col-6 mb-4">
              <h6 className="text-muted text-uppercase mb-3" style={{ fontSize: '0.8rem' }}>Company</h6>
              <ul className="list-unstyled">
                {company.map((item, i) => (
                  <li key={i} className="mb-2">
                    <Link href={item.link} className="text-dark text-decoration-none small hover-primary">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Support */}
            <div className="col-lg-2 col-md-3 col-6 mb-4">
              <h6 className="text-muted text-uppercase mb-3" style={{ fontSize: '0.8rem' }}>Support</h6>
              <ul className="list-unstyled">
                {support.map((item, i) => (
                  <li key={i} className="mb-2">
                    <Link href={item.link} className="text-dark text-decoration-none small hover-primary">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Social */}
            <div className="col-lg-3 col-md-3 col-12 mb-4">
              <h6 className="text-muted text-uppercase mb-3" style={{ fontSize: '0.8rem' }}>{social.title}</h6>
              <p className="small text-dark mb-3">{social.text}</p>
              <ul className="list-inline d-flex gap-2 m-0 p-0">
                <TeamSocialLinks />
              </ul>
            </div>

          </div>

          {/* Changed the horizontal rule divider to light blue */}
          <hr className="my-4" style={{ borderColor: '#b6d4fe', opacity: 0.6 }} />

          <div className="row align-items-center">

            {/* Bottom Left: Startup Badges */}
            <div className="col-md-6 d-flex gap-3 align-items-center justify-content-center justify-content-md-start mb-4 mb-md-0">
              <div className="bg-light border text-muted px-2 py-1 small rounded d-flex align-items-center gap-2">
                🦁 <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>Make In India</span>
              </div>
              <div className="bg-light border text-muted px-2 py-1 small rounded d-flex align-items-center gap-2">
                <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#ff6b6b' }}>#startupindia</span>
              </div>
            </div>

            {/* Bottom Right: Copyright & Address */}
            <div className="col-md-6 text-center text-md-end text-muted small">
              <p className="mb-1">{bottom.copyright}</p>
              <p className="mb-0">{bottom.address} • Ph: {bottom.phone}</p>
            </div>

          </div>
        </div>
      </footer>
      <style jsx>{`
        .transition-hover {
          transition: transform 0.3s ease, color 0.3s ease;
          display: inline-block;
          text-decoration: none !important;
        }
        .transition-hover:hover {
          transform: translateY(-3px);
          color: #0056b3 !important;
        }
        .hover-primary {
          transition: color 0.2s ease;
        }
        .hover-primary:hover {
          color: #006CD0 !important;
        }
      `}</style>
    </>
  );
};

export default FooterOne;