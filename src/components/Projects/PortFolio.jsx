import { contextTheme } from "../Store";
import { useContext, useEffect, useRef, useState } from "react";
import PortFolioImg from "./ProjectsImg/PortFolio.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function PortFolio() {
  const { themeToggle } = useContext(contextTheme);

  const myRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (myRef.current) {
      observer.observe(myRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [myRef]);

  return (
    <>
      <div
        ref={myRef}
        className={`mt-[1rem] max-w-[22rem] shadow-lg ${
          themeToggle
            ? "shadow-sm shadow-[#9b0505] bg-[#150505] border-[1px] border-[red]"
            : "shadow-gray-400 hover:bg-[#fc9191]"
        } p-[1.5rem] rounded-2xl transition transform hover:-translate-y-1 hover:scale-102 duration-300 hover:shadow-lg hover:shadow-[red] ml-[1rem] transition-all duration-1000 ease-out ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "sm:-translate-x-[30rem] -translate-x-[20rem] opacity-0"
        }`}
      >
        <div className="rounded-2xl overflow-hidden">
          <img src={PortFolioImg} alt="Portfolio" />
        </div>

        <div>
          <h2
            className={`${
              themeToggle ? "text-[white]" : "text-[#6a0303]"
            } text-3xl font-[700] mt-[2rem] mb-[1rem]`}
          >
            Portfolio Website
          </h2>

          <p
            className={`${
              themeToggle ? "text-[white]" : "text-[black]"
            } text-[1rem] font-[400]`}
          >
            Responsive portfolio website built with React and Tailwind CSS,
            featuring modern design and smooth animations.
          </p>

          <div className="p-[0.3rem] mt-[1rem] mb-[1rem]">
            <span
              className={`${
                themeToggle ? "text-[white] border-[0.2px] border-[#ff00004d] " : "text-[white] bg-[#61a7f8]"
              } ml-[0.5rem] p-[0.4rem] pl-[1rem] pr-[1rem] rounded-[10px] `}
            >
              React
            </span>
            <span
              className={`${
                themeToggle ? "text-[white] border-[0.2px] border-[#ff00004d] " : "text-[white] bg-[#61a7f8]"
              } ml-[0.5rem] p-[0.4rem] pl-[1rem] pr-[1rem] rounded-[10px] `}
            >
              Tailwind CSS
            </span>
          </div>

          <div className="mt-[1rem] p-[0.3rem] pt-[0.5rem] flex">
            <a
              href="#"
              className={`${
                themeToggle ? "text-[white] bg-[red]" : "text-[white] bg-[red]"
              } hover:text-[black] hover:bg-gradient-to-r from-gray-100 to-gray-300 p-[0.4rem] rounded-[17px] pl-[1rem] pr-[1rem] flex items-center w-[8rem] justify-between`}
            >
              <span>
                <FaExternalLinkAlt />
              </span>
              Live Demo
            </a>

            <a
              href="#"
              className={`${
                themeToggle ? "text-[white] bg-[red]" : "text-[white] bg-[red]"
              } hover:text-[black] hover:bg-gradient-to-r from-gray-100 to-gray-300 p-[0.4rem] rounded-[17px] pl-[1rem] pr-[1rem] flex items-center w-[6.5rem] justify-between ml-[0.5rem]`}
            >
              <span>
                <IoLogoGithub />
              </span>
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
