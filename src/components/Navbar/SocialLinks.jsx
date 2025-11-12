import { BsInstagram } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { contextTheme } from "../Store";
import { useContext } from "react";
import { SiWhatsapp } from "react-icons/si";

export default function SocialLinks(){

    const {themeToggle} = useContext(contextTheme)

    return (
        <>
        <div className=" flex flex-col justify-center items-center w-[2rem] h-[80vh] pl-1 p-1 ">

           <span className="mb-[1.3rem] text-[1.3rem] "><a href="//www.instagram.com/sohanrambhagatttt/" target="_blank" rel="noopener noreferrer" className={ `transition-all duration-300 ease-in ${themeToggle ? 'text-white' : 'text-black'} hover:text-[#ff3030] text-[1.3rem]`}><BsInstagram /></a></span>

            <span className="mb-[1.3rem] text-[1.3rem] "><a href="//github.com/sohan-anuragi" target="_blank" rel="noopener noreferrer" className={ `transition-all duration-300 ease-in ${themeToggle ? 'text-white' : 'text-black'} hover:text-[black] text-[1.3rem]`}><SiGithub /></a></span>

            <span className="mb-[1.3rem] text-[1.3rem] "><a href="//linkedin.com/in/sohan-anuragi-241305371" target="_blank" rel="noopener noreferrer" className={ `transition-all duration-300 ease-in ${themeToggle ? 'text-white' : 'text-black'} hover:text-[#006eff] text-[1.3rem]`}><FaLinkedin /></a></span>

            <span className="mb-[1.3rem] text-[1.3rem] border-b-[3px] border-[red] pb-[1rem] "><a href="//wa.me/917649827068" target="_blank" rel="noopener noreferrer" className={ `transition-all duration-300 ease-in ${themeToggle ? 'text-white' : 'text-black'} hover:text-[#0be55b] text-[1.3rem] `}><SiWhatsapp /></a></span>

        </div>
        </>
    )
}