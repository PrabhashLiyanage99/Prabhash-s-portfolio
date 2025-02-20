import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Loader from "../components/Loader";
import NightSky from "../components/nightSky";
import Earth from "../models/earth";
import About from "../components/About";

const AboutPage = () => {
  const lightRef = useRef();

  return (
    <section className="w-full h-full absolute overflow-hidden">
      {/* Canvas to display 3D elements */}
      <Canvas
        shadows
        className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-t from-yellow-900 to-black"
      >
        <Suspense fallback={<Loader />}>
          <NightSky />
          <ambientLight intensity={0.1} />
          <directionalLight ref={lightRef} intensity={1.5} position={[10, 0, 0]} castShadow />
          <pointLight intensity={0.3} position={[0, 5, -5]} />
          <Earth position={[0, -1, 0]} scale={[40, 40, 40]} />
        </Suspense>
      </Canvas>

      {/* About Content */}
      <div className="absolute left-0 top-0 mx-auto z-50 text-white">
        <About />
      </div>
    </section>
  );
};

export default AboutPage;