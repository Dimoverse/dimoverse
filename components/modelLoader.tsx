// src/components/ModelLoader.tsx
'use client';

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface ModelLoaderProps {
  modelPath: string;
}

const ModelLoader: React.FC<ModelLoaderProps> = ({ modelPath }) => {
  // Typing useGLTF's return value (which is specific to your GLTF model)
  const { scene } = useGLTF(modelPath) as { scene: Group };

  // Type the useRef hook to accept a Three.js Group
  const modelRef = useRef<Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.05;
    }
  });

  return <primitive object={scene} ref={modelRef} />;
};

export default ModelLoader;
