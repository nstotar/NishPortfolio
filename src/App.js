
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./components/Header";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/contact";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import  ProfilePic from "./assets/NishProfile.jpg";

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="inline-block p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
      >
        <img 
          src={ProfilePic} 
          alt="Profile" 
          className="w-40 h-40 rounded-full border-4 border-gray-900"
        />
      </motion.div>
      
      <motion.h2 
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mt-6"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
      >
        Nishant Totar
      </motion.h2>
      
      <p className="text-xl text-gray-300 mt-4">
        Full Stack Developer | React & Django Specialist
      </p>

      <motion.div 
        className="mt-12 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700">
          <Experience />
        </div>
      </motion.div>

      <div className="flex justify-center gap-6 mt-12">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://github.com/nstotar"
          className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
        >
          <FaGithub className="text-2xl text-gray-100" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://linkedin.com/in/nstotar"
          className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
        >
          <FaLinkedin className="text-2xl text-gray-100" />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <motion.div
      key={location.key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Routes location={location}>
        <Route path="/NishPortfolio" element={<Home />} />
        <Route path="/" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </motion.div>
  );
};

const App = () => (
  <Router>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      <AnimatedRoutes />
      <Footer />
    </div>
  </Router>
);

export default App;