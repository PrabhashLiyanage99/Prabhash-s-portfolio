import { Stars } from "@react-three/drei";
import React, { useState, useEffect } from "react";

const NightSky = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Capture mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize to -1 to 1 range
      const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize to -1 to 1 range
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Use mouse position to move stars
  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
        // Adjust stars' position based on mouse position
        position={[mousePosition.x * 50, mousePosition.y * 50, 0]} // Move stars based on mouse movement
      />
    </>
  );
};

export default NightSky;
