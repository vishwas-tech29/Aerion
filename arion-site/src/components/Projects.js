import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Robotics Platform",
    desc: "A next-gen robotics control system with immersive 3D UI.",
    img: "https://cdn.pixabay.com/photo/2017/01/06/19/15/robot-1954096_1280.jpg"
  },
  {
    title: "Creative Tech Showcase",
    desc: "Interactive portfolio with glassmorphism and parallax depth.",
    img: "https://cdn.pixabay.com/photo/2015/07/02/10/23/technology-828614_1280.jpg"
  },
  {
    title: "Smart City Dashboard",
    desc: "Real-time data visualization for urban innovation.",
    img: "https://cdn.pixabay.com/photo/2016/11/29/09/32/architecture-1868667_1280.jpg"
  }
];

const cardVariants = {
  initial: { scale: 0.95, rotateY: 0 },
  hover: { scale: 1.05, rotateY: 8, boxShadow: "0 8px 32px #7c3aed55" }
};

const Projects = () => (
  <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center neon-text"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Projects Showcase
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="bg-white bg-opacity-10 rounded-xl p-8 shadow-lg glassmorphism flex flex-col items-center cursor-pointer"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ perspective: "600px" }}
          >
            <img src={project.img} alt={project.title} className="rounded-lg mb-4 w-32 h-32 object-cover shadow-lg" />
            <h3 className="text-2xl font-semibold mb-2 neon-text">{project.title}</h3>
            <p className="text-base mb-4 text-center">{project.desc}</p>
            <motion.button
              className="px-4 py-2 bg-purple-700 rounded text-white font-bold shadow-lg hover:bg-purple-900 transition-all duration-300 glow"
              whileHover={{ scale: 1.1, boxShadow: "0 0 24px #a78bfa" }}
            >
              View Details
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;