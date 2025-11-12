import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import SocialLinks2 from "./SocialLinks2";
import { contextTheme } from "../Store";
import { useContext } from "react";


export default function ContactLeft() {
  const { themeToggle } = useContext(contextTheme);

  return (
    <>
      <div className={` ${themeToggle ? "text-white" : "text-[#000000c7]"} flex flex-col justify-center p-[2rem] pl-[2rem] md:pl-[5rem] font-serif md:w-[40%]  `}>
        <div className="font-serif text-2xl font-bold">Contact Me</div>

        <div className="mt-[1rem] flex items-center  text-[1.1rem] font-md">
          <FaEnvelope className="mr-2 text-[1.4rem]" /> sohananuragi81@gmail.com
        </div>

        <div className="mt-[1rem] flex items-center  text-[1.1rem] font-md">
          <FaPhone className="mr-2 text-[1.4rem]" /> +91 764 827 068
        </div>

        <div className="mt-[1rem] flex items-center text-[1.1rem] font-md">
          <FaLocationDot className="mr-2 text-[1.4rem]" /> Chhatarpur, Madhya Pradesh, India
        </div>

        <div className="mt-[1rem] flex items-center  text-[1.1rem] font-md">
          <MdWatchLater className="mr-2 text-[1.4rem]" /> Mon - Fri, 9am - 6pm
        </div>

        <SocialLinks2 />
      </div>
    </>
  );
}
