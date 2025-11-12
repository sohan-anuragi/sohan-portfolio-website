import { useContext } from "react"
import { contextTheme } from "../Store"

export default function Logo(){

    const {themeToggle} = useContext(contextTheme)

    return(
        <>
        <div>
            <span className="font-bold text-4xl text-[#00d5ff] ">s</span>
            <span className={`font-bold text-2xl ${themeToggle? 'text-white':'text-[black]'}`}>ohan</span>
        </div>
        </>
    )
}