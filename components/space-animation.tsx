"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function SpaceAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create stars
    const stars: { x: number; y: number; radius: number; speed: number; color: string }[] = []
    const createStars = () => {
      stars.length = 0
      const starCount = Math.floor((canvas.width * canvas.height) / 1000)

      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 1.5
        const speed = Math.random() * 0.5
        const color = Math.random() > 0.5 ? "#00cfff" : "#ffffff"

        stars.push({ x, y, radius, speed, color })
      }
    }

    createStars()
    window.addEventListener("resize", createStars)

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.fill()

        // Move stars
        star.y += star.speed

        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", createStars)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 via-black/50 to-black pointer-events-none z-0" />

      {/* Animated elements */}
      <motion.div
        className="fixed top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#ff004c]/5 blur-3xl pointer-events-none z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00cfff]/5 blur-3xl pointer-events-none z-0"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </>
  )
}
