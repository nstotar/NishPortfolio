import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header 
      className="relative bg-gray-950 border-b border-gray-800 py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.h1 
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Nishant Totar
          </motion.h1>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center gap-6">
              {[
                { path: "/", label: "Home" },
                { path: "/skills", label: "Skills" },
                { path: "/education", label: "Education" },
                { path: "/projects", label: "Projects" },
                { path: "/contact", label: "Contact" }
              ].map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm ${
                      location.pathname === item.path
                        ? "text-purple-400"
                        : "text-gray-300 hover:text-white"
                    } transition-colors`}
                  >
                    {item.label}
                  </Link>
                  {location.pathname === item.path && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-px bg-purple-400"
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              ))}
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </motion.button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 border-t border-gray-800 pt-4"
          >
            <div className="flex flex-col gap-2">
              {[
                { path: "/", label: "Home" },
                { path: "/skills", label: "Skills" },
                { path: "/education", label: "Education" },
                { path: "/projects", label: "Projects" },
                { path: "/contact", label: "Contact" }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm ${
                    location.pathname === item.path
                      ? "text-purple-400 bg-gray-900"
                      : "text-gray-300 hover:bg-gray-900"
                  } rounded-lg transition-colors`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;