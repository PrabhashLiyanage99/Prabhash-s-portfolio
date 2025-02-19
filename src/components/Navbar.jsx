import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { styles } from '../style';
import { logo, menu, close } from '../assets';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-transparent`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Prabhash Pramodha
            <span className="text-gray-400 hidden md:inline"> | Software Engineer Intern</span>
          </p>
        </Link>

        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')}>
            About
          </NavLink>
          <NavLink to="/project" className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')}>
            Contact
          </NavLink>
        </nav>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={isMenuOpen ? close : menu} alt="menu" className="w-8 h-8" />
        </button>
        <div
          className={`absolute top-16 right-4 bg-gradient-to-bl from-black to-gray-700 p-5 rounded-lg shadow-lg transition-transform transform ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'
          } md:hidden`}          
        >
          <nav className="flex flex-col gap-4 text-lg text-white">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
