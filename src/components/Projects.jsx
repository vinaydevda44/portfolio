import React from "react";
import Studynotion from "../assets/studynotion.png";
import Store from "../assets/storeapp.png";
import Notesapp from "../assets/notesapp.png";
import Workify from "../assets/workify.png"

const Projects = () => {
  return (
    <section className="bg-white py-16 sm:py-20" id="projects">
      <div className="max-w-6xl mx-auto px-6">

        
        <div className="border-4 border-black h-[64px] sm:h-[74px] w-[280px] sm:w-[404px] flex items-center justify-center mx-auto mb-10 sm:mb-14">
          <h1 className="font-montserrat font-bold text-xl sm:text-2xl tracking-wide">
            Projects
          </h1>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

    
          <div className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <img
              src={Studynotion}
              alt="Studynotion project preview"
              className="w-full h-[180px] sm:h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="p-4 flex flex-col gap-3">
              <h2 className="font-montserrat font-bold text-base sm:text-lg">
                Studynotion
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                Studynotion is a full-stack ed-tech platform that allows instructors
                to create and manage courses with cloud storage and secure payments.
              </p>

              <div className="flex gap-4 text-sm font-semibold">
                <a
                  href="https://study-notion-lac-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-all group-hover:tracking-wide"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/vinaydevda44"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-all group-hover:tracking-wide"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          
          <div className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <img
              src={Store}
              alt="Store web app preview"
              className="w-full h-[180px] sm:h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="p-4 flex flex-col gap-3">
              <h2 className="font-montserrat font-bold text-base sm:text-lg">
                Store Web-App
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                A lightweight store web application with a clean UI and
                one-click WhatsApp ordering for fast communication.
              </p>

              <div className="flex gap-4 text-sm font-semibold">
                <a
                  href="https://store-frontend-ten-livid.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-all group-hover:tracking-wide"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/vinaydevda44"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-all group-hover:tracking-wide"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

    
          <div className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <img
              src={Notesapp}
              alt="Notes app preview"
              className="w-full h-[180px] sm:h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="p-4 flex flex-col gap-3">
              <h2 className="font-montserrat font-bold text-base sm:text-lg">
                NotesApp
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                A minimal notes application designed for quick copy-paste
                note taking with a focus on simplicity and speed.
              </p>

              <div className="flex gap-4 text-sm font-semibold">
                <a
                  href="https://noteapp-ten-sigma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-all group-hover:tracking-wide"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/vinaydevda44"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-all group-hover:tracking-wide"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          
          <div className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <img
              src={Workify}
              alt="Workify project preview"
              className="w-full h-[180px] sm:h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="p-4 flex flex-col gap-3">
              <h2 className="font-montserrat font-bold text-base sm:text-lg">
                Workify
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                Workify is a gig-based marketplace connecting service providers
                and users through a structured workflow. (In Progress)
              </p>

              <div className="flex gap-4 text-sm font-semibold">
                <span className="underline underline-offset-4">
                  In Progress
                </span>
                <a
                  href="https://github.com/vinaydevda44"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-all group-hover:tracking-wide"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
