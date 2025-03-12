import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Projects Section */}
        <section className="p-4">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>

          {/* Project 1 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Readers Cave</h3>
            <h6 className="text-sm text-gray-600 font-semibold">Book Reselling Website</h6>
            <p className="text-gray-600">Built with HTML, CSS, JS, PHP, and MySQL.</p>
            <p className="text-gray-600">
              A platform for buying and selling second-hand books with secure payment integration.
            </p>
            <p className="flex items-center space-x-2 text-gray-600 mt-2">
              <span>Get it here</span>
              <a href="https://github.com/nstotar/Readers_cave-website" target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} className="text-gray-700 hover:text-black" />
              </a>
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow mt-6">
            <h3 className="text-xl font-semibold">Pankh Pathshala</h3>
            <h6 className="text-sm text-gray-600 font-semibold">E-learning Website</h6>
            <p className="text-gray-600">Built with HTML, CSS, Django, and SQLite.</p>
            <p className="text-gray-600">
              A platform where students can watch tutorials, download notes, and enjoy fun-based learning.
            </p>
            <p className="flex items-center space-x-2 text-gray-600 mt-2">
              <span>Get it here</span>
              <a href="https://github.com/nstotar/Pankh_pathshala" target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} className="text-gray-700 hover:text-black" />
              </a>
            </p>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="p-4">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a href="https://www.udemy.com/certificate/UC-0cc37b0f-aad7-4ff3-ab49-71626c4f1a89/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  GitHub Fundamentals for Software Developers
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1XvzoRPjvpIbfE8HWt1Ucpk2OblfCJNXk/view" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Programming Essentials in Python
                </a>
              </li>
              <li>
                <a href="https://www.udemy.com/certificate/UC-35154a8a-e81b-464a-a911-5d9e9df05767/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Computer Networks Foundation
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
