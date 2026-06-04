
'use client'
import React from 'react';
import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';


interface FormData {
  Fullname: string;
  email: string;
  message: string;
}
const schema = yup
  .object({
    Fullname: yup.string().required().label("Full Name"),
    email: yup.string().required().email().label("Email"),
    message: yup.string().required().label("Message"),
  })
  .required();

const inputClass = "w-full rounded-lg border border-solid border-[#dee2e6] bg-white py-3 pl-4 pr-10 text-[0.95rem] outline-none transition-colors focus:border-[#006CD0]";
const iconClass = "pointer-events-none absolute right-4 top-4 text-[#94a3b8]";
const errorClass = "mt-1 text-[0.8rem] text-[#dc3545]";

const CommentsForm = () => {

  const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
  const onSubmit = (data: FormData) => {
    const notify = () => toast("Message send successful");
    notify();
    reset();
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id="it-form">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative">
            <input type="text" {...register("Fullname")} placeholder="Name*" className={inputClass} />
            <i className={`bi bi-person ${iconClass}`}></i>
            <p className={errorClass}>{errors.Fullname?.message}</p>
          </div>
          <div className="relative">
            <input type="text" {...register("email")} placeholder="E-mail*" className={inputClass} />
            <i className={`bi bi-envelope ${iconClass}`}></i>
            <p className={errorClass}>{errors.email?.message}</p>
          </div>
          <div className="relative md:col-span-2">
            <textarea {...register("message")} id="massage" cols={30} rows={6} placeholder="Your Comments*" className="w-full resize-none rounded-lg border border-solid border-[#dee2e6] bg-white py-3 pl-4 pr-10 text-[0.95rem] outline-none transition-colors focus:border-[#006CD0]"></textarea>
            <i className="bi bi-chat-left-text-fill pointer-events-none absolute right-4 top-4 text-[#94a3b8]"></i>
            <p className={errorClass}>{errors.message?.message}</p>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="rounded-lg bg-[#006CD0] px-7 py-3 font-bold text-white transition-colors hover:bg-[#005bb0]">Post Comments</button>
          </div>
        </div>
      </form>
      <div id="status"></div>
    </>
  );
};

export default CommentsForm;
