<template lang="pug">
  footer.Footer
    .Container
      NavList.Meta.c-brand.u-textCenter.u-hidden.u-md-block
      p.c-text-light.fs-text-xs.u-textCenter.Footer-brand
        | Website by 
        a.u-linkClean(href="http://callumflack.design/" target="_blank") Callum Flack Design
</template>

<script scoped>
import NavLink from "~/components/NavLink";
import NavList from "~/components/NavList";

export default {
  name: "Menu",
  components: {
    NavList,
    NavLink
  }
};
</script>

<style>
.Footer {
  padding-top: calc(1.375 * var(--rs-block-space));
  padding-bottom: calc(2 * var(--rs-block-space));
}

.Footer-nav {
  display: flex;
  flex-direction: column;
}

.Footer-nav + .Footer-nav {
  margin-left: calc(2 * var(--inline-block-children-space));
}

.Footer-nav .Nav-link {
  font-size: var(--rfs-text);
  height: var(--s-4);
}

.Footer-nav .Nav-link + .Nav-link {
  margin-left: 0;
}

.Footer-brand {
  margin-top: 5px;
}
</style>
