import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`border-b-solid border-b-[#cbd5e11a] border-b-[1px] sticky top-0 left-0 right-0 z-10 lg:z-50 backdrop-blur ${
          isOpen ? "bg-[#151516]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-3 py-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-between">
              <div className="flex shrink-0">
                <Link to="/">
                  <img
                    className="h-11 w-auto cursor-pointer"
                    src={logo}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="md:hidden">
                <a
                  onClick={toggleMenu}
                  className="text-gray-300 hover:text-sky-500 focus:outline-none z-40 cursor-pointer"
                >
                  {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </a>
              </div>
              <div
                className={`absolute top-16 left-0 w-full bg-transparent md:static md:block ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <div className="flex flex-col justify-end md:flex-row md:space-x-10 transition-all max-md:fixed max-md:z-10 max-md:top-20 max-md:left-0 max-md:w-full max-md:pl-4 max-md:transition-all max-md:bg-[#151516] max-md:border-b-solid max-md:border-b-[#cbd5e11a] max-md:border-b-[1px]">
                  <Link
                    className="rounded-md px-3.5 pt-6 md:py-2.5 text-lg font-medium max-md:w-28 text-gray-400 hover:text-sky-500"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="rounded-md px-3.5 pt-6 md:py-2.5 text-lg font-medium max-md:w-28 text-gray-400 hover:text-sky-500"
                    to="/editor"
                  >
                    Editor
                  </Link>
                  <Link
                    className="rounded-md px-3.5 pt-6 md:py-2.5 text-lg font-medium max-md:w-28 text-gray-400 hover:text-sky-500"
                    to="/contact"
                  >
                    Contact
                  </Link>
                  <Link
                    className="rounded-md px-3.5 pt-6 md:py-2.5 text-lg font-medium max-md:w-28 max-md:mb-10 text-gray-400 hover:text-sky-500"
                    to="/about"
                  >
                    About us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
