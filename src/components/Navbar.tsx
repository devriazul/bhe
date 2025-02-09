'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface Course {
  id: number;
  title: string;
  category: string;
}

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Bootstrap JavaScript
    if (typeof document !== 'undefined') {
      const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');
      // Reinitialize dropdowns
      const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
      dropdownElementList.forEach(dropdownToggle => {
        new bootstrap.Dropdown(dropdownToggle);
      });
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm">
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
              <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
            </li>
            <li className="nav-item">
              <Link href="/courses" className={`nav-link ${pathname === '/courses' ? 'active' : ''}`}>Courses</Link>
            </li>
            <li className="nav-item">
              <Link href="/study-in-uk" className={`nav-link ${pathname === '/study-in-uk' ? 'active' : ''}`}>Study in UK</Link>
            </li>
            <li className="nav-item">
              <Link href="/scholarships" className={`nav-link ${pathname === '/scholarships' ? 'active' : ''}`}>Scholarships</Link>
            </li>
            <li className="nav-item">
              <Link href="/accommodation" className={`nav-link ${pathname === '/accommodation' ? 'active' : ''}`}>Accommodation</Link>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <Link href="/login" className="btn btn-outline-primary">Login</Link>
            <Link href="/register" className="btn btn-primary">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}