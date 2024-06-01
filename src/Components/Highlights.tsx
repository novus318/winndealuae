import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import laptopMockup from '../../public/banner/laptop.webp';
gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useEffect(() => {
    const titleElement = document.querySelector('.highlight-title-0');
    const descriptionElement = document.querySelector('.highlight-description-0');
    const imageElement = document.querySelector('.highlight-image-0');

    gsap.from(titleElement, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: titleElement,
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
      },
    });

    gsap.from(descriptionElement, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: descriptionElement,
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
      },
    });

    gsap.from(imageElement, {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: imageElement,
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center py-16 px-8 md:px-32 service-card">
      <div className="text-white text-center lg:text-left lg:w-1/2">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 highlight-title-0">
          Crafting<br />
          <span className="hallow text-5xl lg:text-8xl text-transparent">Web Magic</span> for You
        </h2>
        <p className="text-base lg:text-lg highlight-description-0">
          Elevate your brand with our unique and client-centric web solutions.<br />
          Immerse your audience in an enchanting online experience tailored just for you.
        </p>
      </div>
      <div className="lg:w-1/2 highlight-image-0">
        <img
          src={laptopMockup.src}
          alt="Laptop Mockup"
          className="filter grayscale-[40%] w-full rounded-lg shadow-xl lg:rounded-full lg:ml-8 mt-6 lg:mt-0"
        />
      </div>
    </section>
  );
};

export default Highlights;
