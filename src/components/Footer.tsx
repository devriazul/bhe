'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Contact Us</h5>
            <div className="d-flex align-items-center mb-3">
              <FiPhone className="me-2" />
              <span>+44 (0) 203 488 244</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FiMail className="me-2" />
              <span>info@bheuni.io</span>
            </div>
            <div className="d-flex align-items-center">
              <FiMapPin className="me-2" />
              <span>71-75 Shelton Street, London, WC2H 9JQ</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link href="/courses" className="text-light text-decoration-none">Courses</Link></li>
              <li className="mb-2"><Link href="/services" className="text-light text-decoration-none">Services</Link></li>
              <li className="mb-2"><Link href="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Study</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/study-in-uk" className="text-light text-decoration-none">Study in UK</Link></li>
              <li className="mb-2"><Link href="/scholarships" className="text-light text-decoration-none">Scholarships</Link></li>
              <li className="mb-2"><Link href="/accommodation" className="text-light text-decoration-none">Accommodation</Link></li>
              <li className="mb-2"><Link href="/visa-guidance" className="text-light text-decoration-none">Visa Guidance</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Follow Us</h5>
            <div className="d-flex gap-3">
              <Link href="https://facebook.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </Link>
              <Link href="https://youtube.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={20} />
              </Link>
              <Link href="https://linkedin.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-top border-secondary mt-4 pt-4 text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} BHE UNI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}