'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaFilter } from 'react-icons/fa';

interface Course {
  course_id: string;
  course_name: string;
  course_description: string;
  university_name: string;
  duration: string;
  tuition_fee: string;
  study_mode: string;
  qualification: string;
  start_date: string;
}

interface ApiResponse {
  data: Course[];
  total: number;
  current_page: number;
  per_page: number;
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [selectedQualification, setSelectedQualification] = useState('');

  useEffect(() => {
    fetchCourses();
  }, [searchQuery]);

  const fetchCourses = async () => {
    try {
      const url = 'https://advance-course-finder.p.rapidapi.com/course';
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'b7fb9c2fa4mshd781db4274ed79ap1988fejsn7f7e2b85bbe9',
          'x-rapidapi-host': 'advance-course-finder.p.rapidapi.com'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCourses(data);
      setLoading(false);
      setError('');
    } catch (err) {
      console.error('Error fetching courses:', err);
      setError(err instanceof Error ? err.message : 'Failed to load courses. Please try again later.');
      setLoading(false);
      setCourses([]);
    }
  };

  const filteredCourses = courses.filter(course => {
    const matchesMode = !selectedMode || course.study_mode.toLowerCase() === selectedMode.toLowerCase();
    const matchesQualification = !selectedQualification || course.qualification.toLowerCase() === selectedQualification.toLowerCase();
    return matchesMode && matchesQualification;
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section bg-light py-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Explore Our Courses</h1>
              <p className="lead mb-4">Discover a wide range of courses from top universities worldwide</p>
            </div>
            <div className="col-lg-6">
              <Image src="/course-hero.jpg" alt="Courses" width={600} height={400} className="img-fluid rounded-3 shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Course Search and Filters */}
      <section className="py-5">
        <div className="container">
          <div className="card p-4 shadow-sm">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="input-group">
                  <span className="input-group-text"><FaSearch /></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <select
                  className="form-select"
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                >
                  <option value="">All Study Modes</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="online">Online</option>
                </select>
              </div>
              <div className="col-md-3">
                <select
                  className="form-select"
                  value={selectedQualification}
                  onChange={(e) => setSelectedQualification(e.target.value)}
                >
                  <option value="">All Qualifications</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-5">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : (
            <div className="row g-4">
              {filteredCourses.map((course) => (
                <div key={course.course_id} className="col-lg-4 col-md-6">
                  <div className="card h-100 shadow-sm hover-lift">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="badge bg-primary">{course.study_mode}</span>
                        <span className="badge bg-secondary">{course.qualification}</span>
                      </div>
                      <h5 className="card-title">{course.course_name}</h5>
                      <p className="card-text text-muted">{course.course_description}</p>
                      <div className="mt-3">
                        <p className="mb-1"><strong>University:</strong> {course.university_name}</p>
                        <p className="mb-1"><strong>Duration:</strong> {course.duration}</p>
                        <p className="mb-1"><strong>Start Date:</strong> {course.start_date}</p>
                        <p className="mb-3"><strong>Tuition Fee:</strong> {course.tuition_fee}</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <Link href={`/courses/${course.course_id}`} className="btn btn-outline-primary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {filteredCourses.length === 0 && (
                <div className="col-12 text-center py-5">
                  <h3 className="text-muted">No courses found</h3>
                  <p>Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}