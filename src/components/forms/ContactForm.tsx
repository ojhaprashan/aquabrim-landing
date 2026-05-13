
'use client'
import React from 'react';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  Fullname: string;  
  email: string;   
  phone: string;   
  subject: string; 
  message: string; 
}

const schema = yup
  .object({
    Fullname: yup.string().required().label("Full Name"), 
    email: yup.string().required().email().label("Email Address"), 
    phone: yup.string().required().label("Phone Number"), 
    subject: yup.string().required().label("Subject"),
    message: yup.string().required().label("Message"),
  })
  .required();

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
  const onSubmit = (data: FormData) => {   
    const notify = () => toast("Message sent successfully");
    notify();
    reset();
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id="contact-form" className="new-contact-form">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group mb-4">
              <label htmlFor="Fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
              <input 
                type="text" 
                id="Fullname"
                {...register("Fullname")} 
                className={`form-control ${errors.Fullname ? 'is-invalid' : ''}`}
                placeholder="Your full name" 
              />
              <div className="invalid-feedback">{errors.Fullname?.message}</div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group mb-4">
              <label htmlFor="email" className="form-label">Email Address <span className="text-danger">*</span></label>
              <input 
                type="email" 
                id="email"
                {...register("email")} 
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="your.email@example.com" 
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group mb-4">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input 
                type="text" 
                id="phone"
                {...register("phone")} 
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                placeholder="Your phone number" 
              />
              <div className="invalid-feedback">{errors.phone?.message}</div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group mb-4">
              <label htmlFor="subject" className="form-label">Subject <span className="text-danger">*</span></label>
              <select 
                id="subject"
                {...register("subject")} 
                className={`form-select ${errors.subject ? 'is-invalid' : ''}`}
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Sales">Sales</option>
                <option value="Feedback">Feedback</option>
              </select>
              <div className="invalid-feedback">{errors.subject?.message}</div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group mb-4">
              <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
              <textarea 
                id="message"
                {...register("message")} 
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                rows={5} 
                placeholder="How can we help you?"
              ></textarea>
              <div className="invalid-feedback">{errors.message?.message}</div>
            </div>
          </div>
          <div className="col-lg-12">
            <button type="submit" className="btn btn-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2">
              Send Message <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </form> 
    </>
  );
};

export default ContactForm;