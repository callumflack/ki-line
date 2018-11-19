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

  /* 
    You cannot use path aliases here (~ and @), you need to use relative or absolute paths.
    So it must be a dot!
    https://github.com/nuxt-community/style-resources-module
  */
  styleResources: {
    css: "./assets/styles/variables.css"
  },

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
    /* https://www.evernote.com/l/ACw94CODEoJCEbgqo-RVrNisxAfsQdTW9Ck */
    postcss: {
      plugins: {}
      /* preset: { stage: 0 } */
    },
    /* 
      Get postcss syntax in single page component styles
      Requires <style lang="postcss"
      https://github.com/nuxt/nuxt.js/issues/3231
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.postcss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "postcss-loader"
          }
        ]
      });
    }
  }
};
