import React, { useState } from "react";
import { Link } from "react-router-dom";

// Only Login & Signup here
const authLinks = [
  { name: "Login", href: "/admin/login" },
  
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg py-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight transition-all cursor-pointer">
           BOOKS
          </h1>
        </Link>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {authLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-white bg-black px-5 py-2 rounded-full shadow-md 
              hover:bg-gray-900 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-800 hover:text-blue-600 transition-all"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform 
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600 transition-all"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex flex-col items-start px-6 space-y-6 mt-6">
          {authLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="w-full bg-black text-white text-lg px-4 py-3 rounded-full shadow-md
              hover:bg-gray-900 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;
