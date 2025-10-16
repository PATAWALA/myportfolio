"use client";

import { FaArrowRight, FaDesktop, FaRocket } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
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
  const controls = useAnimation();
  const [counter, setCounter] = useState(1);

  // Incrémentation continue
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCounter((prev) => (prev === 5 ? 1 : prev + 1));
      }, 800); // vitesse du cycle (0.8s entre chaque)
      return () => clearInterval(interval);
    }
  }, [isInView]);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden
                 bg-gradient-to-b from-gray-50 via-gray-100 to-white
                 dark:from-[#050505] dark:via-[#0b0b0f] dark:to-[#090909]
                 text-gray-900 dark:text-white transition-colors duration-500 scroll-mt-24"
    >
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
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 w-full max-w-6xl"
      >
        {projects_list?.length ? (
          <>
            {projects_list.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-700 p-5 md:p-6 flex flex-col overflow-hidden hover:shadow-2xl transition-transform duration-300"
              >
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{p.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{p.description}</p>

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

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
                  <div className="w-full md:w-3/4 max-w-full rounded-xl overflow-hidden shadow-lg">
                    <img src={p.desktop_gif} alt={p.desktop_alt} className="w-full h-auto object-contain" />
                  </div>
                  <div className="w-36 md:w-48 rounded-xl overflow-hidden shadow-lg">
                    <img src={p.mobile_gif} alt={p.mobile_alt} className="w-full h-auto object-contain" />
                  </div>
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold rounded-full overflow-hidden
                             bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-[0_0_25px_rgba(124,92,255,0.4)]
                             transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(124,92,255,0.6)]"
                >
                  <span className="relative z-10">{p.cta_view}</span>
                </a>
              </motion.div>
            ))}

            {/* Nouvelle card avec incrémentation continue */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: projects_list.length * 0.2, duration: 0.6 }}
              className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 
                         dark:from-indigo-700 dark:via-purple-800 dark:to-blue-700
                         rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center
                         overflow-hidden hover:scale-105 transition-transform duration-500"
            >
              {/* effet lumière */}
              <div className="absolute inset-0 bg-white/10 blur-3xl animate-pulse" />

              <FaRocket size={60} className="text-white mb-4 relative z-10" />
              <h2 className="text-2xl font-bold text-white mb-6 text-center relative z-10">
                Bien plus encore 🚀
              </h2>

              {/* Chiffre animé avec rebond */}
              <motion.div
                key={counter}
                initial={{ scale: 0, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0, opacity: 0, y: -30 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="w-20 h-20 flex items-center justify-center bg-white/20 text-white text-4xl 
                           rounded-full font-bold shadow-lg relative z-10 backdrop-blur-sm"
              >
                {counter}
              </motion.div>
            </motion.div>
          </>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
            Aucun projet disponible pour le moment.
          </p>
        )}
      </motion.div>

      {/* Bouton Contact */}
      <div className="flex justify-center mt-10">
        <a
          href="#contact"
          className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full overflow-hidden
                     bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-[0_0_25px_rgba(0,212,255,0.25)]
                     transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(0,212,255,0.4)]"
        >
          {cta_contact} <FaArrowRight className="ml-1" />
        </a>
      </div>
    </div>
  );
}
