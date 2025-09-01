import React from "react";

const Footer = () => (
  <footer className="py-8 px-6 bg-black text-white flex flex-col md:flex-row items-center justify-between">
    <div className="flex gap-4 mb-4 md:mb-0">
      <a href="/" className="hover:text-purple-400 transition-colors">Home</a>
      <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
      <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
      <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
    </div>
    <div className="flex gap-4 mb-4 md:mb-0">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">🐦</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">📸</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">💼</a>
    </div>
    <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Arion. All rights reserved.</div>
  </footer>
);

export default Footer;