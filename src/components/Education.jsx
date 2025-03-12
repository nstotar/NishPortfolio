import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-6 flex items-center space-x-2 text-gray-800">
        <FaGraduationCap className="text-blue-600" /> <span>Education</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MCA */}
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-gray-900">Master of Computer Application</h3>
          <p className="text-gray-600">KLS Gogte Institute of Technology, Belagavi</p>
          <p className="text-gray-700 font-medium">02/2023 – 09/2024 | CGPA: 8.02</p>
        </div>

        {/* BCA */}
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-gray-900">Bachelor of Computer Application</h3>
          <p className="text-gray-600">B.V.V.S. Basaveshwar Science College, Bagalkot</p>
          <p className="text-gray-700 font-medium">06/2019 – 09/2022 | Result: 79.00%</p>
        </div>

        {/* PUC II */}
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold text-gray-900">PUC II</h3>
          <p className="text-gray-600">SGV Mahesh PU College, Belagavi</p>
          <p className="text-gray-700 font-medium">04/2017 – 04/2019 | Result: 62.33%</p>
        </div>

        {/* 10th Standard */}
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-red-500">
          <h3 className="text-xl font-semibold text-gray-900">10<sup>th</sup> Standard</h3>
          <p className="text-gray-600">ADARSH VIDYALAY R.M.S.A SCHOOL, Badami</p>
          <p className="text-gray-700 font-medium">04/2017 – 04/2019 | Result: 73.92%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
