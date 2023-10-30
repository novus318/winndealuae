import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const ContactIcons = () => {
  return (
    <>
      <div className="hidden lg:flex fixed right-0 top-1/3 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-3 bg-[#fd0] rounded-l-lg p-4">
          <a
            href="https://www.linkedin.com/company/winndeal/about/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-[#282828]"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>
          <a
            href="https://instagram.com/winn.deal?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-[#282828]"
          >
            <FaInstagram className="w-7 h-7" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100093622394715"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-[#282828]"
          >
            <FaFacebook className="w-7 h-7" />
          </a>
        </div>
      </div>
      <a
        href="https://wa.me/+971563017029"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-3 bg-[#fd0] text-[#282828] text-lg lg:text-xl xl:text-2xl rounded-full p-3 shadow-md hover:text-white transition-transform transform hover:scale-110 focus:outline-none"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </>
  );
};

export default ContactIcons;
