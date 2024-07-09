import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logos from '../../logos';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="left">
        <div className="logo">
          <Link to="/">
            <img src={logos.appLogo} alt="App logo" />
          </Link>
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
