import Vue from "vue";
// sometimes plugins don't setup their file structure correctly
// https://github.com/nuxt/nuxt.js/issues/917
// import VLazyImage from "v-lazy-image/dist/v-lazy-image.js";
// import VueTinySlider from "vue-tiny-slider";
import VueTinySlider from "~/node_modules/vue-tiny-slider/dist/index.js";

Vue.component(VueTinySlider);
