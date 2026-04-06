

'use client'
import React from 'react';
import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';


interface FormData {
  Fullname: string;  
  email: string;   
}

const schema = yup
  .object({
    Fullname: yup.string().required().label("Full Name"), 
    email: yup.string().required().email().label("Email"), 
  })
  .required();


const AppointmentFormHomeOne = () => {

  const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
  const onSubmit = (data: FormData) => {   
    const notify = () => toast("Message send successful");
    notify();
    reset();
    console.log(data);
  };
  


  return (
    <>
      <form id="it form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-box appointment">
              <input type="text" {...register("Fullname")} placeholder="Your Name" />
              <p className="form_error">{errors.Fullname?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box appointment">
              <input type="text" {...register("email")} placeholder="Email Address" />
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-box-button appointment">
              <button type="submit">Subscribe Now</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AppointmentFormHomeOne;