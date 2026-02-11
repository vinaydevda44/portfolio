import React from "react";
import Navbar from "../components/Navbar";
import Aboutme from "../components/Aboutme";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />

      <section className="relative min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[#E5E5E5] clip-left z-10 hidden md:flex items-center">
          <div className="pl-20 max-w-xl">
            <p className="text-lg font-medium text-black mb-3">Hi, I am</p>

            <h1 className="text-5xl font-extrabold text-black leading-tight">
              Vinay Devda
            </h1>

            <p className="mt-2 text-gray-500 font-semibold tracking-wide">
              MERN Stack Developer
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="/web_Resume.pdf"
                download
                className="font-montserrat font-semibold tracking-widest text-black border-b-2 border-black pb-1"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-20 flex md:hidden items-center justify-center min-h-screen bg-[#E5E5E5] px-6">
          <div className="text-center max-w-md">
            <p className="text-base font-medium text-black mb-2">Hi, I am</p>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-black leading-tight">
              Vinay Devda
            </h1>

            <p className="mt-2 text-gray-600 font-semibold tracking-wide">
              MERN Stack Developer
            </p>

            <div className="flex justify-center mt-6">
              <a
                href="/web_Resume.pdf"
                download
                className="font-montserrat font-semibold tracking-widest text-black border-b-2 border-black pb-1"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>
      </section>
      <Aboutme />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
