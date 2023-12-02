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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../Pages/AuthContext';  // Adjust the import path

const LogoutComponent = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.get(
        "https://bethanchowk.vercel.app/api/logout",
        {},
        { withCredentials: true }
      );

      // Assuming logout is successful, call the logout function from the AuthContext
      logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-700 text-white  space-x-0 p-2 rounded-lg hover:bg-red-600 focus:outline-none"
    >
      Logout
    </button>
  );
};

export default LogoutComponent;
