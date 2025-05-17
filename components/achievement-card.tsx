"use client"

import { motion } from "framer-motion"
import { Award, Code, Shield, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AchievementCardProps {
  title: string
  description: string
  icon: "trophy" | "award" | "code" | "shield"
}

export function AchievementCard({ title, description, icon }: AchievementCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "trophy":
        return <Trophy className="h-6 w-6 text-[#ff004c]" />
      case "award":
        return <Award className="h-6 w-6 text-[#ff004c]" />
      case "code":
        return <Code className="h-6 w-6 text-[#ff004c]" />
      case "shield":
        return <Shield className="h-6 w-6 text-[#ff004c]" />
      default:
        return <Trophy className="h-6 w-6 text-[#ff004c]" />
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Card className="bg-black/40 border border-[#00cfff]/20 backdrop-blur-sm h-full">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="bg-black/60 p-2 rounded-full">{getIcon()}</div>
          <CardTitle className="text-[#00cfff]">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
