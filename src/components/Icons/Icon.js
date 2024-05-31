import React, { useCallback, useRef } from "react";

const Icon = ({ index, position, onTop, setOnTop, setPositions, image }) => {
  const dragOffset = useRef({ x: 0, y: 0 });

  const move = useCallback(
    (e) => {
      setPositions(index, [
        e.clientY - dragOffset.current.y,
        e.clientX - dragOffset.current.x,
      ]);
    },
    [index, setPositions]
  );

  const handleMouseUp = useCallback(() => {
    window.removeEventListener("mousemove", move);
    window.removeEventListener("mouseup", handleMouseUp);
  }, [move]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setOnTop(index);
    dragOffset.current = {
      x: e.clientX - position[1],
      y: e.clientY - position[0],
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", handleMouseUp);

    // Immediately call the move function to start dragging on the first interaction
    move(e);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        top: `${position[0]}px`,
        left: `${position[1]}px`,
        zIndex: onTop === index ? 1 : "auto",
        position: "absolute",
        cursor: "pointer",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={image}
        alt={`Icon ${index + 1}`}
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
      <p
        style={{
          fontSize: "12px",
        }}
      >
        {image}
      </p>
    </div>
  );
};

export default Icon;
