'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaFilter } from 'react-icons/fa';

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  price: number;
  image_url: string;
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
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  useEffect(() => {
    fetchCourses();
  }, [searchQuery]);

  const fetchCourses = async () => {
    try {
      const response = await fetch(`https://crm.bheuni.io/api/v1/courses?query=${searchQuery}&page=50`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
      }
      const data: ApiResponse = await response.json();
      if (!data || !Array.isArray(data.data)) {
        throw new Error('Invalid data format received from API');
      }
      setCourses(data.data);
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
    const matchesCategory = !selectedCategory || course.category === selectedCategory;
    const matchesLevel = !selectedLevel || course.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section bg-light py-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Explore Our Courses</h1>
              <p className="lead mb-4">Discover a wide range of courses designed to help you achieve your goals</p>
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
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  <option value="business">Business</option>
                  <option value="technology">Technology</option>
                  <option value="arts">Arts</option>
                </select>
              </div>
              <div className="col-md-3">
                <select
                  className="form-select"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <option value="">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
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
                <div key={course.id} className="col-lg-4 col-md-6">
                  <div className="card h-100 shadow-sm hover-lift">
                    <Image
                      src={course.image_url || '/course-placeholder.jpg'}
                      alt={course.title}
                      width={400}
                      height={250}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="badge bg-primary">{course.category}</span>
                        <span className="badge bg-secondary">{course.level}</span>
                      </div>
                      <h5 className="card-title">{course.title}</h5>
                      <p className="card-text text-muted">{course.description}</p>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="h5 text-primary mb-0">${course.price}</span>
                        <Link href={`/courses/${course.id}`} className="btn btn-outline-primary">
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