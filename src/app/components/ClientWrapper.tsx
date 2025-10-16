"use client";

import { I18nextProvider } from "react-i18next";
import dynamic from "next/dynamic";
import i18n from "../i18n";

// On importe ton switcher dynamiquement (sans SSR)
const LanguageSwitcher = dynamic(() => import("./languageSwitcher"), { ssr: false });

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      {/* Sélecteur de langue fixe sur le côté gauche */}
      <LanguageSwitcher />

      {/* Le reste du contenu */}
      {children}
    </I18nextProvider>
  );
}
