"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation("common");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    console.log("✅ LanguageSwitcher monté !");
  }, []);

  const changeLanguage = (locale: string) => {
    if (!i18n || !i18n.changeLanguage) return;
    i18n.changeLanguage(locale);
  };

  const languages = [
    { code: "fr", label: "FR", flag: "/flags/fr.svg" },
    { code: "en", label: "EN", flag: "/flags/en.svg" },
    { code: "es", label: "ES", flag: "/flags/es.svg" },
  ];

  return (
    <div
      className="
        fixed top-1/2 left-4 -translate-y-1/2
        flex flex-col gap-3
        bg-white/70 dark:bg-gray-800/80
        backdrop-blur-md shadow-xl
        rounded-2xl p-3
        border border-gray-200 dark:border-gray-700
        z-[9999]
      "
    >
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`
            flex items-center justify-between gap-2 px-3 py-2 rounded-lg font-semibold text-sm
            transition-all duration-300 w-[80px]
            ${
              i18n.language === lang.code
                ? "bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md scale-105"
                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100"
            }
          `}
        >
          <img
            src={lang.flag}
            alt={lang.label}
            className="w-5 h-5 rounded-sm flex-shrink-0"
          />
          <span className="tracking-wide">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
