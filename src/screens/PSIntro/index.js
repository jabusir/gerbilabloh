import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { Billboard } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Effects from "./Effects";
import { Text } from "troika-three-text";
import fonts from "./fonts";
import useSound from "use-sound";
import { useNavigate } from "react-router-dom";

extend({ Text });

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh.current !== undefined) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 * props.scale : 1 * props.scale}
      onClick={(e) => setActive(!active)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        attach="material"
        clearcoat={0.0}
        clearcoatRoughness={0}
        metalness={0}
        roughness={0}
        color={"#fff"}
        transmission={1.0}
        opacity={1.0}
        lightIntensity={1.0}
        envMapIntensity={1.0}
      />
    </mesh>
  );
}

const Sphere = ({ color, a, b, c, phase }) => {
  const [t, setT] = useState(0);
  useFrame(() => {
    setT(t + 0.01);
  });

  const r = 1.3 * (Math.sin(t * t * c + phase) + 2) * 1.5;
  const pos = [
    r * Math.cos(t * a + phase),
    r * Math.sin(t * b + phase),
    -1 * Math.sin(t / 1000.0 + phase) - 2,
  ];

  return (
    <>
      <mesh position={pos}>
        <sphereGeometry args={[0.05, 64, 64]} />
        <meshBasicMaterial attach="material" color={color} />
      </mesh>
      <pointLight position={pos} color={color} />
    </>
  );
};

const OrbitingBoxes = () => {
  const [t, setT] = useState(0);
  useFrame(() => {
    setT(t + 0.01);
  });

  const r = 0.5 * (Math.sin(t * 0.5) + 2) * 1.5;

  return (
    <>
      <Box
        scale={1}
        position={[r * Math.cos(t), r * Math.sin(t), 0]}
        color="#FF5555"
      />
      <Box
        scale={1}
        position={[
          1.2 * r * Math.cos(t * 1.2 + (Math.PI / 3) * 2),
          1.5 * r * Math.sin(t + (Math.PI / 3) * 2),
          0,
        ]}
        color="#55BB55"
      />
      <Box
        scale={1}
        position={[
          3 * r * Math.cos(t + (Math.PI / 3) * 2 * 2),
          0.5 * r * Math.sin(t * 2 + (Math.PI / 3) * 2 * 2),
          0,
        ]}
        color="#5555FF"
      />
    </>
  );
};

const Pillar = ({ position, depth }) => {
  const [x, y, z] = position;
  const pos = [x, y, z - depth / 2];
  return (
    <mesh position={pos} rotation={[0, 0, 0.1]}>
      <boxGeometry args={[0.8, 0.8, depth]} />
      {/* <meshLambertMaterial color={hovered ? 'hotpink' : props.color} /> */}
      <meshPhysicalMaterial
        attach="material"
        clearcoat={1.0}
        clearcoatRoughness={0}
        metalness={0.8}
        roughness={0}
        color={"#aaa"}
        opacity={1.0}
        lightIntensity={1.0}
        envMapIntensity={1.0}
      />
    </mesh>
  );
};

const Clouds = () => {
  const [billboardTexture, alpha] = useLoader(TextureLoader, [
    "assets/ps2_clouds.png",
  ]);

  return (
    <Billboard position={[0, 0, -10]} args={[40, 30]}>
      <meshBasicMaterial attach="material" map={billboardTexture} />
    </Billboard>
  );
};

const Dolly = () => {
  useFrame(({ clock, camera }) => {
    camera.position.z = 5 + Math.sin(clock.getElapsedTime()) * 1;
    camera.rotation.z = Math.sin(clock.getElapsedTime() * 2) * 0.1;
  });
  return null;
};

const PSIntro = () => {
  const [play] = useSound("assets/ps2_startup_trimmed.mp3", { volume: 0.2 });
  let navigate = useNavigate();

  useEffect(() => {
    play();
    setTimeout(() => navigate("/about"), 5000);
  }, [play, navigate]);

  return (
    <div>
      <Suspense fallback={null}>
        <Canvas
          gl={{ antialias: false }}
          dpr={1}
          style={{
            width: "100vw",
            height: "100vh",
            imageRendering: "pixelated",
          }}
        >
          <Dolly />
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={4} />
          <spotLight position={[-10, 10, 10]} angle={-0.15} penumbra={4} />
          <pointLight position={[-10, -10, -10]} />

          <text
            position-z={1}
            rotation={[0, 0, 0]}
            text={"A Jejo Original"}
            font={fonts["Roboto"]}
            fontSize={0.5}
            outlineColor="black"
            outlineWidth={0.05}
            anchorX="center"
            anchorY="middle"
          >
            <meshPhongMaterial attach="material" color={"#FFF"} />
          </text>

          <text
            position-z={1}
            position-y={-0.5}
            rotation={[0, 0, 0]}
            text={"(c) 2000"}
            font={fonts["Roboto"]}
            fontSize={0.3}
            outlineColor="black"
            outlineWidth={0.05}
            anchorX="center"
            anchorY="middle"
          >
            <meshPhongMaterial attach="material" color={"#FFF"} />
          </text>

          {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
          <OrbitingBoxes />
          <Pillar position={[-3, 0, -4]} depth={2} />
          <Pillar position={[4, 1, -4]} depth={1} />
          <Pillar position={[-4, 2, -4]} depth={4} />
          <Pillar position={[-1, -1, -4]} depth={4} />
          <Pillar position={[2, 3, -4]} depth={4} />
          <Sphere color="red" phase={0} a={0.001} b={0.005} c={0.0003} />
          <Sphere
            color="#00ff00"
            phase={Math.PI / 3}
            a={0.04}
            b={0.09}
            c={0.0008}
          />
          <Sphere
            color="#0000ff"
            phase={Math.PI + Math.PI / 3}
            a={0.02}
            b={0.3}
            c={0.0004}
          />
          <Clouds />
          <Effects />
        </Canvas>
      </Suspense>
    </div>
  );
};
export default PSIntro;
