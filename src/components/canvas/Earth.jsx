import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import CanvasLoader from "../Loader";
import {
  OrbitControls,
  Preload,
  useAnimations,
  useGLTF,
} from "@react-three/drei";

const Avatar = () => {
  const avatar = useGLTF("./my_final_avatar.glb");
  const { actions } = useAnimations(avatar.animations, avatar.scene);
  const group = useRef();

  useEffect(() => {
    actions.greet.play();
    return () => {
      actions.greet.stop();
    };
  }, [actions.greet]);

  useFrame(() => {
    actions.greet.play();
  });

  return (
    <group ref={group}>
      <primitive
        object={avatar.scene}
        scale={2.3}
        position={[1, -2, -3]}
        rotation={[-0.001, -0.6, -0.03]}
        onClick={() => actions.greet.play()}
      />
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 20,
        near: 0.1,
        far: 200,
        position: [-4, -1, 10],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enabled={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight />
        <hemisphereLight />
        <pointLight />
        <Avatar />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
