import React from "react"

/* Next.js types for SEO + mobile viewport settings */
import type { Metadata, Viewport } from 'next'

/* Google Fonts (optimized & self-hosted by Next.js) */
import { Inter, JetBrains_Mono } from 'next/font/google'

/* Global CSS (Tailwind + your theme + effects) */
import './globals.css'


/* ================================
   FONT CONFIGURATION
   ================================ */

/* Inter → default UI / body font */
const inter = Inter({
  subsets: ['latin'],          // Only load Latin characters
  variable: '--font-inter',   // Expose as CSS variable
})

/* JetBrains Mono → code / terminal style font */
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})


/* ================================
   APP METADATA (SEO)
   ================================ */
export const metadata: Metadata = {
  title: 'William Okogwu | Portfolio',
  description:
    'Computer Science student and Full-Stack Developer specializing in building modern web applications and AI-powered systems.',
  icons: {
    icon: "/Terminal.ico",            // Default icon
    shortcut: "/Terminal.ico",
    apple: "/Terminal.png",        // iOS home screen
  },
  }


/* ================================
   VIEWPORT + THEME COLOR
   ================================ */
export const viewport: Viewport = {
  /* Browser UI (mobile address bar, etc.) */
  themeColor: '#10b981',
}


/* ================================
   ROOT LAYOUT COMPONENT
   ================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    /* 
      Apply font CSS variables to <html>
      so Tailwind can use them globally
    */
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      
      {/* 
        font-sans → Tailwind font family
        antialiased → smoother text rendering
      */}
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}