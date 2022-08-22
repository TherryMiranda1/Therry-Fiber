import * as THREE from "three";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import getUuid from "uuid-by-string";
import { LaptopGaming } from "./utils/LaptopGaming";
import { Phone } from "./utils/Phone";
import { Rack } from "./utils/Rack";



const GOLDENRATIO = 1.2;

export default function Images({ images, value, colors }) {
  const [content, setContent] = useState({ title: "", description: "" });

  return (
    <div
      className="w-screen h-screen"
      style={{
        background: value ? colors.white.background : colors.black.background,
      }}
    >
      <div className="bg- w-screen h-1/2 ">
        <Canvas
          gl={{ alpha: false }}
          dpr={[1, 1.5]}
          camera={{ fov: 70, position: [0, 2, 15] }}
        >
          <color
            attach="background"
            args={[value ? colors.white.background : colors.black.background]}
          />
          <fog
            attach="fog"
            args={[value ? colors.white.fog : colors.black.fog, 0, 15]}
          />
          <Environment preset="city" />
          <group position={[0, -0.5, 0]}>
            <Suspense fallback={null}>
              <Frames images={images} setContent={setContent} />
            </Suspense>

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
              <planeGeometry args={[50, 100]} />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={0.95}
                mixStrength={10}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color={value ? colors.white.reflector : colors.black.reflector}
                metalness={0.5}
              />
            </mesh>
          </group>
        </Canvas>
      </div>
      <div className="mt-8   w-screen h-1/2 z-10">
        <h1 className=" flex text-lg">{content.title}</h1>
        <h3>{content.description}</h3>
      </div>
    </div>
  );
}

function Frames({
  setContent,
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  });
  useFrame((state, dt) => {
    state.camera.position.lerp(p, 0.1);
    state.camera.quaternion.slerp(q, 0.25);
  });
  return (
    <group
      ref={ref}
      onClick={(e) => (
        console.log(e),
        e.stopPropagation(),
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name
        )
      )}
      onPointerMissed={() => setLocation("/")}
    >
      {images.map(
        (props) => <Frame setContent={setContent} key={props.url} {...props} /> /* prettier-ignore */
      )}
    </group>
  );
}

function Frame({
  url,
  content,
  setContent,
  description,
  c = new THREE.Color(),
  ...props
}) {
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const image = useRef();
  const frame = useRef();
  const name = getUuid(url);
  useCursor(hovered);
  useFrame((state) => {
    image.current.material.zoom =
      2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    image.current.scale.x = THREE.MathUtils.lerp(
      image.current.scale.x,
      0.96 * (hovered ? 0.95 : 1),
      0.1
    );
    image.current.scale.y = THREE.MathUtils.lerp(
      image.current.scale.y,
      0.95 * (hovered ? 0.98 : 1),
      0.1
    );
    frame.current.material.color.lerp(c.set(hovered ? "gray" : "white"), 0.1);
  });
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        onClick={() => setContent({ title: content, description: description })}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[-0.55, GOLDENRATIO / 1.8, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.95, 0.95, 0.95]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Suspense>
          <Image
            raycast={() => null}
            ref={image}
            position={[0, 0, 0.7]}
            url={url}
          />
        </Suspense>
      </mesh>
      <Suspense fallback={null}>
        <group scale={0.7} position={[0.4, GOLDENRATIO / 3, 0]}>
          <group scale={[0.95, 0.95, 0.95]} position={[0, 0, 0.2]}>
            {content === "Frontend" ? (
              <Suspense fallback={null}>
                <LaptopGaming name={name} GOLDENRATIO={GOLDENRATIO} />
              </Suspense>
            ) : null}
            <Suspense fallback={null}>
              {content === "Mobile" ? (
                <Phone name={name} GOLDENRATIO={GOLDENRATIO} />
              ) : null}
            </Suspense>
            <Suspense fallback={null}>
              {content === "Backend" ? (
                <Rack name={name} GOLDENRATIO={GOLDENRATIO} />
              ) : null}
            </Suspense>
          </group>
        </group>
      </Suspense>
    </group>
  );
}
