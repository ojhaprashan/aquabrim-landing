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
  { id: 'water', name: 'Water Level Controllers', icon: 'bi-droplet-half' },
  { id: 'pump', name: 'Pump Controllers', icon: 'bi-gear-wide-connected' },
  { id: 'industrial', name: 'Industrial Controllers', icon: 'bi-building-gear' },
  { id: 'accessories', name: 'Accessories', icon: 'bi-tools' },
];

const products = [
  {
    id: 1,
    category: 'water',
    title: 'Smart Water Level Controller',
    description: 'Advanced automation for overhead water tanks.',
    img: prod_controller,
  },
  {
    id: 2,
    category: 'water',
    title: 'Dual Tank Controller',
    description: 'Manage two tanks automatically and efficiently.',
    img: prod_controller,
  },
  {
    id: 3,
    category: 'pump',
    title: 'Borewell Pump Controller',
    description: 'Protect your borewell pump from dry-run and overload.',
    img: prod_starter,
  },
  {
    id: 4,
    category: 'industrial',
    title: 'Industrial Level Controller',
    description: 'Reliable solution for commercial and industrial use.',
    img: prod_tank_monitor,
  },
  {
    id: 5,
    category: 'pump',
    title: 'Single Phase Pump Controller',
    description: 'Smart protection for single phase pumps.',
    img: prod_starter,
  },
  {
    id: 6,
    category: 'pump',
    title: 'Three Phase Pump Controller',
    description: 'Built for high power three phase pumps.',
    img: prod_starter,
  },
  {
    id: 7,
    category: 'accessories',
    title: 'Float Switch',
    description: 'High quality float switch for reliable water sensing.',
    img: prod_valve,
  },
  {
    id: 8,
    category: 'accessories',
    title: 'Accessories',
    description: 'Cables, sensors and mounting accessories.',
    img: accessories_img,
  },
];

const ProductList = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="product-list-section pt-5 pb-120 bg-white">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-4 mb-lg-0">
            <div className="sidebar-wrapper bg-white rounded-4 shadow-sm p-3 sticky-top" style={{ top: '100px', zIndex: 10 }}>
              <div className="nav flex-column nav-pills" role="tablist">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`nav-link d-flex align-items-center gap-3 mb-2 text-start py-3 px-4 rounded-3 transition-all ${activeCategory === cat.id ? 'active bg-primary text-white' : 'text-dark hover-bg-light'}`}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{ border: 'none', background: 'none' }}
                  >
                    <i className={`bi ${cat.icon} fs-5`}></i>
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
                  <div className="product-card h-100 bg-white rounded-4 shadow-sm overflow-hidden border border-transparent transition-all hover-shadow-lg hover-border-primary">
                    <div className="product-img-wrapper p-4 bg-white d-flex align-items-center justify-content-center" style={{ height: '220px', borderBottom: '1px solid #f0f0f0' }}>
                      <Image 
                        src={product.img} 
                        alt={product.title} 
                        className="img-fluid"
                        style={{ maxHeight: '180px', width: 'auto', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="product-content p-4">
                      <h5 className="fw-bold mb-2" style={{ fontSize: '18px' }}>{product.title}</h5>
                      <p className="text-muted small mb-4" style={{ lineHeight: '1.6' }}>{product.description}</p>
                      <Link href="/contact" className="text-primary fw-bold d-flex align-items-center gap-2 text-decoration-none">
                        View Details <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-5">
                <i className="bi bi-search display-1 text-muted opacity-25"></i>
                <h4 className="mt-3 text-muted">No products found in this category</h4>
              </div>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .product-list-section {
          min-height: 80vh;
        }
        .hover-bg-light:hover {
          background-color: #f8f9fa !important;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .hover-shadow-lg:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1) !important;
        }
        .hover-border-primary:hover {
          border-color: #006CD0 !important;
        }
        .nav-link.active {
          box-shadow: 0 4px 12px rgba(0, 108, 208, 0.2);
        }
        @media (max-width: 991px) {
          .sticky-top {
            position: static !important;
          }
          .nav-pills {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center;
            gap: 8px;
            padding: 10px 0;
          }
          .nav-link {
            padding: 8px 16px !important;
            font-size: 13px !important;
            margin: 0 !important;
            border-radius: 50px !important;
            border: 1px solid #eee !important;
          }
          .nav-link i {
            font-size: 14px !important;
          }
          .nav-link.active {
            border-color: #006CD0 !important;
          }
          .sidebar-wrapper {
            box-shadow: none !important;
            padding: 0 !important;
          }
        }
      `}} />
    </section>
  );
};

export default ProductList;
