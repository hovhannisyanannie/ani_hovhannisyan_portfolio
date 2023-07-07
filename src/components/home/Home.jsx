import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { Typewriter } from "react-simple-typewriter"
import './home.css';




const Home = () => {

  return (
    <div id="home">   
        <div className="container">
          <div className="inner">
          <div className="box">
              <div className="image">
              </div>
            </div>
            <div className="box">
                <h2> Hello, I'm <span> Ani Hovhannisyan </span></h2>
                <h3><span className="junior">I'm </span> <Typewriter
                  words={['a Junior Frontend developer', "looking for an internship in Junior Frontend position"]}
                  loop
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
                </h3>
                <div className="social">
                  <a href='https://www.facebook.com/eny.hovhannisyan'><i class="fa-brands fa-square-facebook"></i></a>
                  <a href="https://www.linkedin.com/in/annie-hovhannisyan-b6697a25b/"><i class="fa-brands fa-linkedin"></i></a>
                  <a href='https://github.com/hovhannisyanannie'><i class="fa-brands fa-square-github"></i></a>
                  
                  <ul>
                  <li>
                <Link smooth
                  to="#about"
                  className="links btn"
                >
                About me <i class="fa-solid fa-circle-down"></i> 
                </Link>
              </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home