<template lang="pug">
  nuxt-link(
    v-if="!external"
    :class="classes"
    :to="link"
    :exact="exact"
  )
    span {{ label }}
  a(
    v-else
    :class="classes"
    :href="link"
  )
    span
      icon-base.c-brand.m-r2.Icon(icon-name="icon-call" height="18" width="18")
        icon-call
    span {{ label }}
</template>

<script>
import IconBase from "~/components/IconBase.vue";
import IconCall from "~/components/icons/IconCall.vue";

export default {
  name: "NavLink",
  components: {
    IconBase,
    IconCall
  },
  props: {
    label: String,
    link: String,
    block: Boolean,
    icon: {
      type: Boolean,
      default: false
    },
    external: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        "Nav-link Link",
        {
          "Nav-link--block": this.block
        }
      ];
    }
    /* currentPage() {
      let classes = ["link"];
      if (this.link === this.$store.state.currentPage) {
        classes.push("is-active");
      } else if (this.$store.state.isMobileNavVisible) {
        classes.push("");
      } else {
        classes.push("");
      }
      return classes.join(" ");
    } */
  }
};
</script>

<style scoped>
.Icon {
  transform: translateY(2px);
}
</style>