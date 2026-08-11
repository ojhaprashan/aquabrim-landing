"use client"
import UseSticky from "@/hooks/UseSticky";
import React from "react";

const ScrollToTop = () => {
  const { sticky }: { sticky: boolean } = UseSticky();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 z-[9990] flex h-[45px] w-[45px] items-center justify-center rounded-full bg-primary text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-primary-600 ${
        sticky ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;
