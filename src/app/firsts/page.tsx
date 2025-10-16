"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import { FaDownload } from "react-icons/fa";
import devAnimation from "../dev-animation.json";

interface FirstPageProps {
  greeting: string;
  description: string;
  subtext: string;
  cta_projects: string;
  cta_download: string;
}

interface Particle {
  left: string;
  top: string;
  delay: number;
  duration: number;
}

export default function FirstPage({
  greeting,
  description,
  subtext,
  cta_projects,
  cta_download,
}: FirstPageProps) {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const [particles, setParticles] = useState<Particle[]>([]);

  // ✅ Génère les particules uniquement côté client
  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 5 + Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden 
                 bg-gradient-to-b from-gray-50 via-gray-100 to-white dark:from-[#050505] dark:via-[#0b0b0f] dark:to-[#090909]
                 text-gray-900 dark:text-white transition-colors duration-500"
    >
      {/* --- Image de fond --- */}
      <div
        className="absolute inset-0 bg-[url('/images/bg-texture-light.webp')] dark:bg-[url('/images/bg-texture-dark.webp')] 
                   bg-cover bg-center opacity-20 dark:opacity-25 pointer-events-none transition-opacity duration-700"
        aria-hidden="true"
      />

      {/* --- Éclats lumineux dynamiques --- */}
      <div
        className="absolute -top-40 -left-40 w-[400px] h-[400px] 
                   bg-gradient-to-r from-purple-400/30 to-blue-400/30 
                   dark:from-purple-600/40 dark:to-blue-600/40
                   rounded-full blur-3xl opacity-40 animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] 
                   bg-gradient-to-t from-green-400/20 to-blue-400/20 
                   dark:from-green-500/30 dark:to-blue-600/30
                   rounded-full blur-3xl opacity-30 animate-pulse delay-500"
        aria-hidden="true"
      />

      {/* --- Particules flottantes sans erreur SSR --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute w-[3px] h-[3px] bg-blue-400/30 dark:bg-white/20 rounded-full"
            style={{ left: p.left, top: p.top }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* --- Contenu principal --- */}
      <div className="relative flex flex-col md:flex-row-reverse items-center justify-center gap-10 w-full max-w-6xl mx-auto z-10">
        {/* Animation Lottie */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2"
          style={{ y: yParallax }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Lottie
            animationData={devAnimation}
            loop
            className="w-[280px] sm:w-[380px] md:w-[480px] lg:w-[520px] drop-shadow-[0_0_25px_rgba(124,92,255,0.3)]"
          />
        </motion.div>

        {/* Texte */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-6 order-2 md:order-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            {greeting}{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 bg-clip-text text-transparent">
              Abdoulaye PATAWALA
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg md:text-xl">{subtext}</p>

          {/* --- Boutons modernes --- */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mt-10">
            {/* Bouton principal */}
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-semibold rounded-full overflow-hidden
                         bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-[0_0_30px_rgba(124,92,255,0.4)]
                         transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(124,92,255,0.6)]"
            >
              <span className="relative z-10">{cta_projects}</span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 opacity-0 
                           group-hover:opacity-100 transition-opacity duration-500"
              />
            </a>

            {/* Bouton téléchargement */}
            <a
              href="/assets/mypdfportfolio.pdf"
              download
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold rounded-full overflow-hidden 
                         border border-gray-800 dark:border-white/10 backdrop-blur-sm
                         bg-gray-200/40 text-gray-900 dark:bg-white/5 dark:text-white 
                         hover:bg-white/80 hover:text-black dark:hover:bg-white/10 dark:hover:text-white
                         shadow-[0_0_25px_rgba(0,212,255,0.25)]
                         transition-all duration-300 hover:scale-105"
            >
              <FaDownload className="text-green-500 group-hover:text-green-400 transition-colors" />
              <span className="relative z-10">{cta_download}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
