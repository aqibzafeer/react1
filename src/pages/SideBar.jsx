import React from "react";

const SideBar = () => {
  return (
    <div className="bg-red-50 sm:w-2/10 w-full rounded-lg p-5 text-center flex flex-col min-h-[100px] shadow-md">
      <img
        src="https://aqib.darwazypy.com/wp-content/uploads/2025/02/aqibzafeer-560x560.jpg"
        alt="Aqib Zafeer"
        class="mx-auto w-[50px] h-[50px] rounded-full"
      />

      <p className=" font-bold text-gray-700 py-5">ABOUT</p>
      <p className=" font-bold text-gray-700 py-5">RESUME</p>
      <p className=" font-bold text-gray-700 py-5">PROJECTS</p>
      <p className=" font-bold text-gray-700 py-5">CONTACT</p>
    </div>
  );
};

export default SideBar;
