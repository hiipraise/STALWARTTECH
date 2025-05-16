import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Company", href: "#", active: false },
    { name: "Service", href: "#", active: false },
    { name: "Contact Us", href: "#", active: false },
    { name: "Blog", href: "#", active: false },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 px-9 py-3 shadow-md ${
        scrolled ? "bg-[rgba(25,25,43,20%)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="z-10 flex flex-col items-center ">
          <span
            className={`font-semibold text-3xl  ${
              scrolled ? "text-white" : "text-[#d9d9d9]"
            }`}
          >
            Stalwart
          </span>
          <p
            className={`text-[8px] tracking-wider whitespace-nowrap ${
              scrolled ? "text-gray-300" : "text-[#d9d9d9]"
            }`}
          >
            INTEGRATED TECHNOLOGIES
          </p>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex md:space-x-4 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map(({ name, href, active }) => (
            <a
              key={name}
              href={href}
              className={`relative group cursor-pointer py-1 ${
                active
                  ? "text-[#78f6cb] font-semibold"
                  : "text-[#d9d9d9] hover:text-[#78f6cb]"
              }`}
            >
              {name}
              {!active && (
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#78f6cb] group-hover:w-full transition-all duration-300" />
              )}
            </a>
          ))}
        </div>

        {/* Quote Button */}
        <div className="hidden md:flex">
          <button
            className={`relative overflow-hidden px-3 py-1 border border-[#78f6cb] text-[#78f6cb] rounded-full before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-[#78f6cb20] before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full ${
              scrolled
                ? "text-white border-white hover:bg-white/20"
                : "text-[#78f6cb]"
            }`}
          >
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
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#19192B]/70 backdrop-blur-md z-40">
          <div className="flex flex-col space-y-4 p-6">
            <a href="#" className="block text-[#78f6cb]">
              Home
            </a>
            <a
              href="#"
              className="block text-[#d9d9d9] hover:underline hover:underline-offset-4 transition hover:text-[#78f6cb]"
            >
              Company
            </a>
            <a
              href="#"
              className="block text-[#d9d9d9] hover:underline hover:underline-offset-4 transition hover:text-[#78f6cb]"
            >
              Service
            </a>
            <a
              href="#"
              className="block text-[#d9d9d9] hover:underline hover:underline-offset-4 transition hover:text-[#78f6cb]"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="block text-[#d9d9d9] hover:underline hover:underline-offset-4 transition hover:text-[#78f6cb]"
            >
              Blog
            </a>
            <button className="mt-4 relative overflow-hidden px-4 py-2 border border-[#78f6cb] text-[#78f6cb] rounded-full before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-[#78f6cb20] before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full w-full">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
