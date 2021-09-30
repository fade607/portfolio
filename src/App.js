import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/Skills" component={Skills} />
      </Router>
    </div>
  );
}

export default App;
