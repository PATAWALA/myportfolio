"use client"

import { useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { useTheme } from "./ThemeProvider"
import { FaMoon, FaSun, FaBars } from "react-icons/fa"
import MobileSidebar from "./MobileSidebar"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <nav className=" backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer">
          <ScrollLink to="home" smooth duration={500} offset={-80} spy>
            Abdoulaye PATAWALA
          </ScrollLink>
        </div>

        {/* Dark mode desktop */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition"
          >
            {theme === "light" ? <FaMoon className="text-gray-700" /> : <FaSun className="text-yellow-400" />}
          </button>
<button
  onClick={() => setSidebarOpen(!sidebarOpen)}
  className="p-2 rounded-md bg-gray-400 dark:bg-gray-800 transition"
  aria-label={sidebarOpen ? "Fermer le menu" : "Ouvrir le menu"} // décrit l’action
  title={sidebarOpen ? "Fermer le menu" : "Ouvrir le menu"}      // info au survol
>
  <FaBars className="text-xl text-white" />
</button>
        </div>
      </div>

      {/* Sidebar mobile */}
      <MobileSidebar sidebarOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </nav>
  )
}
