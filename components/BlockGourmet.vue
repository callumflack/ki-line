<template lang="pug">
  section.b-pb3(v-scroll-reveal)
    .Container.Container--su
      .u-relative
        .w-sm-8x12
          ImageLazy(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1540276269/block-epicure_zolp5g.jpg")

        .sm-u-absolutePin
          .f-childrenCenter
            .f.m-lA
              nuxt-link.BlockLink.Container.Container-sm-exact.Border.m-md-r0(to="/epicure")
                .bg-bg
                  .b-py1.w-sm-9x12.m-xA
                    h1.Title.u-textCenter Make it taste<br>even better
                  .GutterInset--x.GutterInset--b
                    p.m-b2 How do you make well-sourced, well-cut produce even better? Prep it well. And perhaps add something on the side to bring out the tastes even further. To make it easy for you, we've sourced our favourite rubs, sauces, prepared meats, condiments, cheeses and desert sweets. Thanks us later.
                  .Meta.u-textCenter.p-b5
                    | Epicure 
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
