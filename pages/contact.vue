<template lang="pug">
div
  header.Header.b-pb2
    .AspectRatio.sm-AspectRatio--4x3.mdl-AspectRatio--3x1
      .AspectRatio-object
        ImageLazy(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1547536137/ki-line/hero-dusktips.jpg", alt="Upgrade to simple")
        //- img(src="/images/hero-dusktips.jpg", alt="Gladness")
      .AspectRatio-object.HeroBlend.f.f-childrenCenter
        .GutterInsetX
          h1.Supertitle.Supertitle--shadow.u-textCenter.c-bg Upgrade to simple

  section.b-pb2
    .Container.Header--animate
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-bowl" height="36" width="36")
          IconBowl
        h5.Meta.Meta--rule.u-textCenter.b-mt05 
          span Talk to Ki
      div
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
      title:
        "Contact Ki, Certified Life Coach in Washington and online worldwide",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Contact Ki for confidential, qualified coaching in life transitions and high-contrast relationships, for introverts and those wishing to make change."
        }
      ]
    };
  }
};
</script>

<style scoped lang="postcss">
</style>
