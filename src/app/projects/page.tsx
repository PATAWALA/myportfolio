"use client";

import { useEffect, useState } from "react";
import { FaArrowRight, FaDesktop, FaRocket } from "react-icons/fa";

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
  const [count, setCount] = useState(1);

  // Incrémentation continue (1 → 5 puis retour à 1)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden
                 bg-gradient-to-b from-gray-50 via-gray-100 to-white
                 dark:from-[#050505] dark:via-[#0b0b0f] dark:to-[#090909]
                 text-gray-900 dark:text-white transition-colors duration-500 scroll-mt-24"
    >
      {/* Titre */}
      <div className="flex flex-col items-center mb-12">
        <FaDesktop size={50} className="text-blue-600 dark:text-blue-400 mb-3" />
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 text-center">
          {title}
        </h1>
      </div>

      {/* Grille des projets */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 w-full max-w-6xl">
        {projects_list?.length ? (
          <>
            {projects_list.map((p, i) => (
              <div
                key={i}
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
                    <img src={p.desktop_gif} alt={p.desktop_alt} className="w-full h-auto object-contain" />
                  </div>
                  <div className="w-36 md:w-48 rounded-xl overflow-hidden shadow-lg">
                    <img src={p.mobile_gif} alt={p.mobile_alt} className="w-full h-auto object-contain" />
                  </div>
                </div>

                {/* Bouton CTA */}
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
              </div>
            ))}

            {/* Nouvelle card "projets en cours" */}
            <div
              className="relative overflow-hidden rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center text-white
                         bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500
                         hover:shadow-2xl transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_70%)]" />

              <FaRocket size={50} className="mb-4 text-white" />
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Et d'autres projets en cours 🚀
              </h2>

              {/* Compteur animé */}
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-md text-3xl font-bold rounded-full shadow-lg">
                {count}
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
            Aucun projet disponible pour le moment.
          </p>
        )}
      </div>

      {/* Bouton pour contacter */}
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
