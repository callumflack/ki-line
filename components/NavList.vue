<template lang="pug">
div(:class="classes")
  nuxt-link.Nav-link(to="/" exact) The Ki Line
  span.Nav-link •
  NavLink(
    v-for="item in NavLinks"
    :key="item.label"
    :label="item.label"
    :link="item.link"
  )
</template>

<script>
import NavLink from "~/components/NavLink";

export default {
  components: {
    NavLink
  },
  props: {
    footer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        {
          "f f-justifyCenter Meta fw-700 c-block-bg u-linkCleanChildren": !this.footer,
          "f f-justifyCenter Meta fw-900 u-linkCleanChildren": this.footer
        }
      ];
    }
  },
  data() {
    return {
      NavLinks: [
        {
          label: "Services",
          link: "/services"
        },
        {
          label: "About",
          link: "/about"
        },
        {
          label: "Blog",
          link: "/blog"
        }
      ]
    };
  }
};
</script>

<style>
.Nav-link {
  align-items: center;
  display: inline-flex;
  height: var(--rs-nav-height);
}

.Nav-link + .Nav-link {
  margin-left: var(--s-2);
  margin-left: var(--inline-block-children-space);
}
</style>
