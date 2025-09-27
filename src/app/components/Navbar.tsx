"use client"

import { Link as ScrollLink } from "react-scroll"
import { useTheme } from "./ThemeProvider"
import { FaMoon, FaSun } from "react-icons/fa"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  const links = [
    { name: "Accueil", to: "home" },
    { name: "À propos", to: "about" },
    { name: "Projets", to: "projects" },
    { name: "Compétences", to: "skills" },
    { name: "Contact", to: "contact" },
  ]

  return (
    <nav className="bg-white/90 dark:bg-gray-900 backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer">
          <ScrollLink 
            to="home" 
            smooth={true} 
            duration={500} 
            offset={-80} 
            spy={true} 
            className="cursor-pointer"
          >
            Abdoulaye PATAWALA
          </ScrollLink>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link, i) => (
            <ScrollLink
              key={i}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}   // pour compenser la hauteur de la navbar
              spy={true}     // détecte la section active
              activeClass="text-blue-600 dark:text-blue-400 font-semibold" // style actif
              className="cursor-pointer font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {link.name}
            </ScrollLink>
          ))}

          {/* Dark mode desktop */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition"
          >
            {theme === "light" ? (
              <FaMoon className="text-gray-700 dark:text-gray-300" />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>
        </div>

        {/* Mobile: dark mode */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition"
          >
            {theme === "light" ? (
              <FaMoon className="text-gray-700 dark:text-gray-300" />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
