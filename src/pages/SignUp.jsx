import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center m-10">
      <form className="bg-red-50 w-full max-w-md rounded-lg text-center flex flex-col p-10 ">
        <h1 className="text-red-900 text-5xl font-bold mb-8">REGISTER</h1>

        <input
          placeholder="Example@email.com"
          className="text-red-900 p-4 mb-4 border-2 rounded-lg border-gray-400 shadow"
        />

        <input
          placeholder="0312-3456789"
          type="number"
          className="text-red-900 p-4 mb-4 border-2 rounded-lg border-gray-400 shadow"
        />

        <input
          placeholder="Enter Your Password"
          type="password"
          className="text-red-900 p-4 mb-4 border-2 rounded-lg border-gray-400 shadow"
        />

        <input
          placeholder="Confirm Your Password"
          type="password"
          className="text-red-900 p-4 mb-4 border-2 rounded-lg border-gray-400 shadow"
        />

        <Link
          to="/"
          className="mt-4 font-light bg-red-800 border rounded-lg border-gray-400 px-8 py-4 text-white shadow hover:bg-red-600 hover:text-red-200"
        >
          Register
        </Link>

        <p className="text-red-900 p-4 mb-4">
          Already Register{" "}
          <Link to="/" className="text-blue-900 p-4 mb-4 font-bold">
            Login Here
          </Link>{" "}
          <a className="" href=""></a>
          <br />
          <br />
          <Link className="text-black font-bold" to="/home">
            Skip Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
