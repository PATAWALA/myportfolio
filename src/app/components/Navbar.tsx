"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "./ThemeProvider"
import { FaMoon, FaSun } from "react-icons/fa"

export default function Navbar() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  const links = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Projets", href: "/projects" },
    { name: "Compétences", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-white/90 dark:bg-gray-900 backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer">
          <Link href="/">Abdoulaye PATAWALA</Link>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link, i) => {
            const isActive = pathname === link.href
            return (
              <div
                key={i}
                className={`relative font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <Link href={link.href}>
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 dark:bg-blue-400 rounded-full" />
                  )}
                </Link>
              </div>
            )
          })}

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

        {/* Mobile: profil + dark mode */}
        <div className="flex md:hidden items-center gap-4">
          {/* Dark mode */}
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
