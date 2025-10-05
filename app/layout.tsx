import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Snooker Lovers Bar - Premium Snooker & Pool Club in London",
  description:
    "Snooker Lovers Bar offers premium snooker and pool tables in Hackney, London. Enjoy drinks, snacks, and competitive gaming. Open daily 2PM-2AM. Memberships from £10/year.",
  keywords: "snooker, pool, bar, Hackney, London, snooker club, pool tables, gaming, membership",
  openGraph: {
    title: "Snooker Lovers Bar - Premium Snooker & Pool Club",
    description: "Premium snooker and pool tables in Hackney, London. Memberships from £10/year. Open daily 2PM-2AM.",
    url: "https://xsnookerloversbar.com",
    siteName: "Snooker Lovers Bar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snooker Lovers Bar - Premium Snooker & Pool Club",
    description: "Premium snooker and pool tables in Hackney, London. Memberships from £10/year.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  )
}
