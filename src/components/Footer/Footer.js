import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="navigation">
      <div className="left">
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="center">
        <div className="email">9779540915aashik@gmail.com</div>
        <div className="mobile">+91 9779540915</div>
      </div>
      <div className="right">
        <div className="logo">logo</div>
      </div>
      </div>
    </footer>
  )
}

export default Footer;
