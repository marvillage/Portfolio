"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { SpaceScene3D } from "./space-scene-3d"
import { AnimatedBackground } from "./animated-background"
import { TypewriterText } from "./typewriter-text"
import { useState } from "react"

export function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-black">
      {/* Animated 2D Background */}
      <AnimatedBackground />

      {/* 3D Space Scene */}
      <SpaceScene3D />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 min-h-[150px] md:min-h-[180px]">
            <TypewriterText
              text="Kushagra "
              speed={120}
              className="text-white drop-shadow-2xl font-mono tracking-wider"
              onComplete={() => setTimeout(() => setShowSubtitle(true), 300)}
            />
            <TypewriterText
              text="Srivastava"
              delay={1000}
              speed={120}
              className="text-cyan-400 drop-shadow-2xl font-mono tracking-wider"
            />
          </h1>

          {/* Subtitle */}
          <div className="min-h-[100px] md:min-h-[120px]">
            {showSubtitle && (
              <h2 className="text-2xl md:text-4xl mb-12 text-gray-300 font-light tracking-wide">
                <TypewriterText
                  text="Space Coder. AI Builder. Full Stack Adventurer."
                  speed={60}
                  className="drop-shadow-lg"
                  onComplete={() => setTimeout(() => setShowButtons(true), 500)}
                />
              </h2>
            )}
          </div>

          {/* Action Buttons */}
          {showButtons && (
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border border-cyan-400/30 px-8 py-4 text-lg"
              >
                <Link href="#projects">
                  <span className="mr-2">🚀</span>
                  View Projects
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white bg-black/50 backdrop-blur-sm shadow-2xl hover:shadow-gray-500/25 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
              >
                <a href="https://tinyurl.com/yc4b24cr" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          )}

          {/* Social Links */}
          {showButtons && (
            <div className="flex justify-center gap-6 mt-12 animate-fade-in delay-500">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                asChild
              >
                <a href="mailto:contact@example.com">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Scan Lines Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500 to-transparent h-1 animate-pulse"
          style={{ top: "20%", animationDuration: "3s" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500 to-transparent h-1 animate-pulse delay-1000"
          style={{ top: "60%", animationDuration: "4s" }}
        />
      </div>
    </section>
  )
}
