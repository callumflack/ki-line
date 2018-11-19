<template lang="pug">
footer.b-pbFooter
  .b-pb3
    img.m-xA.Knife(src="/images/knife.png", alt="")
  
  .Container
    .Border-white
      NavList

      .u-textCenter.c-bg.m-b6
        h4.Meta.fw-500.m-b2 Opening hours
        p.ff-title
          span.u-block {{ contacts.openinga }}
          span.u-block {{ contacts.openingb }}
          span.u-block {{ contacts.openingc }}

      hr.bg-bg

      .ehb-FlexGrid
        .w-sm-8x12
          .p-a6
            p.ff-title.c-bg.m-b2
              a.u-block(:href="contacts.link" target="_blank")
                span {{ contacts.addressa }}<br>
                span {{ contacts.addressb }}<br>
                span.icon-targetBlank {{ contacts.addressc }}
            p.ff-title.c-bg.m-b0
              a.u-block(:href="`mailto:${contacts.email}`") E: {{ contacts.email }}
            p.ff-title.c-bg
              a.u-block(href="tel:07-4053-1526") T: {{ contacts.phone }}
        .w-sm-4x12
          .p-a6.Border.h-100
            p.ff-title.c-bg.m-b2 Mostly busy butchering but also:
            p.ff-title.c-bg
              span.u-block
                a.icon-targetBlank(:href="contacts.facebook") Facebook
              a.icon-targetBlank(:href="contacts.instagram") Instagram

</template>

<script scoped>
import NavList from "~/components/NavList";

const contacts = {
  title: "Wynnum Dentists",
  addressa: "136 Collins Avenue",
  addressb: "Edge Hill, Cairns 4870",
  addressc: "Find us on a map",
  link: "https://goo.gl/maps/aYj6egrocby",
  phone: "(07) 4053 1526",
  email: "info@edgehillbutchery.com.au",
  openinga: "Monday–Friday: 6.30am–5.30pm",
  openingb: "Saturday: 6.30am–1.00pm",
  openingc: "Closed Sunday",
  facebook: "#",
  instagram: "#"
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

<style scoped>
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
</style>
