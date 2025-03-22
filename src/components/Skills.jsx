



import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaJava, FaFigma, FaTrophy } from "react-icons/fa";
import { SiCanva, SiDjango, SiMysql, SiTailwindcss } from "react-icons/si";
import Award from "../assets/image.png";
import Cricket from "../assets/cricket.jpg";
import Experience from "./Experience";

const Skills = () => {
  const skillsData = [
    {
      category: "Core Technologies",
      icon: <FaReact className="text-3xl text-purple-400" />,
      items: [
        { name: "Python", level: 65, icon: <FaPython /> },
        { name: "Java", level: 60, icon: <FaJava /> },
        { name: "React", level: 50, icon: <FaReact /> }
      ]
    },
    {
      category: "Web Stack",
      icon: <SiTailwindcss className="text-3xl text-purple-400" />,
      items: [
        { name: "HTML/CSS", level: 70 },
        { name: "Tailwind CSS", level: 60, icon: <SiTailwindcss /> },
        { name: "MySQL", level: 75, icon: <SiMysql /> }
      ]
    },
    {
      category: "Tools & Frameworks",
      icon: <SiDjango className="text-3xl text-purple-400" />,
      items: [
        { name: "Django", level: 60, icon: <SiDjango /> },
        { name: "Figma", level: 60, icon: <FaFigma /> },
        { name: "Canva", level: 60, icon: <SiCanva /> }
      ]
    }
  ];

  const achievements = [
    {
      title: "Best Project Award",
      description: "Excellence in Full Stack Innovation",
      image: Award,
      year: "2024"
    },
    {
      title: "Cricket Tournament",
      description: "Inter department Cricket Tournament Finalists",
      image: Cricket,
      year: "2023"
    }
  ];

  const ProgressBar = ({ level }) => (
    <motion.div 
      className="h-2 bg-gray-700 rounded-full overflow-hidden"
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
    >
      <div 
        className={`h-full ${level > 85 ? 'bg-green-400' : 'bg-blue-400'} transition-all duration-1000`}
        style={{ width: `${level}%` }}
      />
    </motion.div>
  );

  return (
    <motion.section 
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            Technical Mastery
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combining cutting-edge technologies with creative problem solving
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillsData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="group relative bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-purple-500 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-100">
                  {section.category}
                </h3>
              </div>

              <div className="space-y-6">
                {section.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && (
                          <span className="text-purple-400">
                            {skill.icon}
                          </span>
                        )}
                        <span className="font-medium text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <ProgressBar level={skill.level} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Experience */}
        <div className=" p-2 rounded-2xl ">
          <Experience />
        </div>

        {/* Achievements Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gray-700 flex-1" />
            <div className="flex items-center gap-3">
              <FaTrophy className="text-3xl text-amber-400" />
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 m-2">
                Notable Achievements
              </h3>
            </div>
            <div className="h-px bg-gray-700 flex-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl shadow-xl group"
              >
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <div className="text-white font-bold">
                    <span className="text-sm font-light tracking-wide">
                      {achievement.year}
                    </span>
                    <h4 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-300 font-light">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
