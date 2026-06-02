import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mubasir Halidu — Full-Stack Engineer & Cloud Architect",
  description:
    "Full-stack engineer and cloud practitioner building production-grade platforms with React, Next.js, Django, and cloud infrastructure on AWS and Azure.",
  keywords: [
    "Mubasir Halidu",
    "Full-Stack Engineer",
    "Cloud Engineer",
    "DevOps",
    "Next.js",
    "React",
    "Django",
    "AWS",
    "Azure",
  ],
};

// Inline script to prevent flash of wrong theme
const themeScript = `
  (function() {
    try {
      var t = localStorage.getItem('theme');
      if (t === 'light') document.documentElement.classList.add('light');
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
