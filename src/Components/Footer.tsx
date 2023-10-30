import React from 'react';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import COD from '@/images/cash-on-delivery.webp';
import Bank from '@/images/transfer.webp';
import Card from '@/images/atm-card.webp';
import Loan from '@/images/loan.webp';
import loopcod from '@/images/loopcod.webp';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#282828] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='text-center'>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#fd0] tool tracking-wider">WINNDEAL</h1>
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
              <Image src={COD} alt='Cash on Delivery' height={48} />
              <Image src={Card} alt='Card' height={48} />
              <Image src={Bank} alt='Bank Transfer' height={48} />
              <Image src={Loan} alt='Finance Options' height={48} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-[#f2fafd] text-xs sm:text-sm md:text-base">
        &copy; {new Date().getFullYear()} Developed and designed by{' '}
        <a
          href="https://www.nizamudheen.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e8ba79] hover:text-[#f2fafd] transition-colors duration-300"
        >
          <Image src={loopcod} alt="loopcod" className="inline ml-1" height={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
