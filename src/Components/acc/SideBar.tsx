
import React from 'react';
import Link from 'next/link';
import { FaHome, FaFileAlt, FaReceipt, FaUsers } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
  const router = useRouter();

  const isCurrentPage = (path: string): boolean => {
    return router.pathname === path;
  };

  return (
    <div className="bg-black text-white h-screen w-1/6 p-4">
            <Link href="/accounts/dashboard">
      <div className="flex px-4 py-2 mb-2">
        <img
          src="https://www.winndeal.com/_next/static/media/logo-w.0662c99e.svg"
          alt="logo"
          className="h-14 w-auto"
        />
      </div>
      </Link>
      <ul>
        <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/accounts/dashboard">
            <div className={`flex items-center p-2 rounded-md bg-[#ebebeb33] ${isCurrentPage('/accounts/dashboard') && 'text-black bg-white'}`}>
              <FaHome className="mr-3" />
              <span className="text-lg">Dashboard</span>
            </div>
          </Link>
        </li>
        <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/accounts/new-quote">
            <div className={`flex items-center p-2 rounded-md bg-[#ebebeb33] ${isCurrentPage('/accounts/new-quote') && 'text-black bg-white'}`}>
              <FaFileAlt className="mr-3" />
              <span className="text-lg">New Quote</span>
            </div>
          </Link>
        </li>
        <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/accounts/new-sales-invoice">
            <div className={`flex items-center p-2 rounded-md bg-[#ebebeb33] ${isCurrentPage('/accounts/new-sales-invoice') && 'text-black bg-white'}`}>
              <FaReceipt className="mr-3" />
              <span className="text-lg">New Sales Invoice</span>
            </div>
          </Link>
        </li>
        <li className="mb-4 transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/accounts/customers">
            <div className={`flex items-center p-2 rounded-md bg-[#ebebeb33] ${isCurrentPage('/accounts/customers') && 'text-black bg-white'}`}>
              <FaUsers className="mr-3" />
              <span className="text-lg">Customers</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;