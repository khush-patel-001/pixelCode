import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="w-full">
        <div className="w-full h-60 opacity-60 blur-[40px] bg-sky-500 rounded-[100%] ml-auto mr-auto absolute top-auto bottom-auto left-0 right-0 mt-[-40px]"></div>
        <div className="w-full bg-[#151516] rounded-t-[4rem] relative overflow-hidden">
          <div className="flex items-center justify-center pt-20">
            <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
              <div className="w-full text-5xl font-bold text-center md:text-left">
                <h1 className="w-full md:w-2/3">
                  Try free frontend code editor with pixelCode
                </h1>
              </div>
              <div className="flex mt-8 flex-col md:flex-row md:justify-between items-center">
                <p className="w-full md:w-2/3 text-gray-400 text-center md:text-left">
                  Experience seamless frontend development with our
                  user-friendly tools.
                </p>
                <div className="w-44 pt-6 md:pt-0">
                  <Link
                    to="/frontend-editor"
                    className="bg-sky-500 hover:bg-sky-600 text-[#161616] justify-center text-center rounded-lg shadow px-6 py-3 flex items-center cursor-pointer"
                  >
                    Frontend Editor
                  </Link>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex mt-16 mb-4 flex-row justify-between items-center">
                  <Link to="/">
                    <img className="h-11 w-auto" src={logo} alt="logo" />
                  </Link>
                  <Link
                    to="/"
                    className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
                  >
                    Home
                  </Link>
                  <Link
                    to="/contact"
                    className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/about"
                    className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
                  >
                    About us
                  </Link>
                </div>
                <hr className="border-gray-600" />
                <p className="w-full text-center my-12 text-gray-600">
                  Copyright © 2024 pixelCode, All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
