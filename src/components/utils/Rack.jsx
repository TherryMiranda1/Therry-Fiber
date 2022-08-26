import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export function Rack(props) {
  const mesh = useRef();
  const { nodes, materials } = useGLTF("/Rack/scene (1).glb");
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));
  return (
    <group ref={mesh} {...props} dispose={null}>
      <group>
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, Math.PI / 0.8]}
          scale={0.55}
          position={[0.1, -0.4, 0]}
        >
          <group name="ServerV2+consoleobjcleanermaterialmergergles">
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.console_auv}
            />
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Cube1_auv}
            />
            <mesh
              name="Object_3"
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.Cube12_auv}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Rack/scene (1).glb");
