// 3D-Hero-Model.jsx
// A self-contained React component (single-file) you can drop into a Next.js / Create React App project.
// What it does: creates a polished floating 3D 'hero' model made from primitives, soft lights, particles and subtle animation.
// Install these dependencies before using:
// npm install three @react-three/fiber @react-three/drei framer-motion
// or
// yarn add three @react-three/fiber @react-three/drei framer-motion

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Html, Stars, Sparkles, Environment } from "@react-three/drei";

// -- Helper: a stylized low-poly 'object' made of combined primitives --
function LowPolySculpture({ color = "#60a5fa" }) {
  const ref = useRef();
  useFrame((state, delta) => {
    // gentle rotation
    ref.current.rotation.y += delta * 0.15;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 6) * 0.08;
  });

  return (
    <group ref={ref} position={[0, 0.2, 0]}>
      {/* Base disc */}
      <mesh castShadow receiveShadow position={[0, -0.45, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.4, 1.6, 0.1, 48]} />
        <meshStandardMaterial metalness={0.2} roughness={0.4} color="#0f172a" />
      </mesh>

      {/* Central gem (octa-like) */}
      <mesh position={[0, 0.35, 0]}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial emissive={color} emissiveIntensity={0.6} metalness={0.5} roughness={0.1} transparent opacity={0.95} />
      </mesh>

      {/* Layered rings */}
      {[0.85, 1.05, 1.25].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.05 + i * 0.02, 0]}>
          <ringGeometry args={[r - 0.03, r, 64]} />
          <meshStandardMaterial color={i % 2 === 0 ? "#1e293b" : "#0b1220"} roughness={0.6} metalness={0.2} />
        </mesh>
      ))}

      {/* Floating shards */}
      {[[-0.8, 0.6, 0.2], [0.9, 0.45, -0.1], [-0.25, 0.85, -0.6]].map((p, i) => (
        <Float key={i} speed={1 + i * 0.4} floatIntensity={0.6} rotationIntensity={0.3}>
          <mesh position={p} scale={0.35 + i * 0.1}>
            <icosahedronGeometry args={[0.26 + i * 0.06, 0]} />
            <meshStandardMaterial color={color} metalness={0.6} roughness={0.08} emissive={color} emissiveIntensity={0.35} transparent opacity={0.9} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// -- Scene wrapper (isolated so you can import just <Hero3D />) --
export default function Hero3D({ className = "h-[480px] w-full", theme = "dark" }) {
  const isDark = theme === "dark";
  const backgroundColor = isDark ? "#071025" : "#f8fafc";
  const environmentPreset = isDark ? "night" : "sunset";
  const sculptureColor = isDark ? "#4f46e5" : "#3b82f6";
  const groundColor = isDark ? "#020617" : "#e2e8f0";

  return (
    <div className={`relative ${className}`}>
      {/* Overlay HTML for content (optional) */}
      <div className="absolute left-6 top-6 z-20 pointer-events-none">
        <div className={`text-sm font-medium ${isDark ? 'text-white/80' : 'text-gray-700'}`}>3D • Interactive</div>
      </div>

      <Canvas shadows camera={{ position: [0, 1.4, 3], fov: 45 }}>
        <color attach="background" args={[backgroundColor]} />

        <Suspense fallback={null}>
          {/* Environment and soft lights */}
          <ambientLight intensity={isDark ? 0.35 : 0.5} />
          <directionalLight castShadow position={[5, 5, 5]} intensity={isDark ? 1 : 1.2} shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
          <pointLight position={[-6, 3, -3]} intensity={isDark ? 0.6 : 0.8} />

          <Environment preset={environmentPreset} blur={0.8} />

          {/* Decorative star-field and sparkles for polish */}
          {isDark && <Stars radius={50} depth={10} count={2000} factor={4} fade />}
          <Sparkles size={8} scale={[6, 1.2, 6]} backface />

          {/* Center object */}
          <group position={[0, -0.35, 0]}>
            <Float speed={0.8} floatIntensity={0.6} rotationIntensity={0.2}>
              <LowPolySculpture color={sculptureColor} />
            </Float>

            {/* Ground reflection plane (subtle) */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
              <planeGeometry args={[12, 12]} />
              <meshStandardMaterial color={groundColor} roughness={0.6} metalness={0.2} opacity={0.9} transparent />
            </mesh>
          </group>

        </Suspense>

        {/* Camera controls: use when developing. Remove or lock on production if you want no interaction */}
        <OrbitControls enablePan={false} enableZoom={true} maxPolarAngle={Math.PI / 2.2} />
      </Canvas>

      {/* Small CTA overlay, you can remove this block or style it differently */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
        <button className={`px-4 py-2 rounded-2xl text-sm border transition ${isDark ? 'bg-white/10 backdrop-blur-sm text-white border-white/10 hover:bg-white/20' : 'bg-gray-100/80 backdrop-blur-sm text-gray-800 border-gray-300 hover:bg-gray-200'}`}>
          View my work
        </button>
      </div>
    </div>
  );
}
