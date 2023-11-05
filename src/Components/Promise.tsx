import React, { useEffect, useRef, useState } from 'react';
import sure from '@/images/Product quality-amico.webp';
import { gsap } from 'gsap';

const Promise = () => {
  const promiseRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const promiseElement = promiseRef.current;

    const handleScroll = () => {
      if (promiseElement && isElementInViewport(promiseElement) && !animate) {
        setAnimate(true);
        // Add GSAP animation
        gsap.fromTo(
          promiseElement,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animate]);

 const isElementInViewport = (element: HTMLElement | null): boolean => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight;
};

  return (
    <div
      ref={promiseRef}
      className={`bg-[#fff] py-16 px-4 md:px-8 text-[#282828] relative transition-transform duration-500 ${
        animate ? 'transform translate-y-0 opacity-100' : 'transform translate-y-12 opacity-0'
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div
          className={`promise-content text-center md:w-1/2 p-8 md:p-16 ${
            animate ? 'animate-fade-in' : ''
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#282828] mb-6 tool">
            With Unwavering Assurance,
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Our core focus lies in delivering exceptional services encompassing
            System Integration, IT Infrastructure, Servers, Software, and Security
            solutions.
          </p>
        </div>
        <div className="md:w-1/3 overflow-hidden">
          <img
            src={sure.src}
            alt="Attractive Image"
            className="w-full h-auto transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Promise;
