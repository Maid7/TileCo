import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
// components
import ResponsiveNavbar from "./components/Navbar"
import Footer from "./components/Footer"
// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Images from "./pages/Images"


function App() {

  return (
    <BrowserRouter>
    <ResponsiveNavbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="images" element={<Images/>}/>  

     
    </Routes> 
    
       <Footer/>

    </BrowserRouter>
  )
}

export default App