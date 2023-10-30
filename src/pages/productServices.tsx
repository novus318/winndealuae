import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Layout from '@/Components/Layout';
import Image from 'next/image';
import Products from '@/Components/Products';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Contract from '@/images/maintain.webp';
import Installation from '@/images/install.webp';
import CCTV from '@/images/security.webp';
import Maintenance from '@/images/support.webp';
import Remote from '@/images/remote.webp';
import Security from '@/images/audit.webp';
import OS from '@/images/os.webp';
import Consultation from '@/images/consult.webp';

gsap.registerPlugin(ScrollTrigger);
const ProductServices = () => {
  const serviceList = [
    {
      name: 'Network & IT AMC',
      image: Contract,
      description:
        'Service offers management of network infrastructure along with hardware & software maintenance. This service provides comprehensive & best support for your IT infrastructure. Our team of experts takes care of both hardware and software maintenance.',
    },
    {
      name: 'Installation and Setup',
      image: Installation,
      description:
        'We provide professional installation and setup services for all your IT infrastructure needs. Our experienced technicians ensure the seamless installation of hardware and software components. From server to workstation installations, we have got you covered.',
    },
    {
      name: 'Security Solutions',
      image: CCTV,
      description:
        'We provide professional installation and setup services for all your IT infrastructure needs. Our security solutions are designed to safeguard your network and data. From firewalls to intrusion detection systems, we implement the latest security measures.',
    },
    {
      name: 'Maintenance and Support',
      image: Maintenance,
      description:
        'Our team offers ongoing maintenance and support to ensure your systems run smoothly and efficiently. We provide regular system checkups, updates, and troubleshooting assistance. Our goal is to keep your IT infrastructure in top shape and minimize disruptions.',
    },
    {
      name: 'Remote Assist Services',
      image: Remote,
      description:
        'Our remote services allow us to assist you virtually, solving IT issues and providing support remotely. With our remote assistance, we can resolve technical issues without being physically present. It is a convenient and efficient way to get IT support.',
    },
    {
      name: 'Network Security Audits',
      image: Security,
      description:
        'We conduct comprehensive network security audits to identify vulnerabilities in your network defenses. Our audits involve thorough testing and analysis of your network security protocols. We will recommend you best solutions to enhance your security posture.',
    },
    {
      name: 'OS Configuration',
      image: OS,
      description:
        'Customize and configure operating systems to meet your specific requirements and preferences. Our experts tailor operating systems to match your business needs. Whether it is Windows, Linux, Mac OS, or other OS, we will optimize it for your business needs.',
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
    <Layout
     
title="WinnDeal Solutions - Product & Services"
description="We deliver cutting-edge IT solutions tailored to your business needs in UAE, Our team of experts is committed to providing top-notch services that drive results"
keywords="WinnDeal,windeal,winndeal,it consulting,IT consulting,IT solution,IT company,UAE,uae,Dubai,dubai,IT support companies,IT services near me,IT services company,IT firm,IT solutions company,IT company website,it solutions,muhammed nizamudheen m,nizamudheen,Muhammed Nizamudheen M,Nizamudheen,Winndeal UAE,Laptop & desktop suppliers in Dubai,Computer accessories suppliers in UAE,computer hardware suppliers in dubai,managed IT solutions,best it consulting firms,Dubai based IT service providers,IT AMC Service provider,IT remote assistants"
author="Muhammed Nizamudheen M"
canonicalUrl="https://winndeal.com/productServices"
    >
      <Header />
      <section className="bg-[#282828] py-10 mt-14">
        <div className="container mx-auto p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-[#282828] mb-4 md:mb-8 text-center animate-fade-in">
            Our Services
          </h1>

          <Slider {...sliderSettings}>
          {serviceList.map((service, index) => (
              <div key={index} className={`service-card px-4 service-card-${index}`}>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <Image
                    src={service.image}
                    alt={service.name}
                    className="w-full mx-auto mb-4 rounded-lg duration-300 hover:scale-105"
                  />
                  <h3 className="text-xl font-semibold text-[#282828] mb-2">{service.name}</h3>
                  <p className="text-base text-gray-600 text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <Products />
      <Footer />
    </Layout>
  );
};

export default ProductServices;