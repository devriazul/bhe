'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function Topbar() {
  return (
    <div className="topbar bg-primary text-white py-2 fixed-top" style={{ zIndex: 1030 }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4 d-none d-lg-flex">
            <div className="d-flex align-items-center gap-2">
              <FiMail size={14} />
              <a href="mailto:info@bheuni.io" className="text-white text-decoration-none">info@bheuni.io</a>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FiPhone size={14} />
              <span>+44 (0) 203 488 244</span>
            </div>
          </div>
          <div className="d-flex gap-3 social-icons">
            <Link href="https://facebook.com" className="text-white" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={14} />
            </Link>
            <Link href="https://twitter.com" className="text-white" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={14} />
            </Link>
            <Link href="https://linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={14} />
            </Link>
            <Link href="https://instagram.com" className="text-white" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}