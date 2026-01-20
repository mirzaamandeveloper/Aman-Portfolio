import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingPyramid() {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = clock.elapsedTime * 0.5;
      meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.3;
    }
  });

  const geometry = new THREE.ConeGeometry(1, 2, 4);
  
  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhongMaterial 
        color="#3b82f6"
        emissive="#1e40af"
        shininess={150}
      />
    </mesh>
  );
}

export default function SystemCanvas() {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
      <Canvas>
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
        <FloatingPyramid />
      </Canvas>
    </div>
  );
}
