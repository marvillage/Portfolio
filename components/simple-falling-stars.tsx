"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

export function SimpleFallingStars() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.children.forEach((star, index) => {
        star.position.y -= 0.02 + (index % 3) * 0.01
        star.position.x += Math.sin(Date.now() * 0.001 + index) * 0.005

        if (star.position.y < -10) {
          star.position.y = 10 + Math.random() * 5
          star.position.x = (Math.random() - 0.5) * 20
          star.position.z = (Math.random() - 0.5) * 10
        }
      })
    }
  })

  const stars = Array.from({ length: 100 }, (_, i) => (
    <mesh key={i} position={[(Math.random() - 0.5) * 20, Math.random() * 15, (Math.random() - 0.5) * 10]}>
      <sphereGeometry args={[0.02, 4, 4]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  ))

  return <group ref={groupRef}>{stars}</group>
}
