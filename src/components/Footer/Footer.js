import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"
import logos from '../../logos';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="navigation">
        <div className="left">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="center">
          <div className="email">9779540915aashik@gmail.com</div>
          <div className="mobile">+91 9779540915</div>
        </div>
        <div className="right">
          <div className="logo">
            <Link to="/">
              <img src={logos.appLogo} alt="App-logo" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
