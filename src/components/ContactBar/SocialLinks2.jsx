import { BsInstagram } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { contextTheme } from "../Store";
import { useContext } from "react";
import { SiWhatsapp } from "react-icons/si";

export default function SocialLinks2(){

    const {themeToggle} = useContext(contextTheme)

    return (
        <>
        <div className="mt-[1.9rem] flex flex-row items-center   pl-1 p-1 ">

           <span className=" text-[1.3rem] "><a href="#" className={ `transition-all duration-300 ease-in ${themeToggle ? 'text-white' : 'text-black'} hover:text-[#ff3030] text-[1.3rem]`}><BsInstagram /></a></span>

            <span className="ml-[1.3rem] text-[1.3rem] "><a href="#" className={ `transition-all duration-300 ease-in ${themeToggle ? 'text-white' : 'text-black'} hover:text-[black] text-[1.3rem]`}><SiGithub /></a></span>

            <span className="ml-[1.3rem] text-[1.3rem] "><a href="#" className={ `transition-all duration-300 ease-in ${themeToggle ? 'text-white' : 'text-black'} hover:text-[#006eff] text-[1.3rem]`}><FaLinkedin /></a></span>

            <span className=" ml-[1rem] text-[1.3rem] border-r-[3px] border-[red] pr-[1rem] "><a href="#" className={ `transition-all duration-300 ease-in ${themeToggle ? 'text-white' : 'text-black'} hover:text-[#0be55b] text-[1.3rem] `}><SiWhatsapp /></a></span>

        </div>
        </>
    )
}