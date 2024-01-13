import React, { useEffect } from 'react';
import gaming from '@/images/banner/gamming.webp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Highlight2 = () => {
    useEffect(() => {
          const titleClass = `.highlight-title-1`;
          const descriptionClass = `.highlight-description-1`;
          const imageClass = `.highlight-image-1`;
    
          gsap.from(titleClass, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
              trigger: titleClass,
              start: 'top 80%',
              end: 'top 30%',
              scrub: true,
            },
          });
    
          gsap.from(descriptionClass, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
              trigger: descriptionClass,
              start: 'top 80%',
              end: 'top 30%',
              scrub: true,
            },
          });
    
          gsap.from(imageClass, {
            opacity: 0,
            x: -50,
            duration: 1,
            scrollTrigger: {
              trigger: imageClass,
              start: 'top 80%',
              end: 'top 30%',
              scrub: true,
            },
          });
      }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center py-16 px-5 service-card overflow-x-hidden gap-0 md:gap-10">
      <div className="lg:w-1/2 highlight-image-1">
      <img
        src={gaming.src}
        alt="Laptop Mockup"
        className="filter grayscale-[40%] w-full rounded-lg shadow-xl lg:rounded-full lg:ml-8 mt-6 lg:mt-0"
      />
    </div>
    <div className="text-white text-center lg:text-left lg:w-1/2">
      <h2 className="text-3xl lg:text-5xl font-bold mb-4 highlight-title-1">
      Elevate<br />
        <span className="hallow text-5xl lg:text-8xl text-transparent">Your Gaming </span> Experience
      </h2>
      <p className="text-base lg:text-lg highlight-description-1">
      Immerse yourself in the ultimate gaming setup. <br/>From high-performance rigs to optimized graphics, we tailor gaming solutions for an unparalleled gaming adventure.
      </p>
    </div>
  </section>
  )
}

export default Highlight2