"use client";
import React, { useState } from "react";
import menu_data from "./MenuData";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const MobileMeneu = () => {
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`mobile-menu-overlay ${open ? "opened" : ""}`}
        onClick={() => setOpen(false)}
      ></div>
      <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none ">
        <div className="mobile-menu mean-container">
          <style dangerouslySetInnerHTML={{ __html: `
            .mean-container .mean-bar::before { display: none !important; }
            .mean-logo-container { display: flex !important; visibility: visible !important; }
          ` }} />
          <div className="mean-bar">
            {!open && (
              <Link href="/" className="mean-logo-container">
                <img src="/assets/images/logo.png" width={35} height={35} alt="Logo" />
                <span className="mean-logo-text">Aquabrim</span>
              </Link>
            )}
            <a
              onClick={() => setOpen(!open)}
              className={`meanmenu-reveal ${open ? "meanclose" : ""}`}
              style={{
                right: "0px",
                left: "auto",
                textAlign: "center",
                textIndent: "0px",
                fontSize: "18px",
              }}
            >
              {open ?
                'X'
                :
                <>
                  <span></span>
                  <span></span>
                  <span></span>
                </>
              }

            </a>
            <nav className={`mean-nav ${open ? "mean-opened" : ""}`}>
              <div className="drawer-header-top">
                <Link href="/" className="drawer-logo" style={{ textDecoration: 'none' }}>
                  <div className="d-flex align-items-center">
                    <img src="/assets/images/logo_blue.png" width={40} height={40} alt="Logo" />
                    <span className="ms-2 fw-bold" style={{ fontSize: '22px', color: '#006CD0' }}>Aquabrim</span>
                  </div>
                </Link>
                {open && (
                  <button className="drawer-close-btn" onClick={() => setOpen(false)}>
                    <i className="bi bi-x-lg"></i>
                  </button>
                )}
              </div>

              <ul className={`nav_scroll`}>
                {menu_data.map((item, i) => {
                  let iconClass = "bi bi-grid";
                  const title = item.title.toLowerCase();
                  if (title.includes("home")) iconClass = "bi bi-house-door";
                  if (title.includes("about")) iconClass = "bi bi-info-circle";
                  if (title.includes("shop")) iconClass = "bi bi-bag";
                  if (title.includes("service")) iconClass = "bi bi-gear";
                  if (title.includes("project")) iconClass = "bi bi-briefcase";
                  if (title.includes("contact")) iconClass = "bi bi-envelope";
                  if (title.includes("blog")) iconClass = "bi bi-journal-text";
                  if (title.includes("finance")) iconClass = "bi bi-currency-dollar";
                  if (title.includes("operation")) iconClass = "bi bi-gear-wide-connected";
                  if (title.includes("community")) iconClass = "bi bi-people";

                  return (
                    <li key={i}>
                      <Link href={item.link}>
                        <span className="d-flex align-items-center">
                          <i className={`${iconClass} me-3`}></i> {item.title}
                        </span>
                      </Link>
                      {item.has_dropdown &&
                        <div className="sub-menu">
                          <ul style={{ display: navTitle === item.title ? "block" : "none", }}>
                            {item.sub_menus?.map((sub_item, index) =>
                              <li key={index}><Link href={sub_item.link}>{sub_item.title}</Link></li>
                            )}
                          </ul>
                          <a
                            className="mean-expand" onClick={() => openMobileMenu(item.title)}

                            style={{ fontSize: "18px", display: navTitle === item.title ? "mean-clicked" : "", }}
                          >
                            +
                          </a>
                        </div>
                      }
                    </li>
                  );
                })}
              </ul>

              <div className="drawer-featured">
                <p className="featured-label">Our Featured Product</p>
                <div className="featured-product-slider">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500 }}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                  >
                    <SwiperSlide>
                      <div className="featured-product-card">
                        <img src="/assets/images/resource/blog-inner1.jpg" alt="Featured Product" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="featured-product-card">
                        <img src="/assets/images/resource/blog-inner2.jpg" alt="Featured Product" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="featured-product-card">
                        <img src="/assets/images/resource/blog-inner3.jpg" alt="Featured Product" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMeneu;
