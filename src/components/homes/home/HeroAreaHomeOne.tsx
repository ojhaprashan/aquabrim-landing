'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroAreaHomeOne = () => {
  // --- 1. Typewriter State ---
  const phrases = [
    "Smart Water Automation",
    "Reliable Motor Protection",
    "Advanced Level Monitoring",
    "Automatic Overflow Control"
  ];

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // --- 2. Slider State ---
  const sliderImages = [
    "/assets/images/hero/product-hero.png",
    "/assets/images/hero/product-hero2.png",
    "/assets/images/hero/product-hero3.png"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- Typewriter Effect Logic ---
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  // --- Auto-play Slider Logic ---
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(slideTimer);
  }, [sliderImages.length]);

  return (
    <section
      className="slider-section hero_slider d-flex align-items-center hero-new-bg"
      style={{ width: '100%' }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Column: Text Content */}
          <div className="col-12 col-lg-7">
            <div className="slider-content" style={{ visibility: 'visible', opacity: 1 }}>

              <h1 className="main-title">
                {/* Position relative container holds the space so layout doesn't jump */}
                <div className="position-relative">
                  {/* Invisible placeholder of the longest text ensures container is always the right size */}
                  <span className="invisible d-block" aria-hidden="true" style={{ pointerEvents: 'none', userSelect: 'none' }}>
                    Automatic Overflow Control
                  </span>

                  {/* The actual typing text positioned directly over the invisible placeholder - NOW THEME BLUE */}
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ color: '#006CD0' }}>
                    {text}
                    <span className="cursor">|</span>
                  </div>
                </div>
              </h1>

              <p>
                Prevent tank overflow, protect motors from dry-run, and maintain a consistent water supply completely automatically.
              </p>

              <div className='buttons'>
                <div className="solar-btn slider1">
                  <Link href="/service-details">Our Service <i className="bi bi-arrow-right"></i></Link>
                </div>
                <div className="solar-btn slider2">
                  <Link href="/about">More About! <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Media Card */}
          <div className="col-12 col-lg-5">
            <div className="hero-media-wrapper" style={{ visibility: 'visible', opacity: 1 }}>

              {/* Product Card */}
              <div className="product-card shadow-lg rounded-4 overflow-hidden bg-white p-2">
                <div className="card-header-badge p-2 pb-1">
                  <span className="badge bg-success-soft text-success px-3 py-1 rounded-pill fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                    <i className="bi bi-check-circle-fill me-1"></i> SMART SYSTEM
                  </span>
                </div>

                <div className="position-relative p-2 pt-0">
                  {/* Image Slider Container */}
                  <div className="product-image-container rounded-3 overflow-hidden position-relative bg-light">
                    {sliderImages.map((imgSrc, index) => (
                      <div
                        key={index}
                        className="position-absolute top-0 start-0 w-100 h-100 transition-opacity"
                        style={{
                          opacity: currentSlide === index ? 1 : 0,
                          transition: 'opacity 0.8s ease-in-out',
                          zIndex: currentSlide === index ? 1 : 0
                        }}
                      >
                        <Image
                          src={imgSrc}
                          alt={`Aquabrim Smart Device View ${index + 1}`}
                          fill
                          className="img-fluid"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    ))}

                    <div className="slider-dots position-absolute bottom-0 start-50 translate-middle-x mb-2 d-flex gap-2" style={{ zIndex: 2 }}>
                      {sliderImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="card-info mt-3 px-2 pb-1 text-start">
                    <h3 className="card-title h6 fw-bold mb-0" style={{ color: '#1c1632' }}>Meet <span style={{ color: '#006CD0' }}>Aquabrim</span></h3>
                    <p className="card-subtitle text-muted mb-0" style={{ fontSize: '0.85rem' }}>Your Smart Water Manager</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .hero-new-bg::before {
          display: none !important;
        }

        .hero-new-bg {
          background-color: #f0f4f8 !important; 
          background-image: none !important;
          height: auto !important; 
          min-height: auto !important; 
          padding: 80px 0 60px !important; 
        }

        /* Fixed Cursor: Slim and theme blue */
        .cursor {
          display: inline-block;
          color: #006CD0; /* Theme blue */
          font-weight: 300; 
          margin-left: 2px;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }

        .slider-content h1 {
          color: #0d1b2a !important; /* Base color for any text not overridden */
          margin-bottom: 20px !important;
          font-weight: 800 !important;
          font-size: 2.5rem !important; 
        }
        
        .slider-content p {
          color: #4a5568 !important;
          max-width: 520px !important; 
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 0 !important; 
        }
        
        .buttons {
          display: flex;
          gap: 15px;
          margin-top: 25px; 
        }

        .product-card {
          max-width: 540px;
          margin: 0 auto;
          transition: transform 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
        }
        .product-image-container {
          height: 300px; 
        }
        .bg-success-soft { background-color: #e6fffa; }
        .text-success { color: #047857; }

        .slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.25);
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .slider-dot.active {
          background-color: #006CD0;
          width: 20px;
          border-radius: 4px;
        }

        /* =========================================
           DESKTOP VIEW TWEAKS 
           ========================================= */
        @media (min-width: 992px) {
          .slider-content {
             padding-top: 50px !important; 
          }
          .slider-content h1 {
            white-space: nowrap !important; 
            font-size: 2.8rem !important; 
          }
        }

        @media (min-width: 1200px) {
          .slider-content h1 {
            font-size: 3.2rem !important; 
          }
        }

        @media (max-width: 991px) {
          .hero-media-wrapper {
            margin-top: 40px;
          }
          .slider-content h1 {
            font-size: 40px !important;
            line-height: 1.2;
          }
        }

        /* =========================================
           MOBILE VIEW TWEAKS
           ========================================= */
        @media (max-width: 767px) {
          .hero-new-bg {
            padding: 90px 15px 50px !important; 
            text-align: center;
          }
          
          .slider-content {
            padding-top: 0 !important; 
            margin-top: 0 !important;
          }

          .slider-content h1 {
            font-size: 34px !important;
            margin-bottom: 20px !important;
            line-height: 1.2 !important;
          }
          
          .slider-content p {
            margin-top: 15px !important;
            margin-bottom: 25px !important;
            font-size: 15px !important;
            margin-left: auto;
            margin-right: auto;
          }
          .buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
            margin-top: 0;
          }
          .solar-btn {
            width: 100%;
            max-width: 250px;
            margin: 0 !important;
          }
          .solar-btn.slider2 {
            margin-left: 0 !important;
          }
          .hero-media-wrapper {
            margin-top: 35px !important; 
          }
          .product-image-container {
            height: 230px; 
          }
          .card-info.text-start {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroAreaHomeOne;