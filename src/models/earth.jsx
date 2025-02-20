import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import earthModel from "../assets/3d/earth.glb";

const Earth = (props) => {
  const { nodes, materials } = useGLTF(earthModel);
  const earthRef = useRef();
  const lightRef = useRef();

  // Rotate the Earth slowly
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (earthRef.current) {
      earthRef.current.rotation.y = elapsedTime * 0.1; // Adjust speed here
    }
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(elapsedTime * 0.5) * 10; // Move light around
      lightRef.current.position.z = Math.cos(elapsedTime * 0.5) * 10;
    }
  });

  return (
    <group ref={earthRef} {...props} dispose={null}>
      {/* Earth Model */}
      <group scale={0.05}>
        <mesh geometry={nodes.pSphere1_phong1_0.geometry} material={materials.phong1} />
        <mesh geometry={nodes.pSphere1_phong1_0_1.geometry} material={materials.phong1} />
      </group>

      {/* Atmospheric Glow */}
      <mesh scale={[1.05, 1.05, 1.05]}>
        <sphereGeometry args={[1, 64, 64]} />
        <shaderMaterial
          transparent
          blending={THREE.AdditiveBlending}
          uniforms={{
            color: { value: new THREE.Color(0x00aaff) }, // Blue atmosphere
            opacity: { value: 0.2 }, // Adjust for stronger glow
          }}
          vertexShader={`
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec3 vNormal;
            void main() {
              float intensity = pow(0.8 - dot(vNormal, vec3(0,0,1)), 6.0);
              gl_FragColor = vec4(vec3(0.0, 0.5, 1.0) * intensity, 0.5);
            }
          `}
        />
      </mesh>
    </group>
  );
};

export default Earth;
