import React, { useState, useEffect } from "react";
import { getCourses, createCourse, createLesson } from "../../services/api";
import { Link } from "react-router-dom";

const InstructorDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [newCourseTitle, setNewCourseTitle] = useState("");
  const [newLessonTitle, setNewLessonTitle] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses(); // Instructor should only see their own courses
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleCreateCourse = async () => {
    if (!newCourseTitle) return;
    try {
      await createCourse({ title: newCourseTitle });
      setNewCourseTitle("");
      // Fetch updated course list
      await fetchCourses();
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  const handleCreateLesson = async () => {
    if (!newLessonTitle || !selectedCourseId) return;
    try {
      await createLesson(selectedCourseId, { title: newLessonTitle });
      setNewLessonTitle("");
      // Fetch updated course list
      await fetchCourses();
    } catch (error) {
      console.error("Error creating lesson:", error);
    }
  };

  return (
    <div className="instructor-dashboard">
      <h1>Instructor Dashboard</h1>
      <div>
        <h2>Create New Course</h2>
        <input
          type="text"
          placeholder="Course Title"
          value={newCourseTitle}
          onChange={(e) => setNewCourseTitle(e.target.value)}
        />
        <button onClick={handleCreateCourse}>Create Course</button>
      </div>
      <div>
        <h2>Create New Lesson</h2>
        <select
          value={selectedCourseId}
          onChange={(e) => setSelectedCourseId(e.target.value)}
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course._id} value={course._id}>
              {course.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Lesson Title"
          value={newLessonTitle}
          onChange={(e) => setNewLessonTitle(e.target.value)}
        />
        <button onClick={handleCreateLesson}>Create Lesson</button>
      </div>
      <div>
        <h2>Your Courses</h2>
        {courses.map((course) => (
          <div key={course._id} className="course-card">
            <h3>{course.title}</h3>
            <div>
              {course.lessons.map((lesson) => (
                <p key={lesson._id}>
                  {lesson.title} (Completed: {lesson.completed ? "Yes" : "No"})
                </p>
              ))}
            </div>
            <Link to={`/courses/${course._id}`}>View Course</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorDashboard;
