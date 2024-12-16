import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to Learnify
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Your ultimate platform for online learning. Explore courses, track
            your progress, and achieve your goals.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/courses"
              className="bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition"
            >
              Explore Courses
            </Link>
            <Link
              to="/login"
              className="bg-gray-800 text-white font-semibold py-2 px-6 rounded hover:bg-gray-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Learn at Your Pace
              </h3>
              <p className="text-gray-600">
                Access courses anytime, anywhere, and study at your own
                convenience.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Expert Instructors
              </h3>
              <p className="text-gray-600">
                Learn from industry leaders and subject matter experts.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Track Progress
              </h3>
              <p className="text-gray-600">
                Monitor your learning journey and achieve milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Your Learning Journey
          </h2>
          <p className="text-lg mb-8">
            Join thousands of students who are already learning with us. Find
            the course that's right for you and begin today.
          </p>
          <Link
            to="/register"
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded hover:bg-gray-100 transition"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
