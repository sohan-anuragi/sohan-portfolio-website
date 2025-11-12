import  {contextTheme} from "../Store"
import { useContext } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import AboutHeading from "./AboutHeading";

export default function AboutMe(){

    const {themeToggle} = useContext(contextTheme)

    return(
        <>
        <div id="About"  className={`${themeToggle? ' bg-[#171616]':'bg-gradient-to-r from-pink-50 to-[#f3f9f3] '} p-[1rem] pb-[3rem] md:pl-[4rem] md:pr-[4rem]  `}> 

          <AboutHeading></AboutHeading>
          <div className={`flex mt-[2rem] flex-col items-center  md:flex md:flex-row`}>
           <LeftSide></LeftSide>
           <RightSide></RightSide>
          </div> 
          
        </div>

        </>
    )
}