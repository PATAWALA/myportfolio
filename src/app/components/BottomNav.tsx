"use client"

import { Link as ScrollLink, Events, scrollSpy } from "react-scroll"
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa"
import { useEffect, useState } from "react"
import { useTheme } from "./ThemeProvider"

export default function BottomNav() {
  const { theme } = useTheme()
  const [active, setActive] = useState<string>("home")

  const links = [
    { icon: <FaHome />, label: "Accueil", to: "home" },
    { icon: <FaUser />, label: "À propos", to: "about" },
    { icon: <FaProjectDiagram />, label: "Projets", to: "projects" },
    { icon: <FaTools />, label: "Compétences", to: "skills" },
    { icon: <FaEnvelope />, label: "Contact", to: "contact" },
  ]

  // Active la section visible automatiquement
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {})
    Events.scrollEvent.register("end", function () {})
    scrollSpy.update()
    return () => {
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
    }
  }, [])

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 shadow-t md:hidden z-50 border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-around items-center py-2">
        {links.map((link, i) => (
          <ScrollLink
            key={i}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-80} // hauteur de la navbar
            spy={true}   // active le style quand la section est visible
            onSetActive={(to) => setActive(to)} // met à jour l'état actif
            className={`flex flex-col items-center text-gray-700 dark:text-gray-300 cursor-pointer transition-colors
              ${active === link.to ? "text-blue-600 dark:text-blue-400" : ""}`}
          >
            <div className="text-2xl">{link.icon}</div>
            <span className="text-xs mt-1">{link.label}</span>
          </ScrollLink>
        ))}
      </div>
    </nav>
  )
}
