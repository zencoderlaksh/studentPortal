import React from "react";

const CourseCard = ({ title, description, onClick }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        onClick={onClick}
        className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        View Course
      </button>
    </div>
  );
};

export default CourseCard;
