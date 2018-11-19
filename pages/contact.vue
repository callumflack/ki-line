<template lang="pug">
.Content
  section.b-pt1.b-pb3
    .Container.Container--su.Header--animate
      .u-relative.Layout
        .w-mdl-8x12.u-relative
          .AspectRatio(style="padding-bottom: 89.010989%")
            .AspectRatio-object
              ImageLazy(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1540276499/contact-map_f8aaqq.jpg")
              //- img(src="/images/contact-map.jpg")
              a.MapArrow.BlockLink.z-100(:href="contacts.link" target="_blank")

        .ContactCanvas
          .f-mdl-childrenCenter
            .f-mdl.m-mdl-lA
              .Container.Container-rg-exact.Border.m-md-r0
                .bg-bg
                  .u-mdl-hidden
                    .p-y3
                      .Meta.u-textCenter Since 1925
                    hr.m-a0

                  .b-py2.b-mdl-py1.w-sm-9x12.m-xA
                    h1.Title.u-textCenter In the shadow of<br>Edge Hill, Cairns

                  .FlexGrid
                    .w-sm-7x12
                      .p-x6.p-b6
                        p.ff-title.m-b6.m-sm-b2
                          a.u-block(:href="contacts.link" target="_blank")
                            span {{ contacts.addressa }}<br>
                            span {{ contacts.addressb }}<br>
                            span.icon-targetBlank {{ contacts.addressc }}
                        p.ff-title.m-b0
                          a.u-block(:href="`mailto:${contacts.email}`") E: {{ contacts.email }}
                        p.ff-title.m-b6.m-sm-b2
                          a.u-block(href="tel:07-4053-1526") T: {{ contacts.phone }}

                        p.ff-title.m-b0
                          span.u-block {{ contacts.openinga }}
                          span.u-block {{ contacts.openingb }}
                          span.u-block {{ contacts.openingc }}



</template>

<script>
import BlockContact from "~/components/BlockContact";
import ImageLazy from "~/components/ImageLazy";

const contacts = {
  addressa: "136 Collins Avenue",
  addressb: "Edge Hill, Cairns 4870",
  addressc: "Find us on a map",
  link: "https://goo.gl/maps/uXSNYhZFj612",
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
    BlockContact,
    ImageLazy
  },
  data() {
    return {
      contacts
    };
  },
  head() {
    return {
      title: "Contact—Edge Hill Butchery, Cairns",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Visit our shop in Edge Hill Cairns for the finest choice of meats and gourmet complements, quality advice and friendly service. We look forward to helping you. In store, since 1925."
        }
      ]
    };
  }
};
</script>

<style scoped>
.Layout {
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;

    & > * {
      flex: 1;
    }
  }
}

.ContactCanvas {
  @media (--mo) {
    display: block !important;
  }

  @media (max-width: 1023px) {
    display: flex;
    justify-content: center;
    order: -1;
  }

  @media (--mdl) {
    bottom: 0;
    display: block;
    height: 100%;
    left: 0;
    margin: auto;
    top: 0;
    width: 100%;
    position: absolute;
  }
}

.Layout:nth-of-type(even) {
}

.MapArrow {
  color: var(--c-text);
  display: block;
  position: absolute;
  top: 20%;
  left: 23.5%;
}

.MapArrow >>> svg {
  height: 100px;
  width: 100px;

  @media (--sm) {
    height: 150px;
    width: 150px;
  }
  @media (--lg) {
    height: 200px;
    width: 200px;
  }
}

.GridBorder {
  /* border-top: 1px solid var(--c-text); */

  @media (--sm) {
    border-top: none;
    border-left: 1px solid var(--c-text);
  }
}
</style>
