import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Asus from '@/images/asus.webp';
import Dell from '@/images/dell.webp';
import HP from '@/images/hp.webp';
import Lenovo from '@/images/lenovo.webp';
import MS from '@/images/MS.webp';
import Canon from '@/images/canon.webp';
import Qnap from '@/images/qnap.webp';
import Samsung from '@/images/samsung.webp';
import Synology from '@/images/synology.webp';

const brandImages = [MS, Lenovo, HP, Dell, Asus, Samsung, Qnap, Synology, Canon];

function Brands() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="py-10 overflow-hidden">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] mb-8 tool">
          Brands We Boost
        </h1>
        <Slider {...settings} className="text-center">
          {brandImages.map((image, index) => (
            <div key={index} className="p-4 lg:p-12 mx-auto">
              <img
                src={image.src}
                alt={`Brand ${index}`}
                className='h-12 filter grayscale invert brightness-125'
              />

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Brands;
