import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '@/images/logo-c.webp';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#282828] text-white p-4 tool z-20 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/'>
          <Image
            src={logo}
            alt="winndeal"
            height={65}
          />
        </Link>
        <nav className={`hidden space-x-4 md:flex items-center gap-6 ${isMenuOpen ? 'hidden' : ''}`}>
          <Link href="/" className="text-white hover:text-[#fd0] font-semibold tracking-wider text-lg">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-[#fd0] font-semibold tracking-wider text-lg">
            About
          </Link>
          <Link href="/productServices" className="text-white hover:text-[#fd0] font-semibold tracking-wider text-lg">
            Product & Services
          </Link>
          <Link
            href="/contact"
            className="text-[#282828] bg-[#fd0]  hover:text-white hover:bg-[#5a5a5a8d] font-medium rounded-full px-4 py-2"
          >
            Ask for a Quote
          </Link>
        </nav>
        <button
          className="bg-white text-black py-2 px-4 rounded-full md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-2 p-2">
          <Link href="/" className="text-white hover:text-[#fd0] font-medium block mb-2">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-[#fd0] font-medium block mb-2">
            About
          </Link>
          <Link href="/productServices" className="text-white hover:text-[#fd0] font-medium block mb-2">
            Product & Services
          </Link>
          <Link
            href="/contact"
            className="text-[#282828] bg-[#fd0] hover:text-white hover-bg-[#5a5a5a8d] font-medium block mb-2 rounded-full px-4 py-2"
          >
            Ask for a Quote
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
