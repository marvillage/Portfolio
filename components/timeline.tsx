"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Timeline() {
  const experiences = [
    {
      title: "Software Dev Intern",
      company: "AECAD.ai",
      period: "May 2023 - Aug 2023",
      description:
        "Developed and maintained web applications using React, TypeScript, and REST APIs. Worked with PostgreSQL databases and implemented CAD Viewer functionality.",
      skills: ["React", "TypeScript", "REST API", "PostgreSQL", "CAD Viewer"],
    },
  ]

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#00cfff]/30 transform md:translate-x-[-0.5px]" />

      {experiences.map((experience, index) => (
        <div key={index} className="mb-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-8px] md:left-1/2 top-6 md:transform md:translate-x-[-8px] w-4 h-4 rounded-full bg-[#ff004c] z-10" />

            {/* Date - visible on desktop on left for even, right for odd */}
            <div className={`hidden md:block ${index % 2 === 0 ? "text-right" : "md:col-start-2"}`}>
              <span className="inline-block bg-black/60 text-[#00cfff] px-3 py-1 rounded-full text-sm">
                {experience.period}
              </span>
            </div>

            {/* Card - on right for even, left for odd on desktop */}
            <Card
              className={`bg-black/40 border border-[#00cfff]/20 backdrop-blur-sm md:col-span-1 ${
                index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
              }`}
            >
              <CardHeader>
                <div className="md:hidden mb-2">
                  <span className="inline-block bg-black/60 text-[#00cfff] px-3 py-1 rounded-full text-sm">
                    {experience.period}
                  </span>
                </div>
                <CardTitle className="text-[#ff004c]">{experience.title}</CardTitle>
                <p className="text-[#00cfff]">{experience.company}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-[#ff004c]/50 text-[#ff004c]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Empty div to maintain grid on desktop */}
            <div className={`hidden md:block ${index % 2 === 0 ? "" : "md:col-start-2"}`} />
          </motion.div>
        </div>
      ))}
    </div>
  )
}
