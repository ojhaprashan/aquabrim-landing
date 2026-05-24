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

// Import JSON data
import productsData from "@/data/products.json";

const categories = [
  { id: 'all', name: 'All Products', icon: 'bi-grid-fill' },
  { id: 'domestic', name: 'Domestic water level controllers', icon: 'bi-house-fill' },
  { id: 'industrial', name: 'Industrial water level controllers', icon: 'bi-building' },
  { id: 'more_categories', name: 'More Category', icon: 'bi-plus-circle-fill' }
];

const imageMap: Record<string, any> = {
  prod_controller,
  prod_starter,
  prod_tank_monitor,
  prod_valve,
  accessories_img
};

export const products = productsData.map((item) => {
  const customImages = (item as any).images;
  const images = customImages && customImages.length > 0
    ? customImages
    : [imageMap[item.imgKey] || accessories_img];
  return {
    ...item,
    img: images[0],
    images: images
  };
});

const subCategories = [
  { id: 'all', name: 'All Products', icon: 'bi-grid' },
  { id: 'flowmeter', name: 'Flowmeter', icon: 'bi-speedometer2' },
  { id: 'current_voltage', name: 'Current & Voltage monitoring system', icon: 'bi-lightning-charge' },
  { id: 'motorized_valve', name: 'Motorized valve systems', icon: 'bi-gear-wide-connected' },
  { id: 'temp_humidity', name: 'Temperature and humidity Monitoring system', icon: 'bi-thermometer-half' },
  { id: 'lift_monitoring', name: 'Lift monitoring system', icon: 'bi-arrow-up-down' },
  { id: 'wireless_capacitive', name: 'Wireless water level transmitter ( Capacitive)', icon: 'bi-broadcast-pin' },
  { id: 'wireless_non_contact', name: 'Wireless water level transmitter ( Non Contact)', icon: 'bi-wifi' },
  { id: 'integrated_control', name: 'Integrated Control & Command centre', icon: 'bi-cpu' },
  { id: 'scada_bms', name: 'Scada & BMS system', icon: 'bi-pc-display-horizontal' }
];

