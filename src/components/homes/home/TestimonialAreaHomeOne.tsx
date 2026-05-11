'use client';
import React from 'react';
import Image from 'next/image';

const testimonial_data = [
  {
    id: 1,
    name: "Ramesh Kumar",
    designation: "Homeowner, Coimbatore",
    review: "Aquabrim controller has completely solved our water overflow issue. Very reliable and easy to use.",
    avatar: "/assets/images/testimonials/ramesh.png",
    rating: 5
  },
  {
    id: 2,
    name: "Sunita Rao",
    designation: "Apartment Manager, Chennai",
    review: "We installed Aquabrim in our apartment complex. It works perfectly and the motor is well protected.",
    avatar: "/assets/images/testimonials/sunita.png",
    rating: 5
  },
  {
    id: 3,
    name: "Arun Mehta",
    designation: "Builder, Bengaluru",
    review: "Best water level controller we have used. Installation was easy and support is excellent.",
    avatar: "/assets/images/testimonials/arun.png",
    rating: 5
  }
];

const TestimonialAreaHomeOne = () => {
  return (
    <section className="testimonial-section py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-primary text-uppercase fw-bold mb-2" style={{ letterSpacing: '2px' }}>What Our Clients Say</h6>
          <h2 className="fw-bold" style={{ fontSize: 'clamp(32px, 5vw, 42px)' }}>Trusted by Thousands</h2>
        </div>

        <div className="row g-4">
          {testimonial_data.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${item.id * 0.1}s`}>
              <div className="testimonial-card p-4 p-md-5 rounded-4 shadow-sm h-100 position-relative border border-light transition-hover"
                style={{ backgroundColor: '#f8fbff' }}>
                
                {/* Quote Icon */}
                <div className="quote-icon mb-4 d-flex align-items-center justify-content-center rounded-circle"
                  style={{ width: '50px', height: '50px', backgroundColor: '#e6f0ff' }}>
                  <i className="bi bi-quote fs-3 text-primary"></i>
                </div>

                <p className="text-muted mb-4 fs-6" style={{ lineHeight: '1.7', minHeight: '80px' }}>
                  "{item.review}"
                </p>

                <div className="d-flex align-items-center mt-auto">
                  <div className="flex-shrink-0">
                    <div className="avatar-wrapper rounded-circle overflow-hidden border border-3 border-white shadow-sm"
                      style={{ width: '60px', height: '60px' }}>
                      <Image 
                        src={item.avatar} 
                        alt={item.name} 
                        width={60} 
                        height={60} 
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <div className="ms-3">
                    <h6 className="fw-bold mb-0">{item.name}</h6>
                    <p className="text-muted small mb-1">{item.designation}</p>
                    <div className="rating-stars text-warning small">
                      {[...Array(item.rating)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill me-1"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots (Decorative) */}
        <div className="d-flex justify-content-center mt-5">
          <span className="rounded-circle bg-primary mx-1" style={{ width: '10px', height: '10px' }}></span>
          <span className="rounded-circle bg-light mx-1" style={{ width: '10px', height: '10px' }}></span>
          <span className="rounded-circle bg-light mx-1" style={{ width: '10px', height: '10px' }}></span>
        </div>
      </div>

      <style jsx>{`
        .testimonial-card {
          transition: all 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.05) !important;
          border-color: #007bff33 !important;
        }
        .bg-primary-light {
          background-color: #f0f7ff;
        }
      `}</style>
    </section>
  );
};

export default TestimonialAreaHomeOne;
