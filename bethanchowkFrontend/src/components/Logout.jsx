// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const LogoutComponent = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.get(
//         "https://bethanchowk.vercel.app/api/logout",
//         {},
//         { withCredentials: true }
//       );

//       navigate("/");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="bg-red-700 text-white  space-x-0 p-2 rounded-lg hover:bg-red-600 focus:outline-none"
//     >
//       Logout
//     </button>
//   );
// };

// export default LogoutComponent;






// new code



// // LogoutComponent.js
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../Pages/AuthContext";

// const LogoutComponent = () => {
//   const navigate = useNavigate();
//   const { logout } = useAuth();

//   const handleLogout = async () => {
//     try {
//       await axios.get(
//         "https://bethanchowk.vercel.app/api/logout",
//         {},
//         { withCredentials: true }
//       );

//       // Call logout function on successful logout
//       logout();

//       navigate("/");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="bg-red-700 text-white space-x-0 p-2 rounded-lg hover:bg-red-600 focus:outline-none"
//     >
//       Logout
//     </button>
//   );
// };

// export default LogoutComponent;

// LogoutComponent.jsx
// LogoutComponent.jsx

import { useAuth } from "../Pages/AuthContext"; // Adjust the import path
import axios from "axios";

const LogoutComponent = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.get("https://bethanchowk.vercel.app/api/logout", {
        withCredentials: true,
      });

      logout(); // Update the logout state in the AuthContext
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-700 text-white space-x-0 p-2 rounded-lg hover:bg-red-600 focus:outline-none"
    >
      Logout
    </button>
  );
};

export default LogoutComponent;

