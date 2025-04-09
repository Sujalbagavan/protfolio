import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingIcons() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
      group.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <group ref={group}>
      {Array.from({ length: 8 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.2, 16, 16]}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 2,
            Math.sin((i / 8) * Math.PI * 2) * 2,
            0,
          ]}
        >
          <meshStandardMaterial
            color={new THREE.Color().setHSL(i / 8, 0.8, 0.5)}
            emissive={new THREE.Color().setHSL(i / 8, 0.8, 0.5)}
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
    </group>
  );
}