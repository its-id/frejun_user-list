import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.toLowerCase() === "admin@frejun" && password === "12345678") {
      // Generate a token and store it in local storage
      const token = "frejun-token"; // You would generate a unique token here
      localStorage.setItem("token", token);
      toast.success("Login successfull");
      // redirect window to /home route
      window.location.href = "/home";
    } else {
      return toast.error("Invalid username or password");
    }

    // console.log("Submit");
  };

  return (
    <div className="flex items-center justify-center h-screen sm:px-6">
      <div className="w-full max-w-sm p-4 bg-white sm:p-6">
        <div className="flex items-center justify-center">
          <span className="text-3xl font-semibold text-gray-900">Log in</span>
        </div>
        <form className="mt-4" onSubmit={handleSubmit}>
          <label htmlFor="email" className="block">
            <span className="text-sm text-gray-700">Username</span>
            <input
              type="email"
              name="username"
              autoComplete="username"
              value={username}
              placeholder="Enter your username"
              onChange={(e) => setUserName(e.target.value.toLowerCase())}
              className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-green-600"
              required
            />
          </label>
          <label htmlFor="password" className="block mt-3">
            <span className="text-sm text-gray-700">Password</span>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-green-600"
              required
            />
          </label>
          <div className="mt-6">
            <button type="submit" className="w-full px-4 py-2 text-sm text-center text-white bg-green-500 rounded-md hover:bg-green-700">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
