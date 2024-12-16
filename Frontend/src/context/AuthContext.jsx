// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in (via localStorage or JWT)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Register user
  const register = async (userData) => {
    try {
      await registerUser(userData); // Assuming your API function for registration
      login(userData); // Log in after registration
    } catch (error) {
      setError(error.message);
    }
  };

  // Login user
  const login = async (userData) => {
    try {
      const response = await loginUser(userData);
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data)); // Save user info
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (error) {
      setError(error.message);
    }
  };

  // Logout user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, error }}>
      {!loading ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
