import React from "react";
const Layout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-red-50 w-full max-w-md rounded-lg text-center flex flex-col min-h-[300px] p-10 shadow-xl">
        <h1 className="text-red-900 text-3xl font-bold m-10">Wellcome:</h1>
        <p className="text-xl text-red-900 p-5 ">
          PLease Logn / Signup to continue{" "}
        </p>
        <button className="mt-4 font-light bg-red-800 border rounded-lg border-gray-400 px-8 py-4 text-white shadow hover:bg-red-600 hover:text-red-200">
          Log-In
        </button>
        <p className="text-red-900 p-2">or</p>
        <button className=" mb-10 font-light bg-red-800 border rounded-lg border-gray-400 px-8 py-4 text-white shadow hover:bg-red-600 hover:text-red-200">
          Sign-Up
        </button>
      </form>
    </div>
  );
};

export default Layout;
