import Vue from "vue";

/* nuxtjs-multilanguage-website-master > plugins > filters.js */
Vue.filter("resize", (image, size) => {
  if (typeof image !== "undefined") {
    return "//img2.storyblok.com/" + size + image.replace("//a.storyblok.com", "");
  }
  return null;
});
