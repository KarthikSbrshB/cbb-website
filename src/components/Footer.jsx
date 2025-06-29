import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full px-10 py-10 bg-black text-white border-t border-white/10">
      <div className="flex flex-col lg:flex-row justify-center gap-12 text-center">
        {/* Logo Column */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <h1 className="text-4xl font-extrabold text-[#4d8c89bb] hover:text-[#746e65] transition-all duration-700 cursor-pointer">
            <a href="/">Sbrsh.</a>
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
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#profile" className="hover:underline">Profile</a></li>
              <li><a href="#education" className="hover:underline">Education</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Handles */}
          <div>
            <h4 className="text-base font-semibold mb-2">Handles</h4>
            <ul className="flex flex-col gap-2 text-white/80">
              <li><a href="https://medium.com/@karthiksbrsh" target="_blank" rel="noreferrer">Medium</a></li>
              <li><a href="https://github.com/KarthikSbrshB" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://www.instagram.com/karthiksbrsh/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/karthiksabareeshboddeti21052004/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-2">Contact Info</h4>
            <ul className="flex flex-col gap-2 text-white/80">
              <li><a href="tel:+919989907703">+91 99899 07703</a></li>
              <li><a href="mailto:karthiksabareeshb@gmail.com">karthiksabareeshb@gmail.com</a></li>
              <li><a href="https://maps.app.goo.gl/5ErGsncSse2VwbSA9" target="_blank" rel="noreferrer">Miyapur, Hyderabad, 500049</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px my-6 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      {/* Copyright */}
      <div className="text-center text-sm text-white/70">
        Copyright © 2024 Karthik Sabareesh Boddeti. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;