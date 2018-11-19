<template lang="pug">
  section.b-pb3(v-scroll-reveal)
    .Container.Container--su
      .u-relative
        .w-sm-8x12
          .AspectRatio.AspectRatio--16x9
            .AspectRatio-object
              ImageLazy(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1540276270/block-yacht-beluga_iry3jn.jpg")

        .sm-u-absolutePin
          .f-childrenCenter
            .f.m-lA
              nuxt-link.BlockLink.Container.Container-sm-exact.Border.m-md-r0(to="/epicure")
                .bg-bg
                  .b-py1.w-sm-9x12.m-xA
                    h1.Title.u-textCenter Folks come from<br>miles around
                  .GutterInset--x.GutterInset--b
                    p.m-b2 
                      IconBase.AlignIconWithParagraph.m-r2(height="18" width="18" icon-name="icon-quote")
                        IconQuoteRev
                      | As a chef on a super yacht, finding quality products without compromise is one of the biggest challenges I face. Edge Hill Butchery make doing this so easy. They always go above and beyond, sourcing only the best produce and complements.
                    p.fs-text-sm 
                      | Danielle Lacey, Beluga Head Chef
                      //- a(target="_blank" href="https://www.instagram.com/yacht_chef4870/") Danielle Lacey, Beluga Head Chef
                  .Meta.u-textCenter.p-b5
                    | Epicure 
                    .BlockLink-target →
    
</template>


<script scoped>
import ImageLazy from "~/components/ImageLazy";
import IconBase from "~/components/IconBase";
import IconQuoteRev from "~/components/icons/IconQuoteRev";

export default {
  props: {},
  components: {
    ImageLazy,
    IconBase,
    IconQuoteRev
  }
};
</script>

<style scoped>
/* @import "../assets/styles/variables.css"; */

.Quote {
  transform: translateY(2px);
}
.Quote >>> svg {
  /* border: 1px solid; */
}
</style>
