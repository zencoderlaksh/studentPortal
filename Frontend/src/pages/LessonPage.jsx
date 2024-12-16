import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLesson } from "../services/api";

const LessonPage = () => {
  const { courseId, lessonId } = useParams(); // Retrieve courseId and lessonId from URL params
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const data = await getLesson(courseId, lessonId);
        setLesson(data);
      } catch (error) {
        console.error("Error fetching lesson:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [courseId, lessonId]);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {loading ? (
        <div className="text-center text-blue-600">
          <p className="text-xl">Loading lesson...</p>
        </div>
      ) : lesson ? (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            {lesson.title}
          </h1>
          <p className="text-gray-700 text-lg leading-7">{lesson.content}</p>
        </div>
      ) : (
        <div className="text-center text-red-600">
          <p className="text-xl">Lesson not found.</p>
        </div>
      )}
    </div>
  );
};

export default LessonPage;
