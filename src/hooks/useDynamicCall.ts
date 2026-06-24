'use client';
import { useEffect, useState } from 'react';

// Shift-based sales numbers (shared by the floating call icon and the contact page).
const PHONE_NUMBERS = {
  bablu: '9310035211',
  kishan: '9599881288',
  anjali: '9953205554',
  rajesh: '9910672821',
};

// Returns the number on duty for the given hour (0-23).
export function getShiftNumber(hour: number): string {
  if (hour >= 8 && hour < 11) return PHONE_NUMBERS.bablu;
  if (hour >= 11 && hour < 14) return PHONE_NUMBERS.kishan;
  if (hour >= 14 && hour < 17) return PHONE_NUMBERS.anjali;
  if (hour >= 17 && hour < 20) return PHONE_NUMBERS.bablu;
  return PHONE_NUMBERS.rajesh;
}

// Hook that resolves the current shift's phone number on the client.
// Starts with a stable default (avoids SSR/hydration mismatch), then updates after mount.
export function useDynamicCall() {
  const [number, setNumber] = useState(PHONE_NUMBERS.bablu);

  useEffect(() => {
    setNumber(getShiftNumber(new Date().getHours()));
  }, []);

  return { number, href: `tel:${number}` };
}
