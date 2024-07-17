import React, {useContext} from 'react'
import "./NavSection.css"
import { Link } from 'react-router-dom';
import { MyContext } from '../../context/context';

const NavSection = () => {
    const {menuToggle, setMenuToggle} = useContext(MyContext)
    const handleClick = ()=>{
        setMenuToggle(!menuToggle)
    }
    return (
        <section className='nav-section'>
            <div className="cancel"><label htmlFor="toggle"><i className="fa-solid fa-xmark" onClick={handleClick}></i></label></div>
            <aside className='aside first-aside'>
                <ul>
                    <Link to="/"><li onClick={handleClick}>Home</li></Link>
                    <Link to="/projects"><li onClick={handleClick}>Projects</li></Link>
                    <Link to="/about"><li onClick={handleClick}>About</li></Link>
                    <Link to="/contact"><li onClick={handleClick}>Contact</li></Link>
                </ul>
            </aside>
            <aside className='aside second-aside'>
                <div>
                    <div className="text email">9779540915aashik@gmail.com</div>
                    <div className="text phone">+91-9779540915</div>
                    <div className="social">
                        <Link to=""><i className="fa-brands fa-instagram"></i></Link>
                        <Link to=""><i className="fa-brands fa-linkedin"></i></Link>
                        <Link to=""><i className="fa-brands fa-square-facebook"></i></Link>
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default NavSection;
