import SkillsHeading from "./SkillsHeading";
import { useContext } from "react"
import { contextTheme } from "../Store"
import SkillsCollection from "./SkillsCollection";


export default function(){

    const {themeToggle,menuToggle} = useContext(contextTheme)

    return(
        <>
    
        <div id="Skills" className={` ${themeToggle ? 'bg-[#1c1c1b]' : ''} ${themeToggle ? 'text-[white]' : 'bg-gradient-to-r bg-gradient-to-r from-blue-50 to-pink-50 '}  pt-[2rem]`}>
        <SkillsHeading></SkillsHeading>
        <SkillsCollection></SkillsCollection>
        </div>
       
        </>
    )
}