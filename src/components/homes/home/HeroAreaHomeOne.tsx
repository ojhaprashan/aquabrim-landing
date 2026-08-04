'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { HomeHero } from '@/services/home/home.types';

const DEFAULTS = {
  headingPrefix: 'Smart Wireless Water Level Controller for',
  animatedPhrases: ['Homes', 'Apartments', 'Industries'],
  paragraph:
    'Prevent tank overflow, protect motors from dry-run, and maintain a consistent water supply with Aquabrim.',
  primaryBtnText: 'Our Products',
  primaryBtnLink: '/products',
  secondaryBtnText: 'Talk to Expert',
  secondaryBtnLink: '/contact-us',
  sliderImages: [
    '/assets/home/for homes.webp',
    '/assets/home/for apartments.webp',
    '/assets/home/for industries.webp',
  ],
};

const HeroAreaHomeOne = ({ data }: { data?: HomeHero }) => {
  // Merge CMS content over defaults.
  const headingPrefix = data?.headingPrefix || DEFAULTS.headingPrefix;
  const phrases = data?.animatedPhrases?.length ? data.animatedPhrases : DEFAULTS.animatedPhrases;
  const paragraph = data?.paragraph || DEFAULTS.paragraph;
  const primaryBtnText = data?.primaryBtnText || DEFAULTS.primaryBtnText;
  const primaryBtnLink = data?.primaryBtnLink || DEFAULTS.primaryBtnLink;
  const secondaryBtnText = data?.secondaryBtnText || DEFAULTS.secondaryBtnText;
  const secondaryBtnLink = data?.secondaryBtnLink || DEFAULTS.secondaryBtnLink;
  const sliderImages = data?.sliderImages?.length ? data.sliderImages : DEFAULTS.sliderImages;

  // --- Typewriter State ---
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  // --- Slider State ---
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- Typewriter Effect Logic ---
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[loopNum % phrases.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length + 1));
      }, 150);
    }

    if (!isDeleting && text === currentPhrase) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases]);

  // --- Auto-play & Sync Slider Logic ---
  useEffect(() => {
    setCurrentSlide(loopNum % phrases.length);
  }, [loopNum, phrases.length]);

  return (
    <section className="w-full bg-[#f0f4f8] px-4 pb-[60px] pt-[80px] max-md:pb-[28px] max-md:pt-[36px] max-md:text-center">
      <div className="container-app">
        <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:gap-10">

          {/* Left Column: Text Content */}
          <div className="w-full lg:w-7/12 lg:pt-[50px]">
            <h1 className="mb-5 text-center text-[32px] font-extrabold leading-[1.25] text-[#0d1b2a] md:text-[40px] lg:text-left lg:text-[2.8rem] xl:text-[3.2rem]">
              {headingPrefix}{' '}
              {/* On mobile the animated word sits on its own centered line; on desktop it stays inline with a fixed-width placeholder for stability */}
              <span className="relative text-primary max-md:mt-2 max-md:block lg:inline-block">
                <span className="invisible select-none max-md:hidden" aria-hidden="true">Apartments&nbsp;&nbsp;</span>
                <span className="whitespace-nowrap lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-full lg:text-left">
                  {text}
                  <span className="ml-0.5 inline-block animate-blink font-light text-primary">|</span>
                </span>
              </span>
            </h1>

            <p className="text-[1.1rem] leading-relaxed text-[#4a5568] max-md:mx-auto max-md:text-[15px] lg:max-w-[520px]">
              {paragraph}
            </p>

            <div className="mt-[25px] flex gap-[15px] max-md:mt-7 max-md:flex-col max-md:items-center max-md:gap-3">
              <Link href={primaryBtnLink} className="btn-solar text-center max-md:w-full max-md:max-w-[280px]">{primaryBtnText} <i className="bi bi-arrow-right"></i></Link>
              <Link href={secondaryBtnLink} className="btn-solar-light text-center max-md:w-full max-md:max-w-[280px]">{secondaryBtnText} <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>

          {/* Right Column: Media Card */}
          <div className="w-full lg:w-5/12">
            <div className="relative mx-auto aspect-[3/2] w-full max-w-[540px]">
              {sliderImages.map((imgSrc, index) => (
                <div
                  key={index}
                  className="absolute left-0 top-0 h-full w-full transition-opacity duration-[800ms] ease-in-out"
                  style={{ opacity: currentSlide === index ? 1 : 0, zIndex: currentSlide === index ? 1 : 0 }}
                >
                  <Image
                    src={imgSrc}
                    alt={`Aquabrim Smart Device View ${index + 1}`}
                    width={1400}
                    height={933}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}

              <div className="absolute bottom-0 left-1/2 z-[2] mb-2 flex -translate-x-1/2 gap-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 cursor-pointer rounded-full border-0 p-0 transition-all duration-300 ${currentSlide === index ? 'w-5 rounded bg-primary' : 'w-2 bg-black/25'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroAreaHomeOne;
