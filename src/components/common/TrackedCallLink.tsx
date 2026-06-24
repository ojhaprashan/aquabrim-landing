'use client';
import React from 'react';
import { trackPhoneCall } from '@/utils/gtag';

// A `tel:` anchor that fires the GA4 `phone_call` event on click. Use this inside
// server components, where an inline onClick handler is not allowed.
interface TrackedCallLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const TrackedCallLink = ({ href, className, children }: TrackedCallLinkProps) => (
  <a href={href} onClick={trackPhoneCall} className={className}>
    {children}
  </a>
);

export default TrackedCallLink;
