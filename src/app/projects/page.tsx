"use client"
import { FaArrowRight, FaDesktop } from "react-icons/fa"
import { motion } from "framer-motion"
import { useInView } from "../hooks/useInview"

const projects = [
  {
    title: "Mbia Crypto",
    description:
      "Plateforme blockchain permettant des échanges crypto avec des systèmes de paiements légaux et sécurisés.",
    tech: ["Next.js", "Node.js", "MongoDB", "Blockchain"],
    desktopPreview: "/app-desktop-crypto.gif",
    mobilePreview: "/app-mobile-crypto.gif",
    link: "https://github.com/PATAWALA/MBIA-EXCHANGE-CRYPTO"
  },
  {
    title: "Kipler",
    description:
      "Application e-commerce qui permet à tout le monde de vendre ses services facilement et rapidement.",
    tech: ["React Native", "Expo", "Firebase", "Stripe"],
    desktopPreview: "/app-desktop-Kipler.gif",
    mobilePreview: "/app-mobile-Kipler.gif",
    link: "https://github.com/PATAWALA/Kipler"
  }
]

export default function Projects() {
  const { ref, isInView } = useInView(0.2)

  return (
    <main className="min-h-screen px-6 py-12 md:py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
      
      {/* Titre */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-8"
      >
        <FaDesktop size={50} className="text-blue-600 dark:text-blue-400 mb-3" />
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center">Mes Projets</h1>
      </motion.div>

      {/* Grille des projets */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2"
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-700 p-4 md:p-6 flex flex-col overflow-hidden hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{p.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3">{p.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-4">
              <div className="w-full md:w-3/4 max-w-full">
                <img
                  src={p.desktopPreview}
                  alt={`${p.title} Desktop`}
                  className="w-full h-auto rounded-xl shadow-lg object-contain"
                />
              </div>
              <div className="w-36 md:w-48">
                <img
                  src={p.mobilePreview}
                  alt={`${p.title} Mobile`}
                  className="w-full h-auto rounded-xl shadow-lg object-contain"
                />
              </div>
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 text-white py-2.5 md:py-3 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            >
              Voir l'application <FaArrowRight />
            </a>
          </div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-8 md:mt-10">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 md:py-3 bg-green-600 dark:bg-green-500 text-white rounded-lg shadow hover:bg-green-700 dark:hover:bg-green-600 transition"
        >
          Me contacter directement <FaArrowRight />
        </a>
      </div>
    </main>
  )
}
