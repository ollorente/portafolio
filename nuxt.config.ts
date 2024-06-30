import tailwindTypography from "@tailwindcss/typography"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  telemetry: { enabled: false },
  app: {
    head: {
      charset: "utf8",
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      link: [
        // { rel: "icon", type: "image/png", href: "https://ollorente.github.io/tourscorrecaminos/img/favicon.png" }
      ],
      script: [],
    },
  },
  srcDir: "src",
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      plugins: [tailwindTypography]
    },
  },
  runtimeConfig: {
    baseURL:"/portafolio/",
    public: {
      baseURL:"/portafolio/"
    }
  },
})