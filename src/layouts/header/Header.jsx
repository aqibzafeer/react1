function Header() {
  return (
    <>
      <header>
        <div className=" w-full bg-red-900 flex">
          <div className="w-1/5 text-center flex justify-center items-center">
            <a
              href=""
              className="text-center font-extrabold text-2xl text-white hover:text-red-400"
            >
              LOGO
            </a>
          </div>

          <div className="w-4/5 my-5 justify-center text-right">
            <a
              href="#"
              className=" text-white hover:text-red-400 font-bold px-5"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
