import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function RotatingBox() {
  const meshRef = useRef(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial color="#3b82f6" shininess={100} />
    </mesh>
  );
}

function FloatingOrb({ position = [0, 0, 0], color = '#8b5cf6', scale = 1 }) {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime) * 0.5;
      meshRef.current.rotation.x = clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = clock.elapsedTime * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial color={color} shininess={120} wireframe={false} />
    </mesh>
  );
}

function AnimatedGrid() {
  const lineRef = useRef(null);

  useFrame(() => {
    if (lineRef.current) {
      lineRef.current.material.uniforms.time.value += 0.01;
    }
  });

  const points = [];
  for (let x = -10; x <= 10; x += 1) {
    for (let z = -10; z <= 10; z += 1) {
      points.push(new THREE.Vector3(x, 0, z));
    }
  }

  return (
    <lineSegments position={[0, -2, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#1e293b" linewidth={1} transparent opacity={0.3} />
    </lineSegments>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[5, 5, -5]} intensity={0.5} color="#8b5cf6" />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Lights />
        <RotatingBox />
        <FloatingOrb position={[3, 0, -2]} color="#ec4899" scale={0.8} />
        <FloatingOrb position={[-3, 0, -2]} color="#06b6d4" scale={0.6} />
        <AnimatedGrid />
        <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
