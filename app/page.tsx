import { Suspense } from "react"
import Link from "next/link"
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SpaceAnimation } from "@/components/space-animation"
import { ProjectCard } from "@/components/project-card"
import { RepositoryList } from "@/components/repository-list"
import { ContactForm } from "@/components/contact-form"
import { CodolioStats } from "@/components/codolio-stats"
import { Timeline } from "@/components/timeline"
import { AchievementCard } from "@/components/achievement-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <SpaceAnimation />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#00cfff]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-[#00cfff] font-bold text-xl">
            KS<span className="text-[#ff004c]">.</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-[#00cfff] transition-colors">
              About
            </Link>
            <Link href="#projects" className="hover:text-[#00cfff] transition-colors">
              Projects
            </Link>
            <Link href="#repositories" className="hover:text-[#00cfff] transition-colors">
              Repositories
            </Link>
            <Link href="#achievements" className="hover:text-[#00cfff] transition-colors">
              Achievements
            </Link>
            <Link href="#publications" className="hover:text-[#00cfff] transition-colors">
              Publications
            </Link>
            <Link href="#contact" className="hover:text-[#00cfff] transition-colors">
              Contact
            </Link>
          </div>
          <a 
            href="https://tinyurl.com/yc4b24cr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[#00cfff] text-[#00cfff] hover:bg-[#00cfff] hover:text-black h-10 px-4 py-2"
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Kushagra</span> <span className="text-[#ff004c]">Srivastava</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-[#00cfff] font-light">
              Space Coder. AI Builder. Full Stack Adventurer.
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#ff004c] hover:bg-[#ff004c]/80 text-white">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#00cfff] text-[#00cfff] hover:bg-[#00cfff] hover:text-black"
              >
                <a href="https://tinyurl.com/yc4b24cr" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Codolio Stats */}
      <section id="stats" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Coding <span className="text-[#00cfff]">Activity</span>
          </h2>
          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading stats...</div>}>
            <CodolioStats />
          </Suspense>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              About <span className="text-[#ff004c]">Me</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00cfff]">Education</h3>
                <p className="mb-6">B.Tech in Computer Science at IIIT Nagpur (2022–2026)</p>
                <h3 className="text-xl font-semibold mb-4 text-[#00cfff]">Interests</h3>
                <p>
                  Passionate about full stack development, AI/ML, cloud technologies, and data visualization. I love
                  building innovative solutions that combine cutting-edge technology with elegant design.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00cfff]">Skills</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/5 rounded-md px-3 py-2">React</div>
                  <div className="bg-white/5 rounded-md px-3 py-2">TypeScript</div>
                  <div className="bg-white/5 rounded-md px-3 py-2">Node.js</div>
                  <div className="bg-white/5 rounded-md px-3 py-2">Python</div>
                  <div className="bg-white/5 rounded-md px-3 py-2">AI/ML</div>
                  <div className="bg-white/5 rounded-md px-3 py-2">Cloud</div>
                  <div className="bg-white/5 rounded-md px-3 py-2">PostgreSQL</div>
                  <div className="bg-white/5 rounded-md px-3 py-2">REST API</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Project <span className="text-[#00cfff]">Showcase</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Call Insight"
              description="A comprehensive platform for call analytics with web and Android interfaces, powered by machine learning."
              tags={["Web", "Android", "ML"]}
              image="/placeholder.svg?height=300&width=600"
              githubUrl="https://github.com/marvillage/call-insight"
            />
            <ProjectCard
              title="E-Waste Management System (G-Tron)"
              description="A complete e-waste management solution featuring real-time dashboard, LLM integration, and advanced analytics."
              tags={["Dashboard", "LLM", "Analytics"]}
              image="/placeholder.svg?height=300&width=600"
              githubUrl="https://github.com/marvillage/g-tron"
            />
          </div>
        </div>
      </section>

      {/* Repositories Section */}
      <section id="repositories" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            GitHub <span className="text-[#ff004c]">Repositories</span>
          </h2>
          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading repositories...</div>}>
            <RepositoryList username="marvillage" />
          </Suspense>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-[#00cfff]">Achievements</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <AchievementCard
              title="Winner – Analytics Attax @ IIT Kanpur"
              description="Developed UniBot, an innovative solution that secured first place."
              icon="trophy"
            />
            <AchievementCard
              title="3rd – Sustainable Startup Pitch @ IIITN"
              description="Created Krishi Seva App, a sustainable agricultural solution."
              icon="award"
            />
            <AchievementCard
              title="3rd – Genathon Hackathon"
              description="Developed an innovative solution during this competitive hackathon."
              icon="code"
            />
            <AchievementCard
              title="2nd – Bug Bounty Challenge"
              description="Identified and resolved critical security vulnerabilities."
              icon="shield"
            />
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Authorship & <span className="text-[#ff004c]">Publishing</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-black/40 border border-[#00cfff]/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-[#00cfff]">Published Works</CardTitle>
                <CardDescription>I've authored 3 books across various categories</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  As an author, I've published three books spanning different genres and topics. My writing explores the
                  intersection of technology, creativity, and human experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/5 p-4 rounded-lg border border-[#ff004c]/20">
                    <h3 className="font-medium text-[#ff004c]">Book 1</h3>
                    <p className="text-sm mt-2">Fiction exploring futuristic themes</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-[#ff004c]/20">
                    <h3 className="font-medium text-[#ff004c]">Book 2</h3>
                    <p className="text-sm mt-2">Technical guide on emerging technologies</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-[#ff004c]/20">
                    <h3 className="font-medium text-[#ff004c]">Book 3</h3>
                    <p className="text-sm mt-2">Collection of essays on digital transformation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Work <span className="text-[#00cfff]">Experience</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Contact <span className="text-[#ff004c]">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#00cfff]">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-[#ff004c]" />
                  <a href="mailto:kushagrasrivastava13119@gmail.com" className="hover:text-[#00cfff]">
                    kushagrasrivastava13119@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-[#ff004c]" />
                  <a href="tel:+919319847124" className="hover:text-[#00cfff]">
                    +91-9319847124
                  </a>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#00cfff] text-[#00cfff] hover:bg-[#00cfff] hover:text-black"
                  asChild
                >
                  <a href="https://github.com/marvillage" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#00cfff] text-[#00cfff] hover:bg-[#00cfff] hover:text-black"
                  asChild
                >
                  <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#00cfff]/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#00cfff] font-bold text-xl mb-4 md:mb-0">
              KS<span className="text-[#ff004c]">.</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Kushagra Srivastava. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
