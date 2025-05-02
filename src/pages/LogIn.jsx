import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import SignUp from "./Pages/SignUp";

const LogIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-red-50 w-full max-w-md rounded-lg text-center flex flex-col min-h-[500px] p-10 shadow-xl">
        <h1 className="text-red-900 text-5xl font-bold mb-8">LOGIN</h1>
        <input
          placeholder="Example@email.com"
          className="text-red-900 p-4 mb-4 border-2 rounded-lg border-gray-400 shadow"
        />
        <input
          placeholder="Enter Your Password"
          type="password"
          className="text-red-900 p-4 mb-4 border-2 rounded-lg border-gray-400 shadow"
        />
        <button className="mt-4 font-light bg-red-800 border rounded-lg border-gray-400 px-8 py-4 text-white shadow hover:bg-red-600 hover:text-red-200">
          LOGIN
        </button>
        <p className="text-red-900 p-4 m-5">
          Don't Have Account
          <a className="text-blue-900 p-4 mb-4 font-bold" href="">
            Register
          </a>
          <a className="text-blue-900 p-4 mb-4 font-bold" href="">
            Skip Login
          </a>
        </p>

        {/* <BrowserRouter>
          <Link to="/Pages/SignUp">Register</Link>

          <Routes>
            <Route path="/Pages/SignUp" element={<SignUp />} />
          </Routes>
        </BrowserRouter> */}
      </form>
    </div>
  );
};

export default LogIn;
