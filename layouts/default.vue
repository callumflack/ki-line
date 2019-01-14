<template lang="pug">
  //- div(:class="currentPage.substring(currentPage.lastIndexOf('/') + 1)")
  //- div(:class="currentPageClass")
  //- div(:class="currentPageClass.slice(4)")
  //- div(:class="currentPageClass.split('-/').join('-')")
  .u-relative
    Nav(:class="reverseOutClass")
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
    },
    reverseOutClass() {
      /* if (this.$nuxt.error.length > 1) {
        return "";
      } else  */

      if (!this.$route.path.includes("/blog")) {
        return "Nav--white";
      }
      /* if (!this.$route.name === "blog") {
        return "Nav--white";
      } */
    }
  }
};
</script>

<style scoped>
.Nav--white >>> .Nav-link {
  color: var(--c-bg);
}
</style>
