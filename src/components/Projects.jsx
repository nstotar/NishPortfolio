import React from "react";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <>
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-semibold">Readers Cave</h3>
        <h6 className="text-xx text-gray-600 font-semibold">Book reselling website</h6>
        <p className="text-gray-600">Built with HTML, CSS, JS, PHP, and MySQL.</p>
        <p className="text-gray-600">
          A platform for buying and selling second-hand books with secure payment integration.
        </p>
        <p className="items-center m-1 p-1 space-x-2 text-gray-600"><br/>Get it here<a href="https://github.com/nstotar/Readers_cave-website" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a> </p>
      </div>
    </section>

<section className="p-4">
<div className="bg-gray-100 p-4 rounded-lg">
  <h3 className="text-xl font-semibold">Pankh Pathshala</h3>
  <h6 className="text-xx text-gray-600 font-semibold">E-learning Website</h6>
  <p className="text-gray-600">Built with HTML, CSS, Django, and SQLite.</p>
  <p className="text-gray-600">
   a platfrom where students can watch tutorials download notes related to the topic and enjoy the fun based learning
  </p>
  <p className="items-center m-1 p-1 space-x-2 text-gray-600"><br/>Get it here<a href="https://github.com/nstotar/Pankh_pathshala" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a> </p>
</div>
</section>
    </>
  );
};


export default Projects;