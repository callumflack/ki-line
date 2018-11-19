<template lang="pug">
footer.Footer.b-pb2.ffs-block
  .Container
    //- .u-textCenter
      IconBase(icon-name="icon-turn" height="50" width="50")
        IconTurn

    NavList.b-mb075(footer)

    //- hr.b-my075

    //- p.fs-text-md.u-textCenter.p-y6.m-b0
      a.u-linkClean.m-r3(:href="contacts.phone" target="_blank") {{ contacts.phone }}
      a.u-linkClean.m-r3(:href="`mailto:${contacts.email}`") {{ contacts.email }}
      a.u-linkClean(href="contacts.calendly" target="_blank") Calendly

    p.fs-text-sm.fs-italic.c-text-ligh.u-textCenter
      //- | Copyright ©2018 Ki Woyke
      //- span.m-x2 •
      a.u-linkClean.c-text-ligh(target="_blank" href="http://callumflack.design") Site by Callum Flack Design

</template>

<script scoped>
import IconBase from "~/components/IconBase";
import IconTurn from "~/components/icons/IconTurn";
import NavList from "~/components/NavList";

const contacts = {
  phone: "716 704 2072",
  email: "ki@thekiline.com",
  calendly: "#"
};

export default {
  components: {
    IconBase,
    IconTurn,
    NavList
  },
  props: {},
  data() {
    return {
      contacts
    };
  },
  computed: {
    blockClasses() {
      return [
        {
          "b-py3": !this.heroSpace,
          "b-pt2": this.heroSpace
        }
      ];
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/styles/variables.css";

.Footer {
  background-blend-mode: multiply;
  background-image: linear-gradient(
    to top,
    rgba(155, 61, 209, 0) 100% rgba(155, 61, 209, 0.005) 40%,
    rgba(155, 61, 209, 0.01) 0%
  );
}
.Border {
  border-top: 1px solid var(--c-bg);

.Container {
  @media (--sm) {
    border-top: 1px solid salmon;
  }
}

.Footer >>> .Nav-link {
  height: auto;
}
</style>
