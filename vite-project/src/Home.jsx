 import React from 'react';
import cssimag from "../public/css.svg";
import expressima from "../public/express.svg";
import gityubgimage from "../public/github.svg";
import htmlimage from "../public/html5.svg";
import javascriptimage from "../public/javascript.svg";
import mongodbimage from "../public/mongodb.svg";
import nodemimage from "../public/nodedotjs.svg";
import postmanimage from "../public/postman.svg";
import mySqlimagd from "../public/mysql.svg";
import nodemon from "../public/nodemon.svg";
import reactjs from "../public/react.svg";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 pt-24 pb-16 flex flex-col items-center font-sans">
      
      {/* Profile Image */}
      <img
        src="/WhatsApp Image 2025-08-01 at 16.32.08_ac730dfc.jpg"
        alt="Adnan Ahmed"
        className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-indigo-600 shadow-2xl hover:scale-105 transition-transform duration-300 mb-6"
      />

      {/* Name & Role */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white tracking-wide hover:text-indigo-500 transition duration-500 transform hover:scale-105">
        Adnan Ahmed
      </h1>
      <h2 className="text-lg md:text-2xl text-indigo-400 font-medium mb-6 hover:text-indigo-300 transition duration-500">
        Backend & Full-Stack Developer
      </h2>

      {/* About Section */}
       <div className="max-w-3xl mx-auto text-center space-y-6">
  <div className="border border-indigo-400 rounded-2xl p-4 text-gray-200 text-md md:text-lg shadow-md hover:shadow-indigo-500/40 hover:scale-[1.01] transition duration-300">
    Passionate about <span className="text-indigo-400 font-semibold">backend development</span>, I specialize in building fast, secure, and scalable web apps using 
    <span className="text-indigo-400 font-semibold"> Node.js, Express.js</span>, and <span className="text-indigo-400 font-semibold">MongoDB</span>.
  </div>

  <div className="border border-teal-400 rounded-2xl p-4 text-teal-300 text-md md:text-lg shadow-md hover:shadow-teal-500/40 hover:scale-[1.01] transition duration-300">
    I’ve built complete backend systems with features like 
    <span className="font-semibold"> authentication, REST APIs, file uploads</span>, and <span className="font-semibold">database architecture</span>.
  </div>

  <div className="border border-purple-400 rounded-2xl p-4 text-purple-300 text-md md:text-lg shadow-md hover:shadow-purple-500/40 hover:scale-[1.01] transition duration-300">
    With experience in <span className="font-semibold">React.js</span> and modern frontend tools, plus solid knowledge of 
    <span className="font-semibold"> Java</span>, I deliver full-stack solutions — clean, responsive, and production-ready.
  </div>
</div>

      {/* CTA Buttons */}
      <div className="mt-10 flex gap-6">
        <a
          href="/contact"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md transition duration-300 font-medium"
        >
          Contact Me
        </a>
        <a
          href="/aboutme"
          className="border border-indigo-400 hover:bg-indigo-500 hover:text-white text-indigo-400 px-6 py-2 rounded-full transition duration-300 font-medium"
        >
          My Projects
        </a>
      </div>

      {/* Skills Grid */}
      <h3 className="mt-16 text-2xl font-semibold text-indigo-400">Tech Stack</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-8">
        {[
          { name: 'HTML', src: htmlimage, bg: 'bg-red-600' },
          { name: 'CSS', src: cssimag, bg: 'bg-blue-600' },
          { name: 'JavaScript', src: javascriptimage, bg: 'bg-yellow-400' },
          { name: 'Node.js', src: nodemimage, bg: 'bg-green-700' },
          { name: 'Express.js', src: expressima, bg: 'bg-gray-700' },
          { name: 'MongoDB', src: mongodbimage, bg: 'bg-green-600' },
          { name: 'Postman', src: postmanimage, bg: 'bg-orange-500' },
          { name: 'GitHub', src: gityubgimage },
          { name: 'MySQL', src: mySqlimagd, bg: 'bg-blue-400' },
          { name: 'Nodemon', src: nodemon, bg: 'bg-emerald-500' },
          { name: 'React', src: reactjs, bg: 'bg-cyan-600' },
        ].map((skill) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center justify-center rounded-xl p-4 ${skill.bg} hover:scale-105 transition-transform duration-300 shadow-lg`}
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-12 h-12 object-contain mb-2"
            />
            <p className="text-sm font-semibold text-white">{skill.name}</p>
          </div>
        ))}
      </div>
     <footer className="mt-20 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Adnan Ahmed. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;


