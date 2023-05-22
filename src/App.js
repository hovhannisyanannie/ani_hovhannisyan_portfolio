import { BrowserRouter as Router  } from 'react-router-dom';
import Navbar from './components/header/Header';
import Skills from './components/skills/Skills';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Portfolio from './components/portfolio/Portfolio';




function App() {

  const theme = useContext(ThemeContext);
  const lightMode = theme.state.lightMode;
  return (

<div
      className="App"
      style={{
        background: lightMode  ? "#e0e7ef" : "#00171f",
        color: lightMode ? "black" : "white",
      }}
    >
          <Router>
            <Navbar />
            <Home  />
            <About />
            <Skills />  
            <Portfolio />      
            <Contact />
            <Footer />
         
          </Router>  

        </div>
  );
}

export default App;
