

import React from "react";
import { FaStar, FaRegStar, FaTrophy } from "react-icons/fa";
import Award from "../assets/image.png";
import Cricket from "../assets/cricket.jpg";

const SkillRating = ({ level }) => {
  const stars = [1, 2, 3];
  return (
    <span className="flex space-x-1 text-yellow-500">
      {stars.map((star) =>
        level >= star ? <FaStar key={star} /> : <FaRegStar key={star} />
      )}
    </span>
  );
};

export const Skills = () => {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Skills</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
        {/* Programming Languages */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Programming Languages</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p>Python <SkillRating level={3} /></p>
          <p>Java <SkillRating level={3} /></p>
        </div>

        {/* Web Development */}
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Web Development</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p>React JS <SkillRating level={3} /></p>
          <p>HTML/CSS <SkillRating level={3} /></p>
          <p>Bootstrap/Tailwind CSS <SkillRating level={3} /></p>
          <p>MySQL <SkillRating level={3} /></p>
          <p>Figma <SkillRating level={2} /></p>
          <p>Canva <SkillRating level={2} /></p>
        </div>

        {/* Frameworks */}
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Frameworks</h3>
        <p className="text-gray-700">Django <SkillRating level={3} /></p>
      </div>

      {/* Achievements Section */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center space-x-2 text-gray-800">
          <FaTrophy className="text-yellow-500" /> <span>Achievements</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Achievement 1 */}
          <div className="bg-white shadow-md rounded-lg p-5 border-t-4 border-yellow-500">
            <img 
              src={Award} 
              alt="Best Project Award" 
              className="w-full h-auto rounded-lg aspect-[16/9] object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Best Project Award</h3>
            <p className="text-gray-600">Received the Best Project Award for an innovative project in web development.</p>
          </div>

          {/* Achievement 2 */}
          <div className="bg-white shadow-md rounded-lg p-5 border-t-4 border-yellow-500">
            <img 
              src={Cricket} 
              alt="Intercollege Cricket Championship" 
              className="w-full h-auto rounded-lg aspect-[16/9] object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">2nd Place - Intercollege Cricket Championship</h3>
            <p className="text-gray-600">Our team secured 2nd place in the Intercollege Cricket Championship.</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;
