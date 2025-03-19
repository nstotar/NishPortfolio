

import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div className="w-full max-w-2xl xl:max-w-4xl">
      <div className="bg-gray-800 rounded-3xl border border-gray-700 p-6 md:p-8 lg:p-10">
        {/* Header Section */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="pb-6 md:pb-8 border-b border-gray-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-sm md:text-base">Available for collaborations</p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
          {/* Email Card */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            href="mailto:nstotar@gmail.com"
            className="group bg-gray-700 p-5 md:p-6 rounded-2xl border border-gray-600 hover:border-purple-500 transition-all"
          >
            <div className="flex items-center gap-4 md:gap-5">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <FaEnvelope className="text-2xl text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-100">Email</h3>
                <p className="text-purple-300 group-hover:text-purple-400 transition-colors text-sm md:text-base">
                  nstotar@gmail.com
                </p>
              </div>
              <FiArrowUpRight className="text-2xl text-gray-400 group-hover:text-purple-400 ml-2" />
            </div>
          </motion.a>

          {/* Phone Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group bg-gray-700 p-5 md:p-6 rounded-2xl border border-gray-600 hover:border-blue-500 transition-all"
          >
            <div className="flex items-center gap-4 md:gap-5">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <FaMobileAlt className="text-2xl text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-100">Phone</h3>
                <p className="text-blue-300 group-hover:text-blue-400 transition-colors text-sm md:text-base">
                  +91 78997 93325
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 md:gap-6 mt-8 md:mt-10">
          <motion.a
            whileHover={{ y: -3 }}
            href="https://github.com/nstotar"
            className="p-3 md:p-4 bg-gray-700 rounded-xl border border-gray-600 hover:border-purple-500 hover:bg-purple-500/10 transition-all"
          >
            <FaGithub className="text-2xl text-gray-300 hover:text-purple-400" />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://linkedin.com/in/nstotar"
            className="p-3 md:p-4 bg-gray-700 rounded-xl border border-gray-600 hover:border-blue-500 hover:bg-blue-500/10 transition-all"
          >
            <FaLinkedin className="text-2xl text-gray-300 hover:text-blue-400" />
          </motion.a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Contact;