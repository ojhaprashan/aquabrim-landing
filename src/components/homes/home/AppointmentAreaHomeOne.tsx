

import React from 'react';
import AppointmentFormHomeOne from '@/components/forms/AppointmentFormHomeOne'; 

const appointment_content = {
  subtitle: "Make an Appointment",
  title_1: "Accelerating Growth",
  title_2: "And Success",
  phone: <>Emergency Call <span>434-200-9716</span></>
}
const { subtitle, title_1, title_2, phone } = appointment_content

const AppointmentAreaHomeOne = () => {
  return (
    <>
      <div className="appointment-section">
        <div className="container">
          <div className="row appointment">
            <div className="col-lg-7 col-md-6">
              <div className="section-title wow animate__zoomIn">
                <div className="section-sub-title offer appointment">
                  <h4>{subtitle}</h4>
                </div>
                <div className="section-main-title offer wow animate__zoomIn">
                  <h2>{title_1}</h2>
                  <h2>{title_2}</h2>
                </div>
              </div>
              <div className="choose-us-info wow animate__slideInUp">
                <div className="choose-us-icon appointment">
                  <i className="bi bi-telephone-plus"></i>
                </div>
                <div className="choose-us-phone">
                  <h5>{phone}</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="choose-contact-box appointment wow animate__slideInRight">
                <AppointmentFormHomeOne /> 

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentAreaHomeOne;