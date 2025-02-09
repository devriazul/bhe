'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaTrophy, FaHandshake, FaLightbulb } from 'react-icons/fa';

export default function About() {
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
                <Link href="/" className="nav-link">Home</Link>
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
                <Link href="/about" className="nav-link active">About</Link>
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
              <h1 className="display-4 fw-bold mb-4">About BHE UNI</h1>
              <p className="lead mb-4">Empowering students through quality education and innovative learning experiences since 1995.</p>
            </div>
            <div className="col-lg-6">
              <Image src="/about-hero.jpg" alt="BHE UNI Campus" width={600} height={400} className="img-fluid rounded-3 shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">Our Story</h2>
              <p className="lead text-muted">Founded in 1995, BHE UNI has grown from a small educational institute to a leading global institution, serving students from over 50 countries.</p>
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <FaTrophy className="text-primary h1 mb-3" />
                  <h3 className="h5">Excellence in Education</h3>
                  <p className="text-muted">Consistently ranked among the top educational institutions globally.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <FaHandshake className="text-primary h1 mb-3" />
                  <h3 className="h5">Global Partnerships</h3>
                  <p className="text-muted">Strong collaborations with leading universities and industries worldwide.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <FaLightbulb className="text-primary h1 mb-3" />
                  <h3 className="h5">Innovation Focus</h3>
                  <p className="text-muted">Pioneering new approaches to education and learning methodologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4">Our Mission & Values</h2>
              <div className="mb-4">
                <h3 className="h5 mb-3">Mission</h3>
                <p>To provide exceptional education that empowers students to become global leaders and innovators.</p>
              </div>
              <div className="mb-4">
                <h3 className="h5 mb-3">Vision</h3>
                <p>To be a world-leading institution known for academic excellence and innovative research.</p>
              </div>
              <div>
                <h3 className="h5 mb-3">Core Values</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Excellence in everything we do</li>
                  <li className="mb-2">✓ Innovation in teaching and learning</li>
                  <li className="mb-2">✓ Integrity and ethical conduct</li>
                  <li className="mb-2">✓ Diversity and inclusion</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <Image src="/mission-image.jpg" alt="Campus Life" width={500} height={400} className="img-fluid rounded-3 shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Leadership Team</h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <Image src="/leader-1.jpg" alt="Dr. Sarah Wilson" width={300} height={300} className="card-img-top" />
                <div className="card-body text-center">
                  <h3 className="h5 mb-1">Dr. Sarah Wilson</h3>
                  <p className="text-muted">President</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <Image src="/leader-2.jpg" alt="Dr. Michael Chang" width={300} height={300} className="card-img-top" />
                <div className="card-body text-center">
                  <h3 className="h5 mb-1">Dr. Michael Chang</h3>
                  <p className="text-muted">Academic Director</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <Image src="/leader-3.jpg" alt="Prof. Emily Brown" width={300} height={300} className="card-img-top" />
                <div className="card-body text-center">
                  <h3 className="h5 mb-1">Prof. Emily Brown</h3>
                  <p className="text-muted">Research Head</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <Image src="/leader-4.jpg" alt="Dr. James Martinez" width={300} height={300} className="card-img-top" />
                <div className="card-body text-center">
                  <h3 className="h5 mb-1">Dr. James Martinez</h3>
                  <p className="text-muted">Innovation Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Achievements</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <h3 className="display-4 fw-bold text-primary mb-2">50+</h3>
                <p className="text-muted">Partner Universities</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <h3 className="display-4 fw-bold text-primary mb-2">95%</h3>
                <p className="text-muted">Graduate Employment Rate</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <h3 className="display-4 fw-bold text-primary mb-2">100+</h3>
                <p className="text-muted">Research Publications</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <h3 className="display-4 fw-bold text-primary mb-2">30+</h3>
                <p className="text-muted">Industry Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Want to Learn More About BHE UNI?</h2>
              <p className="lead mb-4">Get in touch with our admissions team to learn more about our programs and opportunities.</p>
              <button className="btn btn-primary btn-lg">Contact Us</button>
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
                <li><Link href="/about" className="text-light">About Us</Link></li>
                <li><Link href="/courses" className="text-light">Courses</Link></li>
                <li><Link href="/events" className="text-light">Events</Link></li>
                <li><Link href="/contact" className="text-light">Contact</Link></li>
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