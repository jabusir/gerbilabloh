import { useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Text } from "troika-three-text";
import styled from "styled-components";

extend({ Text });

const CustomCanvas = styled(Canvas)`
  z-index: 3;
`;

const ThreeText = () => {
  const refMesh = useRef();
  useFrame(() => {
    if (refMesh.current) {
      // rotates the object
      refMesh.current.rotation.y += 0.01;
    }
  });
  return (
    <text
      ref={refMesh}
      fontSize={1}
      color={"#000000"}
      maxWidth={300}
      lineHeight={1}
      letterSpacing={0}
      textAlign={"justify"}
      materialType={"MeshBasicMaterial"}
      text="JEJO"
      anchorX="center"
      anchorY="middle"
    ></text>
  );
};

export default () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        zIndex: 1,
        height: "300px",
        width: "600px",
        top: 0,
        left: 0,
      }}
      pixelRatio={window.devicePixelRatio}
    >
      <ThreeText />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
};
