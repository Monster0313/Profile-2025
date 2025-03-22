// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  pages: true,
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },
  modules: ["@nuxtjs/i18n", "@nuxtjs/color-mode", "@nuxt/icon", "@nuxt/image"],
  i18n: {
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "zh", name: "中文", file: "zh.json" },
    ],
    defaultLocale: "zh",
    lazy: true,
    langDir: "locales/",
  },
});
