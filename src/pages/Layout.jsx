import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-red-50 w-full max-w-md rounded-lg text-center flex flex-col min-h-[300px] p-10 shadow-xl">
        <h1 className="text-red-900 text-3xl font-bold m-10">Wellcome:</h1>
        <p className="text-xl text-red-900 p-5 ">
          PLease Logn / Signup to continue{" "}
        </p>

        <Link
          to="/login"
          className="mt-4 font-light bg-red-800 border rounded-lg border-gray-400 px-8 py-4 text-white shadow hover:bg-red-600 hover:text-red-200"
        >
          Login
        </Link>

        <p className="text-blue-900 p-4 font-bold">or</p>
        <Link
          to="/signup"
          className=" font-light bg-red-800 border rounded-lg border-gray-400 px-8 py-4 text-white shadow hover:bg-red-600 hover:text-red-200"
        >
          Signup
        </Link>

        <Link className="mt-10 text-black font-bold" to="/home">
          Skip Login
        </Link>
      </form>
    </div>
  );
};

export default Layout;
