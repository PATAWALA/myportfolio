"use client";

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

export default function FirstPage({
  greeting,
  description,
  subtext,
  cta_projects,
  cta_download,
}: FirstPageProps) {
  const { scrollYProgress } = useScroll();
  // Parallax vertical pour la Lottie
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white dark:bg-gray-900 scroll-mt-24">
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 w-full max-w-6xl mx-auto">
        {/* Animation Lottie avec parallaxe */}
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
            className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] drop-shadow-lg"
          />
        </motion.div>

        {/* Texte de présentation */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-6 order-2 md:order-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 leading-tight">
            {greeting}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Abdoulaye PATAWALA
            </span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl">{subtext}</p>

          {/* Boutons d’action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg 
                         hover:shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              {cta_projects}
            </a>
            <a
              href="/assets/mypdfportfolio.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 dark:bg-green-500 text-white 
                         rounded-full shadow-lg hover:shadow-green-500/30 hover:bg-green-700 dark:hover:bg-green-600 
                         transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaDownload /> {cta_download}
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
