import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

function ArionLogo3D() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <torusGeometry args={[1.5, 0.5, 16, 100]} />
      <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={1.5} metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

const Hero = () => (
  <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white relative overflow-hidden">
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ filter: "blur(8px)" }}
    >
      <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-80" />
    </motion.div>
    <div className="text-center z-10 w-full">
      <div className="mx-auto mb-8" style={{ width: "320px", height: "320px" }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <ArionLogo3D />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>
      <motion.h1
        className="text-6xl font-extrabold mb-4 drop-shadow-lg neon-text"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Arion – Innovating the Future with Technology & Creativity.
      </motion.h1>
      <motion.p
        className="text-xl mb-8 font-light"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Vraha – Our Digital Marketing Agency.
      </motion.p>
      <motion.button
        className="px-8 py-4 bg-purple-700 hover:bg-purple-900 rounded-full text-white font-bold shadow-lg transition-all duration-300 glow"
        whileHover={{ scale: 1.1, boxShadow: "0 0 32px #a78bfa" }}
      >
        Explore Our Vision
      </motion.button>
    </div>
  </section>
);

export default Hero;