
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

const labelClass = "mb-2 block text-[0.9rem] font-semibold text-[#333]";
const baseField = "w-full rounded-[10px] border border-solid bg-white px-4 py-3 text-[0.95rem] outline-none transition-all placeholder:text-[#aaa] focus:border-[#006CD0] focus:shadow-[0_0_0_0.2rem_rgba(0,108,208,0.1)]";
const errorText = "mt-1 text-[0.85rem] text-[#dc3545]";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
  const onSubmit = (data: FormData) => {
    const notify = () => toast("Message sent successfully");
    notify();
    reset();
    console.log(data);
  };

  const fieldClass = (hasError: boolean) => `${baseField} ${hasError ? 'border-[#dc3545]' : 'border-[#e0e0e0]'}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
        <div>
          <label htmlFor="Fullname" className={labelClass}>Full Name <span className="text-[#dc3545]">*</span></label>
          <input type="text" id="Fullname" {...register("Fullname")} className={fieldClass(!!errors.Fullname)} placeholder="Your full name" />
          <p className={errorText}>{errors.Fullname?.message}</p>
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email Address <span className="text-[#dc3545]">*</span></label>
          <input type="email" id="email" {...register("email")} className={fieldClass(!!errors.email)} placeholder="your.email@example.com" />
          <p className={errorText}>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input type="text" id="phone" {...register("phone")} className={fieldClass(!!errors.phone)} placeholder="Your phone number" />
          <p className={errorText}>{errors.phone?.message}</p>
        </div>
        <div>
          <label htmlFor="subject" className={labelClass}>Subject <span className="text-[#dc3545]">*</span></label>
          <select id="subject" {...register("subject")} className={fieldClass(!!errors.subject)}>
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Sales">Sales</option>
            <option value="Feedback">Feedback</option>
          </select>
          <p className={errorText}>{errors.subject?.message}</p>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className={labelClass}>Message <span className="text-[#dc3545]">*</span></label>
          <textarea id="message" {...register("message")} rows={5} className={`${fieldClass(!!errors.message)} resize-none`} placeholder="How can we help you?"></textarea>
          <p className={errorText}>{errors.message?.message}</p>
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#006CD0] py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#005bb0]">
            Send Message <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
