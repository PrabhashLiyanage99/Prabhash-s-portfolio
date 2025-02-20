import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Astonomy from '../assets/3d/astronomy.glb';

const Astronomy = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(Astonomy);

  // Add floating animation
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    group.current.position.y = Math.sin(time * 1) * 0.07-0.9; // Adjust the amplitude and speed as needed
  });

  return (
    <group {...props} dispose={null} ref={group}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['GRO17059-0_SFM_Web-Resolution-Model_Coordinate-Unregistered']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['GRO17059-0_SFM_Web-Resolution-Model_Coordinate-Unregistered']}
        />
      </group>
    </group>
  );
};

export default Astronomy;
