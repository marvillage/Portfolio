"use client"

import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { SimpleRocket3D } from "./simple-3d-rocket"
import { SimpleFallingStars } from "./simple-falling-stars"
import { SimplePlanet } from "./simple-planets"
import { Suspense } from "react"

function SceneContent() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4444ff" />

      {/* Background Stars */}
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />

      {/* Falling Stars */}
      <SimpleFallingStars />

      {/* 3D Rockets */}
      <SimpleRocket3D initialX={-12} initialY={2} initialZ={-2} speed={0.05} />
      <SimpleRocket3D initialX={-15} initialY={-1} initialZ={1} speed={0.03} />
      <SimpleRocket3D initialX={-18} initialY={3} initialZ={-1} speed={0.04} />

      {/* 3D Planets */}
      <SimplePlanet position={[8, 3, -5]} size={1.2} color="#ff6b47" rotationSpeed={0.005} />
      <SimplePlanet position={[-6, -4, -8]} size={0.8} color="#4a90e2" rotationSpeed={0.008} />
      <SimplePlanet position={[10, -2, -10]} size={1.8} color="#ffa726" rotationSpeed={0.003} />
    </>
  )
}

export function SpaceScene3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} style={{ background: "transparent" }}>
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  )
}
