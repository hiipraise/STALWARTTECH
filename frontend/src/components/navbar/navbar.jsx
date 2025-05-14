import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-[#10101D] text-white px-9 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="z-10 flex flex-col ">
          <span className="text-white font-semibold text-3xl md:text-4xl ">
            Stalwart
          </span>
          <p className="text-[8px] md:text-[9.5px] text-gray-100 -tracking-wide">
            INTEGRATED TECHNOLOGIES
          </p>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="text-[#78f6cb]">
            Home
          </a>
          <a
            href="#"
            className="cursor-pointer  item-center hover:text-[#78f6cb] transition"
          >
            Company
          </a>
          <a
            href="#"
            className="cursor-pointer  item-center hover:text-[#78f6cb] transition"
          >
            Service
          </a>
          <a
            href="#"
            className="cursor-pointer  item-center hover:text-[#78f6cb] transition"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="cursor-pointer  item-center hover:text-[#78f6cb] transition"
          >
            Blog
          </a>
        </div>

        {/* Quote Button */}
        <div className="hidden md:flex">
          <button className="border m border-[#78f6cb] text-[#78f6cb] px-4 py-1 rounded-full hover:bg-[#78f6cb20] transition">
            Get a Quote
          </button>
        </div>

        {/* Burger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2">
          <a href="#" className="block text-[#78f6cb]">
            Home
          </a>
          <a href="#" className="block">
            Company
          </a>
          <a href="#" className="block">
            Service
          </a>
          <a href="#" className="block">
            Contact Us
          </a>
          <a href="#" className="block">
            Blog
          </a>
          <button className="mt-2 border border-[#78f6cb] text-[#78f6cb] px-4 py-1 rounded-full w-full hover:bg-[#78f6cb20] transition">
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
