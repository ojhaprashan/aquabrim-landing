
'use client'
import React, { useState } from 'react';
import { getTracking } from '@/utils/tracking';
import { trackContactSubmit } from '@/utils/gtag';

const API_ENDPOINT = "https://aquabrim.com/api/contact.php";

interface FormState {
  name: string;
  email: string;
  phone: string;
  product: string;
  queryType: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  product: "",
  queryType: "",
  message: "",
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const labelClass = "mb-2 block text-[0.9rem] font-semibold text-[#333]";
const baseField = "w-full rounded-[10px] border border-solid bg-white px-4 py-3 text-[0.95rem] outline-none transition-all placeholder:text-[#aaa] focus:border-[#006CD0] focus:shadow-[0_0_0_0.2rem_rgba(0,108,208,0.1)]";
const errorText = "mt-1 text-[0.85rem] text-[#dc3545]";

// CMS-editable labels fall back to these current defaults when not provided.
const DEFAULT_SUBMIT_TEXT = 'Send Message';
const DEFAULT_SUCCESS_MESSAGE = "Thank you! Your message has been sent. We'll get back to you soon.";
const DEFAULT_QUERY_TYPES = ['General Inquiry', 'Technical Support', 'Sales', 'Feedback'];

interface ContactFormProps {
  submitText?: string;
  successMessage?: string;
  queryTypes?: string[];
}

const ContactForm = ({ submitText, successMessage, queryTypes }: ContactFormProps = {}) => {
  const submitLabel = submitText || DEFAULT_SUBMIT_TEXT;
  const successText = successMessage || DEFAULT_SUCCESS_MESSAGE;
  const queryOptions = queryTypes?.length ? queryTypes : DEFAULT_QUERY_TYPES;

  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const fieldClass = (hasError: boolean) =>
    `${baseField} ${hasError ? 'border-[#dc3545]' : 'border-[#e0e0e0]'}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the field's error as the user corrects it.
    setErrors((prev) => (prev[name as keyof FormState] ? { ...prev, [name]: undefined } : prev));
  };

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter your contact number.";
    // Email is optional — only validate the format when something was entered.
    if (form.email.trim() && !EMAIL_REGEX.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      // The browser forbids setting a literal `Cookie` request header from JS, so we
      // write the cookie on the document instead; `credentials: "include"` then sends it.
      // Only reaches aquabrim.com if this site is served from the same domain/subdomain.
      document.cookie = "humans_21909=1; path=/";

      // Merge the visit's captured Google Ads / UTM attribution into the payload.
      const tracking = getTracking();

      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          product: form.product.trim(),
          source: "Website",
          queryType: form.queryType,
          message: form.message.trim(),
          utm_campaign: tracking.utm_campaign,
          utm_adgroup: tracking.utm_adgroup,
          utm_keyword: tracking.utm_keyword,
          device: tracking.device,
          gclid: tracking.gclid,
        }),
      });

      // Try to read the server's JSON body either way — on error it carries { error: "..." }.
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        // Surface the server's own reason when it sends one (e.g. the 409 message).
        const serverMessage = data?.error || data?.message;
        if (res.status === 409) {
          setStatus({
            type: 'error',
            message: serverMessage
              || "It looks like this enquiry was already submitted. If this is new, please change a detail and try again.",
          });
        } else {
          setStatus({
            type: 'error',
            message: serverMessage
              || `Sorry, your message couldn't be sent (error ${res.status}). Please try again, or email us directly.`,
          });
        }
        return;
      }

      // Success response: { success: true, id: 123 }
      trackContactSubmit();
      setStatus({
        type: 'success',
        message: successText,
      });
      setForm(initialForm);
    } catch (err) {
      // Reached only on a true network/CORS failure (no HTTP response at all).
      setStatus({
        type: 'error',
        message: "Sorry, we couldn't reach the server. Please check your connection and try again, or email us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="contact-form" noValidate>
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-[#dc3545]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass(!!errors.name)}
            placeholder="Your full name"
          />
          {errors.name && <p id="name-error" className={errorText}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass(!!errors.email)}
            placeholder="your.email@example.com"
          />
          {errors.email && <p id="email-error" className={errorText}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Contact Number <span className="text-[#dc3545]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClass(!!errors.phone)}
            placeholder="Your contact number"
          />
          {errors.phone && <p id="phone-error" className={errorText}>{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="product" className={labelClass}>Product of Interest</label>
          <input
            type="text"
            id="product"
            name="product"
            value={form.product}
            onChange={handleChange}
            className={fieldClass(false)}
            placeholder="Which product are you enquiring about?"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="queryType" className={labelClass}>Query Type</label>
          <select
            id="queryType"
            name="queryType"
            value={form.queryType}
            onChange={handleChange}
            className={fieldClass(false)}
          >
            <option value="">Select a query type</option>
            {queryOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className={labelClass}>Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className={`${fieldClass(false)} resize-none`}
            placeholder="How can we help you?"
          ></textarea>
        </div>

        {status && (
          <div
            className="md:col-span-2"
            role={status.type === 'error' ? 'alert' : 'status'}
            aria-live="polite"
          >
            <p
              className={`rounded-[10px] px-4 py-3 text-[0.95rem] ${
                status.type === 'success'
                  ? 'bg-[#e6f4ea] text-[#1e7e34]'
                  : 'bg-[#fde8ea] text-[#dc3545]'
              }`}
            >
              {status.message}
            </p>
          </div>
        )}

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={submitting}
            aria-busy={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#006CD0] py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#005bb0] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-[#006CD0]"
          >
            {submitting ? 'Sending…' : <>{submitLabel} <i className="bi bi-arrow-right"></i></>}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
