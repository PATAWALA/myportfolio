import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import ThemeProvider from "./components/ThemeProvider";
import "./globals.css";

const siteUrl = "https://myportfolio-sable-chi-93.vercel.app";
const socialImage = `${siteUrl}/monprofil.png`;

export const metadata: Metadata = {
  title: "Abdoulaye PATAWALA - Portfolio Développeur Fullstack",
  description:
    "Portfolio de Abdoulaye PATAWALA, développeur Fullstack spécialisé en React, Next.js, Node.js et React Native.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Abdoulaye PATAWALA - Portfolio",
    description:
      "Découvrez mes projets web et mobiles, mes compétences en React, Next.js et Node.js.",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Aperçu du Portfolio d'Abdoulaye PATAWALA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdoulaye PATAWALA - Portfolio",
    description:
      "Découvrez mes projets web et mobiles, mes compétences en React, Next.js et Node.js.",
    images: [socialImage],
  },
  icons: {
    icon: "/myicon.ico",
  },
  themeColor: "#1E40AF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdoulaye PATAWALA",
    url: siteUrl,
    image: socialImage,
    jobTitle: "Développeur Fullstack",
    description:
      "Développeur Fullstack spécialisé en React, Next.js, Node.js et React Native. Je crée des sites modernes et des applications performantes.",
    sameAs: [
      "https://github.com/PATAWALA",
      "https:https://www.linkedin.com/in/abdoulaye-patawala-84b138381",
    ],
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-gray-50 dark:bg-gray-900 flex flex-col min-h-screen">
        <ThemeProvider>
          {/* Navbar fixe */}
          <Navbar />

          {/* BottomNav uniquement mobile */}
          <div className="md:hidden">
            <BottomNav />
          </div>

          {/* Main: padding-top = hauteur navbar */}
          <main className="flex-1 pt-[64px] md:pt-[64px] md:pb-0">{children}</main>

          {/* Footer direct sans balise supplémentaire */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
