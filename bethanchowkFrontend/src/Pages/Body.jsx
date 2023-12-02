// // Body.jsx
// import React, { useState, useEffect } from "react";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Home from "./Home";
// import Login from "./Login";
// import LogoutComponent from "../components/Logout";
// import PrivateRoute from "./PrivateRoute";

// const Body = () => {
//   const [loading, setLoading] = useState(true);
//   const [authenticated, setAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const delay = setTimeout(() => {
//       checkAuthentication();
//     }, 2000);

//     return () => clearTimeout(delay);
//   }, [navigate]);

//   const checkAuthentication = async () => {
//     try {
//       const response = await axios.get("https://bethanchowk.vercel.app/api/isloggedin", { withCredentials: true });
//       setAuthenticated(response?.data?.message === "User verified");

//       if (response?.data?.message === "User verified" && window.location.pathname !== "/") {
//         navigate("/home");
//       }
//     } catch (error) {
//       console.error("Error checking authentication:", error);
//       setAuthenticated(false);

//       if (window.location.pathname !== "/") {
//         navigate("/login");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Routes>
//       <Route path="/" element={<Login checkAuthentication={checkAuthentication} />} />
//       <Route
//         path="/home"
//         element={<PrivateRoute element={<Home />} authenticated={authenticated} />}
//       />
//       <Route path="/logout" element={<LogoutComponent />} />
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// export default Body;

// new code

// // Body.js
// import { useState, useEffect } from "react";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

// import Home from "./Home";
// import LogoutComponent from "../components/Logout";
// import PrivateRoute from "./PrivateRoute";
// import { useAuth } from "./AuthContext";

// const Body = () => {
//   const [loading, setLoading] = useState(true);
//   const { authenticated } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const delay = setTimeout(() => {
//       checkAuthentication();
//     }, 2000);

//     return () => clearTimeout(delay);
//   }, [navigate]);

//   const checkAuthentication = () => {
//     if (!authenticated) {
//       navigate("/login");
//     }
//     setLoading(false);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/login" />} />
//       <Route
//         path="/home"
//         element={
//           <PrivateRoute element={<Home />} authenticated={authenticated} />
//         }
//       />
//       <Route path="/logout" element={<LogoutComponent />} />
//       <Route path="*" element={<Navigate to="/login" />} />
//     </Routes>
//   );
// };

// export default Body;



// Body.jsx
// import React, { useState, useEffect } from "react";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Home from "./Home";
// import Login from "./Login";
// import LogoutComponent from "../components/Logout";
// import PrivateRoute from "./PrivateRoute";
// import { useAuth } from './AuthContext';  // Adjust the import path

// const Body = () => {
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const { authenticated } = useAuth();

//   useEffect(() => {
//     const delay = setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => clearTimeout(delay);
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route
//         path="/home"
//         element={<PrivateRoute element={<Home />} />}
//       />
//       <Route path="/logout" element={<LogoutComponent />} />
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// export default Body;


// Body.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Login from "./Login";
import LogoutComponent from "../components/Logout";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "./AuthContext";  // Adjust the import path

const Body = () => {
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      checkAuthentication();
    }, 2000);

    return () => clearTimeout(delay);
  }, [navigate]);

  const checkAuthentication = async () => {
    try {
      // Use isLoggedIn instead of response.data.message
      if (isLoggedIn && window.location.pathname !== "/") {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      // Redirect to login if not authenticated
      if (!isLoggedIn && window.location.pathname !== "/") {
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
        element={<PrivateRoute element={<Home />} />}
      />
      <Route path="/logout" element={<LogoutComponent />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Body;
