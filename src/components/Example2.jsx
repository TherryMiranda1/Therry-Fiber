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
import { Laptop } from "./utils/Laptop";
import { LaptopGaming } from "./utils/LaptopGaming";
import { Phone } from "./utils/Phone";
import { Rack } from "./utils/Rack";
import { Camera } from "./Camera/Camera";
import gsap from "gsap";
import PresentationScreen from "./PresentationScreen";
import TextScreen from "./TextScreen";
import { getDeviceType } from "./Camera/Camera";

const timeline = new gsap.timeline({
  defaults: {
    duration: 1,
  },
});

const moveItem = (ref) => {
  if (!!ref.current) {
    timeline.from(
      ref.current.position,
      {
        y: 15,
        ease: "bounce.out",
      },
      "+=0.5"
    );
  }
};

const Example2 = ({ value, colors }) => {
  const [item, setItem] = useState(1);
  const [showScreen, setShowScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 1500);
  }, []);

  return (
    <div
      className="w-screen  h-screen"
      style={{
        background: value ? colors.white.background : colors.black.background,
      }}
    >
      <div className="w-full h-screen m-auto">
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
            <group position={[2, -1.5, 0]}>
              <Video />
              <Suspense fallback={null}>
                <group position={[0, 0.9, 0]}>
                  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                    <planeGeometry args={[40, 40]} />
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
                        value ? colors.white.reflector : colors.black.reflector
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
      <div
        style={{
          background: value ? colors.white.background : colors.black.background,
        }}
      >
        <TextScreen item={item} value={value} colors={colors} />
      </div>
    </div>
  );
};

function Sphere({ item, setItem, text }) {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [zoom, set] = useState(true);

  useCursor(active);
  useFrame((state) => {
    state.camera.position.lerp({ x: 25, y: 5, z: 10 }, 0.08);
    window.innerWidth < 800 && getDeviceType() === "mobile"
      ? state.camera.setFocalLength(35)
      : state.camera.setFocalLength(66);
    item !== 1
      ? null
      : state.camera.position.lerp({ x: 20, y: 0, z: -10 }, 0.08);
    item === 1 ? state.camera.lookAt(-5, 0, 5) : null;
  });

  useEffect(() => {
    moveItem(ref);
  }, []);

  return (
    <group
      ref={ref}
      position={[0, 1.2, 5]}
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
      <Text
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        fontSize={0.5}
        position={[-2, 3, 0]}
        rotation-y={-Math.PI / 0.285}
        color={"black"}
      >
        Frontend
      </Text>
      <Text
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        fontSize={0.49}
        position={[-2, 3, 0]}
        rotation-y={-Math.PI / 0.285}
        color={"white"}
      >
        Frontend
      </Text>
    </group>
  );
}

function Sphere2({ item, setItem, text }) {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [zoom, set] = useState(true);
  useCursor(active);

  useFrame((state) => {
    item !== 2
      ? null
      : state.camera.position.lerp({ x: 22, y: 5, z: -40 }, 0.04);
    item === 2 ? state.camera.lookAt(0, 0, 0) : null;

    //state.camera.setFocalLength(40)
  });

  useEffect(() => {
    moveItem(ref);
  }, []);

  return (
    <mesh
      ref={ref}
      position={[0, 1.2, 0]}
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
      <Text
        position={[-2, 3.2, 0]}
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        fontSize={0.5}
        rotation-y={-Math.PI / 0.285}
        color={"black"}
      >
        Backend
      </Text>
      <Text
        position={[-2, 3.2, 0]}
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        fontSize={0.49}
        rotation-y={-Math.PI / 0.285}
        color={"white"}
      >
        Backend
      </Text>
    </mesh>
  );
}

function Sphere3({ item, setItem, text }) {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [zoom, set] = useState(true);
  useCursor(active);

  useFrame((state) => {
    item !== 3
      ? null
      : state.camera.position.lerp({ x: 25, y: -5, z: -58 }, 0.02);
    item === 3 ? state.camera.lookAt(0, 0, -5) : null;
  });

  useEffect(() => {
    moveItem(ref);
  }, []);
  return (
    <mesh
      ref={ref}
      position={[0, 1.2, -5]}
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
      <Text
        shadows={true}
        position={[-0.9, 3, 0.6]}
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        fontSize={0.5}
        rotation-y={-Math.PI / 0.285}
        color={"black"}
      >
        Mobile
      </Text>
      <Text
        shadows={true}
        position={[-0.9, 3, 0.6]}
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        fontSize={0.49}
        rotation-y={-Math.PI / 0.285}
        color={"white"}
      >
        Mobile
      </Text>
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
      scale={[16, 6, 1]}
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
