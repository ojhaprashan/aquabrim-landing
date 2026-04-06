
'use client'
import React from 'react';
import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';


interface FormData {
  Fullname: string;  
  email: string;   
  subject: string; 
  message: string; 
}

const schema = yup
  .object({
    Fullname: yup.string().required().label("Full Name"), 
    email: yup.string().required().email().label("Email"), 
    subject: yup.string().required().label("Subject"),
    message: yup.string().required().label("Message"),
  })
  .required();


const ContactFormHomeOne = () => {

  const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
  const onSubmit = (data: FormData) => {   
    const notify = () => toast("Message send successful");
    notify();
    reset();
    console.log(data);
  };
  
  return (
    <>
      <form id="it-form" onSubmit={handleSubmit(onSubmit)} className="contact-form-1">
        <div className="row">
          <div className="col-lg-12">
            <div className="form-box">
              <input type="text"  {...register("Fullname")} placeholder="Full Name *" />
              <i className="bi bi-person"></i>
              <p className="form_error">{errors.Fullname?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box">
              <input type="text"  {...register("email")} placeholder="Email Here *" />
              <i className="bi bi-envelope"></i>
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box">
              <input type="text" {...register("subject")} placeholder="Select Service *" />
              <i className="bi bi-pencil-square"></i>
              <p className="form_error">{errors.subject?.message}</p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-box">
              <textarea {...register("message")} id="massage" cols={30} rows={10} placeholder="Your Comment *"></textarea>
              <i className="bi bi-chat-left-text-fill"></i>
              <p className="form_error">{errors.message?.message}</p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-box-button">
              <button type="submit">Appontment Now <i className="bi bi-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactFormHomeOne;