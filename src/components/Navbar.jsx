import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md relative">
      <div className="max-w-7xl mx-auto px-2 py-4 flex items-center">
        {/* Logo - Pushed to the left */}
        <a href="#" className="text-2xl font-bold mr-auto">
          MyApp
        </a>

        {/* Navigation Links - Centered Vertically */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Dark Mode Toggle, Login & Signup Buttons */}
        <div className="hidden md:flex items-center space-x-4 ml-6">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <div className="">
            {/* Login & Signup Buttons */}
            <button className="mx-2 px-4 py-2 border border-gray-700 dark:border-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition">
              Login
            </button>
            <button className="mx-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Signup
            </button>
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
        <div className="md:hidden absolute top-0 left-0 w-full flex flex-col items-start space-y-4 py-4 bg-gray-100 dark:bg-gray-900 z-10">
          {/* Login & Signup Buttons - Positioned at top left */}
          <div className="absolute top-4 left-4 flex space-x-4">
            <button className="px-4 py-2 border border-gray-700 dark:border-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Signup
            </button>
          </div>

          {/* Navigation Links - Start after the buttons */}
          <div className="mt-16 flex flex-col items-start space-y-4">
            <a
              href="#"
              className="hover:text-gray-600 dark:hover:text-gray-300 text-lg"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-gray-600 dark:hover:text-gray-300 text-lg"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-gray-600 dark:hover:text-gray-300 text-lg"
            >
              Contact
            </a>
          </div>

          {/* Dark Mode Toggle - Positioned at top right */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>
      )}
    </nav>
  );
}
