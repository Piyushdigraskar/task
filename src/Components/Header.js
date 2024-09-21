import React from "react";
import { DiAtom } from "react-icons/di";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center text-xl lg:text-2xl font-bold text-red-800">
          <DiAtom className="text-3xl lg:text-4xl" />
          <a href="/" className="ml-2">PrintMe</a>
        </div>

        {/* Menu Items */}
        <nav className="hidden lg:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-orange-600">
            Home
          </a>

          {/* Dropdown 1 */}
          <div className="relative group">
            <div className="flex items-center">
              <button className="text-gray-600 hover:text-orange-600 focus:outline-none">
                How it works
              </button>
              <IoMdArrowDropdown />
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md">
              <a href="/option1" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Mechanism
              </a>
              <a href="/option2" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Why Trust PrintMe?
              </a>
              <a href="/option3" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Why PrintMe Better?
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center">
              <button className="text-gray-600 hover:text-orange-600 focus:outline-none">
                Services
              </button>
              <IoMdArrowDropdown />
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md">
              <a
                href="/option1"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Stores
              </a>
              <a
                href="/option2"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Online
              </a>
              <a
                href="/option3"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Home Printing
              </a>
              <a
                href="/option4"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Custom Printing
              </a>
            </div>
          </div>

          {/* Other Menu Items */}
          <a href="/blog" className="text-gray-600 hover:text-orange-600">
            Blog
          </a>

          <div className="relative group">
            <div className="flex items-center">
              <button className="text-gray-600 hover:text-orange-600 focus:outline-none">
                Pricing
              </button>
              <IoMdArrowDropdown />
            </div>

            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md">
              <a
                href="/option1"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Gold package
              </a>
              <a
                href="/option2"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Silver Package
              </a>
              <a
                href="/option3"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Bronze Package
              </a>
            </div>
          </div>

          <a href="/about" className="text-gray-600 hover:text-orange-600">
            About
          </a>
          <div className="relative group">
            <div className="flex items-center">
              <button className="text-gray-600 hover:text-orange-600 focus:outline-none">
                Need Help?
              </button>
              <IoMdArrowDropdown />
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md">
              <a
                href="/option1"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Contact
              </a>
              <a
                href="/option2"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Testomony
              </a>
              <a
                href="/option3"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Help center
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          {/* Add a mobile menu button/icon */}
          <button className="text-gray-600">☰</button>
        </div>

        {/* Buttons */}
        <div className="space-x-4 hidden lg:flex">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Login
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
