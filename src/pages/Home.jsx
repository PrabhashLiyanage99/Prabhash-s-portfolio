import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Mesh } from 'three';
import Loader from "../components/Loader";
import Prabhash from "../models/prabhash";
import NightSky from "../components/nightSky";
import Astronomy from "../models/astronomy";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <HeroSection/>
      <Canvas className="w-full h-screen bg-black" camera={{ position: [0, 1, 3], fov: 50 }}>
        <Suspense fallback={<Loader />}>
          <NightSky />
          
          
          <directionalLight intensity={1.0} position={[1, 1, 1]} />  
          <ambientLight intensity={0.6} />  
          <spotLight 
            intensity={2}
            position={[0, 2, 3]} 
            angle={Math.PI / 4}
            penumbra={1}
            castShadow 
          />
          
          <pointLight 
            intensity={0.8} 
            position={[10, 10, 10]} 
          />
          <Prabhash position={[1, -0.7, 0.3]} scale={[1, 1, 1]} rotation={[Math.PI / 5, 0, 0.1]} />
          <Astronomy position={[1, -1, 0]} scale={[20, 20, 20]} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
