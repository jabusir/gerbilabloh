import React, { useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Canvas, useFrame, useLoader, extend } from "@react-three/fiber";
import JSONfont from "./Roboto_Regular.json";
import lv from "./lv.jpg";

extend({ TextGeometry });

function TextMesh(props) {
  const mesh = useRef();

  // actions to perform in current frame
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.geometry.center();
  });

  // create lava texture
  const lava_texture = useLoader(THREE.TextureLoader, lv);
  lava_texture.wrapS = THREE.RepeatWrapping;
  lava_texture.wrapT = THREE.RepeatWrapping;
  lava_texture.repeat.set(0.05, 0.05);

  // load in font
  const font = new FontLoader().parse(JSONfont);

  // configure font mesh
  const textOptions = {
    font,
    size: 5,
    height: 1,
  };

  const getTexture = () => {
    const textureMap = {
      lava: lava_texture,
    };

    return textureMap[props.texture];
  };

  return (
    <mesh {...props} ref={mesh}>
      <textGeometry attach="geometry" args={["jejo", textOptions]} />
      <meshStandardMaterial attach="material" args={[{ map: getTexture() }]} />
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
          top: 0,
          left: 0,
        }}
        camera={{ position: [0, 0, 10] }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <TextMesh position={[0, 0, 0]} texture={"lava"} />
        </Suspense>
      </Canvas>
    </>
  );
}
