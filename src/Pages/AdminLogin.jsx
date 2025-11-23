import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:4000/auth/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid login credentials!");
        setLoading(false);
        return;
      }

      // success
      setSuccess("Login successful!");
      console.log("LOGIN SUCCESS:", data);

      // optional redirect
      // window.location.href = "/admin/dashboard";

      setLoading(false);
    } catch (err) {
      setError("Server error, please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 pt-24 pb-10">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-2">
          Admin Login 
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Enter your credentials to access the Admin Dashboard
        </p>

        {error && (
          <p className="text-red-500 text-center mb-3 font-medium">{error}</p>
        )}
        {success && (
          <p className="text-green-600 text-center mb-3 font-medium">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
    w-full px-4 py-3 
    border border-gray-300 
    rounded-lg 
    outline-none 
    focus:border-blue-500 
    focus:ring-2 focus:ring-blue-400
  "
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full px-4 py-3 
    border border-gray-300 
    rounded-lg 
    outline-none 
    focus:border-blue-500 
    focus:ring-2 focus:ring-blue-400
  "
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-blue-600 text-white rounded-lg cursor-pointer font-semibold 
            hover:bg-blue-700 transition ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-5">
          Don't have an account?{" "}
          <a href="/admin/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
