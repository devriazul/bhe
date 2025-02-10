'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaGraduationCap, FaUsers, FaStar, FaPlay } from 'react-icons/fa';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section className="hero-section py-md-0 mt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Unlock Your Potential <br /> with <span className='secondary-highlight px-1 rounded'>BHE UNI</span></h1>
              <p className="lead mb-4">Your gateway to quality education and global opportunities</p>
              <div className="d-flex gap-3">
                <Link href="/courses" className="btn btn-primary">Get Started</Link>
                <Link href="/about" className="btn btn-outline-primary">Learn More</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="position-relative w-100">
                <Image
                  src="/h-r.png"
                  alt="Students"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="img-fluid w-100 h-auto"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Search Section */}
      <section className="course-search py-5 bg-light">
        <div className="container">
          <div className="search-bar mx-auto">
            <div className="row g-3">
              <div className="col-md-3">
                <select className="form-select">
                  <option>Course Category</option>
                </select>
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option>Course Level</option>
                </select>
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Search courses..." />
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Partners */}
      <section className="partners py-5">
        <div className="container text-center">
          <h2 className="mb-4">Trusted by 300+ Top Ranked Universities</h2>
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-6 col-md-2">
              <Image src="/uni-logo-1.png" alt="University Logo" width={120} height={60} />
            </div>
            {/* Add more university logos here */}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>Why Choose BHE UNI?</h2>
              <ul className="list-unstyled">
                <li className="mb-3">✓ Highly experienced team</li>
                <li className="mb-3">✓ Free visa consultations</li>
                <li className="mb-3">✓ Zero fees offer</li>
              </ul>
              <div className="stats d-flex gap-4">
                <div>
                  <h3>300+</h3>
                  <p>Partner Universities</p>
                </div>
                <div>
                  <h3>12</h3>
                  <p>Years of Excellence</p>
                </div>
                <div>
                  <h3>42K</h3>
                  <p>Students Advised</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Image src="/student-1.jpg" alt="Student" width={500} height={400} className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="scholarship py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Image src="/hero-image.png" alt="Scholarship" width={500} height={400} className="img-fluid rounded" />
            </div>
            <div className="col-lg-6">
              <h2>Scholarship and Funding</h2>
              <p className="lead">We provide various scholarship opportunities to help you achieve your dreams.</p>
              <div className="d-flex gap-3">
                <Link href="/scholarships" className="btn btn-primary">Read More</Link>
                <Link href="/apply" className="btn btn-outline-primary">Apply Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h3>Efficient IELTS Booking</h3>
                  <p>Simplified and Business Friendly</p>
                  <Link href="/services/ielts" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h3>Accommodation Booking</h3>
                  <p>Easy Stay Booking</p>
                  <Link href="/services/accommodation" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses py-5">
        <div className="container">
          <h2 className="text-center mb-5">Featured Courses</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card">
                <div className="position-relative">
                  <Image src="/hero-image.png" alt="Course" width={400} height={250} className="card-img-top" />
                  <button className="btn btn-primary position-absolute top-50 start-50 translate-middle rounded-circle">
                    <FaPlay />
                  </button>
                </div>
                <div className="card-body">
                  <h5>Express Speaking Course</h5>
                </div>
              </div>
            </div>
            {/* Add more course cards */}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Upcoming Events</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card">
                <Image src="/hero-image.png" alt="Event" width={400} height={250} className="card-img-top" />
                <div className="card-body">
                  <h5>Explore Endless Opportunities at UK Education Expo 2024</h5>
                  <p>25 Jan 2024 - 10:00 am</p>
                  <Link href="/events" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
            {/* Add more event cards */}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="testimonials py-5">
        <div className="container">
          <h2 className="text-center mb-5">Feedback From Our Students</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <Image src="/student-1.jpg" alt="Student" width={80} height={80} className="rounded-circle mb-3" />
                  <p className="mb-3">"Great experience with BHE UNI! The team was very helpful throughout my application process."</p>
                  <div className="d-flex justify-content-center gap-3">
                    <Link href="#" className="text-decoration-none">
                      <Image src="/logo.png" alt="Google" width={24} height={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more testimonial cards */}
          </div>
        </div>
      </section>
    </div>
  );
}