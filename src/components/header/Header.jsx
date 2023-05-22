import React from 'react';
import { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Toggle from '../lightMode/LightMode';
import './header.css';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [navBar, setNavbar]=useState(false)

    const handleChange=()=>{
      if(window.scrollY>=80){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }
    
    useEffect(() => {
      handleChange()
      window.addEventListener("scroll", handleChange)
    })

    const handleClick = () => setClick(!click);
    return (
      <header>
        <nav className={navBar?"navbar scroll":"navbar "}>
          <div className="inner">
            <Link smooth to="#home" className="logo">
             <span>P</span>ortfolio
            </Link>
            <Toggle />
            <ul className={click ? "nav-menu active" : "nav-menu"}  onClick={handleClick}>
              <li>
                <Link smooth
                  to="#home"
                  className="links"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link smooth
                  to="#about"
                  className="links"
                >
                  About
                </Link>
              </li>
              <li>
                <Link smooth
                  to="#skills"
                  className="links"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link smooth
                  to="#portfolio"
                  className="links"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link smooth
                  to="#contact"
                  className="links"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
            <div className="icon " onClick={handleClick}>
              {click ? (<i className="fa-solid fa-circle-xmark" ></i>):
              (<i className="fa-solid fa-bars-staggered"></i>)}
            </div>
          </div>
        </nav>
      </ header>
    );
  }

export default Navbar