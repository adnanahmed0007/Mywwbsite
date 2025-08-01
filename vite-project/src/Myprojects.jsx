 import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: "IIMT PDF Saver",
    description: "Upload, view, and download PDFs by students. Each user can manage their academic files.",
    tech: "MERN Stack (MongoDB, Express, React, Node.js)",
    github: "https://github.com/adnanahmed0007/Pdsaveriimt",
    live: "https://iimtpdf.onrender.com/"
  },
  {
    name: "Farmer Online Market",
    description: "A marketplace where farmers can sell their crops online without middlemen.",
    tech: "React, Tailwind CSS, Node.js, MongoDB",
    github: "https://github.com/adnanahmed0007/Farmere2.0folder",
    live: "https://farmere2-0folder.vercel.app/"
  },
  {
    name: "Gym Exercise API",
    description: "Full-stack app to explore exercises for each body part using API and responsive UI.",
    tech: "React, Vite, Tailwind, Rapid API",
    github: "https://github.com/adnanahmed0007/firstfullstack",
    live: "https://gym-api-xjqo.vercel.app/"
  }
  // You can add more later in same format
];

const Myprojects = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 pt-[100px] pb-12">


      
      {/* About Section */}
      <section className="mb-12 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-4">About Me</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hello! I'm <span className="font-semibold text-indigo-300">Adnan Ahmed</span>, a passionate backend and full-stack developer based in Delhi NCR.
          I'm currently a <span className="text-indigo-300">B.Tech Computer Science 4th year</span> student at IIMT University. I enjoy building modern web applications with clean UI and robust backend.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-400 mb-10">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-indigo-500/30 transition duration-300">
              <h3 className="text-2xl font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <p className="text-sm text-indigo-300 mb-4">{project.tech}</p>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-700 rounded hover:bg-indigo-600 transition">
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-indigo-500 rounded hover:bg-indigo-600 transition">
                  <FaExternalLinkAlt className="mr-2" /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Myprojects;
