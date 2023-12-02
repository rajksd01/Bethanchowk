// // PrivateRoute.jsx
// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// const PrivateRoute = ({ element, authenticated }) => {
//   return authenticated ? element : <Navigate to="/login" />;
// };

// export default PrivateRoute;



// code 



// PrivateRoute.js

// PrivateRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from './AuthContext';  // Adjust the import path

const PrivateRoute = ({ element }) => {
  const { authenticated } = useAuth();

  return authenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
