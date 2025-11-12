import './App.css'
import Home from './components/Home/Home'
import NavBar from './components/Navbar/NavBar'
import ContextThemeProvider from './components/Store'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import GapFor from './components/Gap/Gap'
import Projects from './components/Projects/Projects'
import ContactBar from './components/ContactBar/ContactBar'



function App(){
  
  return (
    <>
    <ContextThemeProvider>
     <NavBar></NavBar>
     <Home></Home>
     <AboutMe></AboutMe>
     <GapFor></GapFor>
     <Skills></Skills>
     <Projects></Projects>
     <ContactBar></ContactBar>
     </ContextThemeProvider>

    </>
  )
}

export default App
