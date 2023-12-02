// // PrivateRoute.jsx
// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// const PrivateRoute = ({ element, authenticated }) => {
//   return authenticated ? element : <Navigate to="/login" />;
// };

// export default PrivateRoute;



// code 



// PrivateRoute.js

import { useAuth } from "./AuthContext";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, logoutComponent }) => {
  const { authenticated } = useAuth();

  return authenticated ? (
    <>
      {element}
      {logoutComponent}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;