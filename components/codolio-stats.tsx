"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface CodolioData {
  heatmap: {
    date: string
    count: number
  }[]
  stats: {
    totalSolved: number
    dailyAverage: number
    weeklyAverage: number
    streak: number
  }
}

export function CodolioStats() {
  const [data, setData] = useState<CodolioData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This is a mock function since we can't directly fetch from Codolio without their API
    // In a real implementation, you would use their API or scrape the data
    async function fetchCodolioData() {
      try {
        setLoading(true)

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock data
        const mockData: CodolioData = {
          heatmap: Array.from({ length: 365 }, (_, i) => {
            const date = new Date()
            date.setDate(date.getDate() - 365 + i)
            return {
              date: date.toISOString().split("T")[0],
              count: Math.floor(Math.random() * 10),
            }
          }),
          stats: {
            totalSolved: 387,
            dailyAverage: 2.4,
            weeklyAverage: 16.8,
            streak: 14,
          },
        }

        setData(mockData)
      } catch (error) {
        console.error("Error fetching Codolio data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCodolioData()
  }, [])

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="h-24 bg-white/10" />
          ))}
        </div>
        <Skeleton className="h-64 w-full bg-white/10" />
      </div>
    )
  }

  if (!data) {
    return (
      <div className="text-center p-8">
        <p className="text-[#ff004c]">Failed to load coding statistics</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Problems Solved" value={data.stats.totalSolved.toString()} />
        <StatCard title="Daily Average" value={data.stats.dailyAverage.toString()} />
        <StatCard title="Weekly Average" value={data.stats.weeklyAverage.toString()} />
        <StatCard title="Current Streak" value={`${data.stats.streak} days`} />
      </div>

      <Card className="bg-black/40 border border-[#00cfff]/20 backdrop-blur-sm overflow-hidden">
        <CardHeader>
          <CardTitle className="text-[#00cfff]">Coding Activity Heatmap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 relative">
            <HeatmapVisualization data={data.heatmap} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <Card className="bg-black/40 border border-[#00cfff]/20 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-[#ff004c]">{value}</p>
      </CardContent>
    </Card>
  )
}

function HeatmapVisualization({ data }: { data: { date: string; count: number }[] }) {
  // Group data by week and day for a calendar-like heatmap
  const weeks: { date: string; count: number }[][] = []
  let currentWeek: { date: string; count: number }[] = []

  // Get day of week (0-6, where 0 is Sunday)
  const getDay = (dateStr: string) => new Date(dateStr).getDay()

  // Fill in any missing days at the start to align with week
  const firstDate = new Date(data[0].date)
  const firstDay = firstDate.getDay()

  for (let i = 0; i < firstDay; i++) {
    const date = new Date(firstDate)
    date.setDate(date.getDate() - (firstDay - i))
    currentWeek.push({ date: date.toISOString().split("T")[0], count: 0 })
  }

  // Process all data points
  data.forEach((day, index) => {
    currentWeek.push(day)

    if (currentWeek.length === 7 || index === data.length - 1) {
      weeks.push([...currentWeek])
      currentWeek = []
    }
  })

  // Calculate color intensity based on count
  const getColor = (count: number) => {
    if (count === 0) return "bg-white/5"
    if (count < 3) return "bg-[#00cfff]/20"
    if (count < 6) return "bg-[#00cfff]/40"
    if (count < 9) return "bg-[#00cfff]/60"
    return "bg-[#00cfff]/80"
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between mb-2 text-xs text-gray-400">
        <span>Less</span>
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-white/5"></div>
          <div className="w-3 h-3 bg-[#00cfff]/20"></div>
          <div className="w-3 h-3 bg-[#00cfff]/40"></div>
          <div className="w-3 h-3 bg-[#00cfff]/60"></div>
          <div className="w-3 h-3 bg-[#00cfff]/80"></div>
        </div>
        <span>More</span>
      </div>

      <div className="flex-grow grid grid-cols-52 gap-1 overflow-x-auto pb-2">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`w-3 h-3 rounded-sm ${getColor(day.count)}`}
                title={`${day.date}: ${day.count} contributions`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
