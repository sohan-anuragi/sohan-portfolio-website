import { useContext } from "react";
import { FaAffiliatetheme } from "react-icons/fa6";
import { GoSun } from "react-icons/go";
import  {contextTheme} from "../Store"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export default function ThemeBtn(){

    const {themeToggle,handleToggle,menuToggle,handleMenuToggle} = useContext(contextTheme)
  

    return(
        <>
        <div className="flex absolute right-8 md:right-20 md:static md:top-auto md:right-auto">

        <button onClick={handleToggle} className={ ` p-1 border-[1px] rounded-[5px] text-[#000000] border-[#16161670] pl-4 pr-4 text-2xl cursor-pointer  ${themeToggle? 'text-[yellow] border-[white]':'text-[black]'}`} >{themeToggle? <GoSun/>:<FaAffiliatetheme/>}</button>

        <span className={`text-3xl md:hidden   ${themeToggle? 'text-[white] border-[white]':'text-[black]'} pl-2 cursor-pointer`} onClick={handleMenuToggle}>{menuToggle? <RxCross2 />:<GiHamburgerMenu />}</span>
        </div>
        </>

    )
}