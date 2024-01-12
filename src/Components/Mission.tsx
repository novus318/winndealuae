import React, { useEffect, useRef } from 'react';
import { FaCogs, FaRocket, FaUsers } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      const heading = sectionElement.querySelector('.animate-heading');
      const paragraph = sectionElement.querySelector('.animate-paragraph');
      const card1 = sectionElement.querySelectorAll('.animate-card1');
      const card2 = sectionElement.querySelectorAll('.animate-card2');
      const card3 = sectionElement.querySelectorAll('.animate-card3');

      gsap.fromTo(
        [heading, paragraph],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionElement,
            start: 'top 80%',
          },
        }
      );

      card1.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: index % 2 === 0 ? -200 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            },
          }
        );
      });
      card2.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionElement,
              start: 'top 80%',
            },
          }
        );
      });
      card3.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: index % 2 === 0 ? 200 : 50 },
          {
            opacity: 1.5,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-8 px-4 lg:px-24 text-white apple">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="animate-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
      Our Mission & Vision
    </h2>
    <p className="animate-paragraph text-base sm:text-lg lg:text-xl mb-6 leading-7">
      At Winndeal, our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We are committed to being the leading IT service provider, recognized for our exceptional expertise, unwavering commitment to clients, and transformative impact on businesses.
    </p>
    <div className="flex flex-col items-center sm:flex-row justify-center sm:justify-around gap-4">
      <div className="group animate-card1 mb-4 sm:mb-0 bg-white bg-opacity-25 rounded-3xl p-4 sm:p-6 transition-transform transform hover:scale-105 hover:bg-opacity-30 hover:shadow-[#ffee7f44] hover:shadow-lg">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFEE7F] rounded-full text-[#000000ce] flex items-center justify-center text-xl sm:text-2xl mb-2 sm:mb-4 m-auto">
          <FaRocket />
        </div>
        <p className="text-sm md:text-base">We foster innovation and creative solutions to help your business stay ahead.</p>
      </div>
      <div className="group animate-card2 mb-4 sm:mb-0 bg-white bg-opacity-25 rounded-3xl p-4 sm:p-6 transition-transform transform hover:scale-105 hover:bg-opacity-30 hover:shadow-[#ffee7f44] hover:shadow-lg">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFEE7F] rounded-full text-[#000000ce] flex items-center justify-center text-xl sm:text-2xl mb-2 sm:mb-4 m-auto">
          <FaUsers />
        </div>
        <p className="text-sm md:text-base">Our clients are at the heart of everything we do, and we go the extra mile to ensure their success.</p>
      </div>
      <div className="group animate-card3 bg-white bg-opacity-25 rounded-3xl p-4 sm:p-6 transition-transform transform hover:scale-105 hover:bg-opacity-30 hover:shadow-[#ffee7f44] hover:shadow-lg">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFEE7F] rounded-full text-[#000000ce] flex items-center justify-center text-xl sm:text-2xl mb-2 sm:mb-4 m-auto">
          <FaCogs />
        </div>
        <p className="text-sm md:text-base">We optimize processes and operations to maximize efficiency and productivity.</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Mission;
