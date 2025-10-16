"use client";

import { FaArrowRight, FaDesktop } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInview";

interface Project {
  title: string;
  description: string;
  tech: string[];
  desktop_alt: string;
  mobile_alt: string;
  link: string;
  cta_view: string;
  desktop_gif: string;
  mobile_gif: string;
}

interface ProjectsProps {
  title: string;
  projects_list: Project[];
  cta_contact: string;
}

export default function Projects({ title, projects_list, cta_contact }: ProjectsProps) {
  const { ref, isInView } = useInView(0.2);

  return (
    <main className="min-h-screen px-6 py-12 md:py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
      
      {/* Titre */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-12"
      >
        <FaDesktop size={50} className="text-blue-600 dark:text-blue-400 mb-3" />
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 text-center">
          {title}
        </h1>
      </motion.div>

      {/* Grille des projets */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2"
      >
        {projects_list.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-700 p-5 md:p-6 flex flex-col overflow-hidden hover:shadow-2xl transition-transform duration-300"
          >
            {/* Titre + description */}
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{p.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{p.description}</p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-200 text-sm rounded-full shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* GIF desktop et mobile */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
              <div className="w-full md:w-3/4 max-w-full rounded-xl overflow-hidden shadow-lg">
                <img
                  src={p.desktop_gif}
                  alt={p.desktop_alt}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-36 md:w-48 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={p.mobile_gif}
                  alt={p.mobile_alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Bouton CTA */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 text-white py-2.5 md:py-3 rounded-full shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            >
              {p.cta_view} <FaArrowRight />
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Bouton pour contacter */}
      <div className="flex justify-center mt-10">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-full shadow hover:bg-green-700 dark:hover:bg-green-600 transition"
        >
          {cta_contact} <FaArrowRight />
        </a>
      </div>
    </main>
  );
}
