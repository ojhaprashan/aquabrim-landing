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

const ProductList = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'domestic' | 'industrial'>('all');

  const domesticCount = products.filter(p => p.category === 'domestic').length;
  const industrialCount = products.filter(p => p.category === 'industrial' || p.category === 'more_categories').length;
  const totalCount = products.length;

  const handleReset = () => {
    setActiveFilter('all');
  };

  const filteredProducts = products.filter(product => {
    // Category Filter
    if (activeFilter === 'domestic' && product.category !== 'domestic') {
      return false;
    }
    if (activeFilter === 'industrial' && product.category === 'domestic') {
      return false;
    }

    return true;
  });

  return (
    <section className="product-list-section pt-100 pb-120" style={{ paddingTop: '130px' }}>
      <div className="container">
        <div className="row">
          {/* Sidebar Left: Categories Only */}
          <div className="col-lg-3 col-md-4 mb-2 mb-md-0">
            <div className="sticky-top" style={{ top: '130px' }}>
              <div className="d-flex flex-column gap-3 filter-vertical-group">
                <button
                  className={`btn-vertical-filter d-flex align-items-center justify-content-between rounded-3 border px-3 py-2.5 text-start w-100 transition-all ${
                    activeFilter === 'all' ? 'active' : ''
                  }`}
                  onClick={() => setActiveFilter('all')}
                >
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-grid-fill"></i>
                    <span>All</span>
                  </div>
                  <span className="count-pill">{totalCount}</span>
                </button>

                <button
                  className={`btn-vertical-filter d-flex align-items-center justify-content-between rounded-3 border px-3 py-2.5 text-start w-100 transition-all ${
                    activeFilter === 'domestic' ? 'active' : ''
                  }`}
                  onClick={() => setActiveFilter('domestic')}
                >
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-house-fill"></i>
                    <span>Domestic</span>
                  </div>
                  <span className="count-pill">{domesticCount}</span>
                </button>

                <button
                  className={`btn-vertical-filter d-flex align-items-center justify-content-between rounded-3 border px-3 py-2.5 text-start w-100 transition-all ${
                    activeFilter === 'industrial' ? 'active' : ''
                  }`}
                  onClick={() => setActiveFilter('industrial')}
                >
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-building"></i>
                    <span>Industrial</span>
                  </div>
                  <span className="count-pill">{industrialCount}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Grid Right: Products */}
          <div className="col-lg-9 col-md-8">
            <div className="results-count-bar mb-3 d-flex align-items-center justify-content-between text-muted fw-semibold">
              <span>Showing {filteredProducts.length} Systems</span>
            </div>

            <div className="row g-3">
              {filteredProducts.map((product) => {
                const isDomestic = product.category === 'domestic';
                return (
                  <div key={product.id} className="col-12 col-sm-6 col-md-6 col-lg-4 mx-auto wow fadeInUp">
                    <Link href={`/service-details?id=${product.id}`} className="text-decoration-none d-block h-100">
                      <div className="premium-product-card h-100 rounded-3 overflow-hidden position-relative d-flex flex-column border">
                        {/* Image Container - compact */}
                        <div className="product-image-container position-relative">
                          <div className={`category-tag-new position-absolute ${isDomestic ? 'tag-domestic' : 'tag-industrial'}`}>
                            <i className={`bi ${isDomestic ? 'bi-house-fill' : 'bi-building'} me-1`}></i>
                            {isDomestic ? 'Domestic' : 'Industrial'}
                          </div>
                          <div className="image-hover-zoom h-100">
                            <Image
                              src={product.img}
                              alt={product.title}
                              width={1024}
                              height={1536}
                              className="w-100 h-100 product-card-image"
                            />
                          </div>
                        </div>

                        {/* Content Section - tighter spacing */}
                        <div className="product-info-body p-3 d-flex flex-column flex-grow-1">
                          <h5 className="product-title fw-bold mb-1">{product.title}</h5>
                          <p className="product-desc mb-3">{product.description}</p>
                          
                          {/* Features Pills (If exists) - compact */}
                          {product.features && product.features.length > 0 && (
                            <div className="product-features-badges d-flex flex-wrap gap-1 mb-3 mt-auto">
                              {product.features.slice(0, 3).map((feature, idx) => (
                                <span key={idx} className="badge feature-pill">{feature}</span>
                              ))}
                            </div>
                          )}

                          {/* Explore System Action Footer - compact */}
                          <div className="card-footer-action d-flex align-items-center justify-content-between mt-auto pt-2 border-top">
                            <span className="action-text text-uppercase fw-bold">Explore System</span>
                            <div className="action-circle-btn d-flex align-items-center justify-content-center">
                              <i className="bi bi-arrow-right-short"></i>
                            </div>
                          </div>
                        </div>
                        
                        {/* Underline Accent */}
                        <div className="card-accent-line"></div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-5 empty-state-wrapper rounded-3 p-4 bg-white border">
                <div className="empty-icon-box mb-3 d-flex align-items-center justify-content-center mx-auto">
                  <i className="bi bi-search"></i>
                </div>
                <h4 className="fw-bold mb-2">No Match Found</h4>
                <p className="text-muted mb-4">
                  Try clearing your search query or selecting a different category.
                </p>
                <button onClick={handleReset} className="btn btn-reset-filters px-4 py-2 rounded-3 fw-semibold">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-list-section {
          background: linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%);
          min-height: 80vh;
        }

        /* Sidebar Styling */
        .sidebar-filter-panel {
          background: #ffffff;
          border: 1px solid rgba(0, 108, 208, 0.08) !important;
          position: sticky;
          top: 130px;
          z-index: 10;
        }

        .sidebar-title {
          color: #0f172a;
          font-size: 1.1rem;
          border-bottom: 2px solid rgba(0, 108, 208, 0.08);
          padding-bottom: 10px;
        }

        .search-widget .form-label,
        .filter-menu-widget .form-label {
          font-size: 0.76rem;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        /* Search input */
        .search-input-wrapper {
          width: 100%;
        }

        .search-icon-left {
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          font-size: 0.9rem;
          pointer-events: none;
        }

        .search-input {
          padding-left: 36px;
          padding-right: 30px;
          height: 40px;
          font-size: 0.85rem;
          border: 1px solid rgba(0, 108, 208, 0.12);
          background-color: #ffffff;
          color: #0f172a;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          border-color: #006CD0;
          box-shadow: 0 0 0 3px rgba(0, 108, 208, 0.1);
        }

        .btn-clear-search {
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          cursor: pointer;
          font-size: 0.95rem;
        }

        /* Vertical Buttons */
        .btn-vertical-filter {
          background: #ffffff;
          border: 1px solid rgba(0, 108, 208, 0.1) !important;
          color: #475569;
          font-size: 0.86rem;
          font-weight: 600;
          cursor: pointer;
          height: 42px;
        }

        .btn-vertical-filter i {
          color: #94a3b8;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .btn-vertical-filter:hover {
          background-color: rgba(0, 108, 208, 0.02);
          color: #006CD0;
          border-color: rgba(0, 108, 208, 0.2) !important;
        }

        .btn-vertical-filter:hover i {
          color: #006CD0;
        }

        .btn-vertical-filter.active {
          background: linear-gradient(135deg, #006CD0 0%, #0052a3 100%);
          color: #ffffff;
          border-color: transparent !important;
          box-shadow: 0 4px 10px rgba(0, 108, 208, 0.15);
        }

        .btn-vertical-filter.active i {
          color: #ffffff;
        }

        .count-pill {
          background-color: rgba(0, 0, 0, 0.04);
          color: #64748b;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 50px;
        }

        .btn-vertical-filter.active .count-pill {
          background-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        /* Products Grid */
        .results-count-bar {
          font-size: 0.85rem;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(0, 108, 208, 0.06);
        }

        /* Compact Product Cards */
        .premium-product-card {
          background: #ffffff;
          border: 1px solid rgba(0, 108, 208, 0.08) !important;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.015);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .premium-product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 20px -5px rgba(0, 108, 208, 0.04), 0 8px 8px -5px rgba(0, 108, 208, 0.02);
          border-color: rgba(0, 108, 208, 0.16) !important;
        }

        .product-image-container {
          background: #ffffff;
          aspect-ratio: 1024 / 1536;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0px;
        }

        .image-hover-zoom {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-hover-zoom :global(.product-card-image) {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .premium-product-card:hover .image-hover-zoom {
          transform: scale(1.08) translateY(-2px);
        }

        .category-tag-new {
          top: 10px;
          left: 10px;
          padding: 4px 10px;
          border-radius: 50px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          z-index: 2;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
        }

        .tag-domestic {
          background-color: rgba(0, 108, 208, 0.08);
          color: #006CD0;
          border: 1px solid rgba(0, 108, 208, 0.1);
        }

        .tag-industrial {
          background-color: rgba(15, 23, 42, 0.06);
          color: #0f172a;
          border: 1px solid rgba(15, 23, 42, 0.08);
        }

        /* Card Text */
        .product-title {
          color: #0f172a;
          font-size: 1.05rem;
          font-weight: 700 !important;
          transition: color 0.3s ease;
        }

        .premium-product-card:hover .product-title {
          color: #006CD0;
        }

        .product-desc {
          color: #64748b;
          font-size: 0.82rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .feature-pill {
          background-color: #f1f5f9;
          color: #475569;
          font-weight: 600;
          font-size: 0.68rem;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid #e2e8f0;
          text-transform: capitalize;
        }

        /* Actions */
        .card-footer-action {
          border-top: 1px solid #f1f5f9 !important;
        }

        .action-text {
          font-size: 0.72rem;
          color: #94a3b8;
          letter-spacing: 0.8px;
          transition: color 0.3s ease;
        }

        .action-circle-btn {
          width: 28px;
          height: 28px;
          background-color: #f8fafc;
          border-radius: 50%;
          color: #64748b;
          font-size: 1.10rem;
          transition: all 0.3s ease;
        }

        .premium-product-card:hover .action-text {
          color: #006CD0;
        }

        .premium-product-card:hover .action-circle-btn {
          background-color: #006CD0;
          color: #ffffff;
          transform: scale(1.05);
        }

        .card-accent-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #006CD0 0%, #00a4ff 100%);
          transition: width 0.4s ease;
        }

        .premium-product-card:hover .card-accent-line {
          width: 100%;
        }

        /* Empty State */
        .empty-icon-box {
          width: 50px;
          height: 50px;
          background-color: rgba(0, 108, 208, 0.06);
          border-radius: 50%;
          color: #006CD0;
          font-size: 1.4rem;
        }

        .btn-reset-filters {
          background: linear-gradient(135deg, #006CD0 0%, #0052a3 100%);
          color: #ffffff;
          border: none;
          box-shadow: 0 4px 10px rgba(0, 108, 208, 0.1);
        }

        /* Responsive */
        @media (max-width: 991px) {
          .product-list-section {
            padding-top: 130px !important;
          }
        }

        @media (max-width: 767px) {
          .filter-vertical-group {
            flex-direction: row !important;
            overflow-x: auto;
            gap: 4px !important;
            padding-bottom: 4px;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .filter-vertical-group::-webkit-scrollbar {
            display: none;
          }
          .btn-vertical-filter {
            justify-content: center !important;
            padding: 8px 6px !important;
            font-size: 0.8rem !important;
            height: auto;
            border: 1px solid rgba(0,0,0,0.05) !important;
            white-space: nowrap;
            flex: 1;
          }
          .btn-vertical-filter .d-flex {
            gap: 4px !important;
          }
          .btn-vertical-filter .count-pill {
            display: inline-flex !important;
            margin-left: 4px;
            padding: 2px 5px;
          }
        }

        @media (max-width: 575px) {
          .product-list-section {
            padding-top: 100px !important;
          }
          .btn-vertical-filter {
            font-size: 0.8rem !important;
            padding: 6px 12px !important;
          }
          
          /* Allow card to be full width without side gaps */
          .premium-product-card {
            max-width: 100%;
            margin: 0;
          }

          /* Reduce the height of the image so it fits better on screen */
          .product-image-container {
            aspect-ratio: 4 / 5 !important;
          }

          .product-desc {
            display: none !important;
          }
          .product-info-body {
            padding: 10px !important;
          }
          .product-features-badges {
            margin-bottom: 8px !important;
          }
          .feature-pill:nth-child(n+3) {
            display: none !important;
          }
          .card-footer-action {
            padding-top: 6px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductList;
