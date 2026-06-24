// Small helpers for firing GA4 conversion events. Each guards on `window.gtag`
// so it is a no-op during SSR/static export or before the GA script has loaded.

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const fire = (event: string, label: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, {
      event_category: 'Contact',
      event_label: label,
    });
  }
};

export const trackContactSubmit = () => fire('contact', 'Contact Form Submission');
export const trackWhatsAppClick = () => fire('whatsapp_click', 'WhatsApp');
export const trackPhoneCall = () => fire('phone_call', 'Phone Call');

export {};
