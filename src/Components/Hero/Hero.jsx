import React, { useState } from "react";
import "./Hero.css";
import arrow_icon from "../../assets/arrow-icon.svg";
import arrow_icon_dark from "../../assets/arrow-icon-dark.svg";
import code_icon from "../../assets/code-icon.svg";
import { Link } from "react-router-dom";
import  programmingLanguages  from "../../Languages";

const Hero = () => {
  const languages = Object.entries(programmingLanguages);

  return (
    <div>
      <div className="hero-section px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-32 flex items-center justify-center">
          <div className="text-center pt-28 max-w-[54rem]">
            <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
              Code online, Compile faster with{" "}
              <span className="name">PixelCode</span>
            </h1>
            <p className="mt-6 sm:mt-9 text-pretty text-base sm:text-lg font-medium text-gray-500">
              Your ultimate online Editor for seamless programming and real-time
              results. Simplify coding and boost productivity with a modern
              online editor, with Multiple Programming Languages in one platform.
            </p>
            <div className="mt-8 flex flex-row items-center justify-center gap-4 sm:gap-x-7">
              <Link
                to="/frontend-editor"
                className="rounded-lg bg-sky-500 px-4 py-3 text-base font-semibold text-[#0D1117] transition-all shadow-2xl flex hover:bg-sky-700"
              >
                <img
                  src={code_icon}
                  alt="code_icon"
                  className="bg-transparent h-6 pr-2"
                />{" "}
                Frontend Editor
              </Link>
              <Link
                to="/about"
                className="about-btn rounded-lg px-4 py-3 text-base font-semibold text-sky-500 border-solid border-2 border-sky-500 shadow-2xl transition-all flex hover:bg-sky-500 hover:text-[#0D1117]"
              >
                About Us{" "}
                <img
                  src={arrow_icon}
                  alt="arrow_icon"
                  className="light-arrow h-6 pl-2 bg-transparent"
                />
                <img
                  src={arrow_icon_dark}
                  alt="arrow_icon"
                  className="dark-arrow h-6 pl-2 bg-transparent"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto flex items-center justify-center flex-col gap-9">
          <h2 className="text-2xl sm:text-3xl text-center">
            Choose Your Programming Language
          </h2>
          <div className="text-base font-medium mb-4 flex flex-wrap justify-center gap-4">
            <p className="px-6 py-4 transition-all border-b-[3px] border-sky-500 text-sky-500">
              Programming Language
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 sm:gap-7 max-w-[60rem] flex-wrap">
            {languages.map(([language, nickLanguage]) => (
              <Link
                key={language}
                to={`/editor?language=${language}`}
                className="border-solid border-2 border-gray-700 bg-[#161616] rounded-2xl px-6 py-4 flex items-center justify-between w-40 sm:w-52 hover:border-gray-300 transition-all hover:scale-105"
              >
                <span className="text-lg">{language}</span>
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${nickLanguage}/${nickLanguage}-original.svg`}
                  className="w-8 sm:w-10"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
