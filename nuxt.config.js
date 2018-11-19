const pkg = require("./package");

module.exports = {
  mode: "universal",

  head: {
    title: "The Ki Line",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Transition coaching with Ki: make change work for you."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  loading: { color: "#1a1a1a" },

  css: ["~/assets/styles/application.css"],

  router: {
    middleware: "currentPage"
  },

  generate: {
    routes: ["404"]
  },

  plugins: [
    /* { src: "~/plugins/aos", ssr: false } */
    /* { src: "~/plugins/headroom", ssr: false } */
    { src: "~/plugins/vue-scroll-reveal", ssr: false }
    /* { src: "~/plugins/vue-tiny-slider", ssr: false } */
  ],

  modules: [["@nuxtjs/google-tag-manager", { id: "GTM-PTQSCT3" }]],

  /* https://github.com/nuxt-community/axios-module#options */
  /* axios: {}, */

  build: {
    styleResources: {
      css: "./assets/styles/variables.css"
    },

    /* vendor: ["vue-tiny-slider"], */

    /* extend webpack config */
    extend(config, ctx) {
      // Add postcss loader for CSS files
      // https://github.com/nuxt/nuxt.js/issues/846#issuecomment-309196303
      let cssLoader = config.module.rules.find(loader => loader.test.toString() === "/\\.css$/");
      cssLoader.use.push("postcss-loader");
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
