// app/providers.tsx
"use client";

import { ReactNode } from "react";
import "../globals.css";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <>{children}</>; // next-i18next gère déjà la traduction via appWithTranslation
}
