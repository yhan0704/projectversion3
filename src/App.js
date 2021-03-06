import React, { useState, useEffect } from "react";
import About from "./Components/About";
import "./App.css";
import Blog from "./Components/Blog";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import ScrollTopArrow from "./Components/ScrollTopArrow";
import Footer from "./Components/Footer";
import Icons from "./Components/Icons";
import Contact from "./Components/Contact";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds < 100) {
        setSeconds((seconds) => seconds + 1);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [seconds]);
  return (
    <div className="container">
      <BrowserRouter>
        <Main seconds={seconds} />
        <Icons />
        <About />
        <Projects />
        <Blog />
        <ScrollTopArrow />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
