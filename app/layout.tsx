import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kushagra Srivastava | Space Coder",
  description: "Space Coder. AI Builder. Full Stack Adventurer.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}