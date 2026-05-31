'use client';
import React from 'react';

const FloatingIcons = () => {
  return (
    <>
      <div className="floating-icons-container">
        <a 
          href="https://wa.me/919310035211" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-icon whatsapp-icon"
          aria-label="Chat with us on WhatsApp"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
        <a 
          href="tel:+919310035211" 
          className="floating-icon phone-icon"
          aria-label="Call us"
        >
          <i className="bi bi-telephone-fill"></i>
        </a>
      </div>

      <style jsx>{`
        .floating-icons-container {
          position: fixed;
          bottom: 20px;
          left: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 9999;
        }

        .floating-icon {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 28px;
          text-decoration: none;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .floating-icon:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
          color: white;
        }

        .whatsapp-icon {
          background-color: #25D366;
        }

        .phone-icon {
          background-color: #006CD0;
        }

        @media (max-width: 768px) {
          .floating-icons-container {
            bottom: 15px;
            left: 15px;
            gap: 10px;
          }
          .floating-icon {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingIcons;
