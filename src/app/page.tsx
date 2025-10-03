"use client"

import dynamic from "next/dynamic"
import { motion, Variants } from "framer-motion"
import { FaLaptopCode, FaDownload } from "react-icons/fa"
import { useState } from "react"
import devAnimation from "./dev-animation.json"
import About from "./about/page"
import Projects from "./projects/page"
import Skills from "./skills/page"
import Contact from "./contact/page"

// Lottie chargé uniquement côté client
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)

  const sectionAnim: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const sectionClass = "min-h-[85vh] flex flex-col items-center px-6 py-12 md:py-16 scroll-mt-24"

  return (
    <>
    <motion.section
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionAnim}
      className={`${sectionClass} bg-white dark:bg-gray-900`}
    >
      {/* Titre */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-8 md:mb-12"
      >
        <FaLaptopCode size={50} className="text-blue-600 dark:text-blue-400 mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 text-center">
          Salut 👋, je suis Abdoulaye PATAWALA
        </h1>
      </motion.div>

      {/* Contenu */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl"
      >
        {/* Animation Lottie */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Lottie
            animationData={devAnimation}
            loop
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px]"
          />
        </div>

        {/* Texte et boutons */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left space-y-4">
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed">
            Bonjour et bienvenue sur mon portfolio ! 
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed">
            Pas besoin de longs discours. Vous cherchez quelqu’un capable de créer une application ou un site moderne pour mieux vendre vos services ?
            Une solution simple à utiliser pour vos clients, mais suffisamment puissante pour booster votre activité ?
            Alors vous êtes au bon endroit ✅
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-md 
                         hover:bg-blue-700 transition transform duration-300"
            >
              Voir mes réalisations →
            </a>
            <a
              href="/assets/mypdfportfolio.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 dark:bg-green-500 text-white 
                         rounded-full shadow-md hover:bg-green-700 dark:hover:bg-green-600 transition transform duration-300"
            >
              <FaDownload /> Télécharger mon CV
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>

      {/* Section À propos */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionAnim}
        className={`${sectionClass} bg-white dark:bg-gray-900`}
      >
        <About />
      </motion.section>

      {/* Section Projets */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionAnim}
        className={`${sectionClass} bg-gray-50 dark:bg-gray-900`}
      >
        <Projects />
      </motion.section>

      {/* Section Compétences */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionAnim}
        className={`${sectionClass} bg-white dark:bg-gray-900`}
      >
        <Skills />
      </motion.section>

      {/* Section Contact */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionAnim}
        className={`${sectionClass} bg-gray-50 dark:bg-gray-900`}
      >
        <Contact />
      </motion.section>
    </>
  )
}
