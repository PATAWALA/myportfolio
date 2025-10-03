"use client"

import { Link as ScrollLink } from "react-scroll"
import { useTheme } from "./ThemeProvider"
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa"
import { useState } from "react"

interface Props {
  sidebarOpen: boolean
  onClose: () => void
}

export default function MobileSidebar({ sidebarOpen, onClose }: Props) {
  const { theme } = useTheme()
  const [activeLink, setActiveLink] = useState("home") // état du lien actif

  const links = [
    { name: "Accueil", to: "home", icon: <FaHome /> },
    { name: "À propos", to: "about", icon: <FaUser /> },
    { name: "Projets", to: "projects", icon: <FaProjectDiagram /> },
    { name: "Compétences", to: "skills", icon: <FaTools /> },
    { name: "Contact", to: "contact", icon: <FaEnvelope /> },
  ]

  return (
    <div
      className={`fixed top-[64px] left-0 h-[calc(100%-64px)] w-64 
        ${theme === "light" ? "bg-white" : "bg-gray-900"}
        shadow-lg transform transition-transform duration-300 z-50
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav className={`flex flex-col ${theme === "light" ? "bg-white" : "bg-gray-900"}`}>
        {links.map((link, i) => {
          const isActive = activeLink === link.to
          return (
            <ScrollLink
              key={i}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              onClick={() => {
                onClose()
                setActiveLink(link.to)
              }}
              className={`flex items-center gap-3 px-6 py-4 text-lg font-medium transition
                ${theme === "light"
                  ? isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-black hover:bg-gray-100"
                  : isActive
                    ? "bg-gray-700 text-blue-400"
                    : "text-white hover:bg-gray-800"
                }`}
            >
              <span className="text-xl">{link.icon}</span>
              {link.name}
            </ScrollLink>
          )
        })}
      </nav>
    </div>
  )
}
