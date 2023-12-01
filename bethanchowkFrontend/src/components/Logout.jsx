import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogoutComponent = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(
        "http://localhost:3000/api/logout",
        {},
        { withCredentials: true }
      );

      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded hover:bg-red-600 focus:outline-none"
    >
      Logout
    </button>
  );
};

export default LogoutComponent;
