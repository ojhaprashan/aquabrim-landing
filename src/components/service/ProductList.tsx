'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import images
import prod_controller from "@/assets/images/resource/prod_controller.png";
import prod_starter from "@/assets/images/resource/prod_starter.png";
import prod_tank_monitor from "@/assets/images/resource/prod_tank_monitor.png";
import prod_valve from "@/assets/images/resource/prod_valve.png";
import accessories_img from "@/assets/images/resource/service-details3.png";

const categories = [
  { id: 'all', name: 'All Products', icon: 'bi-grid-fill' },
  { id: 'domestic', name: 'Domestic water level controllers', icon: 'bi-house-fill' },
  { id: 'industrial', name: 'Industrial water level controllers', icon: 'bi-building' },
  { id: 'accessories', name: 'Accessories', icon: 'bi-tools' },
];

const products = [
  // Domestic
  {
    id: 1,
    category: 'domestic',
    categoryName: 'Domestic',
    title: 'Ripple',
    description: 'Smart Municipal Water Level Controller',
    img: prod_controller,
  },
  {
    id: 2,
    category: 'domestic',
    categoryName: 'Domestic',
    title: 'iBot A',
    description: 'Smart Water Tank Level Controller',
    img: prod_controller,
  },
  {
    id: 3,
    category: 'domestic',
    categoryName: 'Domestic',
    title: 'iBot P',
    description: 'Smart Borewell Water Controller',
    img: prod_controller,
  },
  // Industrial
  {
    id: 4,
    category: 'industrial',
    categoryName: 'Industrial',
    title: 'Matrix',
    description: 'Multi-Tank Water Level Controller',
    img: prod_tank_monitor,
  },
  {
    id: 5,
    category: 'industrial',
    categoryName: 'Industrial',
    title: 'Flexibell',
    description: 'Wireless Water Level Alarm',
    img: prod_tank_monitor,
  },
  // Accessories
  {
    id: 6,
    category: 'accessories',
    categoryName: 'Accessories',
    title: 'Wireless Water Level Transmitter',
    description: 'High-precision wireless data transmission for water levels.',
    img: accessories_img,
  },
  {
    id: 7,
    category: 'accessories',
    categoryName: 'Accessories',
    title: 'IOT Gateway',
    description: 'Central hub for connecting all smart water monitoring devices.',
    img: accessories_img,
  },
  {
    id: 8,
    category: 'accessories',
    categoryName: 'Accessories',
    title: 'Wireless Electromagnetic Flow Meter',
    description: 'Accurate flow measurement with wireless connectivity.',
    img: accessories_img,
  },
  {
    id: 9,
    category: 'accessories',
    categoryName: 'Accessories',
    title: 'Wireless Signal booster',
    description: 'Extend the range of your wireless sensors and controllers.',
    img: accessories_img,
  },
  {
    id: 10,
    category: 'accessories',
    categoryName: 'Accessories',
    title: 'Ultrasonic sensor with Wireless Transmitter',
    description: 'Non-contact level measurement with wireless output.',
    img: accessories_img,
  },
  {
    id: 11,
    category: 'accessories',
    categoryName: 'Accessories',
    title: 'Wireless Temperature & Humidity Sensor',
    description: 'Monitor environmental conditions remotely.',
    img: accessories_img,
  },
  {
    id: 12,
    category: 'accessories',
    categoryName: 'Accessories',
    title: 'Pressure sensor with Wireless Transmitter',
    description: 'Accurate pressure monitoring for pipe systems.',
    img: accessories_img,
  },
  {
    id: 13,
    category: 'accessories',
    categoryName: 'Accessories',
    title: 'Wireless Motorised Valve',
    description: 'Automated water flow control with wireless triggers.',
    img: prod_valve,
  },
];

