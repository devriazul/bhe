'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaSearch, FaUserCircle, FaHeart } from 'react-icons/fa';
import Topbar from './Topbar';

const SCROLL_THRESHOLD = 100;

interface Course {
  id: number;
  title: string;
  category: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    // Initialize Bootstrap JavaScript
    if (typeof document !== 'undefined') {
      const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');
      // Reinitialize dropdowns
      const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
      dropdownElementList.forEach(dropdownToggle => {
        new bootstrap.Dropdown(dropdownToggle);
      });

      // Handle scroll events
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setIsScrolled(currentScrollPos > SCROLL_THRESHOLD);
        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <div className={`transition-all duration-300 ${isScrolled ? '-translate-y-full' : ''}`}>
        <Topbar />
      </div>
      <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm transition-all duration-300 ${isScrolled ? 'fixed-top mt-0' : 'mt-10'}`}>
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image src="/logo.svg" alt="BHE UNI Logo" width={120} height={40} priority />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>We Are</Link>
              </li>
              <li className="nav-item dropdown">
                <Link href="/study-abroad" className={`nav-link dropdown-toggle ${pathname.startsWith('/study-abroad') ? 'active' : ''}`}>Study Abroad</Link>
              </li>
              <li className="nav-item dropdown">
                <Link href="/courses" className={`nav-link dropdown-toggle ${pathname.startsWith('/courses') ? 'active' : ''}`}>Find Course</Link>
              </li>
              <li className="nav-item dropdown">
                <Link href="/services" className={`nav-link dropdown-toggle ${pathname.startsWith('/services') ? 'active' : ''}`}>Services</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-link text-dark p-0">
                <FaSearch size={20} />
              </button>
              <div className="d-flex gap-3">
                <Link href="/wishlist" className="text-dark" title="Wishlist">
                  <FaHeart size={20} />
                </Link>
                <Link href="/login" className="text-dark" title="Login">
                  <FaUserCircle size={22} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}