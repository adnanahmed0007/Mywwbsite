 import React from "react";
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
    <div className="relative min-h-screen bg-[#0d0d0d] text-gray-100 px-6 pt-24 pb-16 flex flex-col items-center font-sans overflow-hidden">
      {/* Subtle Gradient Glow */}
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-[120px]" />

      {/* Profile Image */}
      <img
        src="/WhatsApp Image 2025-08-01 at 16.32.08_ac730dfc.jpg"
        alt="Adnan Ahmed"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-gray-600 shadow-lg mb-6 transition-transform duration-300 hover:scale-105"
      />

      {/* Name & Role */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white mb-2">
        Adnan Ahmed
      </h1>
      <h2 className="text-lg md:text-2xl text-gray-400 font-medium mb-8">
        Backend & Full-Stack Developer
      </h2>

      {/* About Section */}
      <div className="max-w-3xl mx-auto text-center space-y-5">
        {[
          {
            text: (
              <>
                Passionate about{" "}
                <span className="text-indigo-400 font-semibold">
                  backend development
                </span>
                , I build fast, secure, and scalable apps using{" "}
                <span className="text-indigo-400 font-semibold">
                  Node.js, Express.js
                </span>
                , and{" "}
                <span className="text-indigo-400 font-semibold">MongoDB</span>.
              </>
            ),
          },
          {
            text: (
              <>
                Experienced with{" "}
                <span className="text-teal-400 font-semibold">
                  authentication, REST APIs, file handling
                </span>
                , and{" "}
                <span className="text-teal-400 font-semibold">
                  database architecture
                </span>
                .
              </>
            ),
          },
          {
            text: (
              <>
                Also skilled in{" "}
                <span className="text-purple-400 font-semibold">React.js</span>{" "}
                and{" "}
                <span className="text-purple-400 font-semibold">Java</span> for
                full-stack development — clean, efficient, and production-ready.
              </>
            ),
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#141414] border border-gray-800 rounded-xl p-5 text-gray-300 text-md md:text-lg shadow-md hover:shadow-indigo-600/30 hover:scale-[1.02] transition duration-300"
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="mt-10 flex gap-5">
        <a
          href="/contact"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md shadow-md transition duration-300 font-medium"
        >
          Contact Me
        </a>
        <a
          href="/aboutme"
          className="border border-indigo-500 hover:bg-indigo-600 hover:text-white text-indigo-400 px-6 py-2 rounded-md transition duration-300 font-medium"
        >
          My Projects
        </a>
      </div>

      {/* Skills */}
      <h3 className="mt-16 text-2xl font-semibold text-indigo-400">
        Tech Stack
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-8">
        {[
          { name: "HTML", src: htmlimage },
          { name: "CSS", src: cssimag },
          { name: "JavaScript", src: javascriptimage },
          { name: "Node.js", src: nodemimage },
          { name: "Express.js", src: expressima },
          { name: "MongoDB", src: mongodbimage },
          { name: "Postman", src: postmanimage },
          { name: "GitHub", src: gityubgimage },
          { name: "MySQL", src: mySqlimagd },
          { name: "Nodemon", src: nodemon },
          { name: "React", src: reactjs },
          { name: "Java", src: java },
        ].map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center bg-[#141414] border border-gray-800 rounded-lg p-4 hover:border-indigo-500 transition duration-300 hover:scale-105 shadow-md hover:shadow-indigo-600/20"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-10 h-10 object-contain mb-2 opacity-90"
            />
            <p className="text-sm text-gray-300 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-500 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Adnan Ahmed. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;


