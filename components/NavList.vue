<template lang="pug">
.f.f-justifyCenter.Meta.u-linkCleanChildren
  nuxt-link.Nav-link(to="/" exact) 
    span The Ki Line
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
        },
        {
          label: "Contact",
          link: "/contact"
        }
      ]
    };
  }
};
</script>

<style>
@import "../assets/styles/variables.css";

.Nav-link {
  align-items: center;
  display: inline-flex;
  height: var(--rs-nav-height);
}

.Nav-link + .Nav-link {
  margin-left: var(--inline-block-children-space);

  @media (--mo) {
    margin-left: calc(0.75 * var(--inline-block-children-space));
  }
}
</style>