const ProductList = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubCategory, setActiveSubCategory] = useState('all');

  // Drag-scroll states and handlers for subcategory filters
  const subScrollRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = subScrollRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = subScrollRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setActiveSubCategory('all');
  };

  const filteredProducts = products.filter(product => {
    if (activeCategory === 'all') return true;
    if (product.category !== activeCategory) return false;
    if (activeCategory === 'more_categories' && activeSubCategory !== 'all') {
      return (product as any).subCategory === activeSubCategory;
    }
    return true;
  });

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
                    onClick={() => handleCategoryChange(cat.id)}
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
            {activeCategory === 'more_categories' && (
              <div className="sub-filter-bar-wrapper mb-5 mt-2 mt-lg-0 wow fadeInDown" style={{ animationDuration: '0.5s' }}>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="sub-filter-title-line"></div>
                  <span className="fw-bold text-uppercase text-secondary sub-filter-label">
                    Filter by system
                  </span>
                </div>
                <div
                  ref={subScrollRef}
                  className="sub-filter-scroll-container d-flex gap-2 overflow-auto custom-scrollbar"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUpOrLeave}
                  onMouseLeave={handleMouseUpOrLeave}
                  style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                  {subCategories.map((sub) => (
                    <button
                      key={sub.id}
                      className={`btn sub-filter-chip rounded-pill text-nowrap transition-all d-inline-flex align-items-center gap-2 ${
                        activeSubCategory === sub.id ? 'active' : 'inactive'
                      }`}
                      onClick={() => setActiveSubCategory(sub.id)}
                    >
                      <i className={`bi ${sub.icon}`}></i>
                      <span>{sub.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="row g-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="col-md-6 col-xl-4 wow fadeInUp">
                  <Link href={`/service-details?id=${product.id}`} className="text-decoration-none d-block h-100">
                    <div className="premium-product-card h-100 rounded-3 shadow-sm overflow-hidden">
                      {/* Image Area */}
                      <div className="product-image-container position-relative">
                        <div className="category-badge">{product.categoryName}</div>
                        <div className="image-hover-zoom h-100">
                          <Image
                            src={product.img}
                            alt={product.title}
                            width={450}
                            height={450}
                            className="w-100 h-100 product-card-image"
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
                  </Link>
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
          aspect-ratio: 1 / 1;
          overflow: hidden;
          position: relative;
        }

        .product-image-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: transparent;
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
          padding: 12px;
        }

        .image-hover-zoom :global(.product-card-image) {
          object-fit: contain;
          width: 100%;
          height: 100%;
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

        /* Premium Sub Filter Styling */
        .sub-filter-bar-wrapper {
          background: #ffffff;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 108, 208, 0.08);
          border-radius: 20px;
          padding: 22px 24px;
          box-shadow: 0 10px 30px -10px rgba(0, 108, 208, 0.08);
          position: relative;
          z-index: 2;
          overflow: hidden;
        }

        .sub-filter-label {
          font-size: 0.75rem;
          letter-spacing: 1px;
        }

        .sub-filter-title-line {
          width: 15px;
          height: 3px;
          background-color: #006CD0;
          border-radius: 2px;
        }

        .sub-filter-scroll-container {
          display: flex;
          gap: 10px;
          overflow-x: auto !important;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
          width: 100%;
          padding: 6px 2px 8px;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        .sub-filter-scroll-container::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari and Opera */
        }

        .sub-filter-chip {
          font-size: 0.84rem;
          font-weight: 600;
          padding: 0.55rem 1.1rem;
          border: 1px solid rgba(0, 108, 208, 0.08);
          background-color: #ffffff;
          color: #64748b;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          letter-spacing: 0.2px;
          flex-shrink: 0;
        }

        .sub-filter-chip i {
          font-size: 0.95rem;
          transition: transform 0.3s ease;
        }

        .sub-filter-chip.inactive:hover {
          background-color: #ffffff;
          color: #006CD0;
          border-color: #006CD0;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px -5px rgba(0, 108, 208, 0.15);
        }

        .sub-filter-chip.inactive:hover i {
          transform: scale(1.15);
        }

        .sub-filter-chip.active {
          background: linear-gradient(135deg, #006CD0 0%, #004d98 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 8px 20px -6px rgba(0, 108, 208, 0.35);
          transform: translateY(-2px);
        }

        .sub-filter-chip.active i {
          transform: scale(1.1);
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
          .sub-filter-bar-wrapper {
            padding: 18px 16px;
            margin-top: 8px;
          }
          .product-image-container {
            aspect-ratio: 1 / 1;
            height: auto;
            padding: 0 !important;
            background: linear-gradient(180deg, #ffffff 0%, #eef4fb 100%);
          }
          .image-hover-zoom {
            padding: 18px !important;
          }
          .image-hover-zoom :global(.product-card-image) {
            object-fit: contain !important;
            width: 100% !important;
            height: 100% !important;
          }
          .premium-product-card {
            margin-bottom: 10px;
            border-radius: 16px !important;
          }
          .category-badge {
            top: 12px;
            right: 12px;
            font-size: 0.65rem;
            padding: 4px 10px;
          }
          .product-info-body {
            padding: 1.1rem !important;
          }
          .product-title {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 575px) {
          .product-list-section {
            padding-top: 60px !important;
          }
          .sub-filter-bar-wrapper {
            padding: 16px 14px;
            border-radius: 16px;
          }
          .sub-filter-chip {
            font-size: 0.78rem;
            padding: 0.5rem 0.95rem;
          }
          .product-image-container {
            aspect-ratio: 1 / 1;
          }
          .image-hover-zoom {
            padding: 22px !important;
          }
          .image-hover-zoom :global(.product-card-image) {
            object-fit: contain !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductList;

