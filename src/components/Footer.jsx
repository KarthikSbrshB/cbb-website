import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full px-10 py-10 bg-black text-white border-t border-white/10">
      <div className="flex flex-col lg:flex-row justify-center gap-12 text-center">
        {/* Logo Column */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <h1 className="text-4xl font-extrabold text-[#4cdef5] hover:text-[#1b7bb3] transition-all duration-700 cursor-pointer">
            <a href="/">CBB.</a>
          </h1>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px h-[220px] mx-6 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

        {/* Columns */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
          {/* Links */}
          <div>
            <h4 className="text-base font-semibold mb-2">Important Links</h4>
            <ul className="flex flex-col gap-2 text-white/80">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/team" className="hover:underline">Team</a></li>
              <li><a href="/alumni" className="hover:underline">Alumni</a></li>
              <li><a href="/events" className="hover:underline">Events</a></li>
              <li><a href="/contact-us" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Handles */}
          <div>
            <h4 className="text-base font-semibold mb-2">Handles</h4>
            <ul className="flex flex-col gap-2 text-white/80">
              <li><a href="https://www.linkedin.com/in/coding-brigade-bvrit-402634229" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/coding_brigade" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://x.com/CBB_BVRIT" target="_blank" rel="noreferrer">Twitter</a></li>
              
              
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-2">Contact Info</h4>
            <ul className="flex flex-col gap-2 text-white/80">
              <li><a href="tel:+919989907703">+91 99899 07703</a></li>
              <li><a href="mailto:cbb@bvrit.ac.in">cbb@bvrit.ac.in</a></li>
              
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      {/* <div className="w-full h-px my-6 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div> */}

      {/* Copyright */}
      {/* <div className="text-center text-sm text-white/70">
        Copyright © 2025 Coding Brigade BVRIT. All rights reserved.
      </div> */}
    </footer>
  );
};

export default Footer;