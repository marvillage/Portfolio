"use client"

import { useEffect, useState } from "react"
import { Star, GitFork, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  language: string
}

export function RepositoryList({ username }: { username: string }) {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepositories() {
      try {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)

        if (!response.ok) {
          throw new Error("Failed to fetch repositories")
        }

        const data = await response.json()
        setRepositories(data)
      } catch (err) {
        setError("Error fetching repositories. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchRepositories()
  }, [username])

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="bg-black/40 border border-[#00cfff]/20 backdrop-blur-sm">
            <CardHeader>
              <Skeleton className="h-6 w-3/4 bg-white/10" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2 bg-white/10" />
              <Skeleton className="h-4 w-5/6 mb-4 bg-white/10" />
              <div className="flex justify-between mt-4">
                <Skeleton className="h-4 w-16 bg-white/10" />
                <Skeleton className="h-4 w-16 bg-white/10" />
                <Skeleton className="h-4 w-16 bg-white/10" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-black/40 border border-[#ff004c]/20 backdrop-blur-sm rounded-lg">
        <p className="text-[#ff004c]">{error}</p>
        <Button onClick={() => window.location.reload()} className="mt-4 bg-[#ff004c] hover:bg-[#ff004c]/80 text-white">
          Retry
        </Button>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repositories.map((repo) => (
        <Card key={repo.id} className="bg-black/40 border border-[#00cfff]/20 backdrop-blur-sm h-full flex flex-col">
          <CardHeader>
            <CardTitle className="text-[#00cfff] text-lg">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {repo.name}
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <p className="text-sm mb-4 flex-grow">{repo.description || "No description provided"}</p>
            <div className="flex justify-between mt-auto">
              <div className="flex items-center text-xs">
                <Star className="h-3 w-3 mr-1 text-yellow-400" />
                <span>{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center text-xs">
                <GitFork className="h-3 w-3 mr-1 text-[#00cfff]" />
                <span>{repo.forks_count}</span>
              </div>
              <div className="flex items-center text-xs">
                <Eye className="h-3 w-3 mr-1 text-[#ff004c]" />
                <span>{repo.watchers_count}</span>
              </div>
            </div>
            {repo.language && (
              <div className="mt-3">
                <Badge variant="outline" className="border-[#ff004c]/50 text-[#ff004c] text-xs">
                  {repo.language}
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
