import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export function Phone(props) {
  const mesh = useRef();
  const { nodes, materials } = useGLTF("/Phone/phone2.glb");
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));
  return (
    <group ref={mesh} {...props} dispose={null}>
      <group>
      <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={15}
          position={[-0.5, -0.3, 0]}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="6_holes_0" position={[0.03704999, 0.00116542, 0]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Matt_Black_Plastic}
                />
              </group>
              <group
                name="Chargeing_port_1"
                position={[0.03704999, 0.00111005, 0]}
                scale={[0.99989998, 2.99970007, 0.99989998]}
              >
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials["Matt_Black_Plastic.001"]}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Silver}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.Matt}
                />
              </group>
              <group
                name="Circle001_23"
                position={[0.04573262, 0.13474785, -0.00498504]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.41886258}
              >
                <mesh
                  name="Object_61"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61.geometry}
                  material={materials["Rubber.002"]}
                />
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials["Glass.002"]}
                />
                <mesh
                  name="Object_63"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_63.geometry}
                  material={materials["Phone_color.010"]}
                />
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials["Matt_Black_Plastic.007"]}
                />
              </group>
              <group
                name="Circle002_3"
                position={[0.05911108, 0.12644206, -0.00498504]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.7426703}
              >
                <mesh
                  name="Object_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={materials.Black_Screen}
                />
                <mesh
                  name="Object_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials["Matt_Black_Plastic.003"]}
                />
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials["Glass.001"]}
                />
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials["Phone_color.001"]}
                />
              </group>
              <group
                name="Circle006_4"
                position={[0.04576585, 0.143517, -0.00507367]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.35442197}
              >
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials["Phone_color.002"]}
                />
              </group>
              <group
                name="Circle007_5"
                position={[0.04576585, 0.143517, -0.00507367]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.35442197}
              >
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Circle008_6"
                position={[0.04576585, 0.1238382, -0.00507367]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[2.69636965, 1.35442197, 2.69636965]}
              >
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials["Phone_color.003"]}
                />
                <mesh
                  name="Object_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials["Material.004"]}
                />
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.Plastic_Glass}
                />
              </group>
              <group
                name="Circle_2"
                position={[0.05911108, 0.14310943, -0.00498504]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.4188627}
              >
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Rubber}
                />
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Phone_color}
                />
                <mesh
                  name="Object_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.Glass}
                />
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials["Matt_Black_Plastic.002"]}
                />
              </group>
              <group
                name="Cube_7"
                position={[0.05281496, 0.13478336, -0.0046374]}
                scale={[1.04711628, 1.14097583, 1.14097583]}
              >
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials["Phone_color.004"]}
                />
              </group>
              <group
                name="Cylinder002_9"
                position={[0.0318894, 0.15785517, -0.00048353]}
              >
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials["Matt_Black_Plastic.005"]}
                />
              </group>
              <group
                name="Cylinder_8"
                position={[0.03594444, 0.15445299, 0.00412107]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.28338319}
              >
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials["Matt_Black_Plastic.004"]}
                />
              </group>
              <group
                name="Headphone_Jack_10"
                position={[0.01838007, 0.00103002, -0.00048353]}
                scale={[0.94612372, 1, 0.94612372]}
              >
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials["Matt_Black_Plastic.006"]}
                />
              </group>
              <group
                name="Phone_Rim_11"
                position={[0.03704999, 0.07898028, 0]}
                scale={[0.99379224, 1.00333273, 1]}
              >
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials["Phone_color.005"]}
                />
              </group>
              <group
                name="Power_12"
                position={[0.0741, 0.104843, 0]}
                scale={[1, 1.03339779, 1]}
              >
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials["Phone_color.006"]}
                />
              </group>
              <group
                name="Rubber_things001_13"
                position={[0.03704999, 0.07898028, 0]}
                scale={[0.99379224, 1.00333273, 1]}
              >
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials["Rubber.001"]}
                />
              </group>
              <group
                name="Screen_+back_14"
                position={[0.03705, 0.07898028, 0]}
                scale={[1, 1, 1.0000056]}
              >
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials["Phone_color.007"]}
                />
                <mesh
                  name="Object_43"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_43.geometry}
                  material={materials["Black_Screen.001"]}
                />
              </group>
              <group
                name="Sim_card_thingys__15"
                position={[0.0229505, 0.1578798, -0.00048353]}
                scale={[1, 1, 0.71159792]}
              >
                <mesh
                  name="Object_45"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_45.geometry}
                  material={materials["Phone_color.008"]}
                />
              </group>
              <group
                name="Sphere001_17"
                position={[0.05911108, 0.14310943, -0.00458702]}
                scale={[0.00093051, 0.00093051, 0.00065441]}
              >
                <mesh
                  name="Object_49"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_49.geometry}
                  material={materials["Lems.001"]}
                />
              </group>
              <group
                name="Sphere002_18"
                position={[0.04573262, 0.13474785, -0.00458702]}
                scale={[0.00144318, 0.00144318, 0.00101497]}
              >
                <mesh
                  name="Object_51"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_51.geometry}
                  material={materials["Lems.002"]}
                />
              </group>
              <group
                name="Sphere003_19"
                position={[0.04573262, 0.13474785, -0.00458702]}
                scale={[0.00093051, 0.00093051, 0.00065441]}
              >
                <mesh
                  name="Object_53"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_53.geometry}
                  material={materials["Lems.003"]}
                />
              </group>
              <group
                name="Sphere004_20"
                position={[0.05912606, 0.12638481, -0.00458702]}
                scale={[0.00195309, 0.00195309, 0.00108832]}
              >
                <mesh
                  name="Object_55"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_55.geometry}
                  material={materials["Lems.004"]}
                />
              </group>
              <group
                name="Sphere005_21"
                position={[0.05912606, 0.12638481, -0.00458702]}
                scale={[0.00125928, 0.00125928, 0.00088564]}
              >
                <mesh
                  name="Object_57"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_57.geometry}
                  material={materials["Lems.005"]}
                />
              </group>
              <group
                name="Sphere_16"
                position={[0.05911108, 0.14310943, -0.00458702]}
                scale={[0.00144318, 0.00144318, 0.00101497]}
              >
                <mesh
                  name="Object_47"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_47.geometry}
                  material={materials.Lems}
                />
              </group>
              <group name="Volume_rocker_22" position={[0, 0.1123428, 0]}>
                <mesh
                  name="Object_59"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_59.geometry}
                  material={materials["Phone_color.009"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Phone/phone2.glb");
