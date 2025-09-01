import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, Float } from "@react-three/drei";

export default function Logo3D() {
  const torusRef = useRef();

  useFrame((state, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.2;
      torusRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.25, 32, 64]} />
        <meshStandardMaterial
          metalness={0.6}
          roughness={0.2}
          emissive="#2ce1ff"
          emissiveIntensity={0.6}
          color="#6ec9ff"
        />
      </mesh>

      {/* center sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.45, 32, 32]} />
        <MeshWobbleMaterial factor={0.2} speed={2} roughness={0.1} emissive="#a96bff" />
      </mesh>
    </Float>
  );
}
