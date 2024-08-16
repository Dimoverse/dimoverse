// src/components/ModelLoader.tsx
'use client';

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface ModelLoaderProps {
  modelPath: string;
  rotate: boolean;
}

const ModelLoader: React.FC<ModelLoaderProps> = ({ modelPath, rotate }) => {
  const { scene } = useGLTF(modelPath) as { scene: Group };

  const modelRef = useRef<Group>(null);

  useFrame(() => {
    if (modelRef.current && rotate) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive object={scene} ref={modelRef} />;
};

export default ModelLoader;
