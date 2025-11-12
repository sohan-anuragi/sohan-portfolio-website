import { contextTheme } from "../Store";
import { useContext, useEffect, useRef, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";

export default function ContactHeading() {
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
        className={`pt-[4rem] mb-[1rem] transition-all duration-1000 ease-out transform ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-[10rem] opacity-0"
        }`}
        ref={myRef}
      >
        <div
          className={`${
            themeToggle ? "text-white" : "text-black"
          } flex justify-center text-4xl font-bold`}
        >
          Get In Touch <FaRegMessage className="inline-block ml-4" />
        </div>

        <div
          className={`${
            themeToggle ? "text-white" : "text-black"
          } flex justify-center`}
        >
          <span className="w-[5rem] h-[3px] bg-gradient-to-r from-[#b40404] to-[#610202] mt-[1rem]"></span>
        </div>
      </div>
    </>
  );
}
