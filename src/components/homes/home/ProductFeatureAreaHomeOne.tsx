'use client';
import React from 'react';
import Image from 'next/image';

const feature_data = [
  {
    id: 1,
    img: "/assets/product_feature/WebApp Based Monitoring System.png",
    title: "App-based Water Control",
    className: "feature-card-wide",
    bg: "blue",
    textColor: "text-white"
  },
  {
    id: 2,
    img: "/assets/product_feature/Smart Scheduling.png",
    title: "Smart Scheduling",
    className: "feature-card-narrow",
    bg: "light",
    textColor: "text-dark"
  },
  {
    id: 3,
    img: "/assets/product_feature/Dry-run Protection.png",
    title: "Automatic Controller",
    className: "feature-card-narrow",
    bg: "blue",
    textColor: "text-white"
  },
  {
    id: 4,
    img: "/assets/product_feature/Tank Level Monitoring.png",
    title: "Customizable Tank Levels",
    className: "feature-card-narrow",
    bg: "blue",
    textColor: "text-white"
  },
  {
    id: 5,
    img: "/assets/product_feature/SMS Alert.png",
    title: "Real-time Updates",
    className: "feature-card-narrow",
    bg: "light",
    textColor: "text-dark"
  },
  {
    id: 6,
    img: "/assets/product_feature/Wireless Technology.png",
    title: "IoT-based Water Level Controller",
    className: "feature-card-wide",
    bg: "blue",
    textColor: "text-white"
  }
];

const ProductFeatureAreaHomeOne = () => {
  return (
    <section className="product-features-section py-5 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-5 wow fadeInUp">
          <h4 className="text-primary text-uppercase fw-bold mb-2" style={{ fontSize: 'clamp(22px, 5vw, 28px)', letterSpacing: '1px' }}>Product Features</h4>
        </div>

        <div className="bento-grid">
          {feature_data.map((item) => (
            <div key={item.id} className={`bento-item ${item.className} ${item.bg === 'blue' ? 'bg-primary-blue' : 'bg-light-gray'} wow fadeInUp`}>
              <div className="card-content h-100 d-flex flex-column p-4">
                <h5 className={`fw-bold mb-4 ${item.textColor}`} style={{ fontSize: '1.2rem', zIndex: 2 }}>
                  {item.title}
                </h5>
                <div className="image-container flex-grow-1 position-relative mt-2">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin: 0 auto;
        }

        .bento-item {
          border-radius: 24px;
          overflow: hidden;
          min-height: 320px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(0,0,0,0.03);
        }

        .bento-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
        }

        .feature-card-wide {
          grid-column: span 2;
        }

        .feature-card-narrow {
          grid-column: span 1;
        }

        .bg-primary-blue {
          background-color: #0081ff !important;
        }

        .bg-light-gray {
          background-color: #f0f6ff !important;
        }

        @media (max-width: 1199px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .feature-card-wide, .feature-card-narrow {
            grid-column: span 1;
          }
        }

        @media (max-width: 767px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-item {
            min-height: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductFeatureAreaHomeOne;


