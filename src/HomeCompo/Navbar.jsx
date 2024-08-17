import React from 'react';
import Img from '../Assets/INDICOIN-logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 pt-2 pb-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Img} alt="IndiCoin Logo" className="h-20 w-20 mr-2" />
          <h1 className="text-2xl font-bold">INDICOIN</h1>
        </div>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-blue-400">Home</a></li>
          <li><a href="/about" className="hover:text-blue-400">About</a></li>
          <li><a href="/dapp-platform" className="hover:text-blue-400">Dev Tools</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
