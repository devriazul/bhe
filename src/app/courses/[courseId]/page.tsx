'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FaCalendar, FaClock, FaGraduationCap, FaPoundSign, FaUniversity, FaGlobe, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface Course {
  course_id: string;
  course_name: string;
  short_course_name: string;
  course_description?: string;
  university_name: string;
  university_website: string;
  app_url: string;
  credits: string;
  qualification: string;
  stem: string;
  gmat: string;
  gre: string;
  toefl: string;
  ielts: string;
  pte: string;
  duolingo: string;
  min_percentage: string;
  backlogs: string;
  fall: string;
  spring: string;
  summer: string;
  app_fee: string;
  tution_fee: string;
  living_fee: string;
  other_fee: string;
  scholarship: string;
  university_notes: string;
  country_name: string;
  state_name: string;
  qs_ranking: string;
  the_ranking: string;
  currency_symbol: string;
}

export default function CourseDetails() {
  const { courseId } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCourseDetails();
  }, [courseId]);

  const fetchCourseDetails = async () => {
    try {
      const url = `https://crm.bheuni.io/api/v1/courses/${courseId}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCourse(data);
      setLoading(false);
      setError('');
    } catch (err) {
      console.error('Error fetching course details:', err);
      setError(err instanceof Error ? err.message : 'Failed to load course details. Please try again later.');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container py-5 mt-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container py-5 mt-5">
        <div className="alert alert-info" role="alert">
          Course not found
        </div>
      </div>
    );
  }

  return (
    <main className="py-5 mt-5">
      <div className="container">
        {/* Course Header */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <div className="d-flex gap-2 mb-3">
              <span className="badge bg-primary">{course.stem === 'stem' ? 'STEM' : 'NON-STEM'}</span>
              <span className="badge bg-secondary">{course.qualification}</span>
            </div>
            <h1 className="display-5 fw-bold mb-4">{course.course_name}</h1>
            <p className="lead">{course.university_notes}</p>
          </div>
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <FaUniversity className="text-primary" />
                  <span>{course.university_name}</span>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <FaClock className="text-primary" />
                  <span>{course.credits} Credits</span>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <FaGlobe className="text-primary" />
                  <span>{course.state_name}, {course.country_name}</span>
                </div>
                <div className="d-flex align-items-center gap-2 mb-4">
                  <FaPoundSign className="text-primary" />
                  <span>{course.currency_symbol}{course.tution_fee} / year</span>
                </div>
                <a href={course.app_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">Apply Now</a>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="row g-4">
          <div className="col-lg-8">
            {/* Admission Requirements */}
            <section className="mb-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="h4 mb-4">Admission Requirements</h2>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <h5>Test Scores</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">IELTS: {course.ielts}</li>
                        <li className="mb-2">TOEFL: {course.toefl}</li>
                        <li className="mb-2">PTE: {course.pte}</li>
                        <li className="mb-2">Duolingo: {course.duolingo}</li>
                        <li className="mb-2">GMAT: {course.gmat}</li>
                        <li className="mb-2">GRE: {course.gre}</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Academic Requirements</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">Minimum Percentage: {course.min_percentage}%</li>
                        <li className="mb-2">Maximum Backlogs: {course.backlogs}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Fees & Costs */}
            <section className="mb-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="h4 mb-4">Fees & Costs</h2>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <h5>Tuition & Fees</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">Tuition Fee: {course.currency_symbol}{course.tution_fee}/year</li>
                        <li className="mb-2">Application Fee: {course.currency_symbol}{course.app_fee}</li>
                        <li className="mb-2">Other Fees: {course.currency_symbol}{course.other_fee}</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Living Expenses</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">Living Cost: {course.currency_symbol}{course.living_fee}/year</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Dates */}
            <section className="mb-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="h4 mb-4">Intake Periods</h2>
                  <div className="d-flex gap-4">
                    <div className="d-flex align-items-center gap-2">
                      {course.fall === '1' ? <FaCheckCircle className="text-success" /> : <FaTimesCircle className="text-danger" />}
                      <span>Fall</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      {course.spring === '1' ? <FaCheckCircle className="text-success" /> : <FaTimesCircle className="text-danger" />}
                      <span>Spring</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      {course.summer === '1' ? <FaCheckCircle className="text-success" /> : <FaTimesCircle className="text-danger" />}
                      <span>Summer</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* University Information */}
            <section className="mb-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="h5 mb-4">University Information</h3>
                  <Image
                    src="/uni-logo-1.png"
                    alt={course.university_name}
                    width={200}
                    height={100}
                    className="mb-3"
                  />
                  <h4 className="h6 mb-3">{course.university_name}</h4>
                  <p className="mb-3 small">{course.university_notes}</p>
                  <div className="mb-3">
                    <strong>Rankings:</strong>
                    <ul className="list-unstyled mt-2">
                      <li className="mb-1">QS World Ranking: #{course.qs_ranking}</li>
                      <li className="mb-1">THE Ranking: #{course.the_ranking}</li>
                    </ul>
                  </div>
                  <a href={course.university_website} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm w-100">Visit University Website</a>
                </div>
              </div>
            </section>

            {/* Support Services */}
            <section className="mb-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="h5 mb-4">Support Services</h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">✓ Application Support</li>
                    <li className="mb-2">✓ Visa Guidance</li>
                    <li className="mb-2">✓ Accommodation Assistance</li>
                    <li className="mb-2">✓ Career Counseling</li>
                    {course.scholarship === 'yes' && <li className="mb-2">✓ Scholarship Available</li>}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}