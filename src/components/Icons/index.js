import React, { useCallback, useState, useEffect } from "react";
import Icon from "./Icon"; // Adjust the import path if necessary

const images = [
  "/garage.png",
  "/shoe_game.png",
  "/sober.png",
  "/stunts.png",
  "/thailand.png",
];

export default function Icons() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const initialPositions = images.map((_, index) => [
    (index + 1) * 100,
    isMobile ? 50 : 100,
  ]); // Adjust vertical spacing based on screen width

  const [positions, setPositions] = useState(initialPositions);
  const [onTop, setOnTop] = useState(null);

  const handlePositionChange = useCallback((index, newPosition) => {
    setPositions((prev) =>
      prev.map((position, i) => (index === i ? newPosition : position))
    );
  }, []);

  return (
    <div className="App" style={{ overflow: "hidden" }}>
      {positions.map((position, i) => (
        <Icon
          key={i}
          index={i}
          position={position}
          setOnTop={setOnTop}
          onTop={onTop}
          setPositions={handlePositionChange}
          image={images[i]}
        />
      ))}
    </div>
  );
}
