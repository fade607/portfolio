import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
function Home() {
  return (
    <div id="home">
      <Header />
      <About />
      <Skills />
      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
