export default {
  // Target: https://go.nuxtjs.dev/config-target
  server: {
    host: "0.0.0.0", // default: localhost
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "DPG - Denk aan Elkaar",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/normalize.css", "@/assets/scss/_defaults.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/dotenv", // https://github.com/nuxt-community/dotenv-module#readme
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    "@nuxtjs/style-resources",
    // https://www.storyblok.com/tp/nuxt-js-multilanguage-website-tutorial
    [
      "storyblok-nuxt",
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        cacheProvider: "memory",
      },
    ],
  ],

  styleResources: {
    scss: [
      "@/assets/scss/_mixins.scss",
      "@/assets/scss/_fonts.scss",
      "@/assets/scss/_variables.scss",
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
      extend(config, { isDev, isClient }) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
      }
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-servermiddleware
  serverMiddleware: [
    // Server-side security headers
    "~/middleware/security-headers.js",
  ],
};
