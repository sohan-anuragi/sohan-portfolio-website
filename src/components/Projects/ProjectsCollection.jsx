import  {contextTheme} from "../Store"
import { useContext } from "react";
import PortFolio from "./PortFolio";
import Davlopment from "./Davlopment";
import ECommerce from "./E-Commerce";

export default function ProjectsCollection() {

    const {themeToggle} = useContext(contextTheme);

    return (
            //  CONTAINER OF PROJECTS COLLECTION
            <div className={` ${themeToggle? 'bg-[#171616]':'bg-gradient-to-r from-[#ffffff] to-[#eaeaea]'} mt-[2rem]   m-4 p-[2rem] pl-[4rem] pr-[4rem] flex flex-wrap justify-center `}>

              <PortFolio></PortFolio>
              <Davlopment></Davlopment>
              <ECommerce></ECommerce>

        </div>
    );
}