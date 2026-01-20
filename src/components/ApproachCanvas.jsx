import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ApproachGeometry({ type, color, speed }) {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * speed;
      meshRef.current.rotation.y = clock.elapsedTime * speed * 0.8;
      meshRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'brain':
        return <sphereGeometry args={[1, 32, 32]} />;
      case 'lightning':
        return <boxGeometry args={[0.8, 2, 0.8]} />;
      case 'code':
        return <tetrahedronGeometry args={[1.2]} />;
      default:
        return <sphereGeometry args={[1, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef}>
      {getGeometry()}
      <meshStandardMaterial 
        color={color}
        metalness={0.8}
        roughness={0.1}
        emissive={color}
        emissiveIntensity={0.4}
      />
      <meshPhongMaterial
        color={color}
        wireframe
        wireframeLinewidth={1}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export default function ApproachCanvas({ type, color, speed = 0.5 }) {
  return (
    <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color={color} />
        <pointLight position={[-5, -5, 5]} intensity={0.5} />

        <ApproachGeometry type={type} color={color} speed={speed} />

        <color attach="background" args={['#1f2937']} />
      </Canvas>
    </div>
  );
}
