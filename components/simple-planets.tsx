"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import type { Mesh } from "three"

interface SimplePlanetProps {
  position: [number, number, number]
  size: number
  color: string
  rotationSpeed: number
}

export function SimplePlanet({ position, size, color, rotationSpeed }: SimplePlanetProps) {
  const planetRef = useRef<Mesh>(null)

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += rotationSpeed
    }
  })

  return (
    <Sphere ref={planetRef} position={position} args={[size, 16, 16]}>
      <meshStandardMaterial color={color} metalness={0.1} roughness={0.8} />
    </Sphere>
  )
}
