// app/components/Footer.tsx
"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa"

const socials = [
  { name: "GitHub", href: "https://github.com/PATAWALA", icon: <FaGithub /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abdoulaye-patawala-84b138381", icon: <FaLinkedin /> },
  { name: "Facebook", href: "https://web.facebook.com/profile.php?id=61579343805169", icon: <FaFacebook /> },
  { name: "WhatsApp", href: "https://wa.me/22953173035", icon: <FaWhatsapp /> },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-8OO dark:bg-black pt-6 text-center"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 4.5rem)" }}
    >
      <p className="text-gray-600 dark:text-gray-300 mb-4">© 2025 Abdoulaye PATAWALA. Tous droits réservés.</p>

      {/* Texte introductif avant les liens sociaux */}
      <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">
        Contactez-moi via ces réseaux sociaux :
      </p>

      <div className="max-w-xl mx-auto px-4">
        {/* Mobile: 2 colonnes; Desktop: ligne */}
        <div className="grid grid-cols-2 gap-3 sm:flex sm:justify-center sm:items-center sm:gap-6">
          {socials.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full sm:w-auto"
            >
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 font-medium"
              >
                <span className="text-lg">{s.icon}</span>
                <span>{s.name}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}
