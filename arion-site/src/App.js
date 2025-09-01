import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Vraha from "./components/Vraha";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Vraha />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
