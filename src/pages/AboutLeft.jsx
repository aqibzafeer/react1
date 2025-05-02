import React from "react";

const AboutLeft = () => {
  return (
    <div className="bg-red-50 sm:w-4/10 m-5 w-full rounded-lg p-10  text-center flex flex-col min-h-[100px] shadow-md">
      <h1 className={`text-2xl font-bold text-red-900 mb-3`}></h1>
      <img
        src="https://aqib.darwazypy.com/wp-content/uploads/2025/02/aqibzafeer-560x560.jpg"
        alt="Aqib Zafeer"
        class="mx-auto w-[150px] h-[150px] rounded-full"
      />
      <h2 className="text-3xl font-bold text-gray-700 py-5">Aqib Zafeer</h2>
      <h2 className="text-xl font-bold text-gray-700">
        Web and Mobile App Developer"
      </h2>

      <h2 className=" text-gray-700 py-2">
        React Js | Wordpress | Content Writer{" "}
      </h2>

      <button className="bg-[#a00] text-white hover:bg-red-950 px-5 py-3 rounded-lg mt-10">
        Email
      </button>
    </div>
  );
};

export default AboutLeft;
