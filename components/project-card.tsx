"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
}

export function ProjectCard({ title, description, tags, image, demoUrl, githubUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden bg-black/40 border border-[#00cfff]/20 backdrop-blur-sm h-full flex flex-col">
        <div className="relative overflow-hidden h-48">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        <CardHeader>
          <CardTitle className="text-[#00cfff]">{title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-[#ff004c]/50 text-[#ff004c]">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p>{description}</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-[#00cfff] text-[#00cfff] hover:bg-[#00cfff] hover:text-black"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-[#ff004c] text-[#ff004c] hover:bg-[#ff004c] hover:text-white"
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
