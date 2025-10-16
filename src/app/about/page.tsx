"use client";

import { useState } from "react";
import { FaUser, FaArrowRight } from "react-icons/fa";

interface AboutProps {
  title: string;
  role:string,
  web_stack:string,
  mobile_stack:string;
  description_1: string;
  description_2: string;
  cta_contact: string;
}

export default function About({
  title,
  description_1,
  description_2,
  cta_contact,
}: AboutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden
                 bg-gradient-to-b from-gray-50 via-gray-100 to-white
                 dark:from-[#050505] dark:via-[#0b0b0f] dark:to-[#090909]
                 text-gray-900 dark:text-white transition-colors duration-500"
    >
      {/* Titre avec icône */}
      <div className="flex flex-col items-center mb-12">
        <FaUser
          size={50}
          className="text-blue-500 dark:text-blue-400 mb-3 drop-shadow-lg"
        />
        <h1 className="text-4xl font-extrabold text-blue-500 dark:text-blue-400 text-center tracking-tight">
          {title}
        </h1>
      </div>

      {/* Contenu principal */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
        {/* Photo */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/myprofil.png"
            alt="Abdoulaye PATAWALA"
            className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-full shadow-2xl 
                       cursor-pointer ring-4 ring-blue-600/30 dark:ring-blue-400/30
                       hover:scale-105 hover:shadow-blue-500/30 transition-transform duration-500 ease-out"
            onClick={() => setIsOpen(true)}
          />
        </div>

        {/* Texte */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            {description_1}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed">
            {description_2}
          </p>

          {/* Bouton Me contacter */}
          <div className="flex justify-center md:justify-start mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4
                         bg-gradient-to-r from-blue-600 to-green-500
                         dark:from-green-500 dark:to-blue-600
                         text-white font-semibold rounded-full
                         shadow-lg hover:shadow-blue-500/40
                         transition-all duration-300 ease-out hover:scale-105"
            >
              {cta_contact} <FaArrowRight className="ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal photo */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 dark:bg-gray-800/90 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/myprofil.png"
            alt="Photo agrandie"
            className="max-w-4xl max-h-[90vh] rounded-full shadow-2xl ring-8 ring-blue-500/40"
          />
        </div>
      )}
    </main>
  );
}
