import React from 'react'
import "./GoogleKeep.css"

const Footer = () => {

    const year  = new Date().getFullYear();

  return (
    <div>
    <footer>
        <h3> Copyright &#169; {year} </h3>
      
    </footer>
      
    </div>
  )
}

export default Footer
