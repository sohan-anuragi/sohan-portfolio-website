import { useContext } from "react";
import { contextTheme } from "../Store";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { LiaToolsSolid } from "react-icons/lia";
import { FaFolderOpen } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import  useSectionObserver from '../Navbar/ObserverFile';

export default function NavLinks() {

  const { themeToggle, menuToggle } = useContext(contextTheme);

  const sectionIds = ["Home", "About", "Skills", "Projects", "ContactBar"];
  const activeSection = useSectionObserver(sectionIds);
 

  return (
    <>
      <div
        className={`fixed top-1 right-0 w-[15rem] h-[350px] ${
          themeToggle
            ? "text-white bg-[#201f1f]"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
        } md:static md:top-auto md:right-auto md:left-auto md:bottom-auto md:h-auto md:w-auto md:rounded-4xl ${
          menuToggle
            ? "right-0 transition-all duration-500 ease-in-out"
            : "right-[-400px] transition-all duration-500 ease-in-out"
        }`}
      >
        <ul className="flex mt-20 flex-col md:flex-row md:ml-3 md:mt-0 md:items-center md:justify-center md:pl-6 md:pr-6 md:rounded-2xl">
          <li className="pl-15 mb-4 md:mb-0 md:pl-0 md:p-3 md:pl-6 md:pr-6">
            <a
              href="#Home"
              className={` flex w-[5.2rem] md:w-[auto] justify-center items-center font-medium text-[1.1rem]   pb-1 transition-all duration-200 ease-in
              hover:border-b-[0.15rem] hover:text-[#f40101] hover:border-[#ff0000]
              ${activeSection === "Home"? '  border-b-[0.15rem] text-[#f40101] border-[#ff0000]':'' }
              `}>
             <span className="md:hidden  mr-1 text-[1.2rem]"><AiFillHome /></span>
              <span>Home</span> 
            </a>
          </li>

          <li className="pl-15 mb-4 md:mb-0 md:pl-0 md:p-2 md:pl-6 md:pr-6">
            <a
              href="#About"
              className={` flex w-[5.2rem] md:w-[auto] justify-center items-center font-medium text-[1.1rem]   pb-1 transition-all duration-200 ease-in
              hover:border-b-[0.15rem] hover:text-[#f40101] hover:border-[#ff0000]
              ${activeSection === "About"? '  border-b-[0.15rem] text-[#f40101] border-[#ff0000]':'' }
              `}
            >
              <span className="md:hidden mr-1 text-[1.2rem]"><FaUserAlt /></span>
              <span>About</span>
            </a>
          </li>

          <li className="pl-15 mb-4 md:mb-0 md:pl-0 md:p-2 md:pl-6 md:pr-6">
            <a
              href="#Skills"
              className={` flex w-[5.2rem] md:w-[auto] justify-center items-center font-medium text-[1.1rem]   pb-1 transition-all duration-200 ease-in
              hover:border-b-[0.15rem] hover:text-[#f40101] hover:border-[#ff0000]
              ${activeSection === "Skills"? '  border-b-[0.15rem] text-[#f40101] border-[#ff0000]':'' }
              `}
            >
              <span className="md:hidden mr-2 text-[1.2rem]"><LiaToolsSolid /></span>
              <span>Skills</span>
            </a>
          </li>

          <li className="pl-15 mb-4 md:mb-0 md:pl-0 md:p-2 md:pl-6 md:pr-6">
            <a
              href="#Projects"
              className={` flex w-[5.2rem] md:w-[auto] justify-center items-center font-medium text-[1.1rem]   pb-1 transition-all duration-200 ease-in
              hover:border-b-[0.15rem] hover:text-[#f40101] hover:border-[#ff0000]
              ${activeSection === "Projects"? '  border-b-[0.15rem] text-[#f40101] border-[#ff0000]':'' }
              `}
            >
              <span className="md:hidden mr-1 text-[1.2rem]"><FaFolderOpen /></span>
              <span>Projects</span>
            </a>
          </li>

          <li className="pl-15 mb-4 md:mb-0 md:pl-0 md:p-2 md:pl-6 md:pr-6">
            <a
              href="#ContactBar"
              className={` flex w-[5.2rem] md:w-[auto] justify-center items-center font-medium text-[1.1rem]   pb-1 transition-all duration-200 ease-in
              hover:border-b-[0.15rem] hover:text-[#f40101] hover:border-[#ff0000]
              ${activeSection === "ContactBar"? '  border-b-[0.15rem] text-[#f40101] border-[#ff0000]':'' }
              `}
            >
              <span className="md:hidden mr-1 text-[1.2rem]"><FaPaperPlane /></span>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
