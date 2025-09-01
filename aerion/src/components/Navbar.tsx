import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Aerion
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <Link href="#about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="#services" className="hover:text-gray-300 transition">
            Services
          </Link>
          <Link href="#projects" className="hover:text-gray-300 transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none">
          ☰
        </button>
      </div>
    </nav>
  );
}
