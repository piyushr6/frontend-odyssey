import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent text-gray-900 shadow-none z-20">
      <div className="max-w-7xl mx-auto px-2 py-4 flex items-center">
        {/* Logo - Pushed to the left */}
        <Link to="/" className="text-2xl font-bold mr-auto">
          Bistro SPIT
        </Link>

        {/* Navigation Links - Centered Vertically */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-600 dark:hover:text-gray-300">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-600 dark:hover:text-gray-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-600 dark:hover:text-gray-300"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6 ml-8">
          <button className="mx-2 px-5 py-3 bg-[#0040ff] text-white rounded-lg hover:bg-[#E65100] transition font-semibold text-lg hover:cursor-pointer">
            Login as Student/Staff
          </button>

          <div className="">
            {/* Login & Signup Buttons */}
            <Link
              to="/login"
              className="mx-2 px-4 py-2 border border-gray-700 dark:border-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="mx-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Signup
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full flex flex-col items-start space-y-4 py-4 bg-gray-100 z-10">
          {/* Login Buttons - Positioned at top left */}
          <div className="absolute top-4 left-4 flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 border border-gray-700 dark:border-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Signup
            </Link>
          </div>

          {/* Navigation Links - Start after the buttons */}
          <div className="mt-16 flex flex-col items-start space-y-4">
            <Link
              to="/"
              className="hover:text-gray-600 dark:hover:text-gray-300 text-lg"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-600 dark:hover:text-gray-300 text-lg"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-600 dark:hover:text-gray-300 text-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
