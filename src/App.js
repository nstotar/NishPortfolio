import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
// import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import  ProfilePic from "./assets/NishProfile.jpg";
import Header from "./components/Header";
import Education from "./components/Education";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/contact";
import Experience from "./components/Experience";
const Home = () => (
  <div className="text-center p-10">
    <img src={ProfilePic} alt="Profile" className="w-40 h-40 rounded-full mx-auto" />
    <h2 className="text-3xl font-bold mt-4">Welcome to My Portfolio</h2>
    <p className="text-lg mt-2">Aspiring Software Developer | React & Django Enthusiast</p>

    
<section className="p-4">
<div className="bg-gray-100 p-4 rounded-lg">
<Experience />
</div>
</section>
   
  </div>
);

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;