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
import java from "../public/java-svgrepo-com.svg";
import reactjs from "../public/react.svg";


const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white px-6 pt-24 pb-16 flex flex-col items-center font-sans overflow-hidden">
      
      {/* Animated Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Profile Image */}
      <img
        src="/WhatsApp Image 2025-08-01 at 16.32.08_ac730dfc.jpg"
        alt="Adnan Ahmed"
        className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-indigo-500 shadow-[0_0_60px_rgba(99,102,241,0.6)] hover:scale-105 transition-transform duration-500 mb-6"
      />

      {/* Name & Role */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-wide hover:scale-105 transition duration-500">
        Adnan Ahmed
      </h1>
      <h2 className="text-lg md:text-2xl text-gray-300 font-medium mb-6">
        Backend & Full-Stack Developer
      </h2>

      {/* About Section */}
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {[
          {
            text: <>Passionate about <span className="text-indigo-400 font-semibold">backend development</span>, I specialize in building fast, secure, and scalable web apps using <span className="text-indigo-400 font-semibold">Node.js, Express.js</span>, and <span className="text-indigo-400 font-semibold">MongoDB</span>.</>
          },
          {
            text: <>I’ve built complete backend systems with features like <span className="font-semibold text-teal-300">authentication, REST APIs, file uploads</span>, and <span className="font-semibold text-teal-300">database architecture</span>.</>
          },
          {
            text: <>With experience in <span className="font-semibold text-purple-300">React.js</span> and modern frontend tools, plus solid knowledge of <span className="font-semibold text-purple-300">Java</span>, I deliver full-stack solutions — clean, responsive, and production-ready.</>
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 text-gray-200 text-md md:text-lg shadow-lg hover:shadow-indigo-500/40 hover:scale-[1.02] transition duration-500"
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="mt-10 flex gap-6">
        <a
          href="/contact"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-lg transition duration-300 font-medium"
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
    { name: 'HTML', src: htmlimage, from: 'from-red-500', to: 'to-red-800' },
    { name: 'CSS', src: cssimag, from: 'from-blue-500', to: 'to-blue-800' },
    { name: 'JavaScript', src: javascriptimage, from: 'from-yellow-400', to: 'to-yellow-600' },
    { name: 'Node.js', src: nodemimage, from: 'from-green-600', to: 'to-green-900' },
    { name: 'Express.js', src: expressima, from: 'from-gray-500', to: 'to-gray-800' },
    { name: 'MongoDB', src: mongodbimage, from: 'from-green-500', to: 'to-green-800' },
    { name: 'Postman', src: postmanimage, from: 'from-orange-400', to: 'to-orange-700' },
    { name: 'GitHub', src: gityubgimage, from: 'from-gray-600', to: 'to-gray-900' },
    { name: 'MySQL', src: mySqlimagd, from: 'from-blue-400', to: 'to-blue-700' },
    { name: 'Nodemon', src: nodemon, from: 'from-emerald-500', to: 'to-emerald-800' },
    { name: 'React', src: reactjs, from: 'from-cyan-500', to: 'to-cyan-800' },
    { name: 'Java', src: java,   from: 'from-[#f89820]',to: 'to-[#5382a1]'    },
 
  ].map((skill) => (
    <div
      key={skill.name}
      className={`relative flex flex-col items-center justify-center rounded-xl p-4 bg-gradient-to-br ${skill.from} ${skill.to} shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]`}
    >
      {/* Reflection Overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-white/10 to-white/30 opacity-60 pointer-events-none"></div>

      <img
        src={skill.src}
        alt={skill.name}
        className="w-12 h-12 object-contain mb-2 relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
      />
      <p className="text-sm font-semibold text-white relative z-10">{skill.name}</p>
    </div>
  ))}
</div>



      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Adnan Ahmed. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;

