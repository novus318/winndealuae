import React, { useEffect, useRef, useState } from 'react';
import sure from '@/images/Product quality-amico.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Promise = () => {
  const promiseRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const promiseElement = promiseRef.current;
    const textElement = textRef.current;
    const imageElement = imageRef.current;

    const handleScroll = () => {
      if (promiseElement && isElementInViewport(promiseElement) && !animate) {
        setAnimate(true);

        gsap.fromTo(
          textElement,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );

        gsap.fromTo(
          imageElement,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
        );
      }
    };
    ScrollTrigger.create({
      trigger: promiseElement,
      start: 'top 80%',
      onEnter: () => handleScroll(),
    });

    ScrollTrigger.create({
      trigger: textElement,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(
          textElement,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );
      },
    });

    ScrollTrigger.create({
      trigger: imageElement,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(
          imageElement,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
        );
      },
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animate]);

  const isElementInViewport = (element:any) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight;
  };

  return (
    <div
      className={`bg-[#fffffff6] py-16 px-4 md:px-8 text-black relative transition-transform duration-500 rounded-b-[5em] mx-4 mb-5`}
    >
      <div
       ref={promiseRef} className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div
          ref={textRef}
          className={`promise-content text-center md:w-1/2 p-8 md:p-16 ${
            animate ? 'animate-fade-in' : ''
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tool">
            With Unwavering Assurance,
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Our core focus lies in delivering exceptional services encompassing
            System Integration, IT Infrastructure, Servers, Software, and Security
            solutions.
          </p>
        </div>
        <div
          ref={imageRef}
          className="md:w-1/3 overflow-hidden relative"
        >
          <img
            src={sure.src}
            alt="Attractive Image"
            className="w-full h-auto transform transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Promise;
