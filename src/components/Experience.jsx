import React from "react";

const Experience = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-semibold">Pankh India Foundation (NGO)</h3>
        <p className="text-gray-600">Belagavi, Karnataka</p>
        <p className="text-gray-600">Project Intern</p>
        <ul className="list-disc list-inside mt-2">
          <li>Developed a course management web application using React JS and Redux.</li>
          <li>Built RESTful APIs using Django REST Framework and SQLite.</li>
          <li>Implemented JWT-based authentication for secure user access.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;