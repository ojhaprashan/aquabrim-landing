
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type DataType = {
  top_title: string;
  title: string;
  subtitle?: string;
}
const Breadcrumb = ({ top_title, title, subtitle }: DataType) => {
  return (
    <>
      <div className="breatcome-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome-content">
                <div className="breatcome-title">
                  <h1>{top_title}</h1>
                </div>
                {subtitle && (
                  <p className="mt-2 text-muted" style={{ fontSize: '1rem', maxWidth: '800px', marginBottom: '15px' }}>
                    {subtitle}
                  </p>
                )}
                <div className="bratcome-text">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li>{title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .breatcome-section {
          background-color: #f0f4f8 !important;
          background-image: none !important;
          padding: 50px 0 !important;
        }
        .breatcome-title h1 {
          color: #0d1b2a !important;
          font-size: 2rem !important;
          font-weight: 800 !important;
          margin-bottom: 5px !important;
        }
        .bratcome-text {
          position: static !important;
          background: transparent !important;
          padding: 0 !important;
        }
        .bratcome-text ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
        }
        .bratcome-text ul li, .bratcome-text ul li a {
          color: #4a5568 !important;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        .bratcome-text ul li a:hover {
          color: #006CD0 !important;
        }
        .bratcome-text ul li + li::before {
          content: "/" !important;
          margin: 0 10px;
          color: #cbd5e0;
        }
        
        @media (max-width: 767px) {
          .breatcome-section {
            padding: 40px 0 !important;
            text-align: center;
          }
          .bratcome-text ul {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Breadcrumb;