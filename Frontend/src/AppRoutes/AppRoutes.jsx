import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import CoursesPage from "../pages/CoursePage";
import LessonPage from "../pages/LessonPage";
import InstructorDashboard from "../pages/Instructor/InstructorDashboard";
import ProgressPage from "../pages/Progess/ProgressPage";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <LoginPage />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <RegisterPage />
          </Layout>
        }
      />
      <Route
        path="/courses"
        element={
          <Layout>
            <CoursesPage />
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />
      <Route
        path="/course/:courseId/lesson/:lessonId"
        element={
          <Layout>
            <LessonPage />
          </Layout>
        }
      />

      {/* Protected Routes */}
      <Route
        path="/instructor-dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <InstructorDashboard />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/progress"
        element={
          <ProtectedRoute>
            <Layout>
              <ProgressPage />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
