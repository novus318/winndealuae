import React from 'react';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import COD from '@/images/cash-on-delivery.webp';
import Bank from '@/images/transfer.webp';
import Card from '@/images/atm-card.webp';
import Loan from '@/images/loan.webp';
import logoy from '@/images/logo-y.svg';

const Footer = () => {
  return (
    <footer className=" bg-[#ffffff20] rounded-t-[5rem] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='text-center'>
        <img
              src={logoy.src}
              alt="winndeal"
              className="h-10 p-2 md:h-16 md:p-4 m-auto"
            />
          <p className="text-sm sm:text-lg md:text-base">
            We deliver cutting-edge IT solutions tailored to your business needs in UAE. Our team of experts is committed to providing top-notch services that drive results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-4">
          <div className="space-y-2">
            <p>Phone: +971 4 398 5048</p>
            <p>Email: <a href="mailto:support@winndeal.com" className="text-[#fd0]">support@winndeal.com</a></p>
            <p>Office -<a href="https://goo.gl/maps/Ja7wtrVrpMZC6xHi6" className="text-[#fd0]"> B19-190, Block B SRTI Park, Sharjah - United Arab Emirates </a></p>
          </div>
          <div className="text-3xl sm:text-4xl gap-4 flex mb-4 md:mb-0 justify-center items-center">
            <a href="https://wa.me/+971563017029" target="_blank" rel="noopener noreferrer" className="hover:text-[#fd0]">
              <FaWhatsapp />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100093622394715" target="_blank" rel="noopener noreferrer" className="hover:text-[#fd0]">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/winndeal/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-[#fd0]">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/winn.deal?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" className="hover:text-[#fd0]">
              <FaInstagram />
            </a>
          </div>
          <div className="space-y-2 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Payments Accepted</h2>
            <div className="flex gap-4 mb-4 md:mb-0 justify-center items-center px-10">
              <img src={COD.src} alt='Cash on Delivery' className='h-12' />
              <img src={Card.src} alt='Card' className='h-12' />
              <img src={Bank.src} alt='Bank Transfer' className='h-12' />
              <img src={Loan.src} alt='Finance Options' className='h-12' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
