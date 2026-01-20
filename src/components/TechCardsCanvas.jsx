import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function TechCard({ label, color, position, rotationSpeed = 0.02 }) {
  const meshRef = useRef(null);

  useFrame(({ clock, mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed * (1 + Math.sin(clock.elapsedTime) * 0.2);
      meshRef.current.rotation.y += rotationSpeed * 1.5 * (1 + Math.cos(clock.elapsedTime) * 0.2);
      meshRef.current.position.z = Math.sin(clock.elapsedTime) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial 
        color={color}
        metalness={0.7}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.3}
      />
      <meshPhongMaterial
        color={color}
        wireframe={true}
        transparent
        opacity={0.2}
        wireframeLinewidth={1.5}
      />
    </mesh>
  );
}

export default function TechCardsCanvas({ cards }) {
  const positions = [
    [-3, 0, 0],
    [0, 0, 0],
    [3, 0, 0],
  ];

  const colors = ['#3b82f6', '#8b5cf6', '#ec4899'];

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[-5, -5, -5]} intensity={0.6} color="#8b5cf6" />

        {positions.map((pos, idx) => (
          <TechCard
            key={idx}
            position={pos}
            color={colors[idx % colors.length]}
            rotationSpeed={0.015 + idx * 0.01}
          />
        ))}

        <color attach="background" args={['#111827']} />
      </Canvas>
    </div>
  );
}
