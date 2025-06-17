


import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaCertificate, FaGithub, FaPython, FaNetworkWired, FaEye, FaTimes } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { SiDjango, SiMysql, SiJavascript } from "react-icons/si";
import ProfilePic from "../assets/NishProfile.jpg";

const Profile = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Resume Modal */}
      {showResume && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative bg-gray-800 rounded-2xl w-full max-w-4xl h-[90vh] border border-gray-700"
          >
            <button 
              onClick={() => setShowResume(false)}
              className="absolute -top-10 right-0 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes className="text-3xl" />
            </button>
            <iframe 
              src="https://drive.google.com/file/d/1qQwLx6LTqJ8EzMa9UuMOdJ0I66xkVhiQ/preview" 
              className="w-full h-full rounded-2xl"
              title="Resume Preview"
              allow="autoplay"
            />
          </motion.div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-12 text-center">
          Developer Profile
        </h2>
           {/* Profile Header */}
       <div className="relative  bg-gradient-to-bl from-gray-800 via-gray-700 to-gray-800 rounded-3xl">
         <div className="absolute -mt-10 left-1/2 transform -translate-x-1/2">
           <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative group"
          >
            <img 
              src={ProfilePic} 
              alt="Profile" 
              className="w-40 h-40 rounded-full border-4 border-gray-800 shadow-2xl object-cover transform group-hover:rotate-3 transition-transform"
            />
            <div className="absolute rounded-full border-2 border-purple-500/30 animate-ping-slow" />
          </motion.div>
        </div>
      </div>
    

        {/* Main Content */}
        <div className="pt-24 px-4">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl font-bold text-gray-100 mt-8"
            >
              Nishant Totar
            </motion.h1>
            <p className="text-xl text-gray-400 font-light mt-2">Full Stack Developer</p>
            <div className="flex justify-center gap-3 mt-4">
              <span className="px-4 py-1.5 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium">
                React Expert
              </span>
              <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
                Django Specialist
              </span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skills Section */}
            <motion.div 
              whileHover={{ translateY: -10 }}
              className="relative bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-purple-500 transition-all"
            >
              <div className="absolute -top-6 left-6 w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center shadow-md">
                <FaCode className="text-2xl text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-6">Technical Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Python", icon: <FaPython className="text-xl" /> },
                  { name: "JavaScript", icon: <SiJavascript className="text-xl" /> },
                  { name: "React", icon: <FaCode className="text-xl" /> },
                  { name: "Django", icon: <SiDjango className="text-xl" /> },
                  { name: "MySQL", icon: <SiMysql className="text-xl" /> },
                  { name: "Networking", icon: <FaNetworkWired className="text-xl" /> },
                ].map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors"
                  >
                    <span className="text-purple-400">{skill.icon}</span>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div 
              whileHover={{ translateY: -10 }}
              className="relative bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition-all"
            >
              <div className="absolute -top-6 left-6 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shadow-md">
                <FaCertificate className="text-2xl text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-6">Certifications</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "GitHub Fundamentals",
                    link: "https://www.udemy.com/certificate/UC-0cc37b0f-aad7-4ff3-ab49-71626c4f1a89/",
                    issuer: "Udemy",
                    icon: <FaGithub className="text-xl" />
                  },
                  {
                    title: "Python Essentials",
                    link: "https://drive.google.com/file/d/1XvzoRPjvpIbfE8HWt1Ucpk2OblfCJNXk/view",
                    issuer: "PCAP",
                    icon: <FaPython className="text-xl" />
                  },
                  {
                    title: "Networks Foundation",
                    link: "https://www.udemy.com/certificate/UC-35154a8a-e81b-464a-a911-5d9e9df05767/",
                    issuer: "Udemy",
                    icon: <FaNetworkWired className="text-xl" />
                  }
                ].map((cert, index) => (
                  <a 
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-blue-400">{cert.icon}</span>
                      <div>
                        <h4 className="font-medium text-gray-100">{cert.title}</h4>
                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                      </div>
                    </div>
                    <FiChevronRight className="text-gray-400 group-hover:text-blue-400 text-xl" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* View Resume Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowResume(true)}
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-semibold hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <FaEye className="text-xl animate-soft-bounce" />
              <span>View Full Resume</span>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;