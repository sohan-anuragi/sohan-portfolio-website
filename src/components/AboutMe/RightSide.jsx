import { contextTheme } from "../Store";
import { useContext, useEffect, useRef, useState } from "react";
import AboutImg from "./AboutMeImg/dp.jpg";
import { FaMobileScreenButton } from "react-icons/fa6";

export default function RightSide() {
  const { themeToggle } = useContext(contextTheme);
  const myref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting || window.innerWidth < 768) {
          setVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    if (myref.current) observer.observe(myref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className={`w-[70%] md:w-[40%] md:ml-[2rem] mt-[3rem] flex justify-center relative
        opacity-0 -translate-x-[20rem] transition-all duration-1200 ${
          visible
            ? "opacity-100 translate-x-[0rem]"
            : "opacity-0 -translate-x-[40rem]"
        }`}
        ref={myref}
      >
        <div
          className={`z-100 text-[white] flex justify-center items-center w-[9rem] h-[2.5rem]
          bg-gradient-to-r from-[#780505] to-[#280101] absolute left-[6rem] top-[0rem]
          mt-[-1rem] transform -rotate-15 transition-all duration-150 delay-[2050ms]
          ${
            visible
              ? "opacity-100 -translate-y-[0rem]"
              : "opacity-0 -translate-y-[10rem]"
          }`}
        >
          <span className="text-[#ffea00] text-[1.1rem] mr-[0.5rem]">
            <FaMobileScreenButton />
          </span>
          Responsive
        </div>

        <div
          className={`p-[1rem] pb-[3rem] md:ml-[4rem] md:w-[80%] ${
            themeToggle
              ? "shadow-lg shadow-[#000000]"
              : "shadow-lg shadow-gray-400"
          } rounded-2xl`}
        >
          <img
            src={AboutImg}
            className={`z-0 rounded-2xl opacity-0 transition-all duration-800 delay-[1000ms] ${
              visible ? "opacity-100 translate-x-[0rem]" : "translate-x-[20rem]"
            }`}
            alt="About"
          />
        </div>

        <div
          className={`text-[white] text-[0.8rem] w-[9rem] h-[2.5rem] flex justify-center items-center
          bg-gradient-to-r from-[#780505] to-[#280101] absolute bottom-[0rem] mb-[-1rem] right-[2rem]
          transform rotate-10 transition-all duration-150 delay-[2350ms] ${
            visible
              ? "opacity-100 translate-y-[0rem]"
              : "opacity-0 translate-y-[10rem]"
          }`}
        >
          <span className="text-[#ffea00] text-[1.1rem] mr-[0.5rem]">{`</>`}</span>
          Clean Code
        </div>
      </div>
    </>
  );
}
