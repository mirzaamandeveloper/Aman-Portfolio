import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RotatingIcosahedron() {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 4]} />
      <meshPhongMaterial color="#3b82f6" wireframe emissive="#1e40af" />
    </mesh>
  );
}

function ParticleCloud() {
  const pointsRef = useRef(null);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = clock.elapsedTime * 0.075;
    }
  });

  const particles = new Float32Array(1500 * 3);
  for (let i = 0; i < particles.length; i += 3) {
    particles[i] = (Math.random() - 0.5) * 10;
    particles[i + 1] = (Math.random() - 0.5) * 10;
    particles[i + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={1500} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#8b5cf6" sizeAttenuation />
    </points>
  );
}

function ThreeD3DShowcase() {
  return (
    <div className="w-full h-screen bg-gray-950">
      <Canvas>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8b5cf6" />
        
        <RotatingIcosahedron />
        <ParticleCloud />
        
        <color attach="background" args={['#030712']} />
      </Canvas>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">3D Engineering Portfolio</h1>
          <p className="text-2xl text-gray-400">Beautiful geometries. Real systems.</p>
        </div>
      </div>
    </div>
  );
}

export default ThreeD3DShowcase;
