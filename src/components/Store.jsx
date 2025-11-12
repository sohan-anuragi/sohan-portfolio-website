import { Children, createContext } from "react";
import { useState } from "react";

export const contextTheme = createContext()

export default function ContextThemeProvider({children}){

    const [themeToggle,setToggle] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false)

    const handleToggle = () => {
        if(themeToggle === false){
            setToggle(true)
        }
        else if( themeToggle === true){
            setToggle(false)
        }
    }

    const handleMenuToggle = () => {
        if(menuToggle === false){
            setMenuToggle(true)
        }
        else if( menuToggle === true){
            setMenuToggle(false)
        }
    }



    return(
        <>
        <contextTheme.Provider value={{
            themeToggle,handleToggle,menuToggle,handleMenuToggle
        }}>
            {children}
        </contextTheme.Provider>
        </>
    )
}