import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-4 mt-10">
    <p>&copy; 2025 Nishant Totar. All Rights Reserved.</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="https://www.linkedin.com/in/nstotar" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
      <a href="https://github.com/nstotar" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
      <a href="mailto:nstotar@gmail.com"><FaEnvelope size={30} /></a>
      <a href="https://wa.me/917899793325" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} />
</a>
    </div>
  </footer>
);

export default Footer;

