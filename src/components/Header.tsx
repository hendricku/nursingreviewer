'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/', label: 'Lesson 1: Cardiovascular' },
    { href: '/', label: 'Lesson 2: Respiratory' },
    { href: '/', label: 'Lesson 3: Neurological' },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">
          <Link href="/">Nursing Reviewer</Link>
        </h1>
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className="text-gray-600 hover:text-gray-800">
                {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isDrawerOpen && (
        <div className="md:hidden fixed inset-0 bg-opacity-25 backdrop-blur-sm z-40" onClick={toggleDrawer}></div>
      )}
      <div className={`md:hidden fixed top-0 right-0 h-full bg-white w-64 shadow-lg transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Menu</h2>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-gray-600 hover:text-gray-800" onClick={toggleDrawer}>
                  {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;