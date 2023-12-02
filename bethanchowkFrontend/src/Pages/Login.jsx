import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ checkAuthentication }) => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://bethanchowk.vercel.app/api/login",
        credentials,
        { withCredentials: true }
      );

      console.log(response.data.message);

      //checkAuthentication();

      navigate("/home");
    } catch (err) {
      setError("Invalid email or password");
      setTimeout(() => {
        setError("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 bg-white p-8 rounded shadow flex flex-col items-center">
        <img src="/logo_bgp.png" alt="logo" className="h-48 mb-4" />
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        {/* Display error message with horizontal line animation */}
        {error && (
          <div className="relative w-full bg-red-500 text-white p-2 mb-4">
            {error}
            <div
              className="error-line"
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                height: "2px",
                width: "100%",
                backgroundColor: "white",
                transformOrigin: "right",
                transform: "scaleX(0)",
                transition: "transform 5s linear",
              }}
            ></div>
          </div>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          onClick={handleLogin}
          className={`w-full ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white p-2 rounded focus:outline-none transition-all duration-300`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
