/* import pkg from "./package.json"; */
import axios from "axios";

export default {
  mode: "universal",

  head: {
    title: "The Ki Line",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Transition coaching with Ki. Making change work for you. Alaska, Seattle and online worldwide."
      },
      {
        /* pinterest */
        name: "p:domain_verify",
        content: "aefdc30ceddb027c6c48eea7ecb36deb"
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.3.5/tiny-slider.css"
      }
    ]
  },

  loading: { color: "#1a1a1a" },

  css: ["~/assets/styles/application.css"],

  /*
    You cannot use path aliases here (~ and @), you need to use relative or absolute paths. So it must be a dot!
    https://github.com/nuxt-community/style-resources-module
  */
  styleResources: {
    css: "./assets/styles/variables.css"
  },

  router: {
    middleware: "currentPage"
  },

  plugins: [
    /* { src: "~/plugins/aos", ssr: false } */
    /* { src: "~/plugins/headroom", ssr: false } */
    /* { src: "~/plugins/vue-scroll-reveal", ssr: false }, */
    { src: "~/plugins/vue-tiny-slider", ssr: false },
    "~/plugins/vue-moment",
    "@/plugins/helpers",
    "@/plugins/filters"
  ],

  modules: [
    "@nuxtjs/style-resources",
    ["@nuxtjs/google-tag-manager", { id: "GTM-PLSPSHW" }],
    [
      "storyblok-nuxt",
      {
        accessToken:
          process.env.NODE_ENV == "production" ? "9e6eqQOnLY3SC4kt5xogowtt" : "KMpFebbWQbmS5wF3TvfQOAtt",
        cacheProvider: "memory"
      }
    ]
  ],

  generate: {
    // routes: ["404"]
    // fallback: "404.html"
    routes: function() {
      return axios
        .get(
          "https://api.storyblok.com/v1/cdn/stories?version=published&token=9e6eqQOnLY3SC4kt5xogowtt&starts_with=blog&cv=" +
            Math.floor(Date.now() / 1e3)
        )
        .then(res => {
          const posts = res.data.stories.map(x => x.full_slug);
          return ["/", "/blog", "/about", ...posts];
        });
    }
  },

  /* https://github.com/nuxt-community/axios-module#options */
  /* axios: {}, */

  /* extend webpack config */
  build: {
    /* vendor: ["vue-tiny-slider"], */

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
