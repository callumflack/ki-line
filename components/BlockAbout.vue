<template lang="pug">
  section.b-pb3(v-scroll-reveal)
    .Container.Container--su
      .u-relative
        .f-sm
          .w-sm-6x12.m-sm-lA.InsetImage
            .AspectRatio(style="padding-bottom: 115.7142857%")
              .AspectRatio-object
                ImageLazy(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1540276249/block-heritage_bpcnzd.jpg")

        .sm-u-absolutePin
          .f-sm-childrenCenter
            .w-lg-1x2.f.m-mdl-rA
              nuxt-link.BlockLink.Container.Container-sm-exact.Border.m-md-l0.m-lg-lA(to="/about")
                .bg-bg
                  .b-py1.w-sm-9x12.m-xA
                    h1.Title.u-textCenter On the block<br>since 1925
                  .GutterInset--x.GutterInset--b
                    p.m-b2 Edge Hill Butchery has been a family affair for almost a century. Scraping the wooden cutting blocks, spreading fresh sawdust on the cement floors, cutting newspapers into wrapping sheets, scrubbing the navy and white striped aprons and delivering orders to customers, it's in our blood. 
                  .Meta.u-textCenter.p-b5 
                    | About 
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
.InsetImage {
  @media (--mdl) {
    margin-right: calc(100% * 1 / 12);
  }
}
</style>
