import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"; // Assuming you have an AuthContext
import { getUserProfile } from "../services/api"; // Assuming you have an API function to fetch user profile details

const Profile = () => {
  const { user, logout } = useAuth(); // Use context to get user data and logout function
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        try {
          const response = await getUserProfile(user._id); // Fetching profile using user id
          setProfile(response.data);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };

      fetchProfile();
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Profile
        </h1>
        {profile ? (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {profile.name}'s Profile
            </h2>
            <div className="mb-4">
              <p className="text-gray-600">
                <strong>Email:</strong> {profile.email}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> {profile.phone || "Not Provided"}
              </p>
              <p className="text-gray-600">
                <strong>Joined:</strong>{" "}
                {new Date(profile.createdAt).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={logout}
              className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-center text-gray-600">Loading profile...</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
