import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import logoy from '@/images/logo-y.svg';
import logow from '@/images/logo-w.svg';
import Link from 'next/link';
import QuoteModal from './QuoteModel';
import emailjs from 'emailjs-com';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const SERVICE_ID_EMAIL = 'service_ruqcbt8';
  const EMAILJS_TEMPLATE_ID = 'template_ck9zh7o';
  const EMAIL_USER_ID = 'eAIazN3sfCYuXsB-i';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false)
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data:any) => {
    const form = document.createElement('form');


    form.method = 'post';
    form.action = '';
    const nameField = document.createElement('input');
    nameField.type = 'text';
    nameField.name = 'name';
    nameField.value = formData.name;
    form.appendChild(nameField);

    const emailField = document.createElement('input');
    emailField.type = 'text';
    emailField.name = 'email';
    emailField.value = formData.email;
    form.appendChild(emailField);

    const numberField = document.createElement('input');
    numberField.type = 'text';
    numberField.name = 'number';
    numberField.value = formData.number;
    form.appendChild(numberField);

    const messageField = document.createElement('textarea');
    messageField.name = 'message';
    messageField.value = formData.message;
    form.appendChild(messageField);

    document.body.appendChild(form);
    setFormData({
      name: '',
      email: '',
      number: '',
      message: '',
    });
    
    closeModal();
    emailjs.sendForm(SERVICE_ID_EMAIL, EMAILJS_TEMPLATE_ID, form, EMAIL_USER_ID)
    .then((result) => {
      console.log('Email sent successfully!', result.text);

    }, (error) => {
      console.error('Email could not be sent:', error);
    });

  document.body.removeChild(form);
  };


  useEffect(() => {
    gsap.set(headerRef.current, { autoAlpha: 0 });

    gsap.to(headerRef.current, {
      autoAlpha: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 650;

      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed w-full top-0 transition-all duration-300 ${
        isScrolled ? 'bg-black' : 'backdrop-blur-sm'
      } text-white p-4 tool z-20`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <img
              src={isScrolled ? logow.src : logoy.src}
              alt="winndeal"
              className="h-10 p-2 md:h-16 md:p-4"
            />
          </div>
        </Link>
        <nav className={`hidden space-x-4 md:flex items-center gap-6 ${isMenuOpen ? 'hidden' : ''}`}>
          <Link href="/" className={`${isScrolled ? 'text-white' : 'text-[#FFEE7F]'} hover:text-[#fd0] font-medium tracking-wider text-lg`}>
            Home
          </Link>
          <Link href="/about" className={`${isScrolled ? 'text-white' : 'text-[#FFEE7F]'} hover:text-[#fd0] font-medium tracking-wider text-lg`}>
            About
          </Link>
          <Link href="/productServices" className={`${isScrolled ? 'text-white' : 'text-[#FFEE7F]'} hover:text-[#fd0] font-medium tracking-wider text-lg`}>
            Product & Services
          </Link>
          <button
            onClick={openModal}
            className={`text-[#282828] ${
              isScrolled ? 'bg-[#FFEE7F]' : 'bg-[#FFEE7F]'
            } hover:text-white hover:bg-[#5a5a5a8d] font-medium rounded-full px-4 py-2`}
          >
            Ask for a Quote
          </button>
        </nav>
        <button
          className={`py-2 px-4 rounded-full md:hidden ${isScrolled ? 'bg-white text-black' : 'bg-[#FFEE7F] text-black'}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-2 p-2">
          <Link href="/" className={`${isScrolled ? 'text-white' : 'text-[#FFEE7F]'} hover:text-[#fd0] font-medium block mb-2`}>
            Home
          </Link>
          <Link href="/about" className={`${isScrolled ? 'text-white' : 'text-[#FFEE7F]'} hover:text-[#fd0] font-medium block mb-2`}>
            About
          </Link>
          <Link href="/productServices" className={`${isScrolled ? 'text-white' : 'text-[#FFEE7F]'} hover:text-[#fd0] font-medium block mb-2`}>
            Product & Services
          </Link>
          <button
            onClick={openModal}
            className={`text-[#282828] ${isScrolled ? 'bg-[#FFEE7F]' : 'bg-[#FFEE7F]'} hover:text-white hover:bg-[#5a5a5a8d] font-medium block mb-2 rounded-full px-4 py-2`}
          >
            Ask for a Quote
          </button>
        </nav>
      )}
       {isModalOpen && (
        <QuoteModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </header>
  );
};

export default Header;
