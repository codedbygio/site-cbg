import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: {
  title: string;
  description: string;
  generator: string;
  keywords: string[];
  authors: { name: string; url: string }[];
  creator: string;
  openGraph: { title: string; description: string; url: string; siteName: string; locale: string; type: string };
  twitter: { card: string; title: string; description: string; creator: string };
  robots: {
    index: boolean;
    follow: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      "max-video-preview": number;
      "max-image-preview": string;
      "max-snippet": number
    }
  }
} = {
  title: "codedbygio - Transformando ideias em experiências digitais",
  description:
    "Giovana Teixeira - Desenvolvedora Front-End e UX/UI Designer especializada em criar experiências digitais únicas para empreendedoras e pequenos negócios.",
  generator: "v0.dev",
  keywords: ["desenvolvimento web", "UX/UI design", "front-end", "landing pages", "identidade visual", "codedbygio"],
  authors: [{ name: "Giovana Teixeira", url: "https://instagram.com/codedbygio" }],
  creator: "Giovana Teixeira",
  openGraph: {
    title: "codedbygio - Transformando ideias em experiências digitais",
    description: "Desenvolvedora Front-End e UX/UI Designer especializada em projetos digitais personalizados.",
    url: "https://codedbygio.com",
    siteName: "codedbygio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "codedbygio - Transformando ideias em experiências digitais",
    description: "Desenvolvedora Front-End e UX/UI Designer especializada em projetos digitais personalizados.",
    creator: "@codedbygio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23facc15' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><polyline points='4,17 10,11 4,5'/><line x1='12' y1='19' x2='20' y2='19'/></svg>"
        />
        <link
          rel="apple-touch-icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23facc15' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><polyline points='4,17 10,11 4,5'/><line x1='12' y1='19' x2='20' y2='19'/></svg>"
        />
        <meta name="theme-color" content="#facc15" />
      </head>
      <body>{children}</body>
    </html>
  )
}
