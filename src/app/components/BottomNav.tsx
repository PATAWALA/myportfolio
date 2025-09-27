"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa"
import { useTheme } from "./ThemeProvider"

export default function BottomNav() {
  const pathname = usePathname()
  const { theme } = useTheme()

  const links = [
    { icon: <FaHome />, label: "Accueil", href: "/" },
    { icon: <FaUser />, label: "À propos", href: "/about" },
    { icon: <FaProjectDiagram />, label: "Projets", href: "/projects" },
    { icon: <FaTools />, label: "Compétences", href: "/skills" },
    { icon: <FaEnvelope />, label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 shadow-t md:hidden z-50 border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-around items-center py-2">
        {links.map((link, i) => {
          const isActive = pathname === link.href
          return (
            <div
              key={i}
              className={`flex flex-col items-center text-sm ${
                isActive 
                  ? "text-blue-600 dark:text-blue-400" 
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <Link href={link.href} className="flex flex-col items-center">
                <div className="text-2xl">{link.icon}</div>
                <span className="text-xs mt-1">{link.label}</span>
              </Link>
            </div>
          )
        })}
      </div>
    </nav>
  )
}
