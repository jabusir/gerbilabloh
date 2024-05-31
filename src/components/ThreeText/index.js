import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Canvas, useFrame, useLoader, extend } from "@react-three/fiber";
import JSONfont from "./Roboto_Regular.json";

extend({ TextGeometry });

function TextMesh(props) {
  const mesh = useRef();

  // actions to perform in current frame
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.geometry.center();
  });

  // load in font
  const font = new FontLoader().parse(JSONfont);

  // configure font mesh
  const textOptions = {
    font,
    size: 5,
    height: 1,
  };

  // Create a white material
  const whiteMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });

  return (
    <mesh {...props} ref={mesh}>
      <textGeometry attach="geometry" args={["calypso", textOptions]} />
      <meshStandardMaterial attach="material" args={[whiteMaterial]} />
    </mesh>
  );
}

export default function ThreeText() {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          height: "300px",
          width: "600px",
          top: window.innerWidth > 775 ? "6vw" : "-40px",
          left: window.innerWidth > 775 ? "6vw" : "auto",
        }}
        camera={{ position: [25, 0, 10] }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <TextMesh position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </>
  );
}
