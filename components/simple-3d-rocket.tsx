"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

interface SimpleRocket3DProps {
  initialX: number
  initialY: number
  initialZ: number
  speed: number
}

export function SimpleRocket3D({ initialX, initialY, initialZ, speed }: SimpleRocket3DProps) {
  const rocketRef = useRef<Mesh>(null)
  const exhaustRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (rocketRef.current) {
      // Move rocket across screen
      rocketRef.current.position.x += speed

      // Reset position when off screen
      if (rocketRef.current.position.x > 15) {
        rocketRef.current.position.x = initialX
        rocketRef.current.position.y = initialY + (Math.random() - 0.5) * 2
        rocketRef.current.position.z = initialZ + (Math.random() - 0.5) * 2
      }

      // Slight bobbing motion
      rocketRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.005
    }

    if (exhaustRef.current) {
      // Animate exhaust flame
      const scale = 0.8 + Math.sin(state.clock.elapsedTime * 10) * 0.2
      exhaustRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <group ref={rocketRef} position={[initialX, initialY, initialZ]} rotation={[0, 0, Math.PI / 2]} scale={0.8}>
      {/* Rocket Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.25, 2, 8]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Rocket Nose Cone */}
      <mesh position={[0, 1.2, 0]}>
        <coneGeometry args={[0.15, 0.4, 8]} />
        <meshStandardMaterial color="#ff4444" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Engine Nozzle */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.1, 0.2, 0.3, 8]} />
        <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Exhaust Flame */}
      <mesh ref={exhaustRef} position={[0, -1.6, 0]}>
        <coneGeometry args={[0.1, 0.8, 6]} />
        <meshBasicMaterial color="#ff6600" transparent opacity={0.8} />
      </mesh>

      {/* Window */}
      <mesh position={[0, 0.3, 0.26]}>
        <circleGeometry args={[0.1, 8]} />
        <meshBasicMaterial color="#4444ff" transparent opacity={0.8} />
      </mesh>
    </group>
  )
}
