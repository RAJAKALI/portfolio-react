import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Career", id: "career" },
    { name: "Accomplishments", id: "accomplishments" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // Adjusting for fixed header
        behavior: "smooth",
      });
      setIsOpen(false); // Close mobile menu
    }
  };

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
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-600 hover:text-violet-600 text-lg font-medium relative group transition duration-300 font-sans"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
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

      {/* Mobile Navigation */}
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
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-900 text-lg font-medium tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;

