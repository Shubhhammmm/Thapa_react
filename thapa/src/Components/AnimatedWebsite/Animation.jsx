import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route, } from 'react-router-dom'
import Home from './Home'
import About from "./About"
import Contact from "./Contact"
import Service from './Service'

const Animation = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/about" element={<About/>} />
   
    <Route path="/service" element={<Service/>} />
  
        
    </Routes> 

    </BrowserRouter>
  
    </>
  )
}

export default Animation
