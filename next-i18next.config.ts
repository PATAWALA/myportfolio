import type { UserConfig } from "next-i18next";

const config = {
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};

export default config;
export const { i18n } = config;
