'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Course {
  id: number;
  title: string;
  category: string;
}

export default function Navbar() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://crm.bheuni.io/api/v1/courses?query=&page=50');
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data: { data: Course[] } = await response.json();
      const uniqueCategories = Array.from(new Set(data.data.map(course => course.category)));
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image src="/logo.png" alt="BHE UNI Logo" width={120} height={40} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}