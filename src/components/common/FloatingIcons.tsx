'use client';
import React from 'react';
import { useDynamicCall } from '@/hooks/useDynamicCall';
import { trackWhatsAppClick, trackPhoneCall } from '@/utils/gtag';

const ICON_BASE =
  "flex h-[50px] w-[50px] items-center justify-center rounded-full text-2xl text-white no-underline shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_6px_14px_rgba(0,0,0,0.4)] md:h-[55px] md:w-[55px] md:text-[28px]";

const WHATSAPP_NUMBER = "919971052059";
const WHATSAPP_MESSAGE =
  "Hello AquaBrim - Water Level Controller | Water Pump Controller. Like to know more about your products";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const FloatingIcons = () => {
  const { href: callHref } = useDynamicCall();

  return (
    <div className="fixed bottom-4 left-4 z-[9999] flex flex-col gap-2.5 md:bottom-5 md:left-5 md:gap-[15px]">
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsAppClick}
        className={`${ICON_BASE} bg-[#25D366]`}
        aria-label="Chat with us on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
      <a href={callHref} onClick={trackPhoneCall} className={`${ICON_BASE} bg-primary`} aria-label="Call us">
        <i className="bi bi-telephone-fill"></i>
      </a>
    </div>
  );
};

export default FloatingIcons;
