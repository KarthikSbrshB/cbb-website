import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full px-6 sm:px-10 py-10 bg-black text-white border-t border-white/10">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 text-center lg:text-left">
        
        {/* Logo Column */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start items-center">
          <h1 className="text-4xl font-extrabold text-[#4cdef5] hover:text-[#1b7bb3] transition-all duration-700 cursor-pointer">
            <a href="/">CBB.</a>
          </h1>
        </div>

        {/* Divider for large screens */}
        <div className="hidden lg:block w-px h-[200px] bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

        {/* Link Columns */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
          
          {/* Important Links */}
          <div>
            <h4 className="text-base font-semibold mb-3">Important Links</h4>
            <ul className="flex flex-col gap-2 text-white/80">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/team" className="hover:underline">Team</Link></li>
              <li><Link to="/alumni" className="hover:underline">Alumni</Link></li>
              <li><Link to="/events" className="hover:underline">Events</Link></li>
              <li><Link to="/contact-us" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Social Handles */}
          <div>
            <h4 className="text-base font-semibold mb-3">Handles</h4>
            <ul className="flex flex-col gap-2 text-white/80">
              <li><a href="https://www.linkedin.com/in/coding-brigade-bvrit-402634229" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/coding_brigade" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://x.com/CBB_BVRIT" target="_blank" rel="noreferrer">Twitter</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-3">Contact Info</h4>
            <ul className="flex flex-col gap-2 text-white/80">
              <li><a href="tel:+919989907703">+91 99899 07703</a></li>
              <li><a href="mailto:cbb@bvrit.ac.in">cbb@bvrit.ac.in</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Optional Divider */}
      <div className="w-full h-px my-8 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm text-white/60">
        © 2025 Coding Brigade BVRIT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
