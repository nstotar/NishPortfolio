
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-blue-600 text-white p-4 relative">
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-bold text-center">Nishant Totar <br /> Portfolio</h1>
      
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          className="absolute top-4 right-4 text-white text-2xl z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Navigation Menu */}
      <nav
        className={`${
          isMobile
            ? `absolute top-full left-0 w-full bg-gray-800 p-4 flex flex-col items-center transition-all duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`
            : "flex justify-center"
        }`}
      >
        <ul className={`${isMobile ? "flex flex-col w-2/3 text-center" : "flex justify-center bg-gray-800 rounded-lg"}`}>
          {[
            { path: "/", label: "Home" },
            { path: "/skills", label: "Skills" },
            { path: "/education", label: "Education" },
            { path: "/projects", label: "Projects" },
            { path: "/contact", label: "Contact" }
          ].map((item) => (
            <li
              key={item.path}
              className={`m-2 px-4 py-2 text-sm font-medium rounded-md w-full ${
                location.pathname === item.path
                  ? "bg-gray-50 text-gray-600 ring-1 ring-gray-500/10"
                  : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <Link to={item.path} className="hover:underline block w-full">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;