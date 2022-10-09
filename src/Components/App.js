import React from "react";
import "./App.css";
import Home from "./Home";
import About from './About'
import Service from './Services'
import Contact from './Contact'
import Footer from './Footer'
import BackToTop from "./BackToTop";

function App() {
  return (
    <div className="App">
        <Home />
        <About />
        <Service />
        <Contact />
        <Footer />
        <BackToTop />
    </div>
  );
}

export default App;
