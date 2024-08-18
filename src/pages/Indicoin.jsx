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
      <div className="relative flex flex-col items-center justify-center min-h-screen z-10 space-y-8">
        <h1 className="text-4xl font-bold">Coming Soon</h1>

        {/* White Paper Link */}
        <a
          href="https://online.publuu.com/626086/1397543" // Replace with the actual URL of your white paper PDF
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
        >
          View White Paper
        </a>
      </div>
    </div>
  );
};

export default IndiCoinPage;
