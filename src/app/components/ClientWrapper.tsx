"use client";

import { I18nextProvider } from "react-i18next";
import dynamic from "next/dynamic";
import i18n from "../i18n";

// On importe ton switcher dynamiquement (sans SSR)
const LanguageSwitcher = dynamic(() => import("./languageSwitcher"), { ssr: false });

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      {/* Ton sélecteur de langue fixe sur le côté gauche */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 flex flex-col gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg z-[9999]">
        <LanguageSwitcher />
      </div>

      {/* Le reste de ton contenu */}
      {children}
    </I18nextProvider>
  );
}
