import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaRocket } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer 
      className="relative bg-gray-950 border-t border-gray-800 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Social Links - Single Line */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {[
            { icon: <FaLinkedin className="text-xl sm:text-2xl text-white hover:text-purple-400"/>, link: 'https://linkedin.com/in/nstotar' },
            { icon: <FaGithub className="text-xl sm:text-2xl text-white hover:text-purple-400"/>, link: 'https://github.com/nstotar' },
            { icon: <FaEnvelope className="text-xl sm:text-2xl text-white hover:text-purple-400"/>, link: 'mailto:nstotar@gmail.com' },
            { icon: <FaWhatsapp className="text-xl sm:text-2xl text-white hover:text-purple-400"/>, link: 'https://wa.me/917899793325' }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-gray-800 hover:bg-gray-800 transition-colors border border-gray-800"
              whileHover={{ scale: 1.1 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright & Status */}
        <div className="text-center space-y-3">
        <motion.div
            className="inline-block  text-xs md:text-sm bg-gray-800 px-4 py-2 md:px-6 md:py-3 rounded-full border border-gray-700"
            whileHover={{ scale: 1.05 }}
          >
          <div className="flex items-center justify-center gap-2 md:gap-4 text-white text-xs md:text-sm">
            © {new Date().getFullYear()} Nishant Totar | All rights reserved
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-200 text-xs">
            <FaRocket className="text-purple-500 animate-pulse" />
            <span>Available for new opportunities</span>
            <FaRocket className="text-blue-500 animate-pulse" />
          </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;