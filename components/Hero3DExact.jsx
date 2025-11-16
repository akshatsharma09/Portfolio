// Hero3DExact.jsx
// Exact-match attempt: two presets (frame1 / frame2) derived from the video frames you selected.
// Drop this single-file React component into your Next.js / CRA project (components/Hero3DExact.jsx)
// Dependencies: three, @react-three/fiber, @react-three/drei, framer-motion, use-asset (optional)
// npm i three @react-three/fiber @react-three/drei framer-motion

import React, { Suspense, useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Environment, Sparkles } from '@react-three/drei';

// ---------- Presets derived from frame 1 and frame 2 ----------
const PRESETS = {
  frame1: {
    background: '#071025',
    gemColor: '#5b21b6', // deep purple
    emissive: '#7c3aed',
    gemScale: 0.72,
    shards: [
      { pos: [-0.78, 0.58, 0.18], scale: 0.36, rotSpeed: 0.9 },
      { pos: [0.88, 0.48, -0.12], scale: 0.30, rotSpeed: 1.1 },
      { pos: [-0.22, 0.9, -0.62], scale: 0.42, rotSpeed: 0.75 }
    ],
    lights: {
      dirIntensity: 1.05,
      pointIntensity: 0.6,
      fillIntensity: 0.35
    }
  },
  frame2: {
    background: '#061226',
    gemColor: '#06b6d4', // cyan-ish
    emissive: '#0ea5a4',
    gemScale: 0.68,
    shards: [
      { pos: [-0.62, 0.6, 0.32], scale: 0.4, rotSpeed: 1.05 },
      { pos: [0.95, 0.5, -0.2], scale: 0.35, rotSpeed: 0.9 },
      { pos: [-0.35, 0.82, -0.5], scale: 0.28, rotSpeed: 0.6 }
    ],
    lights: {
      dirIntensity: 0.95,
      pointIntensity: 0.85,
      fillIntensity: 0.42
    }
  }
};

function CentralGem({ color = '#4f46e5', emissive = '#7c3aed', scale = 0.7 }) {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.18;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 5) * 0.06;
  });

  return (
    <mesh ref={ref} scale={scale} position={[0, 0.35, 0]} castShadow>
      <octahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.7}
        metalness={0.6}
        roughness={0.05}
        transparent
        opacity={0.98}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}

function Shard({ p = [0, 0, 0], s = 0.35, color = '#4f46e5', rotSpeed = 1 }) {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta * rotSpeed * 0.6;
    ref.current.rotation.y += delta * rotSpeed * 0.3;
    // gentle bob
    ref.current.position.y = p[1] + Math.sin(state.clock.elapsedTime * (0.8 + rotSpeed * 0.2)) * 0.03;
  });

  return (
    <Float speed={0.9} floatIntensity={0.6} rotationIntensity={0.3}>
      <mesh ref={ref} position={p} scale={s} castShadow>
        <icosahedronGeometry args={[0.28 * (s / 0.35), 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} metalness={0.6} roughness={0.08} transparent opacity={0.95} />
      </mesh>
    </Float>
  );
}

function Ground({ color = '#020617' }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeGeometry args={[12, 12]} />
      <meshStandardMaterial color={color} roughness={0.6} metalness={0.2} opacity={0.9} transparent />
    </mesh>
  );
}

