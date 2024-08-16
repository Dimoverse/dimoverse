// src/components/ModelLoader.js
'use client';

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

let modelPath: string;
const ModelLoader = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current){
        modelRef.current.rotation.y += 0.01;
    }
  })

  return <primitive object={scene} ref={modelRef} />;
};

export default ModelLoader;