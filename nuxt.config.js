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
        content: "Yo."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  loading: { color: "hsl(131, 16%, 93%)" },

  css: ["~/assets/styles/application.css"],

  /* https://github.com/nuxt-community/style-resources-module */
  /* styleResources: {
    css: "./assets/styles/variables.css"
  }, */

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
  ],

  modules: [["@nuxtjs/google-tag-manager", { id: "GTM-PTQSCT3" }], "@nuxtjs/style-resources"],

  /* https://github.com/nuxt-community/axios-module#options */
  /* axios: {}, */

  /* extend webpack config */
  build: {
    /* 
    https://nuxtjs.org/faq/postcss-plugins#how-to-add-postcss-plugins-
    https://github.com/nuxt/nuxt.js/issues/3231
    https://codesandbox.io/s/5kr8nrlz5l 
    */
    postcss: {
      plugins: {
        /* "postcss-preset-env": false, */
        "postcss-mixins": {},
        "postcss-easy-import": {}
        /* "postcss-preset-env": { stage: 0 } */
        /* "postcss-custom-selectors": {},
        "postcss-nested": {},
        autoprefixer: {},
        "postcss-custom-media": {},
        "postcss-discard-comments": {} */
      },
      preset: { stage: 0 }
    }
    /* https://github.com/nuxt/nuxt.js/issues/3231 */
    /* extend(config, ctx) {
      config.module.rules.push({
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "postcss-loader"
          }
        ]
      });
    } */
  }
};
