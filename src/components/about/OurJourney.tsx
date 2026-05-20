'use client';
import React from 'react';

const OurJourney = () => {
  const milestones = [
    {
      year: "2008",
      title: "Foundation & Vision",
      desc: "Aquabrim was founded with a vision to build smarter technologies for efficient water monitoring and automation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M3 21h18M5 21V7l8-4v18M13 21v-6h4v6M17 11h2v4h-2z" />
        </svg>
      )
    },
    {
      year: "2010",
      title: "Residential Automation",
      desc: "Expanded into residential automation by developing solutions tailored for domestic water management requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      year: "2012",
      title: "Industrial-Grade Systems",
      desc: "Introduced industrial-grade automation systems for commercial buildings and large-scale infrastructure projects.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M22 10v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10M2 10l10-7 10 7M12 22V12M12 12H7M12 12h5" />
        </svg>
      )
    },
    {
      year: "2015",
      title: "Web Telemetry & IoT",
      desc: "Integrated remote monitoring and web-enabled technologies to improve operational visibility and control.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="12" x="2" y="3" rx="2" />
          <path d="M12 15v6M5 21h14" />
        </svg>
      )
    },
    {
      year: "2018",
      title: "PAN India Leadership",
      desc: "Strengthened nationwide presence through continuous innovation, reliable support, and scalable automation systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    {
      year: "2021",
      title: "Advanced Flow Portfolios",
      desc: "Expanded the product portfolio with advanced flow management systems, motorised valves, and intelligent sensing technologies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M21 10h-3M3 10h3M12 6V3M12 18v3M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
        </svg>
      )
    },
    {
      year: "2023",
      title: "Connected Infrastructure",
      desc: "Diversified into broader industrial automation and connected infrastructure management solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    },
    {
      year: "2025",
      title: "Future-Ready Grids",
      desc: "Continuing to build future-ready intelligent automation systems focused on sustainability, digital connectivity, and smarter water infrastructure.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
  ];

  return (
    <section className="journey-section">
      <div className="container">
        {/* Header Block */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span className="subtitle">OUR ROADMAP</span>
            <h2 className="title mt-2">The Journey of Innovation</h2>
            <div className="title-glow-line"></div>
          </div>
        </div>

        {/* Timeline Dynamic Wrapper */}
        <div className="timeline-wrapper">
          {/* Central Vertical Connector Line (Desktop) */}
          <div className="central-line"></div>

          {milestones.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className={`timeline-block ${isLeft ? 'block-left' : 'block-right'}`}>
                {/* Visual Connector Dot on the line */}
                <div className="timeline-dot-anchor">
                  <div className="pulse-ring"></div>
                  <div className="solid-dot">
                    <span className="dot-year">{item.year}</span>
                  </div>
                </div>

                {/* Glassmorphic Milestone Card */}
                <div className="milestone-card shadow-sm">
                  <div className="card-badge-header">
                    <span className="card-year">{item.year}</span>
                    <div className="card-icon-badge">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .journey-section {
          background: radial-gradient(circle at 10% 20%, rgba(243, 248, 255, 0.6) 0%, rgba(255, 255, 255, 1) 90%);
          padding: 100px 0;
          width: 100% !important;
          display: block !important;
          position: relative;
        }

        .subtitle {
          font-size: 0.9rem;
          font-weight: 700;
          color: #006CD0;
          letter-spacing: 3px;
          display: inline-block;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
        }

        .title-glow-line {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #006CD0 0%, #00d2ff 100%);
          margin: 18px auto 0;
          border-radius: 4px;
          box-shadow: 0 2px 10px rgba(0, 108, 208, 0.3);
        }

        /* Timeline structure */
        .timeline-wrapper {
          position: relative;
          width: 100%;
          margin-top: 70px;
          padding: 20px 0;
        }

        /* Connecting vertical line (Desktop) */
        .central-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, 
            rgba(0, 108, 208, 0.05) 0%, 
            rgba(0, 108, 208, 0.8) 15%, 
            rgba(0, 210, 255, 0.8) 85%, 
            rgba(0, 210, 255, 0.05) 100%
          );
          transform: translateX(-50%);
          z-index: 1;
          border-radius: 4px;
        }

        .timeline-block {
          display: flex;
          position: relative;
          margin-bottom: 70px;
          width: 100%;
          z-index: 2;
        }

        .timeline-block:last-child {
          margin-bottom: 0;
        }

        /* Desktop Positioning: Left vs Right blocks */
        .block-left {
          justify-content: flex-start;
        }

        .block-right {
          justify-content: flex-end;
        }

        .block-left .milestone-card {
          margin-right: 50%;
          text-align: right;
          align-items: flex-end;
        }

        .block-right .milestone-card {
          margin-left: 50%;
          text-align: left;
          align-items: flex-start;
        }

        /* Timeline card design */
        .milestone-card {
          width: calc(50% - 60px);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 108, 208, 0.08);
          padding: 30px;
          border-radius: 24px;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .milestone-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 108, 208, 0.25);
          box-shadow: 0 20px 40px rgba(0, 108, 208, 0.08) !important;
          background: #ffffff;
        }

        /* Header within card */
        .card-badge-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
          width: 100%;
        }

        .block-left .card-badge-header {
          flex-direction: row-reverse;
        }

        .card-year {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          background: linear-gradient(135deg, #006CD0 0%, #004a91 100%);
          padding: 6px 18px;
          border-radius: 30px;
          box-shadow: 0 4px 12px rgba(0, 108, 208, 0.2);
        }

        .card-icon-badge {
          width: 48px;
          height: 48px;
          background: #f1f5f9;
          border-radius: 50%;
          color: #006CD0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
          border: 1px solid rgba(0, 108, 208, 0.05);
        }

        .milestone-card:hover .card-icon-badge {
          background: linear-gradient(135deg, #006CD0 0%, #00d2ff 100%);
          color: #ffffff;
          transform: rotate(15deg);
          box-shadow: 0 6px 15px rgba(0, 108, 208, 0.25);
        }

        .card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 12px;
        }

        .card-desc {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #64748b;
          margin: 0;
          font-weight: 450;
        }

        /* Central Timeline Dots (Desktop) */
        .timeline-dot-anchor {
          position: absolute;
          left: 50%;
          top: 30px;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-ring {
          position: absolute;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0, 108, 208, 0.15);
          animation: pulse-ring-animation 2.5s infinite;
        }

        .solid-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #006CD0;
          border: 3px solid #ffffff;
          box-shadow: 0 0 10px rgba(0, 108, 208, 0.4);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dot-year {
          display: none; /* hidden on desktop center dot, shown in cards */
        }

        .timeline-block:hover .solid-dot {
          background: #00d2ff;
          transform: scale(1.3);
          box-shadow: 0 0 18px rgba(0, 210, 255, 0.8);
        }

        @keyframes pulse-ring-animation {
          0% {
            transform: scale(0.65);
            opacity: 1;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        /* ===================================================
           Responsive Adaptation Rules
        ==================================================== */
        @media (max-width: 991px) {
          .journey-section {
            padding: 80px 0;
          }

          .title {
            font-size: 2.1rem;
          }

          .central-line {
            left: 30px;
            transform: none;
          }

          .timeline-dot-anchor {
            left: 30px;
            transform: translateX(-50%);
            top: 25px;
          }

          .dot-year {
            display: none;
          }

          .timeline-block {
            margin-bottom: 50px;
            justify-content: flex-start;
          }

          .block-left .milestone-card,
          .block-right .milestone-card {
            width: calc(100% - 75px);
            margin-left: 75px;
            margin-right: 0;
            text-align: left;
            align-items: flex-start;
          }

          .block-left .card-badge-header {
            flex-direction: row;
          }
        }

        @media (max-width: 575px) {
          .journey-section {
            padding: 60px 0;
          }

          .title {
            font-size: 1.7rem;
          }

          .central-line {
            left: 20px;
          }

          .timeline-dot-anchor {
            left: 20px;
          }

          .block-left .milestone-card,
          .block-right .milestone-card {
            width: calc(100% - 50px);
            margin-left: 50px;
            padding: 24px 20px;
          }

          .card-title {
            font-size: 1.15rem;
          }

          .card-desc {
            font-size: 0.88rem;
          }

          .card-year {
            font-size: 0.95rem;
            padding: 4px 14px;
          }

          .card-icon-badge {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default OurJourney;
