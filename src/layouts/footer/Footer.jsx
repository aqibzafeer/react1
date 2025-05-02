import React from "react";
import { footerData } from "../../mockData/data";

function FooterColumn({ title, links }) {
  return (
    <div className="w-full flex flex-col items-center text-white">
      <p className="font-extrabold mt-10">{title}</p>
      {links.map((link, index) => (
        <a href="#" key={index} className="mt-10 hover:text-yellow-300">
          {link}
        </a>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <div className="w-full bg-red-900 flex flex-col sm:flex-row min-h-[120px]">
      <div className="w-full text-justify my-10 p-5 text-white  hover:text-yellow-200">
        <a
          href="#"
          className="px-10 font-extrabold text-2xl hover:text-yellow-300 block"
        >
          LOGO
        </a>

        <p className="mt-5 px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione
          magnam neque incidunt nostrum.
        </p>
      </div>

      {footerData.map((column, index) => (
        <FooterColumn key={index} title={column.title} links={column.links} />
      ))}
    </div>
  );
}

export default Footer;