const ProductList = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="product-list-section pt-100 pb-120" style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="row">
          {/* Sidebar - Filter */}
          <div className="col-lg-3 mb-4 mb-lg-5">
            <div className="sidebar-container sticky-top" style={{ top: '100px', zIndex: 10 }}>
              <div className="sidebar-header mb-4">
                <h5 className="fw-bold text-uppercase" style={{ letterSpacing: '1px', color: '#1c1632' }}>Categories</h5>
                <div className="title-line"></div>
              </div>
              <div className="nav flex-column nav-pills custom-nav" role="tablist">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`nav-link d-flex align-items-center gap-3 mb-3 text-start py-3 px-4 rounded-4 transition-all ${activeCategory === cat.id ? 'active' : 'inactive'}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <div className="icon-box-small d-flex align-items-center justify-content-center">
                      <i className={`bi ${cat.icon}`}></i>
                    </div>
                    <span className="fw-semibold">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-lg-9">
            <div className="row g-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="col-md-6 col-xl-4 wow fadeInUp">
                  <div className="premium-product-card h-100 rounded-3 shadow-sm overflow-hidden">
                    {/* Image Area */}
                    <div className="product-image-container position-relative">
                      <div className="category-badge">{product.categoryName}</div>
                      <div className="image-hover-zoom h-100">
                        <Image 
                          src={product.img} 
                          alt={product.title} 
                          className="w-100 h-100"
                          style={{ objectFit: 'cover', objectPosition: 'top' }}
                        />
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="product-info-body p-4">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="product-title fw-bold mb-0">{product.title}</h5>
                      </div>
                      <p className="product-desc mb-0">{product.description}</p>
                    </div>
                    
                    {/* Subtle Decoration */}
                    <div className="card-accent-line"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-5 empty-state">
                <div className="empty-icon mb-4">
                   <i className="bi bi-search"></i>
                </div>
                <h4 className="fw-bold">No products found</h4>
                <p className="text-muted">Try selecting another category to find what you're looking for.</p>
                <button onClick={() => setActiveCategory('all')} className="btn btn-primary mt-3 px-4 rounded-pill">View All Products</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-list-section {
          background-color: #f8fafc;
          min-height: 80vh;
        }

        .title-line {
          width: 50px;
          height: 4px;
          background-color: #006CD0;
          border-radius: 2px;
          margin-top: 8px;
        }

        /* Sidebar Styling */
        .custom-nav .nav-link {
          border: 1px solid transparent;
          background: #ffffff;
          color: #64748b;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 108, 208, 0.05);
        }

        .custom-nav .nav-link.inactive:hover {
          background: #edf5ff;
          color: #006CD0;
          transform: translateX(5px);
        }

        .custom-nav .nav-link.active {
          background: #006CD0;
          color: #ffffff;
          box-shadow: 0 10px 20px rgba(0, 108, 208, 0.15);
        }

        .icon-box-small {
          width: 32px;
          height: 32px;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        /* Product Card Styling */
        .premium-product-card {
          background: #f4f9ff;
          border: 1px solid rgba(0, 108, 208, 0.1);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .premium-product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.08), 0 18px 36px -18px rgba(0, 0, 0, 0.03) !important;
          border-color: rgba(0, 108, 208, 0.15);
        }

        .product-image-container {
          background-color: #f8fafc;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          padding: 0 !important;
          position: relative;
        }

        .product-image-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.1));
          z-index: 1;
          pointer-events: none;
        }

        .image-hover-zoom {
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .premium-product-card:hover .image-hover-zoom {
          transform: scale(1.08) translateY(-5px);
        }

        .category-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          left: auto;
          background: rgba(0, 108, 208, 0.85);
          backdrop-filter: blur(8px);
          color: #ffffff;
          padding: 5px 12px;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 2;
          border: 1px solid rgba(0, 108, 208, 0.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        .product-info-body {
          padding: 1.5rem !important;
        }

        .product-title {
          color: #0f172a;
          font-size: 1.15rem;
          font-weight: 800 !important;
          line-height: 1.3;
          margin-bottom: 10px !important;
          transition: color 0.3s ease;
        }

        .premium-product-card:hover .product-title {
          color: #006CD0;
        }

        .product-desc {
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          opacity: 0.85;
        }

        .card-accent-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: #006CD0;
          transition: width 0.4s ease;
        }

        .premium-product-card:hover .card-accent-line {
          width: 100%;
        }

        .empty-state .empty-icon {
          font-size: 4rem;
          color: #cbd5e1;
        }

        @media (max-width: 991px) {
          .sticky-top {
            position: static !important;
          }
          .custom-nav {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center;
            gap: 8px !important;
            margin-bottom: 1rem;
            padding: 10px 0;
          }
          .custom-nav .nav-link {
            width: auto !important;
            padding: 8px 16px !important;
            font-size: 13px !important;
            margin: 0 !important;
            border-radius: 50px !important;
            border: 1px solid #eee !important;
            gap: 8px !important;
          }
          .custom-nav .nav-link .icon-box-small {
            width: 20px;
            height: 20px;
            font-size: 14px;
          }
          .sidebar-header {
            text-align: center;
          }
          .title-line {
            margin: 8px auto 0;
          }
          .product-image-container {
            aspect-ratio: 4 / 3;
            height: auto;
            padding: 0 !important;
          }
          .premium-product-card {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductList;

