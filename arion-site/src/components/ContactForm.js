import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => (
  <section className="py-24 px-6 bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white relative overflow-hidden">
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 2 }}
      style={{ background: "radial-gradient(circle at 20% 40%, #0ea5e9 0%, transparent 60%), radial-gradient(circle at 80% 60%, #7c3aed 0%, transparent 60%)", filter: "blur(32px)", opacity: 0.5 }}
    />
    <div className="max-w-xl mx-auto glassmorphism rounded-xl p-8 shadow-lg relative z-10">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center neon-text"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Let’s Collaborate – Build with Arion & Vraha.
      </motion.h2>
      <form className="flex flex-col gap-4">
        <motion.input
          type="text"
          placeholder="Name"
          className="px-4 py-2 rounded bg-black bg-opacity-40 border-2 border-purple-700 neon-border text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
          whileFocus={{ scale: 1.05, boxShadow: "0 0 16px #7c3aed" }}
        />
        <motion.input
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded bg-black bg-opacity-40 border-2 border-purple-700 neon-border text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
          whileFocus={{ scale: 1.05, boxShadow: "0 0 16px #0ea5e9" }}
        />
        <motion.input
          type="text"
          placeholder="Project Idea"
          className="px-4 py-2 rounded bg-black bg-opacity-40 border-2 border-purple-700 neon-border text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
          whileFocus={{ scale: 1.05, boxShadow: "0 0 16px #a78bfa" }}
        />
        <motion.input
          type="text"
          placeholder="Budget"
          className="px-4 py-2 rounded bg-black bg-opacity-40 border-2 border-purple-700 neon-border text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
          whileFocus={{ scale: 1.05, boxShadow: "0 0 16px #7c3aed" }}
        />
        <motion.textarea
          placeholder="Message"
          className="px-4 py-2 rounded bg-black bg-opacity-40 border-2 border-purple-700 neon-border text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
          rows={4}
          whileFocus={{ scale: 1.03, boxShadow: "0 0 16px #0ea5e9" }}
        />
        <motion.button
          type="submit"
          className="px-6 py-3 bg-purple-700 hover:bg-purple-900 rounded-full text-white font-bold shadow-lg transition-all duration-300 glow neon-border"
          whileHover={{ scale: 1.08, boxShadow: "0 0 32px #a78bfa" }}
        >
          Send Message
        </motion.button>
      </form>
    </div>
  </section>
);

export default ContactForm;