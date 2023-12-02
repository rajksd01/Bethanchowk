import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Body from "./Body";
import axios from "axios";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Body />} />
        <Route path="/*" element={<PrivateRoute />} />
      </Routes>
    </Router>
  );
};

export default App;

const PrivateRoute =async () => {
  const isUserLoggedIn = async () => {
    try {
      const response = await axios.get("https://bethanchowk-2kkj.vercel.app/api/isloggedin");
      return response?.status === 200;
    } catch (error) {
      console.error("Error checking authentication:", error);
      return false;
    }
  };

  const isLogged = await isUserLoggedIn();

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Body />} />
    </Routes>
  );
};
