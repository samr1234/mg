import Layout from "./Layout"
import React from 'react'
import { Route, Routes } from "react-router-dom"
import Hero from "./Components/Hero"
import './index.css'
import About from "./Components/About"
import Services from "./Components/Services"
import Contact from "./Components/Contact"  
import Footer from "./Footer"
import StripCounter from "./Components/StripCounter"
import Reviews from "./Components/Reviews"
const App = () => {
  return (
    <div>
      {/* <Routes> */}
        {/* <Route path="/" element={<Layout/>}> */}

          {/* <Route path="/" element={<Hero/>}/> */}
          {/* <Route path="/" element={<About/>}/> */}
        <Layout/>
        <Hero/>
        <React.StrictMode>
        <About/>
        
        <StripCounter/>
        <Services/>
        <Reviews/>
        <Contact/>

        <Footer/>
        </React.StrictMode>


        {/* </Route> */}
      {/* </Routes> */}

    </div>
  )
}

export default App
