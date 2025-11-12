import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import ThemeBtn from "./ThemeBtn";
import  {contextTheme} from "../Store"
import { useContext } from "react";


export default function NavBar(){  

    const {themeToggle} = useContext(contextTheme)

    return (
        <>
        <div className={`sticky top-0 z-500  p-3 pl-5 pr-7 shadow-md   flex justify-between items-center  RESPOINSIVE--> lg:pl-30 lg:pr-30 ${themeToggle ? 'bg-[#0f0e0e] border-b border-b-[0.5px] border-[#ffffff54]  ' : 'shadow-gray-250 bg-[white]'}`}>
            <Logo></Logo>
            <NavLinks></NavLinks>
            {/* <SocialLinks></SocialLinks> */}
            <ThemeBtn></ThemeBtn>
        </div>
        </>
    )
}