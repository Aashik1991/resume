import React from 'react'
import "./Navbar.css";
import logo from "../../app-logo.png";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="left">
        <div className="logo">
          <img src={logo} alt="App logo" />
        </div>
      </div>
      <div className="right">
        <div className="menu-bar">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
