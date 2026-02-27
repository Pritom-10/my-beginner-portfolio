import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import './assets/css/index.css'
import Services from "./Services"
import MyWork from "./MyWork"
import Contact from "./Contact"
import Footer from "./Footer"
const App=()=>
{
    return(
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            <MyWork/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default App