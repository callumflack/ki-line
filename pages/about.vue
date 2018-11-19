<template lang="pug">
.Content
  section.b-pt1.b-pb3
    .Container.Container--xl.Header--animate
      .bg-bg
        .GutterInset--.GutterInset--b
          .mo-Extract-super
            .Hero-image
              .AspectRatio.AspectRatio--2x1
                .AspectRatio-object
                  ImageLazy(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1540276542/about-hero_vvsdhx.jpg")
                .AspectRatio-object.Hero-blacken
                .AspectRatio-object
                  .p-y3
                    .Meta.u-textCenter.c-bg Edge Hill Butchery, Cairns
                .AspectRatio-object
                  .f-childrenCenter.w-100
                    h1.Title.u-textCenter.c-bg A family story since 1925

        .GutterInset--x.GutterInset--b
          .ehb-FlexGrid.FlexGrid-growNone
            .w-sm-6x12
              p 
                span.ff-title.fw-700.u-textUppercase It all started 
                | with James Vallely Snr, grandfather of Brian Vallely and great grandfather of Danny and Ben Vallely. Seeing a rising number of people come to live in Redlynch and Kamerunga and few butchers to provide meat, James Snr and his family moved their family butcher shop from Mareeba to Redlynch in 1925.

              p Until the late 1930’s, James Jnr worked in the family business with his father, learning the trade and delivering meat to cane cutters living in barracks on the cane farms in Redlynch and Kamerunga. Many of these people were of European descent and meat was a large and important part of their diet.

              p After a couple of years, James Snr purchased another butcher shop in nearby Stratford. A little over 20 years later, in 1947, James Jnr—who is now known as Jim Snr—and his wife Flo, purchased Edge Hill Butcher Shop on Collins Avenue, and moved with their family into the home behind the shop. Jim Snr and Flo personally worked and managed Edge Hill Butchery every Monday to Friday for 28 years.
            .w-sm-4x12.m-mo-Tparagraph.m-t1
              img(src="/images/about-1925-bw.jpg", alt="", style="opacity:0.85")
              p.fs-text-sm.c-text-mid.m-t2 Staff portrait, Redlynch 1925
              img(src="/images/about-1950-bw.jpg", alt="", style="opacity:0.75")
              p.fs-text-sm.c-text-mid.m-t2 Renovated shop front, Edge Hill 1950s

        .GutterInset--x.GutterInset--b
          .ehb-FlexGrid.FlexGrid-growNone
            .w-sm-2x12.u-mo-hidden &nbsp;
            .w-sm-4x12.m-mo-Tparagraph.m-t1
              img(src="/images/about-1960-bw.jpg", alt="Lorraine and Brian, Edge Hill Butchery 1980s", style="opacity:0.65")
              p.fs-text-sm.c-text-mid.m-t2 Lorraine and Brian, Edge Hill 1980s
              img(src="/images/about-2018.jpg", alt="Edge Hill Butchery shop front, 2018")
              p.fs-text-sm.c-text-mid.m-t2 The current shop front
            .w-sm-6x12.f-mo-orderFirst
              p
                span.ff-title.fw-700.u-textUppercase Just like his father did, 
                | Jim Snr kept his children Jim Jnr, Brian and Betty involved in the family business. After school the children could be found at the shop scraping the wooden cutting blocks, spreading fresh sawdust on the cement floors, cutting newspapers into wrapping sheets, scrubbing the navy and white striped aprons and delivering orders to customers.

              p On weekends Brian would drive to the Atherton Tablelands with his father Jim Snr to hand select and purchase cattle for the shop’s meat supply and then drive them back to Cairns in the Vallely cattle truck.

              p Jim Snr and Flo retired to Speewah in 1976 and their son Brian, with his wife Lorraine, purchased the Butchery, managing and working at it as his father and grandfather before him did.

              p Rod and Julie Leaver bought the business from Brian and Lorraine in 2016. After lovingly restoring the premises, Rod and Julie extend a warm, personal invitation to you to share our family tradition and become part of our customer family.

        .Candy
          .Container.mw-100
            .b-py1.w-sm-8x12.m-xA
              h3.Heading.fw-600.u-textCenter I've lived in Cairns for over 27 years and The Edge Hill Butchers are the best: super display cabinets, friendly staff and most of all, high quality meat. Rod and Julie are constantly improving all aspects of what they do.
              p.Heading.fw-500.fs-text-sm.u-textCenter Ron Livingston

</template>

<script>
import ImageLazy from "~/components/ImageLazy";

export default {
  components: {
    ImageLazy
  },
  head() {
    return {
      title: "About the Edge Hill Butchery, Cairns",
      description:
        "Independently owned and operated since 1925, ours is a family story. Find a warm, personal invitation to share our family tradition and become part of our customer family."
    };
  }
};
</script>

<style scoped>
.GridMarginLeft {
  @media (--sm) {
    margin-left: calc(100% * 1 / 12);
  }
}

.FlexGrid-growNone > * {
  flex-grow: 0;
}

.m-mo-Tparagraph {
  @media (--mo) {
    margin-top: calc(1.25 * var(--s-paragraph)) !important;
  }
}
</style>
