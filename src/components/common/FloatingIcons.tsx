'use client';
import React, { useEffect, useState } from 'react';

const numbers: Record<string, string> = {
  bablu: "tel:9310035211",
  kishan: "tel:9599881288",
  anjali: "tel:9953205554",
  rajesh: "tel:9910672821",
};

function getDynamicCallHref(): string {
  const hour = new Date().getHours();
  if (hour >= 8 && hour < 11) return numbers.bablu;
  if (hour >= 11 && hour < 14) return numbers.kishan;
  if (hour >= 14 && hour < 17) return numbers.anjali;
  if (hour >= 17 && hour < 20) return numbers.bablu;
  return numbers.rajesh;
}

const ICON_BASE =
  "flex h-[50px] w-[50px] items-center justify-center rounded-full text-2xl text-white no-underline shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_6px_14px_rgba(0,0,0,0.4)] md:h-[55px] md:w-[55px] md:text-[28px]";

const WHATSAPP_NUMBER = "919971052059";
const WHATSAPP_MESSAGE =
  "Hello AquaBrim - Water Level Controller | Water Pump Controller. Like to know more about your products";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const FloatingIcons = () => {
  const [callHref, setCallHref] = useState("tel:9310035211");

  useEffect(() => {
    setCallHref(getDynamicCallHref());
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-[9999] flex flex-col gap-2.5 md:bottom-5 md:left-5 md:gap-[15px]">
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className={`${ICON_BASE} bg-[#25D366]`}
        aria-label="Chat with us on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
      <a href={callHref} className={`${ICON_BASE} bg-primary`} aria-label="Call us">
        <i className="bi bi-telephone-fill"></i>
      </a>
    </div>
  );
};

export default FloatingIcons;
