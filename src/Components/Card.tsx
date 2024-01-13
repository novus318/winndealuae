import React, { useRef } from 'react';
import { FaCheckCircle, FaHandshake, FaUsers } from 'react-icons/fa';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const Card = () => {
  const cardRef = useRef<HTMLElement | null>(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });

  const animateOnHover = (element: HTMLElement | null) => {
    gsap.to(element, { scale: 1.05, duration: 0.3, ease: 'power3.out' });
  };

  const resetAnimation = (element: HTMLElement | null) => {
    gsap.to(element, { scale: 1, duration: 0.3, ease: 'power3.out' });
  };

  const animateEntrance = (element: HTMLElement | null) => {
    if (inView) {
      gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.3,
      });
    }
  };

  const animateTextEntrance = (element: HTMLElement | null) => {
    if (inView) {
      gsap.from(element, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.2,
      });
    }
  };

  return (
    <div
      className="bg-transparent text-white py-16 apple"
      onMouseEnter={() => animateOnHover(cardRef.current)}
      onMouseLeave={() => resetAnimation(cardRef.current)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-4 tool" ref={animateEntrance}>
            At Winndeal IT Solutions
          </h2>
          <p className="text-lg md:text-xl text-white" ref={animateEntrance}>
            We are passionate about technology. With years of experience in the industry, we have seen firsthand how technology can transform the way we live and work. Our mission is to help individuals and businesses take advantage of the latest technological advancements.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3"
          ref={(el) => {
            cardRef.current = el;
            inViewRef(el);
          }}>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#FFEE7F] rounded-full flex items-center justify-center" ref={animateEntrance}>
              <FaCheckCircle className="text-4xl text-[#000000ce]" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold tool" ref={animateTextEntrance}>
              Our Values
            </h3>
            <p className="mt-2 text-sm md:text-lg text-white text-center" ref={animateTextEntrance}>
              We believe in honesty, integrity, and transparency in everything we do. Our customers trust us to provide them with the best possible solutions, and we take that responsibility very seriously.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#FFEE7F] rounded-full flex items-center justify-center" ref={animateEntrance}>
              <FaUsers className="text-4xl text-[#000000ce]" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold tool" ref={animateTextEntrance}>
              Our Team
            </h3>
            <p className="mt-2 text-sm md:text-lg text-white text-center" ref={animateTextEntrance}>

              Our team of technicians and developers is dedicated, consistently to remain at the forefront of the industry. We confidently deliver solutions that meets unique needs of customers.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#FFEE7F] rounded-full flex items-center justify-center" ref={animateEntrance}>
              <FaHandshake className="text-4xl text-[#000000ce]" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold tool" ref={animateTextEntrance}>
              Our Promise
            </h3>
            <p className="mt-2 text-sm md:text-lg text-white text-center" ref={animateTextEntrance}>
              We promise to always provide our customers with the best possible service and solutions. We take the time to understand your unique needs and develop a customized plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
