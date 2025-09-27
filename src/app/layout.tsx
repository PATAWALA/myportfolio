"use client"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BottomNav from "./components/BottomNav"
import ThemeProvider from "./components/ThemeProvider"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 dark:bg-gray-900 flex flex-col min-h-screen">
        <ThemeProvider>
          {/* Navbar fixe */}
          <Navbar />

          {/* BottomNav uniquement mobile */}
          <div className="md:hidden">
            <BottomNav />
          </div>

          {/* Main: padding-top = hauteur navbar */}
          <main className="flex-1 pt-[64px] md:pt-[64px] md:pb-0">
            {children}
          </main>

          {/* Footer direct sans balise supplémentaire */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
