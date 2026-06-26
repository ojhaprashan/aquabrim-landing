'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products } from '../service/ProductList';

import service_details_2 from "@/assets/images/resource/service-details2.png";

const ServiceDetailsArea = () => {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const product = (products.find(p => p.slug === slug) || products[0]) as any;

  const [selectedImage, setSelectedImage] = useState<any>(null);

  // States for interactive zoom on details page
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isZoomed, setIsZoomed] = useState(false);

  // States for glassmorphic detailed lightbox modal
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxZoom, setLightboxZoom] = useState(false);
  const [lightboxPan, setLightboxPan] = useState({ x: 50, y: 50 });

  // Sync main image when the product (slug) changes
  useEffect(() => {
    setSelectedImage(null);
  }, [slug]);

  const mainImage = selectedImage || product.img;

  const images = product.images || [product.img];
  const activeImageIdx = images.indexOf(mainImage);
  const currentIdx = activeImageIdx !== -1 ? activeImageIdx : 0;

  const getImgSrc = (img: any) => {
    if (!img) return '';
    return typeof img === 'object' && img.src ? img.src : img;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const openLightbox = () => {
    setLightboxIndex(currentIdx);
    setLightboxOpen(true);
    setLightboxZoom(false);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setLightboxZoom(false);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setLightboxZoom(false);
  };

  const handleLightboxMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!lightboxZoom) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setLightboxPan({ x, y });
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, images]);

  return (
    <section className="bg-white pb-[60px] pt-6 sm:pt-10 lg:pb-[120px] lg:pt-14">
      <div className="container-app">
        {/* Product Overview Row */}
        <div className="mb-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {/* Left: Images */}
          <div>
            <div className="lg:sticky lg:top-[100px]">
              <div
                className="group/img relative mx-auto mb-3 flex aspect-[1024/1536] max-h-[550px] cursor-zoom-in items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[#eef4fb] text-center shadow-sm max-lg:max-h-[400px] max-lg:max-w-[280px] max-sm:max-h-none max-sm:w-full max-sm:max-w-full max-sm:rounded-xl"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => {
                  setIsZoomed(false);
                  setZoomPos({ x: 50, y: 50 });
                }}
                onClick={openLightbox}
              >
                <Image
                  src={mainImage}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="h-full w-full object-contain"
                  style={{
                    transform: isZoomed ? 'scale(2.2)' : 'scale(1)',
                    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                    transition: isZoomed ? 'transform 0.05s linear' : 'transform 0.3s ease-out',
                  }}
                />

                {/* Visual Hint Badge */}
                <div className="pointer-events-none absolute bottom-4 right-4 z-[2] flex items-center gap-2 rounded-full border border-solid border-white/15 bg-[#0f172a]/65 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.5px] text-white opacity-75 backdrop-blur-[8px] transition-all group-hover/img:-translate-y-0.5 group-hover/img:bg-[#006CD0]/85 group-hover/img:opacity-100">
                  <i className="bi bi-arrows-fullscreen"></i>
                  <span>Click to Zoom</span>
                </div>
              </div>
              <div className="flex justify-center gap-3 overflow-auto pb-2 md:justify-start [&::-webkit-scrollbar-thumb]:rounded-[10px] [&::-webkit-scrollbar-thumb]:bg-[#cbd5e1] [&::-webkit-scrollbar-track]:rounded-[10px] [&::-webkit-scrollbar-track]:bg-[#f1f5f9] [&::-webkit-scrollbar]:h-1.5">
                {images.map((img: any, idx: number) => (
                  <div
                    key={idx}
                    className={`h-20 w-20 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 border-solid bg-[#f8fafc] p-1 shadow-sm transition-all hover:-translate-y-0.5 max-lg:h-16 max-lg:w-16 max-sm:h-[60px] max-sm:w-[60px] ${
                      mainImage === img ? 'border-[#006CD0]' : 'border-transparent hover:border-[#006CD0]/50'
                    }`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx}`}
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:pl-5">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full bg-[#006CD0]/10 px-3 py-2 text-[0.75rem] font-bold uppercase tracking-[0.5px] text-[#006CD0]">
                  {product.categoryName} Solutions
                </span>
                <span className="flex items-center gap-2 rounded-full bg-[#198754]/10 px-3 py-2 text-[0.75rem] font-semibold text-[#198754]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#198754]"></span>
                  In stock
                </span>
              </div>

              <h2 className="mb-2 text-5xl font-extrabold tracking-[-0.5px] text-[#0f172a] max-sm:text-[2rem]">{product.title}</h2>
              <p className="mb-3 text-[1.25rem] font-semibold text-[#006CD0]">{product.description}</p>

              <p className="mb-4 mt-3 text-[0.98rem] leading-[1.7] text-[#6c757d]">
                {product.longDescription || `The Aquabrim ${product.title} ${product.description} represents our signature premium tier engineering. Specially optimized for smart and robust performance under dynamic Indian voltage, piping, and tank conditions.`}
              </p>

              {/* Features Chips */}
              {product.features && (
                <div className="mb-4">
                  <p className="mb-3 text-[0.82rem] font-bold uppercase tracking-[1.2px] text-[#006CD0]">
                    Key Product Features
                  </p>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {product.features.map((feat: string, fIdx: number) => {
                      const text = feat.toLowerCase();
                      let iconClass = 'bi-check-circle-fill';
                      if (text.includes('water') || text.includes('tank') || text.includes('liquid')) iconClass = 'bi-droplet-half';
                      else if (text.includes('motor') || text.includes('pump') || text.includes('control')) iconClass = 'bi-gear-wide-connected';
                      else if (text.includes('wire') || text.includes('rf')) iconClass = 'bi-wifi';
                      else if (text.includes('remote') || text.includes('monitor') || text.includes('smart')) iconClass = 'bi-display';
                      else if (text.includes('dry') || text.includes('protect') || text.includes('safe')) iconClass = 'bi-shield-check';
                      else if (text.includes('volt') || text.includes('power') || text.includes('electric')) iconClass = 'bi-lightning-charge';
                      else if (text.includes('search') || text.includes('detect')) iconClass = 'bi-search';
                      else if (text.includes('led') || text.includes('display') || text.includes('indicator')) iconClass = 'bi-lightbulb';
                      else if (text.includes('maintenance') || text.includes('sensor')) iconClass = 'bi-tools';
                      else if (text.includes('multi')) iconClass = 'bi-layers';

                      return (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 rounded-lg border border-solid border-[#006CD0]/10 bg-gradient-to-br from-[#f8fafc] to-[#edf5ff] px-2 py-2 shadow-sm transition-all hover:-translate-y-1 hover:border-[#006CD0]/20 hover:bg-white hover:shadow-[0_10px_20px_rgba(0,108,208,0.06)]"
                        >
                          <span className="flex shrink-0 items-center text-[#006CD0]">
                            <i className={`bi ${iconClass} text-[1rem]`}></i>
                          </span>
                          <span className="text-[0.78rem] font-semibold leading-[1.2] text-[#212529]">
                            {feat}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <Link
                href="/contact-us"
                className="mb-12 flex w-full items-center justify-center gap-2 rounded-full bg-[#006CD0] py-3 text-[0.95rem] font-bold uppercase tracking-[1px] text-white no-underline shadow-sm transition-all hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,108,208,0.2)]"
              >
                <i className="bi bi-telephone-outbound text-[1.25rem]"></i> Enquire Now / Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section — hidden for accessories / More Category products */}
      {product.category !== 'more_categories' && (
      <div className="mt-4 bg-[#f8fafc] py-12">
        <div className="container-app lg:py-4">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className="lg:pr-10">
              <h2 className="mb-4 text-[2.5rem] font-bold text-[#0f172a] max-lg:text-[2rem] max-sm:text-[1.75rem]">How It Works</h2>

              {product.howItWorks ? (
                product.howItWorks.map((step: any, sIdx: number) => (
                  <div key={sIdx} className="mb-4">
                    <h5 className="mb-2 text-[1.25rem] font-bold text-[#1e293b]">{step.title}</h5>
                    <p className="text-[0.96rem] leading-[1.7] text-[#6c757d]">{step.desc}</p>
                  </div>
                ))
              ) : (
                <>
                  <div className="mb-4">
                    <h5 className="mb-2 text-[1.25rem] font-bold text-[#1e293b]">Monitors Water Levels</h5>
                    <p className="text-[0.96rem] leading-[1.7] text-[#6c757d]">Continuous monitoring of water levels in tanks to ensure uninterrupted operational safety.</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="mb-2 text-[1.25rem] font-bold text-[#1e293b]">Intelligent Automation</h5>
                    <p className="text-[0.96rem] leading-[1.7] text-[#6c757d]">Processes signal data automatically to control flow valves and pump starters seamlessly.</p>
                  </div>
                </>
              )}
            </div>
            <div>
              <div className="group flex h-full min-h-[400px] items-center justify-center overflow-hidden rounded-2xl border border-solid border-[#e2e8f0] bg-white p-4 text-center shadow-sm max-sm:min-h-[250px]">
                <div className="flex h-full w-full items-center justify-center transition-all duration-500 group-hover:scale-105">
                  <Image src={product.howItWorksImg || service_details_2} alt="System Setup Diagram" width={600} height={600} className="max-h-full w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Glassmorphic Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex animate-fade-in flex-col items-center justify-center bg-[#0f172a]/85 backdrop-blur-[15px]"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Header Bar */}
          <div className="absolute left-0 right-0 top-6 z-[10001] flex w-full items-center justify-between px-8 max-sm:top-4 max-sm:px-4">
            <span className="rounded-full border border-solid border-white/[0.08] bg-[#1e293b]/50 px-3 py-2 text-[0.9rem] font-semibold text-white/90 backdrop-blur-[5px]">
              {lightboxIndex + 1} / {images.length}
            </span>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-solid border-white/[0.08] bg-[#1e293b]/50 text-[1.1rem] text-white backdrop-blur-[5px] transition-all hover:rotate-90 hover:scale-105 hover:border-transparent hover:bg-[#ef4444]/80"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          {/* Main Content Area */}
          <div className="relative flex h-[80vh] w-full items-center justify-center px-20 max-lg:h-[70vh] max-lg:px-5 max-sm:h-[60vh] max-sm:px-0" onClick={(e) => e.stopPropagation()}>
            {images.length > 1 && (
              <button
                className="absolute left-5 top-1/2 z-[10005] flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-white/10 bg-[#1e293b]/55 text-[1.4rem] text-white backdrop-blur-[8px] transition-all hover:scale-110 hover:border-transparent hover:bg-[#006CD0] hover:shadow-[0_8px_20px_rgba(0,108,208,0.3)] max-lg:left-2.5 max-lg:h-12 max-lg:w-12 max-lg:text-[1.2rem] max-sm:fixed max-sm:bottom-20 max-sm:left-6 max-sm:top-auto max-sm:translate-y-0"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
            )}

            <div
              className="relative flex h-full w-full items-center justify-center overflow-hidden"
              onMouseMove={handleLightboxMouseMove}
              onClick={() => setLightboxZoom(!lightboxZoom)}
              style={{ cursor: lightboxZoom ? 'zoom-out' : 'zoom-in' }}
            >
              <img
                src={getImgSrc(images[lightboxIndex])}
                alt={`${product.title} detailed view`}
                className="max-h-full max-w-full rounded-xl object-contain shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                style={{
                  transform: lightboxZoom ? 'scale(2.5)' : 'scale(1)',
                  transformOrigin: `${lightboxPan.x}% ${lightboxPan.y}%`,
                  transition: lightboxZoom ? 'transform 0.05s linear' : 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
                }}
              />
            </div>

            {images.length > 1 && (
              <button
                className="absolute right-5 top-1/2 z-[10005] flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-white/10 bg-[#1e293b]/55 text-[1.4rem] text-white backdrop-blur-[8px] transition-all hover:scale-110 hover:border-transparent hover:bg-[#006CD0] hover:shadow-[0_8px_20px_rgba(0,108,208,0.3)] max-lg:right-2.5 max-lg:h-12 max-lg:w-12 max-lg:text-[1.2rem] max-sm:fixed max-sm:bottom-20 max-sm:right-6 max-sm:top-auto max-sm:translate-y-0"
                onClick={handleNext}
                aria-label="Next image"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            )}
          </div>

          {/* Footer Instruction */}
          <div className="absolute bottom-6 left-0 right-0 z-[10001] flex justify-center max-sm:bottom-4">
            <div className="rounded-full border border-solid border-white/10 bg-[#1e293b]/60 px-3 py-2 text-[0.85rem] font-medium tracking-[0.5px] text-white/95 backdrop-blur-[5px]">
              {lightboxZoom
                ? "💡 Move mouse to pan • Click image to zoom out"
                : "💡 Click image to zoom in (2.5x)"}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceDetailsArea;
