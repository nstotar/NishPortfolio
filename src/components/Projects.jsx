
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaPython, FaCode, FaNetworkWired } from "react-icons/fa";
import { SiDjango, SiMysql, SiJavascript } from "react-icons/si";


const Projects = () => {
  const projects = [
    {
      title: "Readers Cave",
      subtitle: "Book Reselling Platform",
      tech: [<SiJavascript />, <FaCode />, <SiMysql />],
      description: "A secure marketplace for buying/selling second-hand books with integrated payments",
      github: "https://github.com/nstotar/Readers_cave-website"
    },
    {
      title: "Pankh Pathshala",
      subtitle: "E-learning Platform",
      tech: [<SiDjango />, <FaPython />, <FaCode />],
      description: "Interactive learning platform with tutorials, notes, and gamified education",
      github: "https://github.com/nstotar/Pankh_pathshala"
    }
  ];

  const certifications = [
    {
      title: "GitHub Fundamentals",
      issuer: "Udemy",
      icon: <FaGithub />,
      link: "https://www.udemy.com/certificate/UC-0cc37b0f-aad7-4ff3-ab49-71626c4f1a89/"
    },
    {
      title: "Python Essentials",
      issuer: "PCAP",
      icon: <FaPython />,
      link: "https://drive.google.com/file/d/1XvzoRPjvpIbfE8HWt1Ucpk2OblfCJNXk/view"
    },
    {
      title: "Networks Foundation",
      issuer: "Udemy",
      icon: <FaNetworkWired />,
      link: "https://www.udemy.com/certificate/UC-35154a8a-e81b-464a-a911-5d9e9df05767/"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-12">
          Projects & Certifications
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Projects Column */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-purple-500 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                <h3 className="text-2xl font-bold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-purple-400 font-medium mb-4">{project.subtitle}</p>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  {project.tech.map((Icon, i) => (
                    <div key={i} className="text-2xl text-gray-400 hover:text-purple-400 transition-colors">
                      {Icon}
                    </div>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                >
                  <FaGithub className="text-xl" />
                  <span className="font-medium text-gray-100">View on GitHub</span>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gray-700 rounded-2xl">
                    <span className="text-2xl text-blue-400">{cert.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">{cert.title}</h3>
                    <p className="text-gray-400 mb-4">{cert.issuer}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>View Credential</span>
                      <FaCode className="text-sm" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;