"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-bg-dark shadow-lg fixed w-full z-10 border-b border-accent-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-accent-1 text-lg">
                  Logo
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/#home"
              className="py-4 px-2 text-text-secondary hover:text-accent-2 transition duration-300"
            >
              Beranda
            </Link>
            <Link
              href="/#about"
              className="py-4 px-2 text-text-secondary hover:text-accent-2 transition duration-300"
            >
              Tentang
            </Link>
            <Link
              href="/#services"
              className="py-4 px-2 text-text-secondary hover:text-accent-2 transition duration-300"
            >
              Layanan
            </Link>
            <Link
              href="/#portfolio"
              className="py-4 px-2 text-text-secondary hover:text-accent-2 transition duration-300"
            >
              Portofolio
            </Link>
            <Link
              href="/#contact"
              className="py-4 px-2 text-text-secondary hover:text-accent-2 transition duration-300"
            >
              Kontak
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 text-text-secondary hover:text-accent-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <Link
          href="/#home"
          className="block py-2 px-4 text-sm text-text-secondary hover:bg-accent-1 hover:text-bg-dark transition duration-300"
        >
          Beranda
        </Link>
        <Link
          href="/#about"
          className="block py-2 px-4 text-sm text-text-secondary hover:bg-accent-1 hover:text-bg-dark transition duration-300"
        >
          Tentang
        </Link>
        <Link
          href="/#services"
          className="block py-2 px-4 text-sm text-text-secondary hover:bg-accent-1 hover:text-bg-dark transition duration-300"
        >
          Layanan
        </Link>
        <Link
          href="/#portfolio"
          className="block py-2 px-4 text-sm text-text-secondary hover:bg-accent-1 hover:text-bg-dark transition duration-300"
        >
          Portofolio
        </Link>
        <Link
          href="/#contact"
          className="block py-2 px-4 text-sm text-text-secondary hover:bg-accent-1 hover:text-bg-dark transition duration-300"
        >
          Kontak
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
