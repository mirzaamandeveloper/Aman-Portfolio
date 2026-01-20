import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SkillCube({ label, color, speed = 1 }) {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * speed * 0.5;
      meshRef.current.rotation.y = clock.elapsedTime * speed * 0.7;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshPhongMaterial 
        color={color} 
        shininess={100}
        wireframe={true}
        wireframeLinewidth={2}
      />
      <meshPhongMaterial color={color} opacity={0.1} transparent attach="material-1" />
    </mesh>
  );
}

export default function SkillCanvas({ label, color }) {
  return (
    <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
      <Canvas>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color={color} />
        <SkillCube label={label} color={color} />
      </Canvas>
    </div>
  );
}
