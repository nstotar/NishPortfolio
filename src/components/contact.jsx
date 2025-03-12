import React from "react";
import { FaMobileAlt, FaEnvelope, } from "react-icons/fa";
const Contact = () => (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-center">Contact Details</h2>
      <p className="flex items-center m-2 p-2 space-x-2"><FaEnvelope  size={22}/> <a href="mailto:nstotar@gmail.com" className="text-blue-500">  nstotar@gmail.com</a></p>
      <p className="flex items-center m-2 p-2 space-x-2"><FaMobileAlt size={22}/> : 7899793325</p>
    </div>
    
  );
export default Contact;