 <group position={[0, -0.9, 0]}>
              <Plane
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
              />

              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
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
                    value ? colors.white.reflector : colors.black.reflector
                  }
                  metalness={0.5}
                />
              </mesh>
            </group>