import React from 'react'
import "./GoogleKeep.css"
import logo from "./Image/logo.png"

const Header = () => {
  return (
    <div className='header' >
    <img src= {logo} alt="logo"  className='img1' width ="40" height="40" />
    <h1>Google Notes</h1>
    
      
    </div>
  )
}

export default Header
