"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);

  const switchToRegister = () => setIsRegistering(true);
  const switchToLogin = () => setIsRegistering(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-indigo-300">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm sm:max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
          {isRegistering ? "Create an Account" : "Login"}
        </h2>
        {isRegistering ? (
          <RegisterForm switchToLogin={switchToLogin} />
        ) : (
          <LoginForm switchToRegister={switchToRegister} />
        )}
      </motion.div>
    </div>
  );
}

function LoginForm({ switchToRegister }) {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="email"
        placeholder="Email or Username"
        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        className="w-full py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg hover:opacity-90 transition"
      >
        Login
      </button>
      <div className="flex justify-between items-center mt-4">
        <button className="text-indigo-500 hover:underline">Forgot Password?</button>
        <button
          className="text-indigo-500 hover:underline"
          onClick={switchToRegister}
        >
          Create a New Account
        </button>
      </div>
    </motion.div>
  );
}

function RegisterForm({ switchToLogin }) {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="text"
        placeholder="Full Name"
        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="date"
        placeholder="Date of Birth"
        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="text"
        placeholder="College Name"
        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        className="w-full py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg hover:opacity-90 transition"
      >
        Sign Up
      </button>
      <button
        className="w-full text-indigo-500 hover:underline mt-4"
        onClick={switchToLogin}
      >
        Back to Login
      </button>
    </motion.div>
  );
}
