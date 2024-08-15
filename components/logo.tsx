'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ModelLoader from './modelLoader';

const Logo = () => {
  return (
    <Canvas style={{ width: 320, height: 320 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <Suspense fallback={null}>
        <ModelLoader modelPath="/models/logo.glb" /> 
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default Logo;