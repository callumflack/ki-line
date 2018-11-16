<template lang="pug">
footer.Footer.b-pb3.ffs-block
  .Container

    NavList(footer)

    //- hr.b-my075

    p.fs-text-md.u-textCenter.p-y6.m-b0
      a.u-linkClean.m-r3(:href="contacts.phone" target="_blank") {{ contacts.phone }}
      a.u-linkClean.m-r3(:href="`mailto:${contacts.email}`") {{ contacts.email }}
      a.u-linkClean(href="contacts.calendly" target="_blank") Calendly

    p.fs-text-sm.fs-italic.c-text-ligh.u-textCenter
      //- | Copyright ©2018 Ki Woyke
      //- span.m-x2 •
      a.u-linkClean(target="_blank" href="http://callumflack.design") Site by Callum Flack Design

</template>

<script scoped>
import NavList from "~/components/NavList";

const contacts = {
  phone: "716 704 2072",
  email: "ki@thekiline.com",
  calendly: "#"
};

export default {
  components: {
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
.Knife {
  height: 16px;
}

.Border {
  border-top: 1px solid var(--c-bg);

  @media (--sm) {
    border-top: initial;
    border-left: 1px solid var(--c-bg);
  }
}

.Footer >>> .Nav-link {
  height: auto;
}
</style>
