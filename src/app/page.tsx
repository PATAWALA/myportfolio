"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { FaLaptopCode, FaDownload } from "react-icons/fa"

// Lottie chargé uniquement côté client
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })
import devAnimation from "./dev-animation.json"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-20 bg-white dark:bg-gray-900">
      
      {/* Titre avec icône */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-12"
      >
        <FaLaptopCode size={50} className="text-blue-600 dark:text-blue-400 mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 text-center">
          Salut 👋, je suis Abdoulaye PATAWALA
        </h1>
      </motion.div>

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl"
      >
        {/* Animation développeur */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Lottie 
            animationData={devAnimation} 
            loop={true} 
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] max-w-full h-auto"
          />
        </div>

        {/* Texte descriptif */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed mb-6 text-justify">
            Bonjour et bienvenue sur mon portfolio ! On ne vas pas trop bavarder. Vous cherchez quelqu’un pour créer des applications rapides, faciles à utiliser et efficaces pour vos utilisateurs ? Vous êtes au bon endroit. Une application légère mais performante, qui fonctionne en temps réel ou qui rend la vie facile à vos utilisateurs ? Simple et agréable ? Je suis là pour la réaliser.
            Découvrez vite mes projets en cliquant sur le bouton bleu juste en dessous, et n’hésitez pas à me contacter pour donner vie à vos idées. Ensemble, faisons avancer vos projets !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Voir rapidement mes réalisations →
            </a>

            <a
              href="/assets/mypdfportfolio.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              <FaDownload /> Télécharger mon CV
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
