import React, { useRef, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';

const ContactIcons = () => {
  const iconsRef = useRef(null);

  useEffect(() => {
    gsap.set(iconsRef.current, { x: '300%' });

    gsap.fromTo(iconsRef.current, { x: '300%' }, { x: '0%', duration: 1, ease: 'power2.out' });
  }, []);
  return (
    <>
      <div
      ref={iconsRef} className="hidden lg:flex fixed right-0 top-1/3 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-3 bg-[#FFEE7F] rounded-l-lg p-4">
          <a
            href="https://www.linkedin.com/company/winndeal/about/?viewAsMember=true"
            target="_blank"

            rel="noopener noreferrer"
            className="hover:text-white text-black"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>
          <a
            href="https://instagram.com/winn.deal?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-black"
          >
            <FaInstagram className="w-7 h-7" />
          </a>
          <a
            href="https://www.facebook.com/people/Winndeal/61559793615336/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-black"
          >
            <FaFacebook className="w-7 h-7" />
          </a>
        </div>
      </div>
      <a
        href="https://wa.me/+971563017029"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-3 bg-[#FFEE7F] text-black text-lg lg:text-xl xl:text-2xl rounded-full p-3 shadow-md hover:text-white transition-transform transform hover:scale-110 focus:outline-none"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </>
  );
};

export default ContactIcons;
