"use client"
import { motion } from "framer-motion"
import { useInView } from "../hooks/useInview"
import { FaTools, FaArrowRight } from "react-icons/fa"

const skills = [
  { name: "React", desc: "Je l'utilise pour créer des interfaces web interactives et rapides." },
  { name: "Next.js", desc: "Pour avoir des sites web rapides et bien organisés avec des pages propres." },
  { name: "Tailwind & Boostrap", desc: "Pour styliser mes applications facilement et rendre les interfaces belles." },
  { name: "Node.js", desc: "Pour gérer le backend et faire fonctionner mes applications côté serveur." },
  { name: "MongoDB", desc: "Pour stocker et gérer les données de mes applications." },
  { name: "Firebase", desc: "Pour gérer facilement les bases de données et l'authentification mobile et web." },
  { name: "React Native", desc: "Pour créer des applications mobiles performantes sur Android et iOS." },
  { name: "JavaScript", desc: "Langage principal pour rendre mes applications dynamiques et interactives." },
  { name: "TypeScript", desc: "Pour écrire du code plus sûr et éviter les erreurs dans mes projets." },
  { name: "Postman", desc: "Pour tester les APIs et s'assurer qu'elles fonctionnent correctement." },
  { name: "Figma", desc: "Pour créer des maquettes et visualiser l'interface avant le développement." }
]

export default function Skills() {
  const { ref, isInView } = useInView(0.2)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white dark:bg-gray-900 scroll-mt-24">
      
      {/* Titre avec icône */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-10"
      >
        <FaTools size={50} className="text-blue-600 dark:text-blue-400 mb-4" />
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center">Mes Compétences</h1>
      </motion.div>

      {/* Cards des compétences */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="bg-blue-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">{skill.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bouton Me contacter */}
      <div className="flex justify-center mt-12">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-full shadow hover:bg-green-700 dark:hover:bg-green-600 transition"
        >
          Me contacter <FaArrowRight />
        </a>
      </div>
    </main>
  )
}
