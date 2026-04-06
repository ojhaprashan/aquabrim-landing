
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
  compnay: string; 
  message: string; 
}

const schema = yup
  .object({
    Fullname: yup.string().required().label("Full Name"), 
    email: yup.string().required().email().label("Email"), 
    phone: yup.string().required().label("Phone"), 
    subject: yup.string().required().label("Subject"),
    compnay: yup.string().required().label("Company"),
    message: yup.string().required().label("Message"),
  })
  .required();


const ContactForm = () => {

  const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
  const onSubmit = (data: FormData) => {   
    const notify = () => toast("Message send successful");
    notify();
    reset();
    console.log(data);
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}  id="it-form">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-box contact-inner">
              <input type="text" {...register("Fullname")} placeholder="Full Name" />
              <i className="bi bi-person"></i>
              <p className="form_error">{errors.Fullname?.message}</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-box contact-inner">
              <input type="text" {...register("email")} placeholder="Email Address" />
              <i className="bi bi-envelope"></i>
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box contact-inner">
              <input type="text" {...register("phone")} placeholder="Phone Number" />
              <i className="bi bi-phone-flip"></i>
              <p className="form_error">{errors.phone?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box">
              <input type="text" {...register("subject")} placeholder="subject" />
              <i className="bi bi-pencil-square"></i>
              <p className="form_error">{errors.subject?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box contact-inner">
              <input type="text" {...register("compnay")} placeholder="Your Company Name" />
              <p className="form_error">{errors.compnay?.message}</p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-box contact-inner">
              <textarea {...register("message")} id="massage" cols={30} rows={10} placeholder="Write your question here"></textarea>
              <i className="bi bi-chat-left-text-fill"></i>
              <p className="form_error">{errors.message?.message}</p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-box-button contact-inner">
              <button type="submit">Send Messages</button>
            </div>
          </div>
        </div>
      </form> 
    </>
  );
};

export default ContactForm;