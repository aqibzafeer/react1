import React from "react";
// import { NavBarMenu } from "./data";
import { NavBarMenu } from "../../mockData/data";
import MenuItem from "./menuItem";

const Navigation = () => {
  return (
    <>
      <div className="text-white bg-red-800 w-full flex mt-10">
        <div className="w-1/5 text-center flex justify-center items-center">
          <a
            href=""
            className="text-center font-extrabold text-2xl hover:text-yellow-300"
          >
            LOGO
          </a>
        </div>

        <div className="w-3/5 justify-center my-5 ">
          <ul className="flex items-center gap-5 ">
            {NavBarMenu.map((item) => {
              return <MenuItem item={item} />;
            })}
          </ul>
        </div>

        <div className="w-1/6 my-5 justify-center text-right ">
          <a href="#">Logout</a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
