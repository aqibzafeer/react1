import React from "react";

const SideBar = () => {
  return (
    <div className="bg-red-50 sm:w-2/10 w-full rounded-lg p-10  text-center flex flex-col min-h-[120px] shadow-md">
      <img
        src="https://aqib.darwazypy.com/wp-content/uploads/2025/02/aqibzafeer-560x560.jpg"
        alt="Aqib Zafeer"
        class="mx-auto w-[90px] h-[90px] rounded-full"
      />

      <p className=" font-bold text-gray-700 pt-10 pb-2 hover:text-red-800">
        ABOUT
      </p>
      <p className=" font-bold text-gray-700 py-2 hover:text-red-800">SKILLS</p>
      <p className=" font-bold text-gray-700 py-2 hover:text-red-800">
        EDUCATION
      </p>
      <p className=" font-bold text-gray-700 py-2 hover:text-red-800">
        CERTIFICATES
      </p>
      <p className=" font-bold text-gray-700 py-2 hover:text-red-800">
        EXPERIENCE
      </p>
      <p className=" font-bold text-gray-700 py-2 hover:text-red-800">
        PROJECTS
      </p>
      <p className=" font-bold text-gray-700 py-2 hover:text-red-800">
        CONTACT
      </p>
    </div>
  );
};

export default SideBar;
