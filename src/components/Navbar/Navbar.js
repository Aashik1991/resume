import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logos from '../../logos';
import { MyContext } from '../../context/context';

const Navbar = () => {
  const {menuToggle, setMenuToggle}= useContext(MyContext);

  function handleClick(){
    setMenuToggle(!menuToggle)
  }
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
          <label htmlFor="toggle"><i className="fa-solid fa-bars" onClick={handleClick}></i></label>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
