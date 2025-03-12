
import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Experience</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
        <div className="flex items-center space-x-3 mb-2">
          <FaBriefcase size={28} className="text-blue-600" />
          <h3 className="text-2xl font-semibold text-gray-900">
            Pankh India Foundation (NGO)
          </h3>
        </div>

        <p className="text-gray-600 font-medium">Belagavi, Karnataka</p>
        <p className="text-gray-700 font-semibold mb-3">Project Intern</p>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Developed a course management web application using React JS and Redux.</li>
          <li>Built RESTful APIs using Django REST Framework and SQLite.</li>
          <li>Implemented JWT-based authentication for secure user access.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
