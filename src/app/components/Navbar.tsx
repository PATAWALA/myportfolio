"use client"

import { useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { useTheme } from "./ThemeProvider"
import { FaMoon, FaSun, FaBars } from "react-icons/fa"
import MobileSidebar from "./MobileSidebar"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const links = [
    { name: "Accueil", to: "home" },
    { name: "À propos", to: "about" },
    { name: "Projets", to: "projects" },
    { name: "Compétences", to: "skills" },
    { name: "Contact", to: "contact" },
  ]

  return (
    <nav className="backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6  flex justify-between items-center md:h-16 h-16 px-8">
        {/* Logo */}
        <div className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer">
          <ScrollLink to="home" smooth duration={500} offset={-80} spy>
            Abdoulaye PATAWALA
          </ScrollLink>
        </div>

        {/* Liens desktop */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          {links.map((link, i) => (
            <ScrollLink
              key={i}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              spy
              activeClass={
                theme === "light"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-blue-400 border-b-2 border-blue-400"
              }
              className={`cursor-pointer transition ${
                theme === "light"
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-gray-200 hover:text-blue-400"
              }`}
            >
              {link.name}
            </ScrollLink>
          ))}

          {/* Dark mode bouton */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition"
          >
            {theme === "light" ? (
              <FaMoon className="text-gray-700" />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>
        </div>

        {/* Boutons mobile */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition"
          >
            {theme === "light" ? (
              <FaMoon className="text-gray-700" />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md bg-gray-400 dark:bg-gray-800 transition"
            aria-label={sidebarOpen ? "Fermer le menu" : "Ouvrir le menu"}
            title={sidebarOpen ? "Fermer le menu" : "Ouvrir le menu"}
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
