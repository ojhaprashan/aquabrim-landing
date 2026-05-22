'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { products } from '../service/ProductList';

import prod_controller from "@/assets/images/resource/prod_controller.png";
import prod_starter from "@/assets/images/resource/prod_starter.png";
import prod_tank_monitor from "@/assets/images/resource/prod_tank_monitor.png";
import prod_valve from "@/assets/images/resource/prod_valve.png";
import service_details_2 from "@/assets/images/resource/service-details2.png";

const ServiceDetailsArea = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const product = (products.find(p => p.id === Number(productId)) || products[0]) as any;

  const [selectedImage, setSelectedImage] = useState<any>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Sync main image when product ID changes
  useEffect(() => {
    setSelectedImage(null);
  }, [productId]);

  // Auto scroll features list smoothly
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !product.features) return;

    let intervalId: any;
    let scrollSpeed = 0.5; // Smooth pixel speed per step
    let currentScroll = el.scrollLeft;

    const startScroll = () => {
      intervalId = setInterval(() => {
        if (!el) return;
        currentScroll += scrollSpeed;
        
        // Wrap around smoothly
        if (currentScroll >= el.scrollWidth - el.clientWidth) {
          currentScroll = 0;
        }
        
        el.scrollLeft = Math.floor(currentScroll);
      }, 16); // Smooth 60fps tick
    };

    const timer = setTimeout(() => {
      startScroll();
    }, 850);

    const handleMouseEnter = () => clearInterval(intervalId);
    const handleMouseLeave = () => {
      currentScroll = el.scrollLeft; // Sync manual scroll position
      clearInterval(intervalId);
      startScroll();
    };

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('touchstart', handleMouseEnter);
    el.addEventListener('touchend', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      clearInterval(intervalId);
      if (el) {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.removeEventListener('touchstart', handleMouseEnter);
        el.removeEventListener('touchend', handleMouseLeave);
      }
    };
  }, [productId, product.features]);

  const mainImage = selectedImage || product.img;

  const images = product.images || [product.img];

  return (
    <section className="product-details-section pt-100 pb-120">
      <div className="container">
        {/* Product Overview Row */}
        <div className="row mb-5">
          {/* Left: Images */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="product-gallery sticky-lg-top" style={{ top: '100px' }}>
              <div className="main-image-wrapper bg-light rounded-4 p-3 mb-3 text-center position-relative shadow-sm overflow-hidden" style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc' }}>
                 <Image 
                   src={mainImage} 
                   alt={product.title} 
                   width={600}
                   height={600}
                   className="w-100 h-100" 
                   style={{ objectFit: 'contain' }} 
                 />
              </div>
              <div className="thumbnail-gallery d-flex gap-3 overflow-auto pb-2 custom-scrollbar justify-content-md-start justify-content-center">
                {images.map((img: any, idx: number) => (
                  <div 
                    key={idx} 
                    className={`thumbnail-item rounded-3 p-1 bg-light shadow-sm overflow-hidden ${mainImage === img ? 'active' : ''}`}
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      flexShrink: 0, 
                      border: '2px solid', 
                      borderColor: mainImage === img ? '#006CD0' : 'transparent', 
                      cursor: 'pointer', 
                      backgroundColor: '#f8fafc',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image 
                      src={img} 
                      alt={`Thumbnail ${idx}`} 
                      width={80}
                      height={80}
                      className="w-100 h-100" 
                      style={{ objectFit: 'contain' }} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="col-lg-6 ps-lg-5">
            <div className="product-info wow fadeInRight">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge px-3 py-2 rounded-pill fw-bold text-uppercase" style={{ backgroundColor: 'rgba(0, 108, 208, 0.1)', color: '#006CD0', fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                  {product.categoryName} Solutions
                </span>
                <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill d-flex align-items-center gap-2 fw-semibold" style={{ fontSize: '0.75rem' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#198754', borderRadius: '50%' }}></div>
                  In stock
                </span>
              </div>

              <h2 className="display-5 fw-extrabold mb-2" style={{ color: '#0f172a', letterSpacing: '-0.5px' }}>{product.title}</h2>
              <p className="text-primary fw-semibold mb-3 fs-5" style={{ color: '#006CD0' }}>{product.description}</p>
              
              <p className="text-muted mb-4 mt-3" style={{ fontSize: '0.98rem', lineHeight: '1.7' }}>
                {product.longDescription || `The Aquabrim ${product.title} ${product.description} represents our signature premium tier engineering. Specially optimized for smart and robust performance under dynamic Indian voltage, piping, and tank conditions.`}
              </p>

              {/* Features Small Slides Grid/Carousel */}
              {product.features && (
                <div className="features-slides-wrapper mb-4">
                  <p className="fw-bold text-uppercase mb-3" style={{ fontSize: '0.82rem', letterSpacing: '1.2px', color: '#006CD0' }}>
                    Key Product Features
                  </p>
                  <div ref={scrollRef} className="features-horizontal-scroll d-flex gap-3 overflow-auto pb-3 custom-scrollbar">
                    {product.features.map((feat: string, fIdx: number) => (
                      <div 
                        key={fIdx} 
                        className="feature-slide-card rounded-4 p-3 d-flex flex-column justify-content-between text-start shadow-sm"
                        style={{ 
                          minWidth: '180px', 
                          width: '180px', 
                          height: '110px', 
                          background: 'linear-gradient(135deg, #f8fafc 0%, #edf5ff 100%)',
                          border: '1px solid rgba(0, 108, 208, 0.06)',
                          flexShrink: 0
                        }}
                      >
                        <div className="feature-card-icon mb-1" style={{ color: '#006CD0' }}>
                          <i className="bi bi-patch-check-fill fs-5"></i>
                        </div>
                        <span className="fw-bold text-dark" style={{ fontSize: '0.88rem', lineHeight: '1.3' }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Link href="/contact" className="btn btn-primary w-100 py-3 rounded-pill fw-bold mb-5 shadow-sm text-uppercase d-flex align-items-center justify-content-center gap-2 transition-all hover-lift text-white text-decoration-none" style={{ backgroundColor: '#006CD0', letterSpacing: '1px', fontSize: '0.95rem' }}>
                <i className="bi bi-telephone-outbound fs-5"></i> Enquire Now / Contact Us
              </Link>


            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works-section py-5 mt-4" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container py-lg-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5 wow fadeInLeft">
              <h2 className="fw-bold mb-4 display-6" style={{ color: '#0f172a' }}>How It Works</h2>
              
              {product.howItWorks ? (
                product.howItWorks.map((step: any, sIdx: number) => (
                  <div key={sIdx} className="mb-4">
                    <h5 className="fw-bold mb-2" style={{ color: '#1e293b' }}>{step.title}</h5>
                    <p className="text-muted" style={{ lineHeight: '1.7', fontSize: '0.96rem' }}>{step.desc}</p>
                  </div>
                ))
              ) : (
                <>
                  <div className="mb-4">
                    <h5 className="fw-bold mb-2" style={{ color: '#1e293b' }}>Monitors Water Levels</h5>
                    <p className="text-muted" style={{ lineHeight: '1.7', fontSize: '0.96rem' }}>Continuous monitoring of water levels in tanks to ensure uninterrupted operational safety.</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="fw-bold mb-2" style={{ color: '#1e293b' }}>Intelligent Automation</h5>
                    <p className="text-muted" style={{ lineHeight: '1.7', fontSize: '0.96rem' }}>Processes signal data automatically to control flow valves and pump starters seamlessly.</p>
                  </div>
                </>
              )}
            </div>
            <div className="col-lg-6 wow fadeInRight">
               <div className="bg-white rounded-4 p-4 shadow-sm text-center h-100 d-flex align-items-center justify-content-center border overflow-hidden position-relative" style={{ borderColor: '#e2e8f0', minHeight: '400px' }}>
                 <div className="image-hover-zoom w-100 h-100 d-flex align-items-center justify-content-center">
                    <Image src={service_details_2} alt="System Setup Diagram" className="img-fluid" style={{ maxHeight: '380px', objectFit: 'contain' }} />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-details-section {
          background-color: #ffffff;
        }

        .features-horizontal-scroll {
          scroll-behavior: auto;
          -webkit-overflow-scrolling: touch;
        }

        .feature-slide-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: grab;
        }

        .feature-slide-card:hover {
          transform: translateY(-4px);
          background: #ffffff !important;
          border-color: rgba(0, 108, 208, 0.2) !important;
          box-shadow: 0 10px 20px rgba(0, 108, 208, 0.06) !important;
        }

        /* Accordion Custom Styling - Premium Cards */
        .custom-accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .custom-accordion .accordion-item {
          border: 1px solid #e2e8f0;
          background-color: #ffffff;
          border-radius: 8px !important;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
          transition: all 0.3s ease;
        }

        .custom-accordion .accordion-item:hover {
          border-color: #cbd5e1;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .custom-accordion .accordion-button {
          background-color: #f8fafc;
          color: #1e293b;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 1.1rem 1.25rem;
          border: none;
          box-shadow: none;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.25s ease;
        }

        .custom-accordion .accordion-button:not(.collapsed) {
          color: #006CD0;
          background-color: #edf5ff;
          box-shadow: none;
        }

        .custom-accordion .accordion-button:focus {
          box-shadow: none;
        }

        .custom-accordion .accordion-button i {
          transition: color 0.25s ease;
        }

        .custom-accordion .accordion-button:not(.collapsed) i {
          color: #006CD0 !important;
        }

        .custom-accordion .accordion-button::after {
          background-size: 1rem;
          transition: transform 0.25s ease;
        }
        
        .custom-accordion .accordion-body {
          padding: 1.25rem 1.25rem 1.5rem 3.25rem;
          background-color: #ffffff;
          border-top: 1px solid #f1f5f9;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        /* Product features list */
        .product-features-list {
          list-style: none;
          padding-left: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .product-features-list li {
          position: relative;
          padding-left: 1.25rem;
          color: #475569;
          font-size: 0.95rem;
        }

        .product-features-list li::before {
          content: "•";
          color: #006CD0;
          font-weight: bold;
          font-size: 1.3rem;
          position: absolute;
          left: 0;
          top: -2px;
        }
        
        .thumbnail-item {
          transition: all 0.3s ease;
        }
        
        .thumbnail-item:hover {
          border-color: rgba(0, 108, 208, 0.5) !important;
          transform: translateY(-2px);
        }
        
        .hover-lift:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 108, 208, 0.2) !important;
        }
        
        /* Custom scrollbar for thumbnails */
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        .image-hover-zoom {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .image-hover-zoom:hover {
          transform: scale(1.05);
        }

        /* Mobile specific fixes */
        @media (max-width: 991px) {
          .pt-100 {
            padding-top: 40px !important;
          }
          .pb-120 {
            padding-bottom: 60px !important;
          }
          .display-6 {
            font-size: 2rem;
          }
          .custom-accordion .accordion-body {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceDetailsArea;