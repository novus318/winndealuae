import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BsCheck } from 'react-icons/bs';
import laptopImage from '@/images/laptops.webp';
import Peripherals from '@/images/peripherals.webp';
import serverImage from '@/images/server.webp';
import printerImage from '@/images/printer.webp';
import upsImage from '@/images/Ups.webp';

const products = [
  {
    name: 'LAPTOPS',
    image: laptopImage,
    description:
      'Our Laptops combine portability with performance. Whether you are a business traveler or a student, these laptops offer productivity and entertainment on the go. Stay connected with the latest technology, long battery life, and stunning displays.',
  },
  {
    name: 'PC PERIPHERALS',
    image: Peripherals,
    description:
      'Enhance your computing experience with our range of peripherals designed to optimize functionality and elevate your setup, enabling you to work and play with unprecedented ease. Choose from a variety of accessories to personalize your workspace.',
  },
  {
    name: 'SERVERS',
    image: serverImage,
    description:
      'Our Servers are designed for high-performance computing, handling heavy workloads with ease. They provide reliable and scalable solutions for businesses of all sizes. Ensure seamless data processing and storage.',
  },
  {
    name: 'PRINTERS & SCANNERS',
    image: printerImage,
    description:
      'Streamline your printing and scanning needs efficiently with our diverse range of devices, offering versatile solutions to meet your requirements. Our printers and scanners are designed to deliver high-quality results and enhance your productivity.',
  },
  {
    name: 'UPS',
    image: upsImage,
    description:
      'Our UPS (Uninterruptible Power Supply) systems protect your valuable equipment from power interruptions and fluctuations. Ensure your critical systems stay operational during outages. Safeguard your data and devices.',
  },
];

const Products = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto">
        <Slider {...sliderSettings}>
          {products.map((product, index) => (
            <div key={index} className="p-6 rounded-lg shadow-xl">
              <img src={product.image.src} alt={product.name} className="w-full mb-4 rounded-md bg-white" />
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
                <p className="text-white mb-6">{product.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
