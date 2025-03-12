import React from "react";

const Education = () => {
  return (
    <section className="p-4 m-1/4">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-semibold">Master of Computer Application</h3>
        <p className="text-gray-600">KLS Gogte Institute of Technology, Belagavi</p>
        <p className="text-gray-600">02/2023 – 09/2024 | CGPA: 8.02</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <h3 className="text-xl font-semibold">Bachelor of Computer Application</h3>
        <p className="text-gray-600">B.V.V.S. Basaveshwar Science College, Bagalkot</p>
        <p className="text-gray-600">06/2019 – 09/2022 | Result: 79.00%</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <h3 className="text-xl font-semibold">PUC II</h3>
        <p className="text-gray-600">SGV Mahesh PU College,Belagavi</p>
        <p className="text-gray-600">04/2017 – 04/2019 | Result: 62.33%</p> 
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <h3 className="text-xl font-semibold">10<sup>th</sup> Standard</h3>
        <p className="text-gray-600">ADARSH VIDYALAY R.M.S.A SCHOOL,Badami</p>
        <p className="text-gray-600">04/2017 – 04/2019 | Result: 73.92%</p>
      </div>
    </section>
  );
};

export default Education;