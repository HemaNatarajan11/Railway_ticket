import React, { useState } from "react";
import Navbar from "../components/Navbar";
import background from "../assets/background.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful");

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <>
      <Navbar />

      {/* Page fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center bg-cover bg-center pt-[140px]"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Login Card animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/50 p-8 rounded-xl shadow-lg w-full max-w-md backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
            Login to Continue
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            {/* Password */}
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            {/* Button animation */}
            <motion.button
              type="submit"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Login
            </motion.button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-700">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Login;
