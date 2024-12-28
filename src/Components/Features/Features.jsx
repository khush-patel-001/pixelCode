import React from "react";
import img_1 from "../../assets/feature-img-1.png";
import img_2 from "../../assets/feature-img-2.png";
import img_3 from "../../assets/feature-img-3.png";

const Features = () => {
  return (
    <div>
      <div className="text-white py-20">
        <div className="container mx-auto px-4 pt-20 pb-32 border-solid border-t border-b border-gray-600">
          <h2 className="text-5xl font-bold mb-16 flex justify-center text-[#F1F0EE]">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="flex flex-col items-center justify-center w-full text-center">
              <div className="bg-[#161616] rounded-2xl w-full relative h-full overflow-hidden">
                <img
                  src={img_1}
                  alt="Feature 1"
                  className="w-full h-full object-cover rounded-t-2xl mb-4 border-solid border-[1px] border-b-none border-gray-700"
                />
                <div className="z-[3] h-[6rem] rounded-b-2xl absolute top-auto bottom-0 left-0 right-0 bg-gradient-to-t from-[#161616] to-[rgba(22,22,22,0)]"></div>
              </div>
              <h3 className="text-2xl font-semibold my-3">
                Frontend Code Editor
              </h3>
              <p className="text-gray-400">
                Unleash your creativity by designing and coding dynamic frontend projects effortlessly.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center w-full">
              <div className="bg-[#161616] rounded-2xl w-full relative h-full overflow-hidden">
                <img
                  src={img_2}
                  alt="Feature 2"
                  className="w-full h-full object-cover rounded-t-2xl mb-4 border-solid border-[1px] border-b-none border-gray-700"
                />
                <div className="z-[3] h-[6rem] rounded-b-2xl absolute top-auto bottom-0 left-0 right-0 bg-gradient-to-t from-[#161616] to-[rgba(22,22,22,0)]"></div>
              </div>
              <h3 className="text-2xl font-semibold my-3">
                Programming Code Editor
              </h3>
              <p className="text-gray-400">
                Experiment with multiple programming languages in one powerful editor.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <div className="bg-[#161616] rounded-2xl w-full relative h-full overflow-hidden">
                <img
                  src={img_3}
                  alt="Feature 3"
                  className="w-full h-full object-cover rounded-t-2xl mb-4 border-solid border-[1px] border-b-none border-gray-700"
                />
                <div className="z-[3] h-[6rem] absolute rounded-b-2xl top-auto bottom-0 left-0 right-0 bg-gradient-to-t from-[#161616] to-[rgba(22,22,22,0)]"></div>
              </div>
              <h3 className="text-2xl font-semibold my-3">
                Hiring On Projects
              </h3>
              <p className="text-gray-400">
                Build your portfolio and connect with exciting job opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
