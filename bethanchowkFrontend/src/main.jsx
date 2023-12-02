// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import Body from "./Pages/Body";
// import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Router>
//     <Body />
//   </Router>
// );

import ReactDOM from "react-dom/client";
import "./index.css";
import Body from "./Pages/Body";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Pages/AuthContext"; // Adjust the import path

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProvider>
      <Body />
    </AuthProvider>
  </Router>
);
