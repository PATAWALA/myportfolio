"use client"
import { motion } from "framer-motion"

type Props = {
  title: string
  description: string
  tech: string[]
  link: string
}

export default function ProjectCard({ title, description, tech, link }: Props) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }} // animation plus douce
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }} // apparition plus rapide
      className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between w-full sm:w-auto hover:shadow-lg cursor-pointer"
    >
      <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span key={i} className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
      <a 
        href={link} 
        className="text-blue-600 font-medium hover:underline mt-auto"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Voir le projet →
      </a>
    </motion.div>
  )
}
