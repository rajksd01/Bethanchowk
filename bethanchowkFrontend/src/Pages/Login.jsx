import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ checkAuthentication }) => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // State for error handling
  const [error, setError] = useState("");

  // Function to handle input changes
  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle login
  const handleLogin = async () => {
    try {
      // Make a POST request to the login endpoint
      const response = await axios.post(
        "http://localhost:3000/api/login",
        credentials,
        { withCredentials: true }
      );

      // Handle successful login
      console.log(response.data.message);

      // Check authentication status after login
      checkAuthentication();
      
      // Redirect to the home component
      navigate("/home");
    } catch (err) {
      // Handle login error
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        {/* Display error message if exists */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Email input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
        />

        {/* Password input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
        />

        {/* Login button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
