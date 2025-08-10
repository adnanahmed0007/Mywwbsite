 import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaUser } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center px-4 pt-24 pb-16">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center 
        bg-black/50 border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.6)] 
        backdrop-blur-md p-8 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition duration-500">

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center">
          <div className="relative group">
            <img
              src="/WhatsApp Image 2025-08-01 at 16.32.08_ac730dfc.jpg"
              alt="Adnan Ahmed"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-indigo-500 
              shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/40 blur-md"></div>
          </div>

          <h2 className="text-3xl font-bold mt-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Adnan Ahmed
          </h2>
          <p className="text-gray-400 mt-1 text-sm md:text-base">Backend & Full-Stack Developer</p>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-6 text-gray-300">
          <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-2">
            Let's Connect
          </h3>

          <div className="space-y-4 text-sm md:text-base">
            {[
              { icon: <FaUser className="text-indigo-400" />, text: 'Adnan Ahmed' },
              { icon: <FaMapMarkerAlt className="text-indigo-400" />, text: 'Delhi NCR, India' },
              { icon: <FaEnvelope className="text-indigo-400" />, text: 'adnanahmed1212004@gmail.com', link: 'mailto:adnanahmed1212004@gmail.com' },
              { icon: <FaLinkedin className="text-indigo-400" />, text: 'linkedin.com/in/adnan-ahmed', link: 'https://linkedin.com/in/adnan-ahmed-814006250' },
              { icon: <FaGithub className="text-indigo-400" />, text: 'github.com/adnanahmed0007', link: 'https://github.com/adnanahmed0007' }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 
                transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
              >
                {item.icon}
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
