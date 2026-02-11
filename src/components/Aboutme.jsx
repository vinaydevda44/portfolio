import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBrain,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const Aboutme = () => {
  return (
    <section className="bg-white py-16 sm:py-20" id="aboutme">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 sm:gap-14 px-6">
        
        <div className="border-4 border-black h-[64px] sm:h-[74px] w-[280px] sm:w-[404px] flex items-center justify-center">
          <h1 className="font-montserrat font-bold text-xl sm:text-2xl tracking-wide">
            About Me
          </h1>
        </div>

        <p className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-gray-500 text-center">
          MERN Stack Developer · Full-Stack
        </p>

        <p className="max-w-3xl text-center text-gray-700 font-montserrat text-base sm:text-lg leading-relaxed">
          I am a{" "}
          <span className="font-semibold text-black">MERN Stack & NextJs Developer </span>{" "}
          with hands-on experience in building{" "}
          <span className="font-semibold text-black">
            real-time web applications
          </span>
          . I focus on{" "}
          <span className="font-semibold text-black">clean code</span>,{" "}
          <span className="font-semibold text-black">
            scalable architecture
          </span>
          , performance, and{" "}
          <span className="font-semibold text-black">responsive design</span>.
        </p>

        <p className="max-w-3xl text-center text-gray-700 font-montserrat text-sm sm:text-base leading-relaxed">
          I enjoy working across the full stack — from designing intuitive user
          interfaces to developing robust backend systems and APIs. I like
          breaking down complex problems into simple, maintainable solutions and
          continuously improving application performance and user experience.
        </p>

        <p className="max-w-3xl text-center text-gray-700 font-montserrat text-sm sm:text-base leading-relaxed">
          I have built projects ranging from ed-tech platforms and e-commerce
          systems to productivity tools, integrating features like
          authentication, cloud storage, payment gateways, and third-party APIs.
          I am always eager to learn new technologies and apply them to
          real-world projects.
        </p>

        
        <div
          className="border-4 border-black h-[64px] sm:h-[74px] w-[280px] sm:w-[404px] flex items-center justify-center"
          id="skills"
        >
          <h1 className="font-montserrat font-bold text-xl sm:text-2xl tracking-wide">
            Skills
          </h1>
        </div>

        
        <div className="w-full">
          <p className="mb-6 text-center font-montserrat font-semibold tracking-wide">
            Using Now
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 sm:gap-6 justify-items-center">
            <Skill icon={<FaHtml5 />} label="HTML5" color="#E34F26" />
            <Skill icon={<FaCss3Alt />} label="CSS3" color="#1572B6" />
            <Skill icon={<FaJs />} label="JavaScript" color="#F7DF1E" />
            <Skill icon={<FaReact />} label="React" color="#61DAFB" />
            <Skill icon={<FaNodeJs />} label="Node.js" color="#339933" />
            <Skill icon={<SiExpress />} label="Express" color="#000000" />
            <Skill icon={<SiMongodb />} label="MongoDB" color="#47A248" />
            <Skill
              icon={<SiTailwindcss />}
              label="Tailwind CSS"
              color="#06B6D4"
            />
            <Skill icon={<SiGithub />} label="GitHub" color="#181717" />
            <Skill icon={<SiPostman />} label="Postman" color="#FF6C37" />
          </div>
        </div>


        <div className="w-full">
          <p className="mb-6 text-center font-montserrat font-semibold tracking-wide">
            Learning
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
            <Skill icon={<SiTypescript />} label="TypeScript" color="#3178C6" />
            <Skill icon={<SiNextdotjs />} label="Next.js" color="#000000" />
            <Skill icon={<FaPython />} label="Python" color="#3776AB" />
            <Skill icon={<FaBrain />} label="AI" color="#6B21A8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;


const Skill = ({ icon, label, color }) => {
  return (
    <div className="w-[90px] sm:w-[110px] h-[110px] sm:h-[130px] rounded-xl flex flex-col items-center justify-center gap-2 bg-white">
      <div className="text-[30px] sm:text-[38px]" style={{ color }}>
        {icon}
      </div>
      <span className="font-montserrat font-semibold text-xs sm:text-sm text-center">
        {label}
      </span>
    </div>
  );
};
