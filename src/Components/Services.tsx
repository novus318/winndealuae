import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Contract from '@/images/maintain.webp';
import WebDevelopmentImage from '@/images/web.webp';
import CCTV from '@/images/security.webp';
import Maintenance from '@/images/support.webp';
import GamingSetupImage from '@/images/gamming.webp';
import BrandingImage from '@/images/brand.webp';
import OS from '@/images/os.webp';
import Consultation from '@/images/consult.webp';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const serviceList = [
        {
          name: 'Web Development',
          image: WebDevelopmentImage,
          description:
            'Create and enhance your online presence with our professional web development services. We design and develop responsive websites tailored to your business needs, ensuring a seamless and engaging user experience.',
        },
        {
          name: 'Network & IT AMC',
          image: Contract,
          description:
            'Service offers management of network infrastructure along with hardware & software maintenance. This service provides comprehensive & best support for your IT infrastructure. Our team of experts takes care of both hardware and software maintenance.',
        },
        {
          name: 'Gaming Setup',
          image: GamingSetupImage,
          description:
            'Transform your gaming experience with our expert gaming setup services. From configuring high-performance gaming rigs to optimizing graphics settings, we ensure you have the ultimate immersive gaming environment.',
        },
        {
          name: 'Security Solutions like CCTV Surveillance and Firewall Implementation',
          image: CCTV,
          description:
            'Enhance your security posture with our comprehensive security solutions. We offer CCTV surveillance installation and firewall implementation to safeguard your network and data.',
        },
        {
          name: 'Maintenance and Support',
          image: Maintenance,
          description:
            'Our team offers ongoing maintenance and support to ensure your systems run smoothly and efficiently. We provide regular system checkups, updates, and troubleshooting assistance. Our goal is to keep your IT infrastructure in top shape and minimize disruptions.',
        },
        {
          name: 'OS Configuration',
          image: OS,
          description:
            'Customize and configure operating systems to meet your specific requirements and preferences. Our experts tailor operating systems to match your business needs. Whether it is Windows, Linux, Mac OS, or other OS, we will optimize it for your business needs.',
        },
        {
          name: 'Branding and Digital Marketing',
          image: BrandingImage,
          description:
            'Elevate your brand with our comprehensive branding and digital marketing services. From creating a compelling brand identity to executing effective digital marketing strategies, we help your business stand out in the competitive online landscape.',
        },
        {
          name: 'Expert IT Consultation',
          image: Consultation,
          description:
            'Get expert IT consultation services to make informed decisions and optimize your technology investments. Our experienced consultants provide complete insights and recommendations to help you make the right choices for your IT infrastructure.',
        },
      ];
      
      
    
      const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
    
      useEffect(() => {
        const elements = document.querySelectorAll('.service-card');
    
        elements.forEach((element: Element) => {
          gsap.from(element, {
            opacity: 0,
            y: 90,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none none',
            },
          });
        });
    
        return () => {
          ScrollTrigger.getAll().forEach((trigger) => {
            trigger.kill(true);
          });
        };
      }, []);
  return (
    <section className="py-10">
    <div className="container mx-auto p-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-white mb-4 md:mb-10 text-center animate-fade-in md:mt-5">
        Our Services
      </h1>

      <Slider {...sliderSettings}>
      {serviceList.map((service, index) => (
          <div key={index} className={`service-card px-4 service-card-${index}`}>
            <div className="bg-[#fff] bg-opacity-25 rounded-3xl shadow-md p-6">
              <img
                src={service.image.src}
                alt={service.name}
                className="w-full h-56 mx-auto mb-4 filter grayscale  rounded-2xl duration-300 hover:scale-105"
              />
              <h1 className="text-xl font-semibold text-[#FFEE7F]">{service.name}</h1>
              <p className="text-base text-white text-left">{service.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
  )
}

export default Services