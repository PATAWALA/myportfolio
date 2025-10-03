"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaUser, FaArrowRight } from "react-icons/fa"

export default function About() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="min-h-screen flex flex-col items-center px-6 py-12 md:py-16 bg-white dark:bg-gray-900 scroll-mt-24">
      
      {/* Titre avec icône */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-12"
      >
        <FaUser size={50} className="text-blue-600 dark:text-blue-400 mb-3" />
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center">À propos de moi</h1>
      </motion.div>

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full"
      >
        {/* Photo */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/myprofil.png"
            alt="Abdoulaye PATAWALA"
            className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-full shadow-xl cursor-pointer 
                       hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-out"
            onClick={() => setIsOpen(true)}
          />
        </div>

        {/* Texte */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Je suis <span className="font-semibold">Fullstack Developer</span> spécialisé en <span className="font-semibold">React, Next.js, Node.js</span> pour le web
            et <span className="font-semibold">React Native</span> pour le mobile.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Passionné par le développement, je transforme vos idées en sites web modernes, applications mobiles intuitives et boutiques en ligne performantes. 
            Je rends chaque étape claire et accessible, que vous soyez entreprise, indépendant ou porteur de projet.
          </p>

          {/* Bouton Me contacter */}
          <div className="flex justify-center md:justify-start mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-green-500 to-green-600 
                         dark:from-green-600 dark:to-green-500 text-white font-medium rounded-full shadow-lg 
                         hover:scale-105 hover:brightness-110 transition transform duration-300"
            >
              Me contacter <FaArrowRight className="ml-1" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Modal photo */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.img
              src="/myprofil.png"
              alt="Photo agrandie"
              className="max-w-4xl max-h-[90vh] rounded-full shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
