'use client';

import Image from 'next/image';
import { FaTrophy, FaHandshake, FaLightbulb } from 'react-icons/fa';

export default function About() {
  return (
    <div className="container">
      {/* About Hero Section */}
      <section className="about-hero text-center py-5">
        <h1 className="display-4 fw-bold mb-4">About BHE UNI</h1>
        <p className="lead mb-4">Empowering students through quality education and global opportunities</p>
      </section>

      {/* Mission & Values */}
      <section className="values-section py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <FaTrophy className="display-4 mb-3 text-primary" />
            <h3>Excellence</h3>
            <p>Committed to delivering the highest quality education</p>
          </div>
          <div className="col-md-4 mb-4">
            <FaHandshake className="display-4 mb-3 text-primary" />
            <h3>Partnership</h3>
            <p>Strong relationships with leading universities</p>
          </div>
          <div className="col-md-4 mb-4">
            <FaLightbulb className="display-4 mb-3 text-primary" />
            <h3>Innovation</h3>
            <p>Embracing modern learning technologies</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="mb-4">Our Story</h2>
            <p className="mb-4">BHE UNI was founded with a vision to make quality education accessible to students worldwide. We partner with prestigious universities to offer diverse learning opportunities.</p>
            <p>Our commitment to excellence and student success has made us a trusted name in international education.</p>
          </div>
          <div className="col-md-6">
            <Image
              src="/hero-image.png"
              alt="BHE UNI Campus"
              width={600}
              height={400}
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>
    </div>
  );
}