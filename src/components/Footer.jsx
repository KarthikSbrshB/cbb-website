import React from "react";
import { 
  FaHome, 
  FaUsers, 
  FaCalendarAlt, 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaInstagram, 
  FaTwitter,
  FaGithub,
  FaCode,
  FaLaptopCode
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white border-t border-[#4cdef5]/20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/src/assets/logo.png" alt="CBB Logo" className="w-12 h-12 object-contain" />
            <h1 className="text-3xl font-bold logo-text" style={{ fontFamily: 'Revamped, sans-serif' }}>
              CBB
            </h1>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <a href="/" className="text-gray-300 hover:text-[#4cdef5] transition-colors">Home</a>
            <a href="/about" className="text-gray-300 hover:text-[#4cdef5] transition-colors">About</a>
            <a href="/team" className="text-gray-300 hover:text-[#4cdef5] transition-colors">Team</a>
            <a href="/alumni" className="text-gray-300 hover:text-[#4cdef5] transition-colors">Alumni</a>
            <a href="/events" className="text-gray-300 hover:text-[#4cdef5] transition-colors">Events</a>
            <a href="/contact-us" className="text-gray-300 hover:text-[#4cdef5] transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/coding-brigade-bvrit-402634229" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/coding_brigade" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://x.com/CBB_BVRIT" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4 text-sm">
            <a href="tel:+919989907703" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors">
              <FaPhone className="w-4 h-4" />
              +91 99899 07703
            </a>
            <a href="mailto:cbb@bvrit.ac.in" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
              <FaEnvelope className="w-4 h-4" />
              cbb@bvrit.ac.in
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-white/10 text-center text-sm text-gray-400">
          © {currentYear} Coding Brigade BVRIT. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        .logo-text {
          background: linear-gradient(45deg, #4cdef5, #1b7bb3);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
