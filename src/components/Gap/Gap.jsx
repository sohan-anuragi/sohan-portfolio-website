import { useContext } from "react"
import { contextTheme } from "../Store"

export default function GapFor(){

    const {themeToggle,menuToggle} = useContext(contextTheme)

    return(
        <>
        <div className={`${themeToggle ? 'bg-[#1c1c1b]' : ''} h-[3rem]`}></div>
        </>
    )
}