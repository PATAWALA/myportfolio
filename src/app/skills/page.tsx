"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInview";
import {
  FaArrowRight,
  FaCode,
  FaTools,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaRocket,
} from "react-icons/fa";

export interface Skill {
  name: string;
  desc: string;
  icon?: React.ReactNode;
  level?: number;
}

interface SkillsProps {
  title: string;
  skills_list: Skill[];
  cta_contact: string;
}

export default function Skills({ title, skills_list, cta_contact }: SkillsProps) {
  const { ref, isInView } = useInView(0.2);

  const defaultIcons = [<FaCode />, <FaMobileAlt />, <FaDatabase />, <FaCloud />];
  const lineColors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-pink-500", "bg-yellow-500"];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white dark:bg-gray-900 scroll-mt-24">
      {/* Titre */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-12"
      >
        <FaTools size={50} className="text-blue-600 dark:text-blue-400 mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 text-center">
          {title}
        </h1>
      </motion.div>

      {/* Grille compétences */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative">
        {skills_list.map((skill, i) => (
          <motion.div
            key={i}
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            className="bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 w-full"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-blue-600 dark:text-blue-400 text-2xl">
                {skill.icon || defaultIcons[i % defaultIcons.length]}
              </div>
              <h3 className="font-semibold text-lg sm:text-xl text-blue-700 dark:text-blue-300">
                {skill.name}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{skill.desc}</p>

            {/* Barre de compétence */}
            {skill.level && (
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-blue-600 dark:bg-blue-400 rounded-full"
                />
              </div>
            )}

            {/* Ligne horizontale décorative */}
            {i < skills_list.length - 1 && (
              <motion.div
                className={`w-full h-1 rounded-full ${lineColors[i % lineColors.length]} my-4`}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            )}
          </motion.div>
        ))}

        {/* Card finale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * skills_list.length, duration: 0.5 }}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 w-full"
        >
          <FaRocket size={40} className="text-white mb-3 animate-bounce" />
          <h3 className="font-bold text-xl text-white text-center mb-2">Et encore plus !</h3>
          <p className="text-white text-center">De nombreuses autres compétences à découvrir et explorer...</p>
        </motion.div>
      </div>

      {/* Bouton Me contacter */}
      <div className="flex justify-center mt-16">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 dark:bg-green-500 text-white rounded-full shadow hover:bg-green-700 dark:hover:bg-green-600 transition transform hover:scale-105"
        >
          {cta_contact} <FaArrowRight />
        </a>
      </div>
    </main>
  );
}
