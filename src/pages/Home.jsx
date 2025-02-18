import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "../components/Loader";
import { AmbientLight, DirectionalLight, HemisphereLight, PointLight } from "three";
import { OrbitControls, SpotLight } from "@react-three/drei";
import Island from "../models/island";
import Sky from "../models/sky";
import Prabhash from "../models/prabhash";



const Home =() => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPostion = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];
    }else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPostion, rotation]
  }

  const [islandScale, islandPostion, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
<Canvas className="w-full h-screen bg-transparent"
      camera={{ position: [0,1,3] , fov: 50}}>
  <Suspense fallback={<Loader />}>
    <directionalLight intensity={1} position={[1, 1, 1]} />
    <ambientLight intensity={2} />
    <pointLight position={[10, 10, 10]} />
    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.5} />


    <Prabhash position={[0, -1, 0]} />
    <OrbitControls enableZoom={true} enableRotate={true}/>
  </Suspense>
</Canvas>

    </section>
  );
}

export default Home;
