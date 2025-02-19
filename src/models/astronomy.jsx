import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, useFBX } from '@react-three/drei'
import Astonomy from '../assets/3d/astronomy.glb'


const Astronomy = (props) => {
  
  const group = useRef()
  const { nodes, materials } = useGLTF(Astonomy)
  return (
    <group {...props} dispose={null}>
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
  )
}

export default Astronomy;
