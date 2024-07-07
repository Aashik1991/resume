import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="left">
          <div className="logo"></div>
        </div>
        <div className="right">
          <div className="menu-bar"></div>
        </div>
    </nav>
  )
}

export default Navbar;
