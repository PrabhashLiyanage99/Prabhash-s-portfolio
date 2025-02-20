import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Loader from "../components/Loader";
import NightSky from "../components/nightSky";;
import Earth from "../models/earth";
import About from "../components/About";

const AboutPage = () => {
  const lightRef = useRef(); 

  return (
    <section className="w-full h-screen relative">
      <Canvas
  shadows
  className="w-full h-screen relative bg-gradient-to-t from-yellow-900 to-black">
<About/>
        <Suspense fallback={<Loader />}>
        <NightSky />
          <ambientLight intensity={0.1} />
          <directionalLight ref={lightRef} intensity={1.5} position={[10, 0, 0]} castShadow />
          <pointLight intensity={0.3} position={[0, 5, -5]} />
          <Earth position={[0, -1, 0]} scale={[40, 40, 40]}/>

        </Suspense>
      </Canvas>
    </section>
  );
};

export default AboutPage;
