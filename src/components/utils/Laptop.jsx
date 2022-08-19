/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import Page from "./Page";

export function Laptop(props) {
  const { nodes, materials } = useGLTF("/Laptop/Laptop.glb");
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
        />
        <group name="Base">
          <mesh
            name="Plane005"
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials.grey}
          />
          <mesh
            name="Plane005_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane005_1.geometry}
            material={materials.Black}
          />
        </group>
        <group name="Tapa">
          <mesh
            name="Plane007"
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials.Black}
          />
          <mesh
            name="Plane007_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_1.geometry}
            material={materials.grey}
          />
        </group>
        <mesh
          name="Screen"
          castShadow
          receiveShadow
          //geometry={nodes.Screen.geometry}
          //material={materials.Screen}
        >
          <Html
          className="screen"
            transform
            occlude
            position={[0, 12.851, -5.3803]}
            style={{
              overflowY:'auto',
              width: "914px",
              height: "652px",
              padding: 5,
              borderRadius: 10,
            }}
          >
            <Page/>
            <Page/>
            <Page/>
          </Html>
        </mesh>
        <mesh
          name="Teclas"
          castShadow
          receiveShadow
          geometry={nodes.Teclas.geometry}
          material={materials.Keys}
        />
        <mesh
          name="Touchpad"
          castShadow
          receiveShadow
          geometry={nodes.Touchpad.geometry}
          material={materials.Keys}
        />
        <mesh
          name="TouchpadBtns"
          castShadow
          receiveShadow
          geometry={nodes.TouchpadBtns.geometry}
          material={materials.Keys}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Laptop/Laptop.glb");
