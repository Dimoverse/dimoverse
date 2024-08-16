'use client';

import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, PresentationControlProps } from '@react-three/drei';
import ModelLoader from './modelLoader';


const Logo = () => {
  const [rotate, setRotate] = useState(true);


  const handlePointerDown = () => setRotate(false);
  const handlePointerUp = () => setRotate(true);
  const handlePointerLeave = () => setRotate(true);

  return (
    <Canvas style={{ width: 320, height: 320 }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <Suspense fallback={null}>
      <PresentationControls
      enabled={true} // the controls can be disabled by setting this to false
      global={false} // Spin globally or by dragging the model
      cursor={true} // Whether to toggle cursor style on drag
      snap={true} // Snap-back to center (can also be a spring config)
      speed={1} // Speed factor
      zoom={1} // Zoom factor when half the polar-max is reached
      rotation={[0, 0, 0]} // Default rotation
      polar={[0, Math.PI / 2]} // Vertical limits
      azimuth={[-Infinity, Infinity]} // Horizontal limits
      config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
      // onStart={() => setRotate(false)}
      // onEnd={() => setRotate(true)}
      >
        <ModelLoader modelPath="/models/logo.glb" rotate={rotate} /> 
      </PresentationControls>
      </Suspense>
    </Canvas>
  );
};

export default Logo;