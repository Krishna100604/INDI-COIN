import React, { useState } from 'react';
import Img from '../Assets/INDICOIN-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Img} alt="INDICOIN Logo" className="h-16 w-16 mr-2" />
          <h1 className="text-xl md:text-2xl font-bold">INDICOIN</h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="hover:text-blue-400">Home</a></li>
          <li><a href="/about" className="hover:text-blue-400">About</a></li>
          <li><a href="/dapp-platform" className="hover:text-blue-400">Dev Tools</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4">
          <li><a href="/" className="block hover:text-blue-400">Home</a></li>
          <li><a href="/about" className="block hover:text-blue-400">About</a></li>
          <li><a href="/dapp-platform" className="block hover:text-blue-400">Dev Tools</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
