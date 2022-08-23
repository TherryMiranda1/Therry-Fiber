import * as THREE from "three";
import { useEffect, useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  RoundedBox,
  useCursor,
  OrbitControls,
  MeshReflectorMaterial,
  Text,
} from "@react-three/drei";
import { Effects } from "../components/ejemplo2/Effects";
import { Laptop } from "./utils/Laptop";
import { LaptopGaming } from "./utils/LaptopGaming";
import { Phone } from "./utils/Phone";
import { Rack } from "./utils/Rack";
import Deck from "../components/cards/Cards";
import { Camera } from "./Camera/Camera";
import { gsap } from "gsap";
import PresentationScreen from "./PresentationScreen";
import TextScreen from "./TextScreen";

const Example2 = ({ value, colors }) => {
  const [item, setItem] = useState(null);
  const [showLaptop, setShowLaptop] = useState(false);
  const [showRack, setShowRack] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showTitles, setShowTitles] = useState(false);
  const [showScreen, setShowScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 2000);
    setTimeout(() => {
      setShowLaptop(true);
    }, 4000);
    setTimeout(() => {
      setShowRack(true);
    }, 4000);
    setTimeout(() => {
      setShowPhone(true);
    }, 4000);
    setTimeout(() => {
      setShowTitles(true);
    }, 4000);
  }, []);
  return (
    <div
      className="w-screen h-screen"
      style={{
        background: value ? colors.white.background : colors.black.background,
      }}
    >
      <div className="w-screen h-1/2 ">
        {showScreen ? (
          <Canvas
            shadows
            gl={{
              logarithmicDepthBuffer: true,
              antialias: true,
              stencil: false,
              depth: true,
              alpha: false,
            }}
          >
            <Camera />
            <color
              attach="background"
              args={[value ? colors.white.background : colors.black.reflector]}
            />
            <hemisphereLight intensity={0.5} />
            <directionalLight position={[0, 2, 5]} castShadow intensity={1} />
            <group position={[2, -2, 0]}>
              <Video />

              
                <Suspense fallback={null}>
                     <group position={[0, -0.9, 0]}>
                      {/* <Plane
                        text={"Mobile"}
                        value={value}
                        color={value ? "#D7D7D7" : "#595959"}
                        rotation-x={-Math.PI / 2}
                        position={[0, 0.5, -10]}
                        textPosition={[2.5, 1, -9.5]}
                        scale={[2, 4, 1]}
                      />
                      <Plane
                        text={"Backend"}
                        value={value}
                        color={value ? "#D7D7D7" : "#595959"}
                        rotation-x={-Math.PI / 2}
                        position={[0, 0.5, 0]}
                        textPosition={[2.5, 1, 0.5]}
                        scale={[2, 4, 1]}
                      />
                      <Plane
                        text={"Frontend"}
                        value={value}
                        color={value ? "#D7D7D7" : "#595959"}
                        rotation-x={-Math.PI / 2}
                        position={[0, 0.5, 10]}
                        textPosition={[2.5, 1, 10.8]}
                        scale={[2, 4, 1]}
                      /> */}

                      <mesh
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, 0, 0]}
                      >
                        <planeGeometry args={[10, 40]} />
                        <MeshReflectorMaterial
                          blur={[300, 100]}
                          resolution={2048}
                          mixBlur={0.9}
                          mixStrength={value ? 10 : 60}
                          roughness={1}
                          depthScale={1.2}
                          minDepthThreshold={0.4}
                          maxDepthThreshold={1.4}
                          color={
                            value
                              ? colors.white.reflector
                              : colors.black.reflector
                          }
                          metalness={0.5}
                        />
                      </mesh>
                    </group> 

                  <Sphere item={item} setItem={setItem} />
                  <Suspense fallback={null}>
                    <Sphere2 item={item} setItem={setItem} />
                    <Suspense fallback={null}>
                      <Sphere3 item={item} setItem={setItem} />
                    </Suspense>
                  </Suspense>
                </Suspense>
            </group>
            {/* <Effects /> */}
            <OrbitControls
              enablePan={false}
              enableDamping={true}
              keys={true}
              enableZoom={false}
            />
          </Canvas>
        ) : (
          <PresentationScreen />
        )}
      </div>
      <TextScreen item={item} value={value} colors={colors}/>
    </div>
  );
};

function Sphere({ item, setItem }) {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [zoom, set] = useState(true);

  useCursor(active);
  useFrame((state) => {
    state.camera.position.lerp({ x: 25, y: 5, z: 10 }, 0.08);
    item !== 1
      ? null
      : state.camera.position.lerp({ x: 20, y: 0, z: -10 }, 0.08);
    item === 1 ? state.camera.lookAt(0, 0, 10) : null;
  });

  return (
    <group
      ref={ref}
      position={[0, 2, 10]}
      receiveShadow
      castShadow
      onClick={() => {
        item === 1 ? setItem(null) : setItem(1);
        set(!zoom);
      }}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
    >
      <Suspense fallback={null}>
        <LaptopGaming />
      </Suspense>
    </group>
  );
}

function Sphere2({ item, setItem }) {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [zoom, set] = useState(true);
  useCursor(active);
  useFrame((state) => {
    item !== 2
      ? null
      : state.camera.position.lerp({ x: 22, y: 0, z: -40 }, 0.02);
    item === 2 ? state.camera.lookAt(0, 0, 0) : null;
  });
  return (
    <mesh
      ref={ref}
      position={[0, 2, 0]}
      receiveShadow
      castShadow
      onClick={() => {
        item === 2 ? setItem(null) : setItem(2);
        set(!zoom);
      }}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
    >
      <Suspense fallback={null}>
        <Rack />
      </Suspense>
    </mesh>
  );
}

function Sphere3({ item, setItem }) {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [zoom, set] = useState(true);
  useCursor(active);
  useFrame((state) => {
    item !== 3
      ? null
      : state.camera.position.lerp({ x: 25, y: -5, z: -58 }, 0.02);
    item === 3 ? state.camera.lookAt(0, 0, -10) : null;
  });
  useEffect(() => {
    setTimeout(() => {
      ref.current.position.y = 2;
    }, 1000);
  }, []);
  return (
    <mesh
      ref={ref}
      position={[0, 2, -10]}
      receiveShadow
      castShadow
      onClick={() => {
        item === 3 ? setItem(null) : setItem(3);
        set(!zoom);
      }}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
    >
      <Suspense fallback={null}>
        <Phone />
      </Suspense>
    </mesh>
  );
}

const Plane = ({ text, color, value, textPosition, ...props }) => (
  <group>
    <RoundedBox
      receiveShadow
      castShadow
      smoothness={10}
      radius={0.08}
      {...props}
    >
      <meshStandardMaterial
        color={color}
        envMapIntensity={0.5}
        roughness={0}
        metalness={value ? 0.1 : 0.5}
      />
    </RoundedBox>
    <Text
      maxWidth={0.1}
      anchorX="left"
      anchorY="top"
      fontSize={0.35}
      position={textPosition}
      rotation-y={-Math.PI / 0.285}
    >
      {text}
    </Text>
  </group>
);

function Video() {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/drei_r.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <mesh
      position={[-2, 4, 0]}
      rotation={[0, Math.PI / 2, 0]}
      scale={[27, 10, 1]}
    >
      <planeGeometry />
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </mesh>
  );
}

export default Example2;
