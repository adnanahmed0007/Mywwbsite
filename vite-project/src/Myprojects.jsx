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
    name: "Blood donation",
    description: "A marketplace where farmers can sell their crops online without middlemen.",
    tech: "React, Tailwind CSS, Node.js, MongoDB",
    github: "https://github.com/adnanahmed0007/Blood-donation",
    live: "https://blood-donation-snowy-seven.vercel.app/"
  },
 
  
   
];

const Myprojects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white px-6 pt-[100px] pb-12">

      {/* About Section */}
      <section className="mb-16 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
          About Me
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hello! I'm <span className="font-semibold text-indigo-300">Adnan Ahmed</span>, a passionate backend and full-stack developer based in Delhi NCR.
          I'm currently a <span className="text-indigo-300">B.Tech Computer Science 4th year</span> student at IIMT University. I enjoy building modern web applications with clean UI and robust backend.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-10">
          My Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 
              hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:scale-[1.03] 
              transition duration-300 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <p className="text-sm text-indigo-300 mb-4">{project.tech}</p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-white/10 rounded-lg border border-white/10 
                  hover:bg-indigo-500 hover:border-indigo-400 transition"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition"
                >
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
