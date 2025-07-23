import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
    // { name: 'Blog', path: '/blog' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 md:shadow-md rounded-b-[10px]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <NavLink to="/" className="flex items-center space-x-2">
        <img
          src="/logo.png" // ama URL to external logo
          alt="Qaaf ICT Logo"
          className="h-10 w-10 object-contain"
        />
        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Qaaf ICT Solutions
        </span>
      </NavLink>

        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `font-medium text-gray-700 hover:text-primary transition-colors ${
                  isActive ? 'text-primary border-b-2 border-accent' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-md">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `block py-2 font-medium ${
                    isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;