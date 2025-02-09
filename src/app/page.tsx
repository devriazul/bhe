'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaGraduationCap, FaUsers, FaStar } from 'react-icons/fa';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image src="/logo.png" alt="BHE UNI Logo" width={120} height={40} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link href="/courses" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </Link>
                <ul className="dropdown-menu">
                  <li><Link href="/courses/business" className="dropdown-item">Business</Link></li>
                  <li><Link href="/courses/technology" className="dropdown-item">Technology</Link></li>
                  <li><Link href="/courses/arts" className="dropdown-item">Arts</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link href="/courses" className="dropdown-item">All Courses</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link href="/services" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li><Link href="/services/accommodation" className="dropdown-item">Accommodation</Link></li>
                  <li><Link href="/services/visa" className="dropdown-item">Visa Assistance</Link></li>
                  <li><Link href="/services/career" className="dropdown-item">Career Support</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/events" className="nav-link">Events</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section bg-light py-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Unlock Your Potential with BHE UNI</h1>
              <p className="lead mb-4">Your gateway to quality education and global opportunities</p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
            <div className="col-lg-6">
              <Image src="/hero-image.png" alt="Students" width={600} height={400} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Course Search */}
      <section className="py-5">
        <div className="container">
          <div className="card p-4">
            <h3 className="text-center mb-4">Course Search</h3>
            <div className="row g-3">
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Search courses..." />
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option>Select Category</option>
                  <option>Business</option>
                  <option>Technology</option>
                  <option>Arts</option>
                </select>
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option>Select Level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Universities */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Trusted by 300+ Top Ranked Universities</h2>
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-md-2 col-4">
              <Image src="/uni-logo-1.png" alt="University 1" width={120} height={60} className="img-fluid opacity-75" />
            </div>
            <div className="col-md-2 col-4">
              <Image src="/uni-logo-2.png" alt="University 2" width={120} height={60} className="img-fluid opacity-75" />
            </div>
            <div className="col-md-2 col-4">
              <Image src="/uni-logo-3.png" alt="University 3" width={120} height={60} className="img-fluid opacity-75" />
            </div>
            <div className="col-md-2 col-4">
              <Image src="/uni-logo-4.png" alt="University 4" width={120} height={60} className="img-fluid opacity-75" />
            </div>
            <div className="col-md-2 col-4">
              <Image src="/uni-logo-5.png" alt="University 5" width={120} height={60} className="img-fluid opacity-75" />
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship & Funding */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-5">Scholarship & Funding</h2>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Merit Scholarships</h3>
                  <p>Up to 100% tuition fee waiver for outstanding academic achievements.</p>
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ Based on academic excellence</li>
                    <li className="mb-2">✓ Available for all programs</li>
                    <li className="mb-2">✓ Renewable each year</li>
                  </ul>
                  <button className="btn btn-primary mt-3">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Financial Aid</h3>
                  <p>Need-based financial assistance to support your education journey.</p>
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ Income-based assessment</li>
                    <li className="mb-2">✓ Flexible payment plans</li>
                    <li className="mb-2">✓ Emergency funds available</li>
                  </ul>
                  <button className="btn btn-primary mt-3">Apply Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Research Grants</h3>
                  <p>Funding opportunities for research and innovation projects.</p>
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ Project-based funding</li>
                    <li className="mb-2">✓ International collaborations</li>
                    <li className="mb-2">✓ Equipment support</li>
                  </ul>
                  <button className="btn btn-primary mt-3">Explore Grants</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Accommodation Support</h3>
                  <p>Find your perfect student housing with our dedicated accommodation service.</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <button className="btn btn-primary">Book Now</button>
                    <span className="text-muted">Starting from $300/month</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Visa Assistance</h3>
                  <p>Expert guidance through your student visa application process.</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <button className="btn btn-primary">Get Support</button>
                    <span className="text-muted">Success rate 98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-5">What Our Students Say</h2>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <Image src="/student-1.jpg" alt="Student 1" width={60} height={60} className="rounded-circle me-3" />
                    <div>
                      <h5 className="mb-0">Sarah Johnson</h5>
                      <small className="text-muted">Business Administration</small>
                    </div>
                  </div>
                  <p className="card-text">"The support I received from BHE UNI was exceptional. They helped me find the perfect course and guided me through every step."</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <Image src="/student-2.jpg" alt="Student 2" width={60} height={60} className="rounded-circle me-3" />
                    <div>
                      <h5 className="mb-0">Michael Chen</h5>
                      <small className="text-muted">Computer Science</small>
                    </div>
                  </div>
                  <p className="card-text">"The quality of education and career opportunities available through BHE UNI have been life-changing for me."</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <Image src="/student-3.jpg" alt="Student 3" width={60} height={60} className="rounded-circle me-3" />
                    <div>
                      <h5 className="mb-0">Emma Davis</h5>
                      <small className="text-muted">Digital Marketing</small>
                    </div>
                  </div>
                  <p className="card-text">"From accommodation to course selection, BHE UNI made my international education journey smooth and successful."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="mb-4">Stay Updated</h2>
              <p className="mb-4">Subscribe to our newsletter for the latest updates on courses, events, and opportunities.</p>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn btn-secondary" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4">Why Choose BHE UNI?</h2>
              <div className="d-flex mb-3">
                <FaGraduationCap className="text-primary h2 mb-0 me-3" />
                <div>
                  <h5>Highly experienced team</h5>
                  <p>Expert guidance from industry professionals</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <FaUsers className="text-primary h2 mb-0 me-3" />
                <div>
                  <h5>One-to-one consultation</h5>
                  <p>Personalized attention for every student</p>
                </div>
              </div>
              <div className="d-flex">
                <FaStar className="text-primary h2 mb-0 me-3" />
                <div>
                  <h5>Best track record</h5>
                  <p>Proven success in student placements</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Image src="/why-choose-us.png" alt="Why Choose Us" width={500} height={400} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Featured Courses</h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <Image src="/course-1.jpg" alt="Business Course" width={400} height={250} className="card-img-top" />
                <div className="card-body">
                  <span className="badge bg-primary mb-2">Business</span>
                  <h5 className="card-title">Business Administration</h5>
                  <p className="card-text">Master the fundamentals of business management and leadership.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">$299</span>
                    <button className="btn btn-outline-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <Image src="/course-2.jpg" alt="Technology Course" width={400} height={250} className="card-img-top" />
                <div className="card-body">
                  <span className="badge bg-primary mb-2">Technology</span>
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">Learn modern web development with practical projects.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">$399</span>
                    <button className="btn btn-outline-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <Image src="/course-3.jpg" alt="Arts Course" width={400} height={250} className="card-img-top" />
                <div className="card-body">
                  <span className="badge bg-primary mb-2">Arts</span>
                  <h5 className="card-title">Digital Design</h5>
                  <p className="card-text">Master digital design tools and creative principles.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">$349</span>
                    <button className="btn btn-outline-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-5">Upcoming Events</h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary text-white p-3 rounded me-3 text-center">
                      <div className="h4 mb-0">15</div>
                      <small>JAN</small>
                    </div>
                    <div>
                      <h5 className="card-title mb-0">Career Fair 2024</h5>
                      <small className="text-muted">9:00 AM - 5:00 PM</small>
                    </div>
                  </div>
                  <p className="card-text">Connect with top employers and explore career opportunities.</p>
                  <button className="btn btn-outline-primary">Register Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary text-white p-3 rounded me-3 text-center">
                      <div className="h4 mb-0">22</div>
                      <small>JAN</small>
                    </div>
                    <div>
                      <h5 className="card-title mb-0">Tech Workshop</h5>
                      <small className="text-muted">2:00 PM - 4:00 PM</small>
                    </div>
                  </div>
                  <p className="card-text">Hands-on workshop on emerging technologies.</p>
                  <button className="btn btn-outline-primary">Register Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary text-white p-3 rounded me-3 text-center">
                      <div className="h4 mb-0">28</div>
                      <small>JAN</small>
                    </div>
                    <div>
                      <h5 className="card-title mb-0">Alumni Meet</h5>
                      <small className="text-muted">6:00 PM - 9:00 PM</small>
                    </div>
                  </div>
                  <p className="card-text">Network with alumni and share experiences.</p>
                  <button className="btn btn-outline-primary">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h5>About BHE UNI</h5>
              <p>Your trusted partner in education and career development</p>
            </div>
            <div className="col-lg-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light">About Us</a></li>
                <li><a href="#" className="text-light">Courses</a></li>
                <li><a href="#" className="text-light">Events</a></li>
                <li><a href="#" className="text-light">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5>Contact Us</h5>
              <p>Email: info@bheuni.com</p>
              <p>Phone: +1 234 567 890</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}