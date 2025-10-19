import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import bg from "@/public/7582.jpg"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Yabhasyuka Aesthetics",
  description: "Aesthetics Clinic specializing in anti-aging treatments and skincare solutions. | Yabhasyuka",
  generator: "v0.app",
  alternates: {
    canonical: "https://yabhasyuka.example/",
  },
  openGraph: {
    siteName: "Yabhasyuka",
    title: "Aesthetics Clinic specializing in anti-aging treatments and skincare solutions. | Yabhasyuka",
    description: "Aesthetics Clinic specializing in anti-aging treatments and skincare solutions. | Yabhasyuka",
    type: "website",
    url: "https://yabhasyuka.vercel.app/",
    images: [
      {
        url:"https://img.freepik.com/free-photo/young-woman-mask-face-relaxing-spa-salon_176420-7582.jpg",
        alt: "Aesthetics Clinic specializing in anti-aging treatments and skincare solutions.",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_BE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aesthetics Clinic specializing in anti-aging treatments and skincare solutions. | Yabhasyuka",
    description: "Aesthetics Clinic specializing in anti-aging treatments and skincare solutions.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opengraph-katachi.jpg-7vz2r3hxZA6woukGOmH115Fg7Piyjs.jpeg",
        alt: "Aesthetics Clinic specializing in anti-aging treatments and skincare solutions.",
      },
    ],
    site: "@yabhasyuka",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
