import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Herosection = () => {
  const contentRef = useRef(null);
  const [learnMoreClicked, setLearnMoreClicked] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(0);

  const sliders = [
    {
      video: '/ban1.mp4',
      main: 'Elevate Your Gaming Experience.',
      sub: 'Immersive Gaming Solutions Tailored for Victory',
      para: 'Elevate your gaming experience with our cutting-edge solutions, where precision, power, and cutting-edge technology converge to redefine the possibilities of digital gaming.',
      cta: 'Learn More',
    },
    {
      video: '/ban2.mp4',
      main: 'Transforming Retail, Empowering E-commerce',
      sub: 'Crafting Seamless Online Shopping Experiences',
      para: 'Transform your retail presence with our e-commerce mastery, crafting online shopping experiences that captivate and convert. Empower your business to thrive in the dynamic world of digital commerce with our development expertise.',
      cta: 'Discover More',
    },
    {
      video: '/ban3.mp4',
      main: 'Digital Excellence Redefined',
      sub: 'Innovative Web Solutions for Your Unique Needs',
      para: 'Experience digital excellence redefined through our innovative web solutions, offering custom development and user-centric design to meet your unique needs. Trust us to be your partner in building a standout online presence in the digital landscape.',
      cta: 'Explore Now',
    },
    {
      video: '/ban4.mp4',
      main: 'Next-Level Gaming Setups',
      sub: 'Unleash Your Potential with Our Gaming Solutions',
      para: 'Step into the future with our next-level gaming setups, designed for both enthusiasts and professionals. Unleash your potential in a gaming environment optimized for peak performance, ensuring enjoyment whether you are a casual gamer or a competitive player.',
      cta: 'Explore Now',
    },
  ];

  const handleLearnMoreClick = (index:any) => {
    setLearnMoreClicked(true);
    setSelectedSlide(index);
  };

  useEffect(() => {
    gsap.from('.animate-text', {
      y: -100,
      duration: 1.5,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: { trigger: '.herosection', start: 'top 80%' },
    });

    gsap.from('.animate-textb', {
      y: 60,
      duration: 1.5,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: { trigger: '.herosection', start: 'top 80%' },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(true);
      });
    };
  }, []);

  useEffect(() => {
    if (learnMoreClicked) {
      gsap.from(contentRef.current, { opacity: 0, y: 20, duration: 0.5 });
    }
  }, [learnMoreClicked]);

  return (
    <div className="herosection z-50">
      <Carousel showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000} swipeable={false}>
        {sliders.map((slider, index) => (
          <div key={index} className="relative h-screen overflow-x-hidden">
            {slider.video && (
             <video autoPlay loop muted controls={false} playsInline className="object-cover w-full h-full">
                <source src={slider.video} type="video/mp4" />
              </video>
            )}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 animate-text">
                <span className="hollow-text text-shadow">{slider.main}</span>
              </h1>
              <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold mb-4 netflix animate-textb">
                {slider.sub}
              </h2>
              {learnMoreClicked && selectedSlide === index ? (
                <div ref={contentRef} className="animate-fade-in">
                  <p className="text-xs md:text-sm lg:text-base xl:text-lg  text-white">
                    {slider.para}
                  </p>
                </div>
              ) : (
                <button onClick={() => handleLearnMoreClick(index)} className="cta-button mt-6 px-8 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out animate-cta">
                  {slider.cta}
                </button>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Herosection;