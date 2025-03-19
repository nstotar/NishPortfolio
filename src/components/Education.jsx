import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen, FaSchool, FaAward } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      title: "Master of Computer Application",
      icon: <FaGraduationCap className="text-2xl" />,
      institution: "KLS Gogte Institute of Technology, Belagavi",
      duration: "2023 - 2024",
      result: "CGPA: 8.02",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Bachelor of Computer Application",
      icon: <FaBookOpen className="text-2xl" />,
      institution: "B.V.V.S. Basaveshwar Science College, Bagalkot",
      duration: "2019 - 2022",
      result: "79.00%",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "PUC II",
      icon: <FaSchool className="text-2xl" />,
      institution: "SGV Mahesh PU College, Belagavi",
      duration: "2017 - 2019",
      result: "62.33%",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "10th Standard",
      icon: <FaAward className="text-2xl" />,
      institution: "ADARSH VIDYALAY R.M.S.A SCHOOL, Badami",
      duration: "Completed 2017",
      result: "73.92%",
      color: "from-purple-500 to-blue-500"
    }
  ];

  return (
    <motion.section 
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-12"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
        >
          Academic Journey
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-purple-500 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
              
              <div className="flex items-start gap-6 mb-4">
                <div className="p-4 bg-purple-500/10 rounded-2xl">
                  <span className={`text-purple-400 ${item.icon.props.className}`}>
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">{item.title}</h3>
                  <p className="text-gray-400 mt-2">{item.institution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-4 py-2 bg-gray-700 rounded-full text-sm text-gray-300">
                  {item.duration}
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm text-white">
                  {item.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;