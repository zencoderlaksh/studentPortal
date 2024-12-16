import React from "react";

const LessonCard = ({ title, duration, status, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300">
      <h4 className="text-md font-semibold mb-2">{title}</h4>
      <p className="text-gray-500 mb-2">Duration: {duration} mins</p>
      <p
        className={`text-sm font-medium ${
          status === "Completed" ? "text-green-500" : "text-yellow-500"
        }`}
      >
        Status: {status}
      </p>
      <button
        onClick={onClick}
        className="mt-3 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Start Lesson
      </button>
    </div>
  );
};

export default LessonCard;
