'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

//test git 

import HeaderLogoTwo from "@/assets/images/logo2.png";

import HeaderLogo from "@/assets/images/logo.png";
import NavMenu from './Menu/NavMenu';
import { TeamSocialLinks } from '@/components/common/SocialLinks';
import UseSticky from '@/hooks/UseSticky';
import MobileMeneu from './Menu/MobileMeneu';
import SearchPopup from '@/components/common/SearchPopup';


const HeaderOne = ({ style }: any) => {

  const { sticky } = UseSticky()
  const [searchPopup, setSearchPopup] = useState<boolean>(false); 

  return (
    <>

      <div className="solar-topbar-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="solar-top-menu">
                <ul>
                  <li className="line"><a href="#"><i className="bi bi-geo-alt"></i> New Delhi, India</a></li>
                  <li><a href="tel:+91-9560088791"><i className="bi bi-telephone"></i> +91-9560088791</a></li>
                  <li><a href="mailto:save.water@aquabrim.com"><i className="bi bi-envelope"></i> save.water@aquabrim.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="solar-top-content-menu">
                <div className="solar-top-content">
                  <select id="Language">
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                  </select>
                </div>
                <div className="solar-top-social-icon">
                  <ul>
                    <TeamSocialLinks />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className={`solar-header-section ${style ? 'style-two' : ''} ${sticky ? 'sticky-nav' : ''}`} id="sticky-header">
        <div className="container">
          <div className="row align-items-center row">
            <div className="col-lg-2 col-md-6">
              <div className={`logo ${style ? 'style-two' : ''}`}>
               <Link href="/" className="d-flex align-items-center text-decoration-none">
                <Image src="/assets/images/logo.png" width={50} height={50} style={{height: 'auto'}} alt="Aquabrim Logo" />
                <span className='LogoHeader ms-2'>Aquabrim</span>
               </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="solar-menu justify-content-start" style={{ marginLeft: '130px' }}>
                <NavMenu />
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="solar-search-button">
               
                <div className="solar-btn">
                  <Link href="/login">Sign In <i className="bi bi-arrow-right"></i></Link>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMeneu /> 
      <SearchPopup searchPopup={searchPopup} setSearchPopup={setSearchPopup} />

    </>
  );
};

export default HeaderOne;