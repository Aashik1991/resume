import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"
import logos from '../../logos';
import { MyContext } from '../../context/context';

const Footer = () => {
  const {menuToggle, setMenuToggle}= useContext(MyContext)
  function handleClick(){
    if(menuToggle)
    setMenuToggle(false)
  }
  return (
    <footer className='footer'>
      <div className="navigation">
        <div className="left">
          <Link to="/projects" onClick={handleClick}>Projects</Link>
          <Link to="/about" onClick={handleClick}>About</Link>
          <Link to="/contact" onClick={handleClick}>Contact</Link>
        </div>
        <div className="center">
          <div className="email">9779540915aashik@gmail.com</div>
          <div className="mobile">+91 9779540915</div>
        </div>
        <div className="right">
          <div className="logo">
            <Link to="/" onClick={handleClick}>
              <img src={logos.appLogo} alt="App-logo" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
