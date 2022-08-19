import { createRoot } from "react-dom/client";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF, Html } from "@react-three/drei";
import { Laptop } from "./utils/Laptop";
import * as THREE from "three";
import { LaptopGaming } from "./utils/LaptopGaming";

function Box({ active, setActive,position, ...props }) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <group>
      <mesh
        position={position}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 0.2, 0.8]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    </group>
  );
}

export default function Example() {
  const [active, setActive] = useState(false);
  return (
    <div className="w-screen h-screen">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 5, 8], fov: 75 }}
        gl={{
          outputEncoding: THREE.sRGBEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 3.4,
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-3.2, 5, 0]} active={active} setActive={setActive} />
        <Box position={[3.2, 5, 0]} active={active} setActive={setActive} />
        <Suspense fallback={null}>
          {/* <Laptop /> */}
          <LaptopGaming  active={active} />
        </Suspense>
        <OrbitControls autoRotate={active ? true : false} target={[0, 4, 1]} />
      </Canvas>
    </div>
  );
}
