export default function Head() {
  const siteUrl = "https://myportfolio-sable-chi-93.vercel.app";
  const socialImage = `${siteUrl}/profile.png`; 

  return (
    <>
      <title>Abdoulaye PATAWALA - Portfolio Développeur Fullstack</title>
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="Portfolio de Abdoulaye PATAWALA, développeur Fullstack spécialisé en React, Next.js, Node.js et React Native."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph - Facebook, LinkedIn, WhatsApp */}
      <meta property="og:title" content="Abdoulaye PATAWALA - Portfolio" />
      <meta
        property="og:description"
        content="Découvrez mes projets web et mobiles, mes compétences en React, Next.js et Node.js."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Abdoulaye PATAWALA - Portfolio" />
      <meta
        name="twitter:description"
        content="Découvrez mes projets web et mobiles, mes compétences en React, Next.js et Node.js."
      />
      <meta name="twitter:image" content={socialImage} />

      {/* Optionnel : pour meilleure compatibilité */}
      <meta name="theme-color" content="#1E40AF" /> {/* Bleu foncé, harmonisé avec ton design */}
    </>
  );
}
