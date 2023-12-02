import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogoutComponent = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(
        "https://bethanchowk.vercel.app/api/logout",
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
      className="bg-red-700 text-white  space-x-0 p-2 rounded-lg hover:bg-red-600 focus:outline-none"
    >
      Logout
    </button>
  );
};

export default LogoutComponent;
