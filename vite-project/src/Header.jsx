 import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Site Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-md">
  &lt;/Adnan.Dev&gt;
</h1>

        {/* Nav Links */}
        <nav className="space-x-6 text-sm md:text-base font-medium">
          <Link
            to="/"
            className="text-gray-300 hover:text-indigo-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-indigo-400 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/aboutme"
            className="text-gray-300 hover:text-indigo-400 transition duration-300"
          >
            About Me
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

