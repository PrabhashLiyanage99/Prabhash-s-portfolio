import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Loader from "../components/Loader";
import Prabhash from "../models/prabhash";
import NightSky from "../components/nightSky";
import Astronomy from "../models/astronomy";
import HeroSection from "../components/HeroSection";
import Moon from "../models/moon";
import Earth from "../models/earth";
import { useSpring, a } from "@react-spring/three";
import About from './AboutPage';

const Home = () => {
  const lightRef = useRef(); // ✅ Declare the reference for the light

  // Spring animation for the second canvas (Earth)
  const springProps = useSpring({
    rotation: [Math.PI / 2, Math.PI / 4, 0],
    position: [1, 0, 0],
    config: { tension: 200, friction: 30 },
  });

  return (
    <section className="w-full h-screen relative">
      <HeroSection />

      {/* First Canvas */}
      <Canvas shadows className="w-full h-screen bg-black" camera={{ position: [0, 1, 3], fov: 50 }}>
        <Suspense fallback={<Loader />}>
          <NightSky />
          <directionalLight intensity={1.0} position={[1, 1, 1]} />
          <ambientLight intensity={0.6} />
          <spotLight intensity={2} position={[0, 2, 3]} angle={Math.PI / 4} penumbra={1} castShadow />
          <pointLight intensity={0.8} position={[10, 10, 10]} />
          <Prabhash position={[1, -0.7, 0.3]} scale={[1, 1, 1]} rotation={[Math.PI / 5, 0, 0.1]} />
          <Astronomy position={[1, -1, 0]} scale={[20, 20, 20]} />
          <Moon scale={[0.5, 0.5, 0.5]} position={[-1, -0.1, 0]} />
        </Suspense>
      </Canvas>
      <About/>
    </section>

  );
};

export default Home;
