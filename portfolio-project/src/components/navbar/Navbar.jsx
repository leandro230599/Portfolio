import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
    
  return (
    <div className="navbar">
      <div className="navlinks">
        <div className="navlink-wrapper">
          <Link to="home" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
        </div>  
        <div className="navlink-wrapper">
          <Link to="about" spy={true} smooth={true} duration={500}>
            SOBRE MI
          </Link>
        </div>  
      </div>
    </div>
  )
}

export default Navbar