import React, { useEffect, useRef } from 'react';
import { BsCheck } from 'react-icons/bs';
import laptopImage from '@/images/laptops.webp';
import Peripherals from '@/images/peripherals.webp';
import serverImage from '@/images/server.webp';
import printerImage from '@/images/printer.webp';
import workstationImage from '@/images/workstation.webp';
import upsImage from '@/images/Ups.webp';
import networkImage from '@/images/network.webp';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { FaCogs, FaRocket, FaUsers } from 'react-icons/fa';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);
const products = [
  {
    name: 'LAPTOPS',
    image: laptopImage,
    description:
      'Our Laptops combine portability with performance. Whether you are a business traveler or a student, these laptops offer productivity and entertainment on the go. Stay connected with the latest technology, long battery life, and stunning displays.',
    features: ['High-performance processors', 'Lightweight and portable', 'HD displays', 'Long battery life'],
  },
  {
    name: 'PC PERIPHERALS',
    image: Peripherals,
    description:
      'Enhance your computing experience with our range of peripherals designed to optimize functionality and elevate your setup, enabling you to work and play with unprecedented ease. Choose from a variety of accessories to personalize your workspace.',
    features: ['Keyboards and mice', 'Monitors', 'Docking stations', 'Webcams'],
  },
  {
    name: 'SERVERS',
    image: serverImage,
    description:
      'Our Servers are designed for high-performance computing, handling heavy workloads with ease. They provide reliable and scalable solutions for businesses of all sizes. Ensure seamless data processing and storage.',
    features: ['Powerful server hardware', 'Scalability options', 'Data redundancy', '24/7 support'],
  },
  {
    name: 'PRINTERS & SCANNERS',
    image: printerImage,
    description:
      'Streamline your printing and scanning needs efficiently with our diverse range of devices, offering versatile solutions to meet your requirements.Our printers and scanners are designed to deliver high-quality results and enhance your productivity.',
    features: ['All-in-one printers', 'Wireless printing', 'High-resolution scanning', 'Automatic document feeders'],
  },
  {
    name: 'WORKSTATIONS',
    image: workstationImage,
    description:'Experience the next level of creativity and productivity with our Workstations. They are meticulously engineered for professionals, offering unparalleled performance and reliability for demanding tasks.Maximize your creative potential.',
    features: ['Powerful GPUs', 'Large storage capacity', '4K displays', 'Optimized for creative software'],
  },
  {
    name: 'UPS',
    image: upsImage,
    description:
      'Our UPS (Uninterruptible Power Supply) systems protect your valuable equipment from power interruptions and fluctuations. Ensure your critical systems stay operational during outages. Safeguard your data and devices.',
    features: ['Battery backup', 'Surge protection', 'Automatic voltage regulation', 'Monitoring and management'],
  },
  {
    name: 'NETWORK & SECURITY',
    image: networkImage,
    description:
      'Our Network and Security solutions ensure a safe and reliable IT infrastructure. From firewalls to data encryption, we safeguard your network from cyber threats. Protect your data, communication, and surveillance with our CCTV and networking services.',
    features: [
      'Firewalls and intrusion detection',
      'Security audits and monitoring',
      'CCTV surveillance solutions',
      'Networking infrastructure setup',
    ],
  }
  
];

const Products = () => {
  const scroller = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let skillSet = gsap.utils.toArray('.skill-set');

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => '+=' + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
<div className="overflow-hidden flex bg-gray-100 lg:py-10"
id="skills"
ref={scroller}>
      <div className="overflow-hidden">
      <section className="p-6 text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#282828] mb-4 sm:mb-6 tool">
        Our Mission & Vision
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-gray-700 px-4 lg:px-9">
        At Winndeal, our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
        We are committed to being the leading IT service provider, recognized for our exceptional expertise, unwavering commitment to clients, and transformative impact on businesses.
      </p>
      <div className="hidden sm:flex justify-center items-center mt-1">
        <div className="w-12 h-12 bg-[#fd0] rounded-full text-white flex items-center justify-center text-xl sm:text-2xl">
          <FaRocket />
        </div>
        <div className="ml-4">
          <p className="text-gray-700">We foster innovation and creative solutions to help your business stay ahead.</p>
        </div>
      </div>
      <div className="hidden sm:flex justify-center items-center">
        <div className="w-12 h-12 bg-[#fd0] rounded-full text-white flex items-center justify-center text-xl sm:text-2xl">
          <FaUsers />
        </div>
        <div className="ml-4">
          <p className="text-gray-700">Our clients are at the heart of everything we do, and we go the extra mile to ensure their success.</p>
        </div>
      </div>
      <div className="hidden sm:flex justify-center items-center">
        <div className="w-12 h-12 bg-[#fd0] rounded-full text-white flex items-center justify-center text-xl sm:text-2xl">
          <FaCogs />
        </div>
        <div className="ml-4">
          <p className="text-gray-700">We optimize processes and operations to maximize efficiency and productivity.</p>
        </div>
      </div>
    </section>
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#282828] mb-4 sm:mb-6 lg:mb-8 tool">Explore Our Products</h2>
    <div className="flex overflow-x-hidden"
    >
      {products.map((product, index) => (
         <div   key={index}
         ref={skills} className='skill-set min-w-full px-5'>
           <section
            className="bg-white items-center rounded-xl shadow-xl p-4 sm:p-6 lg:p-8"
        >
          <div className="flex flex-col lg:flex-row py-5">
            <div className="w-full lg:w-2/5 sm:rounded-xl lg:rounded-xl my-auto">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover sm:rounded-lg lg:rounded-lg"
              />
            </div>
            <div className="w-full lg:w-2/3 p-2 sm:p-4 lg:p-6 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-wider font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 tool">
                {product.name}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 lg:mb-5">
                {product.description}
              </p>
              <ul className="text-gray-600 sm:ps-2 lg:ps-10 text-sm sm:text-base lg:text-lg font-semibold">
                {product.features.map((feature, index) => (
                  <li key={index} className="mb-1 sm:mb-2 lg:mb-3 flex items-center">
                    <BsCheck className="w-3 h-3 sm:w-4 lg:w-5 lg:h-5 inline text-green-500 mr-2 sm:mr-3 lg:mr-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
         </div>
      ))}
    </div>
  </div>
</div>


  );
};

export default Products;
