import React from "react";
import { NavBarMenu } from "../../mockData/data";
import MenuItem from "./menuItem";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="text-white bg-red-800 w-full flex p-5">
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
          <Link to="/" className="hover:text-yellow-300">
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
