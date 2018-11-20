<template lang="pug">
  NavFixedOnScroll.Nav.Nav--animate.u-relative
    .Container.f-childrenCenter
      NavList

</template>

<script>
import IconBase from "~/components/IconBase.vue";
import IconHamburger from "~/components/icons/IconHamburger.vue";
import IconHamburgerClose from "~/components/icons/IconHamburgerClose.vue";
import NavList from "~/components/NavList";
import NavMobile from "~/components/NavMobile";
import NavFixedOnScroll from "~/components/NavFixedOnScroll.vue";
// this breaks everything, just like AOS — WTF?
// import { headroom } from "vue-headroom";

export default {
  components: {
    NavList,
    NavMobile,
    NavFixedOnScroll,
    IconBase,
    IconHamburger,
    IconHamburgerClose
  },
  computed: {
    isMobileNavVisible: function() {
      return this.$store.state.isMobileNavVisible;
    }
  },
  methods: {
    handleNavToggle() {
      this.$store.commit("SET_MOBILENAV_VISIBILITY", !this.$store.state.isMobileNavVisible);
      // this.navBar.static = this.$store.state.isMobileNavVisible;
      /* to NavFixedOnScroll via $emit: */
      this.$emit("emitMobileNavIsToggled");
    }
  }
};
</script>

<style scoped>
.Nav {
  backface-visibility: hidden;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.Nav >>> .Nav-link {
  color: var(--c-bg);
}
</style>