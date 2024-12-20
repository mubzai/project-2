"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      setError("Please enter both email and password!");
      return;
    }

    // Simple email format validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(credentials.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate a successful login (replace with real authentication logic)
    alert("Login successful!");
    router.push("/"); // Redirect to a dashboard or another page
  };

  return (
    <div>
      <Heading/>
      <Header />
      <div className="container mx-auto p-6 flex justify-center items-center min-h-screen">
        <div className="w-full max-w-sm">
          {/* My Account Header */}
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-6"> Login</h1>
          
          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleLogin}>
            {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-300 text-sm"
              aria-label="Email"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-300 text-sm"
              aria-label="Password"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 w-full text-sm"
            >
              Login
            </button>
          </form>

          {/* Forgot Password & Sign Up */}
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-500 hover:underline text-sm">Forgot password?</a>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
