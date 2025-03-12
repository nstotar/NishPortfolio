import React from "react";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Details</h2>
    
    <div className="flex items-center justify-center space-x-3 bg-white p-3 rounded-lg shadow">
      <FaEnvelope size={22} className="text-gray-700"/>
      <a href="mailto:nstotar@gmail.com" className="text-blue-600 hover:underline">
        nstotar@gmail.com
      </a>
    </div>

    <div className="flex items-center justify-center space-x-3 bg-white p-3 rounded-lg shadow mt-3">
      <FaMobileAlt size={22} className="text-gray-700"/>
      <span className="text-gray-800">7899793325</span>
    </div>
  </div>
);

export default Contact;