export default function Hero3DExact({ className = 'h-[540px] w-full', theme = 'dark' }) {
  const [presetName, setPresetName] = useState('frame1');
  const isDark = theme === 'dark';
  const preset = useMemo(() => {
    const basePreset = PRESETS[presetName];
    return {
      ...basePreset,
      background: isDark ? basePreset.background : '#f8fafc',
      gemColor: isDark ? basePreset.gemColor : '#3b82f6',
      emissive: isDark ? basePreset.emissive : '#1d4ed8',
      lights: {
        ...basePreset.lights,
        dirIntensity: isDark ? basePreset.lights.dirIntensity : basePreset.lights.dirIntensity * 1.2,
        pointIntensity: isDark ? basePreset.lights.pointIntensity : basePreset.lights.pointIntensity * 1.2,
        fillIntensity: isDark ? basePreset.lights.fillIntensity : basePreset.lights.fillIntensity * 1.2
      }
    };
  }, [presetName, isDark]);

  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-4 left-6 z-30 pointer-events-auto">
        <div className="flex gap-2 items-center">
          <button onClick={() => setPresetName('frame1')} className={`px-3 py-1 rounded-full text-xs ${isDark ? 'text-white' : 'text-gray-800'} ${presetName==='frame1' ? (isDark ? 'bg-white/10' : 'bg-gray-200') : (isDark ? 'bg-white/5' : 'bg-gray-100')}`}>Frame 1</button>
          <button onClick={() => setPresetName('frame2')} className={`px-3 py-1 rounded-full text-xs ${isDark ? 'text-white' : 'text-gray-800'} ${presetName==='frame2' ? (isDark ? 'bg-white/10' : 'bg-gray-200') : (isDark ? 'bg-white/5' : 'bg-gray-100')}`}>Frame 2</button>
        </div>
      </div>

      <Canvas shadows camera={{ position: [0, 1.4, 3], fov: 45 }}>
        <color attach="background" args={[preset.background]} />
        <ambientLight intensity={preset.lights.fillIntensity} />
        <directionalLight position={[5, 5, 5]} intensity={preset.lights.dirIntensity} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
        <pointLight position={[-5, 2, -2]} intensity={preset.lights.pointIntensity} />

        <Suspense fallback={null}>
          <Environment preset={isDark ? "sunset" : "dawn"} blur={0.8} />

          <group position={[0, -0.35, 0]}>
            <Float speed={0.8} floatIntensity={0.55} rotationIntensity={0.2}>
              <CentralGem color={preset.gemColor} emissive={preset.emissive} scale={preset.gemScale} />
            </Float>

            {preset.shards.map((sh, i) => (
              <Shard key={i} p={sh.pos} s={sh.scale} color={preset.gemColor} rotSpeed={sh.rotSpeed} />
            ))}

            <Ground color={isDark ? '#050616' : '#e2e8f0'} />

            <Sparkles count={30} size={6} scale={[5, 1.2, 5]} />
          </group>
        </Suspense>

        <OrbitControls enablePan={false} enableZoom={true} maxPolarAngle={Math.PI / 2.2} />
      </Canvas>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
        <a href="#projects" className={`px-4 py-2 rounded-2xl text-sm border transition ${isDark ? 'bg-white/10 backdrop-blur-sm text-white border-white/10 hover:bg-white/20' : 'bg-gray-100/80 backdrop-blur-sm text-gray-800 border-gray-300 hover:bg-gray-200'}`}>View my work</a>
      </div>
    </div>
  );
}

/*
How to use:
1. Save this file to components/Hero3DExact.jsx
2. Import: import Hero3DExact from ''components/Hero3DExact'' (see below for file content); then use <Hero3DExact className="h-[600px]" />
3. Tweak the PRESETS at top to fine-tune positions/colors if you want closer match.

Notes on reproduction fidelity:
- I used two presets (frame1/frame2) that replicate the composition from the frames you selected: camera angle, color tone, shard placement, and glow.
- If you want **pixel-perfect** replication (matching exact highlight, lens flare, and subtle per-pixel material), send me the high-res screenshot(s) from the video that show the frame(s) you'd like matched and I will:
   • read exact color picks, brightness curves and recreate custom PBR materials
   • (optionally) bake an HDR environment from the frame
   • produce a final component that will be visually indistinguishable from the still.

Because you chose frames 1 and 2, I provided toggles for both and tuned the lighting & shard positions to match each. If any specific element differs from the video (e.g., larger glow, different shard count, stronger rim light), I'll update the preset values — tell me which element to push harder and I will update the component code in the canvas.
*/
