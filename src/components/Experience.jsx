
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <motion.section 
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-12 text-center">
          Professional Experience
        </h2>

        <motion.div 
          className="group relative bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-purple-500 transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
          
          <div className="flex items-start gap-6 mb-6">
            <div className="p-4 bg-blue-500/10 rounded-2xl">
              <FaBriefcase className="text-3xl text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-100">
                Pankh India Foundation (NGO)
              </h3>
              <p className="text-purple-400 font-medium mt-2">Project Intern</p>
              <p className="text-gray-400 text-sm mt-1">Belagavi, Karnataka</p>
            </div>
          </div>

          <ul className="space-y-4 pl-4">
            {[
              "Developed a course management web application using React JS and Redux",
              "Built RESTful APIs using Django REST Framework and SQLite",
              "Implemented JWT-based authentication for secure user access"
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;