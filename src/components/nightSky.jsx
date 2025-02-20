import { Stars } from "@react-three/drei";
import React, { useState, useEffect } from "react";

const NightSky = () => {


  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={2} 
        fade
        speed={2}
        color="blue" 
      />
    </>
  );
};

export default NightSky;
