import  {contextTheme} from "../Store"
import { useContext } from "react";
import {  useEffect, useRef, useState } from "react";

export default function ProjectsHeading(){

    const {themeToggle} = useContext(contextTheme);

    const myRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0]
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

    return(
        <>
        <div className={`ANIMATION--> transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[10rem] opacity-0'}`}
        ref={myRef}>

        <div className={`${themeToggle? 'text-white':'text-black'} flex justify-center text-4xl font-bold  `}
        >Projects</div>

          <div className={`${themeToggle? 'text-white':'text-black'} flex justify-center `}><span className="w-[5rem] h-[3px] bg-gradient-to-r from-[#b40404] to-[#610202] mt-[1rem]"></span></div>

          <div className={`flex justify-center`}>
          <p className={`${themeToggle? 'text-white':'text-black'}  mt-[1rem] text-center`}>Here are some of my featured projects that highlight my creativity, coding skills, <br/> and attention to detail — each built with modern tools and clean design.</p>
          </div>
          </div>
        </>
    )
}