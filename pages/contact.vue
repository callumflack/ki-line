<template lang="pug">
div
  header.Header.b-pb2
    .AspectRatio.AspectRatio--3x1
      .AspectRatio-object
        img(src="/images2/hero-dusktips.jpg", alt="Gladness")
      .AspectRatio-object.HeroBlend.f.f-childrenCenter
        div
          .Container
            //- h1.Supertitle.Supertitle--shadow.u-textCenter.c-bg Be heard
            h1.Supertitle.Supertitle--shadow.u-textCenter.c-bg The answers are already within us. Sometimes we need help to uncover them.


  section.b-pb2
    .Container.Header--animate
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-bowl" height="36" width="36")
          IconBowl
        h5.Meta.Meta--rule.u-textCenter.b-mt05 
          span Talk to Ki
      .fs-block-lg
        p I hold in-person coaching for groups and individuals in the Greater Seattle Area, Washington. I also hold online coaching for groups and individuals worldwide via video. To see if I can help you, please get in touch:
        ul
          li #[a.c-brand.fs-italic(href="tel:716-704-2072") Call 716 704 2072]
          li #[a.c-brand.fs-italic(href="mailto:ki@thekiline.com") Email ki@thekiline.com]
          li #[a.c-brand.fs-italic(href="https://calendly.com/ki--1" target="_blank") Schedule with Calendly]

</template>

<script>
import IconBase from "~/components/IconBase";
import IconBowl from "~/components/icons/IconBowl";
import ImageLazy from "~/components/ImageLazy";

export default {
  components: {
    IconBase,
    IconBowl,
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

<style scoped lang="postcss">
</style>
