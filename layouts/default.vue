<template lang="pug">
  //- div(:class="currentPage.substring(currentPage.lastIndexOf('/') + 1)")
  //- div(:class="currentPageClass")
  //- div(:class="currentPageClass.slice(4)")
  //- div(:class="currentPageClass.split('-/').join('-')")
  .u-relative
    Nav
    nuxt
    Footer

</template>

<script>
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Nav,
    Footer
  },
  computed: {
    currentPageClass() {
      // requires middleware function
      // https://nuxtjs.org/guide/routing/#middleware
      // return `fs-scale-reset page-${this.$store.state.currentPage}`;
      return `page-${this.$store.state.currentPage}`;
      // return [{ home: $store.state.currentPage === "/" }];
    }
  }
};
</script>

<style scoped>
/* .CFd {
  bottom: calc(2.25 * var(--rs-block-space));
  right: calc(0.5 * var(--rs-block-space));
  right: 0;
  color: var(--c-text-mid);
  position: absolute;
  transform: rotate(-90deg);
} */
</style>
