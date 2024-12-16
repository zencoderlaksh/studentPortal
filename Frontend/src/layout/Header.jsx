import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold">E-Learning Platform</h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="/" className="hover:text-gray-200 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-gray-200 transition">
                Courses
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-gray-200 transition">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/profile" className="hover:text-gray-200 transition">
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
