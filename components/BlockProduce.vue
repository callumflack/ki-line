<template lang="pug">
  section.b-pb3(v-scroll-reveal)
    .Container.Container--su
      .u-relative
        .w-sm-8x12
          .AspectRatio.AspectRatio--16x9
            .AspectRatio-object
              //- ImageLazy(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1540276386/produce-hero-4_m6datc.jpg")
              img(src="/images/produce-hero-7.jpg")

        .sm-u-absolutePin
          .f-childrenCenter
            .f.m-lA
              nuxt-link.BlockLink.Container.Container-sm-exact.Border.m-md-r0(to="/produce")
                .bg-bg
                  .b-py1.w-sm-9x12.m-xA
                    h1.Title.u-textCenter Where it’s from<br>& how it’s cut
                  .GutterInset--x.GutterInset--b
                    p.m-b2 We source only the highest quality beef, pork, lamb and poultry exclusively from ethical Australian farms and producers. And we've been butchering it since 1925. We'll help you find the right cut.
                  .Meta.u-textCenter.p-b5
                    | Produce 
                    span.BlockLink-target →
    
</template>


<script scoped>
import ImageLazy from "~/components/ImageLazy";

export default {
  props: {},
  components: { ImageLazy }
};
</script>

<style lang="postcss" scoped>
/* @import "../assets/styles/variables.css"; */
</style>
