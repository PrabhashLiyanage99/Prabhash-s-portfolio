import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import moonModel from '../assets/3d/venus.glb'  

const Moon = (props) => {
  const { nodes, materials } = useGLTF(moonModel)
  
  const moonRef = useRef()  
  
  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.01  
      moonRef.current.rotation.x += 0.005; 
      moonRef.current.rotation.z += 0.003; 
    }
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={moonRef}  // Apply the reference to the mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.moon}
        rotation={[-Math.PI / 2, 0, 0]}  // Initial static rotation
      />
    </group>
  )
}

export default Moon;
