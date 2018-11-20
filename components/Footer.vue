<template lang="pug">
footer.Footer.b-pb2.ffs-block
  .Container(v-show="this.$route.name !== 'contact'")
    .b-mb1.u-textCenter
      IconBase(icon-name="icon-bowl" height="36" width="36")
        IconBowl
      h5.Meta.Meta--rule.u-textCenter.b-mt05 
        //- span Get in touch
        span Talk to Ki
    .b-mb1.fs-block-lg
      p I hold in-person coaching for groups and individuals in the Greater Seattle Area, Washington. I also hold online coaching for groups and individuals worldwide via video. To see if I can help you, please get in touch:
      //- ul
        li #[a.c-brand.fs-italic(href="tel:716-704-2072") Call 716 704 2072]
        li #[a.c-brand.fs-italic(href="mailto:ki@thekiline.com") Email ki@thekiline.com]
        //- li #[a.c-brand.fs-italic(href="#") Schedule with Calendly]
      p.b-mt075.u-textCenter
        a.Button.Meta.fw-700(href="https://calendly.com/ki--1" target="_blank") Book 30 minutes free

  .Container
    NavList.b-mb075(footer)

    //- hr.b-my075

    //- p.fs-text-md.u-textCenter.p-y6.m-b0
      a.u-linkClean.m-r3(:href="contacts.phone" target="_blank") {{ contacts.phone }}
      a.u-linkClean.m-r3(:href="`mailto:${contacts.email}`") {{ contacts.email }}
      a.u-linkClean(href="contacts.calendly" target="_blank") Calendly

    p.fs-text-sm.fs-italic.c-text-ligh.u-textCenter
      //- | Copyright ©2018 Ki Woyke
      //- span.m-x2 •
      a.u-linkClean.c-text-light(target="_blank" href="http://callumflack.design") Site by Callum Flack Design

</template>

<script scoped>
import IconBase from "~/components/IconBase";
import IconBowl from "~/components/icons/IconBowl";
import NavList from "~/components/NavList";

const contacts = {
  phone: "716 704 2072",
  email: "ki@thekiline.com",
  calendly: "#"
};

export default {
  components: {
    IconBase,
    IconBowl,
    NavList
  },
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

/* .Footer {
  background-blend-mode: multiply;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.075) 70%,
    rgba(0, 0, 0, 0.15) 100%
  );
} */

.Footer >>> .Nav-link {
  height: auto;
}
</style>
