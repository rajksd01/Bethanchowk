// Body.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Login from "./Login";
import LogoutComponent from "../components/Logout";
import PrivateRoute from "./PrivateRoute";

const Body = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      checkAuthentication();
    }, 2000);

    return () => clearTimeout(delay);
  }, [navigate]);

  const checkAuthentication = async () => {
    try {
      //const response = await axios.get("https://bethanchowk.vercel.app/api/isloggedin", { withCredentials: true });
      const response = localStorage.getItem("token");
      setAuthenticated(!!response)
      // setAuthenticated(response?.data?.message === "User verified");

      // if (response?.data?.message === "User verified" && window.location.pathname !== "/") {
      //   navigate("/home");
      // }
      if(!!response && window.location.pathname !== "/"){
        navigate("/home");
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      setAuthenticated(false);

      if (window.location.pathname !== "/") {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Login checkAuthentication={checkAuthentication} />} />
      <Route
        path="/home"
        element={<PrivateRoute element={<Home />} authenticated={authenticated} />}
      />
      <Route path="/logout" element={<LogoutComponent />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Body;
