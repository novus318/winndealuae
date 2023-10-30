import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import peopleTechnology from '@/images/people-and-technology.webp';
import receptionist from '@/images/receptionist-receiving-visitor-at-desk.webp';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const images = [peopleTechnology, receptionist];

const Herosection = () => {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null); // Reference for the content that appears when "Learn More" is clicked
  const [imageIndex, setImageIndex] = useState(0);
  const [learnMoreClicked, setLearnMoreClicked] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.fromTo(
      '.hero-content',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 },
      '-=0.5'
    );

    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2 },
      '-=0.5'
    );

    const imageInterval = setInterval(() => {
      gsap.to(imgRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        onComplete: () => {
          setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          gsap.to(imgRef.current, { opacity: 1, scale: 1, duration: 1 });
        },
      });
    }, 3000);

    return () => {
      clearInterval(imageInterval);
    };
  }, []);

  useEffect(() => {
    // Add animations for the content that appears when "Learn More" is clicked
    if (learnMoreClicked) {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, [learnMoreClicked]);

  const handleLearnMoreClick = () => {
    setLearnMoreClicked(true);
  };

  return (
    <div className="bg-[#282828] h-[750px]">
      <div className="bg-[#282828] h-auto md:min-h-[700px] flex flex-col md:flex-row items-center justify-center text-white relative">
        <div className="hero-content text-center netflix md:w-1/2 p-10 mt-16 md:p-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#fd0] mb-4">
            We deliver{' '}
            <TypeAnimation
              sequence={[
                'Cutting-edge IT solutions tailored to your business needs.',
                3000,
                'Top-notch services that drive results.',
                3000,
              ]}
            ></TypeAnimation>
          </h1>
          {learnMoreClicked ? (
            <div ref={contentRef} className="animate-fade-in">
              <p className="text-lg md:text-xl lg:text-2xl text-white">
                Unlock the Power of Technology in Your Business
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-white">
                Experience IT Excellence with Us
              </p>
            </div>
          ) : (
            <button
              onClick={handleLearnMoreClick}
              className="text-white hover:text-[#fd0] font-medium mt-6 p-2 border border-[#fd0] rounded-full inline-block transition duration-300 ease-in-out"
            >
              Learn More
            </button>
          )}
        </div>
        <div ref={imgRef} className="md:w-1/2 overflow-hidden">
          <Image
            src={images[imageIndex]}
            alt="Hero Image"
            className="w-full h-auto transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
