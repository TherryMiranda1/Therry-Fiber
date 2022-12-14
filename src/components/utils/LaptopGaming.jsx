/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export function LaptopGaming(active,GOLDENRATIO, ...props) {
  const { nodes, materials } = useGLTF("/LaptopGaming3.glb");

  const meshLaptop = useRef();

  useFrame((state, delta) => {
    if (active===true) {
        console.log(active)
      meshLaptop.current.rotation.y += 0.002;
    }
  });
  useFrame((state, delta) => (meshLaptop.current.rotation.y += 0.01));
  return (
    <group ref={meshLaptop} {...props}  position={[0, 0.02, 0]} scale={0.6} rotation={[ 0, Math.PI / 0.3, Math.PI / 0.05]} dispose={null}>
      <group name="Scene">
        <group
          name="Cube001"
          position={[-1.18, 0.2, 0.03]}
          rotation={[0.01, 0.04, -1.55]}
        >
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Cube001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="Cube001_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_3.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Cube001_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_4.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Cube001_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_5.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            name="Cube001_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_6.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            name="Cube001_7"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_7.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            name="Cube001_8"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_8.geometry}
            material={materials["Material.013"]}
          />
        </group>
        <group
          name="Cube003"
          position={[-0.02, -0.1, -0.03]}
          rotation={[0.01, 0.04, -0.17]}
        >
          <mesh
            name="Cube003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cube003_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_2.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            name="Cube003_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_3.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Cube003_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_4.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Cube003_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_5.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            name="Cube003_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_6.geometry}
            material={materials["Material.012"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/LaptopGaming3.glb");
