import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Header } from "@/components/Header"
import { MobileHeader } from "@/components/MobileHeader"
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Equal } from "lucide-react";

export const metadata: Metadata = {
  title: "SuperUI",
  description: "Supercharge Your Next App",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <MobileHeader />
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
