import type { NextConfig } from "next";
import i18n from "./next-i18next.config";

const nextConfig: NextConfig = {
  i18n: i18n.i18n,
  reactStrictMode: true,
};

export default nextConfig;

