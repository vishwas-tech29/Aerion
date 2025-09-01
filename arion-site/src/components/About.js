import React from "react";
import { motion } from "framer-motion";

const iconVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: (i) => ({ scale: 1.2, opacity: 1, transition: { delay: i * 0.2, duration: 0.6, type: "spring" } })
};

const About = () => (
  <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 0.5, y: 0 }}
      transition={{ duration: 1.5 }}
      style={{ background: "linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%)", filter: "blur(32px)", opacity: 0.5 }}
    />
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <motion.h2
        className="text-4xl font-bold mb-4 neon-text"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About Arion
      </motion.h2>
      <motion.p
        className="text-lg mb-6"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Arion is a showcase of cinematic 3D, neon parallax, and futuristic web design. Experience smooth animations, glowing highlights, and engaging interactions powered by React, TailwindCSS, Framer Motion, and Three.js.
      </motion.p>
      <div className="flex justify-center gap-8 mt-8">
        {["✨", "🚀", "🌌"].map((icon, i) => (
          <motion.span
            key={icon}
            className={i === 0 ? "text-purple-400" : i === 1 ? "text-blue-400" : "text-pink-400"}
            custom={i}
            variants={iconVariants}
            initial="initial"
            whileInView="animate"
            style={{ fontSize: "2.5rem", filter: "drop-shadow(0 0 12px #a78bfa)" }}
          >
            {icon}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default About;