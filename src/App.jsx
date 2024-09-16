import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import toast, { Toaster } from "react-hot-toast";
import Skills from "./component/Skills";
import Portfolio from "./component/Portfolio";

function App() {
  return (
    <>
      <div className="bg-slate-900">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
