import Vue from "vue";

/* nuxtjs-multilanguage-website-master > plugins > filters.js */
Vue.filter("resize", (image, size) => {
  if (typeof image !== "undefined") {
    return "//img2.storyblok.com/" + size + image.replace("//a.storyblok.com", "");
  }
  return null;
});

// Vue.filter("resize", (image, size) => {
//   return typeof image === "undefined"
//     ? ""
//     : image.replace(/a.storybridge.com/g, "img2.storybridge.com/" + size);
// });
