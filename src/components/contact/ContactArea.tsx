

import React from 'react';
import ContactForm from '../forms/ContactForm';

const ContactArea = () => {
  return (
    <div className="contact-section py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row g-4">
          {/* Left Column: Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm p-4 p-md-5 h-100" style={{ borderRadius: '20px' }}>
              <div className="contact-title mb-4">
                <h3 className="fw-bold mb-2">Send Us a Message</h3>
                <p className="text-muted">Fill out the form below and our team will get back to you as soon as possible.</p>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Right Column: Contact Information & Map */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm p-4 p-md-5 h-100" style={{ borderRadius: '20px' }}>
              <div className="contact-info-section mb-4">
                <h3 className="fw-bold mb-4">Head office</h3>
                
                <div className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-light text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="bi bi-geo-alt-fill fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Address</h5>
                    <p className="text-muted mb-0">Aquabrim Pvt. Ltd.<br />Plot no. 35, 1st Floor, Union Bank of India Building,<br />100 Feet road, Ghitorni, Delhi – 110030</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-light text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="bi bi-envelope-fill fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Mail us</h5>
                    <p className="text-muted mb-0"><a href="mailto:save.water@aquabrim.com" className="text-muted text-decoration-none">save.water@aquabrim.com</a><br /><a href="mailto:sales@aquabrim.com" className="text-muted text-decoration-none">sales@aquabrim.com</a></p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-5">
                  <div className="icon-box bg-light text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="bi bi-telephone-fill fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Phone</h5>
                    <p className="text-muted mb-0">Domestic Sales: <a href="tel:+919310035211" className="text-muted text-decoration-none">+91-9310035211</a><br />Corporate Sales: <a href="tel:+919910672821" className="text-muted text-decoration-none">+91-9910672821</a></p>
                  </div>
                </div>

                <hr className="mb-5 text-muted" style={{ opacity: 0.15 }} />

                <h3 className="fw-bold mb-4">Branch address</h3>
                
                <div className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-light text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="bi bi-geo-alt-fill fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">STATE: KARNATAKA</h5>
                    <p className="text-muted mb-0">Aquabrim Pvt. Ltd.<br />Flat no .20, Mahabala 2nd cross, Chamundi Narsari Road,<br />Jaraganahalli, Bangalore (Landmark: Shivanna Depo).</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-light text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="bi bi-envelope-fill fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Mail us</h5>
                    <p className="text-muted mb-0"><a href="mailto:save.water@aquabrim.com" className="text-muted text-decoration-none">save.water@aquabrim.com</a><br /><a href="mailto:sales@aquabrim.com" className="text-muted text-decoration-none">sales@aquabrim.com</a></p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-light text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="bi bi-telephone-fill fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Phone</h5>
                    <p className="text-muted mb-0"><a href="tel:+919560088781" className="text-muted text-decoration-none">+91-9560088781</a></p>
                  </div>
                </div>

                <hr className="mb-5 text-muted" style={{ opacity: 0.15 }} />

                <h3 className="fw-bold mb-4">Branch address</h3>

                <div className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-light text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="bi bi-geo-alt-fill fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">STATE: MAHARASHTRA</h5>
                    <p className="text-muted mb-0">Aquabrim Pvt. Ltd.<br />16/B Elahi Residency, 3 No Colony, Ashoka Society,<br />Kalewadi Phata, Thergaon, Chinchwad,<br />Pune – 411033, Maharashtra</p>
                  </div>
                </div>
              </div>

              {/* Map Integration */}
              <div className="map-wrapper rounded-4 overflow-hidden mt-auto" style={{ height: '200px', position: 'relative' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.95373021!2d85.84621250756469!3d23.452185887261447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1635150422284!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <div className="map-overlay position-absolute bottom-0 start-0 w-100 p-3 text-center">
                   <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm shadow-sm rounded-pill px-3">
                     View on Google Maps <i className="bi bi-arrow-right small"></i>
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;