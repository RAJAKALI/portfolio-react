import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Career", path: "/career" },
    { name: "Accomplishments", path: "/accomplishments" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-slate-50 shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo */}
          <span className="font-display text-gray-900 font-semibold text-2xl tracking-wide">
            Raja Kali
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-600 hover:text-violet-600 text-lg font-medium relative group transition duration-300 font-sans"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-violet-600 border border-gray-300 rounded p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Fullscreen Slide from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-8 space-y-8">
          {/* Close Button */}
          <button
            className="self-end text-gray-600 text-xl font-semibold"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>

          {/* Menu Items */}
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-900 text-lg font-medium tracking-wide relative group"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
