import React, { useEffect, useState } from "react";
import { getCourses } from "../services/api";
import CourseCard from "../components/CourseCard";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]); // Ensure courses is always an array

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses();
        // Ensure response.data is an array before setting it to courses
        if (Array.isArray(response.data)) {
          setCourses(response.data);
        } else {
          setCourses([]); // Set to empty array if data is not an array
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]); // Fallback to empty array on error
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseCard key={course._id}>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <a
                  href={`/course/${course._id}`}
                  className="text-blue-500 hover:underline"
                >
                  View Course
                </a>
              </CourseCard>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No courses available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
