import axios from "axios";

// Create an instance of axios with the backend URL
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Register function
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/users/register", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login function
export const loginUser = async (userData) => {
  try {
    const response = await api.post("/users/login", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fetch all courses
export const getCourses = async () => {
  try {
    const response = await api.get("/courses");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fetch a specific lesson
export const getLesson = async (courseId, lessonId) => {
  try {
    const response = await api.get(`/courses/${courseId}/lessons/${lessonId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Create Course
export const createCourse = (courseData) => api.post("/courses", courseData);

// Create Lesson
export const createLesson = (courseId, lessonData) =>
  api.post(`/courses/${courseId}/lessons`, lessonData);

// services/api.js

export const getUserProfile = async (userId) => {
  try {
    const response = await api.get(`/api/users/${userId}`);
    return response;
  } catch (error) {
    throw error;
  }
};
