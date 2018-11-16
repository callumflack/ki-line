<template lang="pug">
  .NavMobile(
    @click="close"
    :class="[{'u-hidden': !isVisible}]"
  )
    .p-y1
      NavList.Heading.fw-regular.c-brand

</template>

<script>
import NavLink from "~/components/NavLink.vue";
import NavList from "~/components/NavList";

export default {
  components: {
    NavLink,
    NavList
  },
  computed: {
    isVisible: function() {
      return this.$store.state.isMobileNavVisible;
    },
    currentPage: function() {
      return this.$store.state.currentPage;
    }
  },
  methods: {
    close() {
      this.$store.commit("SET_MOBILENAV_VISIBILITY", false);
    }
  }
};
</script>

<style scoped>
.NavMobile {
  background-color: var(--c-bg);
  border-top: 1px solid color-mod(var(--c-brand) alpha(10%));
  height: calc(100vh - var(--rs-nav-height));
  padding-top: var(--s-4);
  top: var(--rs-nav-height);
  width: 100%;

  & .Nav-link {
    display: block;
    margin: 0;
  }
}
</style>

