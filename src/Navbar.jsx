import React from 'react';
import pop from './assets/pop.png'; // Logo image import karein

function Navbar() {
  return (
    <div className="w-full h-20 bg-[#FFFFFF33] flex items-center justify-between px-6 fixed top-0 z-50">
      {/* Logo */}
      <div>
        <img src={pop} alt="Pop Logo" className="h-12" />
      </div>
      
      {/* Navigation Links */}
      <div className="flex space-x-8 text-white text-lg">
        {/* Links ko respective sections se bind karein */}
        <a href="#about" className="hover:underline">About</a>
        <a href="#features" className="hover:underline ">Features</a>
        <a href="#contact-us" className="hover:underline">Contact Us</a>
      </div>

      {/* Sign Up Button */}
      <div>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;

















