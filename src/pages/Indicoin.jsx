import React from 'react';
import Navbar from '../HomeCompo/Navbar'; // Adjust the path as necessary

const IndiCoinPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Navbar with higher z-index */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://e0.pxfuel.com/wallpapers/44/1/desktop-wallpaper-blue-geometric-technology-honeycomb-background-blue-technology-blue-black-background-for-dark-blue-geometric.jpg" // Replace with actual background image URL
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center min-h-screen z-10">
        <h1 className="text-4xl font-bold">Coming Soon</h1>
      </div>
    </div>
  );
};

export default IndiCoinPage;
