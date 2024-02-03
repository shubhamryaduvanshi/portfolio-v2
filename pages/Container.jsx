import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Bubbles from "../components/Bubbles";
import ScrollSpy from "react-ui-scrollspy";

const Container = () => {
  return (
    <div className="font-poppins relative scroll-smooth bg-white dark:bg-slate-800">
      <div className="fixed -z-20">
        {" "}
        <Bubbles />{" "}
      </div>
      <Header />
      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </ScrollSpy>
    </div>
  );
};

export default Container;
