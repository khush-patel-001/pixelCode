import React from "react";
import about_img_1 from '../../assets/about-img-1.jpg'
import about_img_2 from '../../assets/about-img-2.png'
import about_img_3 from '../../assets/about-img-3.png'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-5xl tracking-tight font-bold mt-6">About Us</h1>
        <section className="overflow-hidden pt-10 pb-12 lg:pt-[120px] lg:pb-[90px]">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between -mx-4">
              <div className="w-full px-4 lg:w-6/12">
                <div className="flex items-center -mx-3 sm:-mx-4">
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="py-3 sm:py-4">
                      <img
                        src={about_img_1}
                        alt="about_img_1"
                        className="w-full rounded-2xl"
                      />
                    </div>
                    <div className="py-3 sm:py-4">
                      <img
                        src={about_img_2}
                        alt="about_img_2"
                        className="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="relative my-4">
                      <img
                        src={about_img_3}
                        alt="about_img_3"
                        className="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="mt-10 lg:mt-0 text-start">
                  <span className="block mb-4 text-lg font-semibold text-sky-500">
                    Why Choose Us
                  </span>
                  <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Welcome to PixelCode, your ultimate destination for seamless and efficient online coding. At PixelCode, we are passionate about providing developers and learners with a robust platform to write, edit, and execute their code effortlessly. Our platform is designed to help you focus on coding without any distractions, ensuring a smooth and productive coding experience.
                  </p>
                  <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  Our mission is to empower the coding community with tools that enhance productivity and creativity. With a user-friendly interface and powerful features, PixelCode caters to coders of all levels, helping them focus on innovation without technical interruptions.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-[#161616] border border-transparent rounded-md px-7 bg-sky-500 hover:bg-sky-600"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
