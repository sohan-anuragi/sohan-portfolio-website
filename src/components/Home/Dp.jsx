import dp from './HomeImg/dp4.jpg'
import dp2 from './HomeImg/dp6.png'
import { useContext } from "react"
import  {contextTheme} from "../Store"
import styles from './Home.module.css'
import { useEffect, useState, useRef } from 'react'

export default function Dp(){

     const {themeToggle} = useContext(contextTheme)

      const [visible,setVisible] = useState(false)
         const ref = useRef(null)
     
         useEffect(() => {
           const observer = new IntersectionObserver((entries) => {
             const entry = entries[0]
             if(entry.isIntersecting){
               setVisible(true)
               
             }
           })
           observer.observe(ref.current)
         })

    return (
        <>
        <div className={`${styles['img-container']} ${visible? styles['animate2']:'' }`}
         ref={ref}
        >
            <img src={themeToggle? dp2:dp} alt='sohan' className={`h-[80hv] ${styles['img']}`}></img>
        </div>
        </>
    )
}