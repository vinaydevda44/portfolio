import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 sm:py-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 px-6">

    
        <a
          href="#top"
          className="flex flex-col items-center gap-1 group"
        >
          <span className="tracking-widest text-sm transition-transform group-hover:-translate-y-1">
            ↑↑↑
          </span>
          <p className="uppercase tracking-widest font-bold text-sm sm:text-base">
            Back to Top
          </p>
        </a>

        
        <div className="flex gap-5 sm:gap-6 flex-wrap justify-center">
          
          <SocialLink href="https://www.linkedin.com/in/vinay-devda-8a2091278/">
            <FaLinkedinIn />
          </SocialLink>

          <SocialLink href="https://github.com/vinaydevda44">
            <FaGithub />
          </SocialLink>

          <SocialLink href="mailto:vinaydevda986@gmail.com">
            <FaEnvelope />
          </SocialLink>

          <SocialLink href="https://x.com/vinnudevda44">
            <FaTwitter />
          </SocialLink>

        </div>

    
        <p className="text-xs sm:text-sm tracking-wide text-gray-400 text-center">
          © 2026 Vinay Devda. Learning, building, improving.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


const SocialLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-10 h-10
        sm:w-11 sm:h-11
        border border-white
        rounded-full
        flex items-center justify-center
        text-white
        transition-all
        duration-300
        hover:bg-white
        hover:text-black
      "
    >
      {children}
    </a>
  );
};
