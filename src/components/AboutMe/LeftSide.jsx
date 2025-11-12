import  {contextTheme} from "../Store"
import { useContext, useEffect, useReducer, useRef, useState } from "react";

export default function LeftSide(){

    const {themeToggle} = useContext(contextTheme)
    
    const myref = useRef(null)
    const [visible,setVisible] = useState(false)
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]

            if(entry.isIntersecting|| window.innerWidth < 868){
                setVisible(true)
            }
        })
           observer.observe(myref.current)
    })


    return(
        <>
         <div className={`w-[90%] md:w-[50%] ${themeToggle? 'text-white':'text-black'} leading-7 font-[500] 
          opacity-0 -translate-x-[20rem] transition-all duration-1200 ${visible? 'opacity-100 translate-x-[0rem]': 'opacity-0 -translate-x-[40rem]'} `}
          ref={myref}
         >
   
             <p className={`mt-[3rem] pr-[2rem] pl-[1rem]`}>
                I'm a passionate Frontend Developer skilled in HTML, CSS, JavaScript, Tailwind CSS, and React. I love creating responsive, user-friendly, and visually appealing websites. I'm always learning new technologies to grow and become a full-stack developer.
             </p>

             <div className={`mt-[2rem] bg-gradient-to-r from-[#780505] to-[#280101] rounded-2xl p-[1rem] pl-[2rem] text-[1.1rem] ${themeToggle? 'text-white':'text-white '}`}>

                const Davloper = {"{"} <br/> <br/> name: 'Sohan Anuragi',<br/>
                Role: 'Front End Davloper',<br/>
                Passion: 'Passionate about building modern, responsive, and user-friendly web apps.' <br/> <br/>{'}'}

             </div>

            </div>
        </>
    )
}