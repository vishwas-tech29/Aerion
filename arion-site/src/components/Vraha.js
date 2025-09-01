import React from "react";
import { motion } from "framer-motion";

const services = [
  { icon: "🎨", label: "Branding & Identity", color: "text-purple-400" },
  { icon: "📱", label: "Social Media Marketing", color: "text-blue-400" },
  { icon: "📈", label: "Ad Campaigns", color: "text-cyan-400" },
  { icon: "🔍", label: "SEO & Growth Strategy", color: "text-pink-400" },
  { icon: "💡", label: "Creative Design", color: "text-yellow-400" }
];

const iconVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: (i) => ({ scale: 1.2, opacity: 1, transition: { delay: i * 0.15, duration: 0.6, type: "spring" } })
};

const Vraha = () => (
  <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 0.5, y: 0 }}
      transition={{ duration: 1.5 }}
      style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)", filter: "blur(32px)", opacity: 0.5 }}
    />
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <motion.h2
        className="text-4xl font-bold mb-4 neon-text"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Vraha – Crafting Digital Stories that Inspire.
      </motion.h2>
      <motion.p
        className="text-lg mb-6"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Explore our futuristic services with animated icons and glowing effects.
      </motion.p>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {services.map((service, i) => (
          <motion.div
            key={service.label}
            className={`flex flex-col items-center ${service.color}`}
            custom={i}
            variants={iconVariants}
            initial="initial"
            whileInView="animate"
          >
            <span className="text-5xl mb-2 drop-shadow-lg glow">{service.icon}</span>
            <span className="text-base font-semibold neon-text text-white mt-1">{service.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Vraha;