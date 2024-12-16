import React, { useEffect, useState } from "react";
import { getCourses } from "../../services/api"; // Assuming you have an API service for this
import { Link } from "react-router-dom";

const ProgressPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses();
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="progress-page">
      <h1>Your Progress</h1>
      {courses.length === 0 ? (
        <p>No courses available</p>
      ) : (
        <div className="courses-list">
          {courses.map((course) => (
            <div key={course._id} className="course-card">
              <h2>{course.title}</h2>
              <div>
                {/* Assuming each course has lessons with completed flag */}
                {course.lessons.map((lesson) => (
                  <p
                    key={lesson._id}
                    className={lesson.completed ? "completed" : "pending"}
                  >
                    {lesson.title}
                  </p>
                ))}
              </div>
              <Link to={`/courses/${course._id}`}>View Course</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgressPage;
