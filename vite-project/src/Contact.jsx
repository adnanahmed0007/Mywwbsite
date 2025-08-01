 import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaUser } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4 pt-24">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center bg-black/40 border border-gray-800 rounded-2xl shadow-2xl backdrop-blur-md p-8">

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/WhatsApp Image 2025-08-01 at 16.32.08_ac730dfc.jpg"
            alt="Adnan Ahmed"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-indigo-500 shadow-lg mb-6 hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-3xl font-bold text-indigo-400">Adnan Ahmed</h2>
          <p className="text-gray-400 mt-2">Backend & Full-Stack Developer</p>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-6 text-gray-300">
          <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>

          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-center gap-3">
              <FaUser className="text-indigo-400" />
              <span>Adnan Ahmed</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-400" />
              <span>Delhi NCR, India</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-400" />
              <a
                href="mailto:adnanahmed1212004@gmail.com"
                className="hover:underline"
              >
                adnanahmed1212004@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-indigo-400" />
              <a
                href="https://linkedin.com/in/adnan-ahmed-814006250"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/adnan-ahmed
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-indigo-400" />
              <a
                href="https://github.com/adnanahmed0007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/adnanahmed0007
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;

