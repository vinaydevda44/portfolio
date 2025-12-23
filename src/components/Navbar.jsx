import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#0B0B0B] h-[66px] flex items-center fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">

        
        <h1 className="text-white font-montserrat font-bold text-xl tracking-wide">
          VD
        </h1>

        
        <div className="hidden md:flex items-center gap-10">
          <a className="nav-link" href="#aboutme">About me</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#skills">Skills</a>

          <a href="#contact" className="cta-btn">
            <span>Contact me</span>
          </a>
        </div>

        
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

    
      {open && (
        <div className="absolute top-[66px] left-0 w-full bg-[#0B0B0B] md:hidden">
          <div className="flex flex-col items-center gap-6 py-8">
            <a
              href="#aboutme"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              About me
            </a>
            <a
              href="#projects"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Skills
            </a>

            <a
              href="#contact"
              className="cta-btn"
              onClick={() => setOpen(false)}
            >
              <span>Contact me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
