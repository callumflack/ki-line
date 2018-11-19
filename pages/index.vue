<template lang="pug">
div
  header.Header.b-pb3
    .AspectRatio.AspectRatio--16x9
      .AspectRatio-object
        img(src="/images2/hero.jpg", alt="Gladness")
      .AspectRatio-object.Blend.f.f-childrenCenter
        div
          .Container
            h1.Supertitle.u-textCenter.c-bg I’m glad you’re here.
            h2.Text.fs-text-md.fw-500.fs-italic.u-textCenter.c-bg
              | The answers are already within us. Sometimes we need help to uncover them.
              | For powerful conversations you can't have with anyone else, talk to Ki.

  section.b-pb3
    .Container.Header--animate
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-container" height="50" width="50")
          IconContainer
        h5.Meta.Meta--rule.fw-900.u-textCenter.b-mt05 
          span The Ki Line
      .fs-block-lg
        p A story about the Ki Line Way. It’s hard to get lost on Canna. At only five miles long and one mile wide, you can pretty much always see the sea, usually from the tops of tumbling cliffs. It’s a good thing because, especially at its western end, the island itself is fairly featureless moorland, a rising and falling strip of grassy undulations reaching out into the western ocean. 
        ul
          li A bullet point about the Ki Line Way
          li Another bullet point about the Ki Line Way
          li A final bullet point about the Ki Line Way

  section.b-pb3
    .Container.Container--lg
      .b-mb1.u-textCenter
        h5.Meta.Meta--rule.fw-900.u-textCenter.b-mt05 
          span Services
      .AspectRatio(style="padding-bottom:87.890625%")
        .AspectRatio-object
          img(src="/images2/services.jpg", alt="Services")

  section.b-pb3
    .Container
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-container" height="50" width="50")
          IconPyramid
        h5.Meta.Meta--rule.fw-900.u-textCenter.b-mt05 
          span About Ki
      .fs-block-lg
        .Ki.w-1x2.w-lg-1x3.p-r6.p-b3
          img(src="/images2/ki.jpg", alt="")
        p 
          span.fw-700.fs-italic Who is Ki Woyke? 
          | Curiosity and a need to balance my head and heart had me explore a few unique careers. With a Master’s degree in Literature and Oriental Studies (Bayerische Julius-Maximilians University Würzburg, Germany) and a passion to learn other cultures and languages, I am always seeking multi-cultural destinations, partnerships, and learning. A desire for growth made me look for, and accept, new opportunities. I enjoyed almost a decade each working in International Relations in Europe, and teaching foreign languages in Alaska. I was a volunteer radio personality for the American Forces Network in Germany hosting a show that focused on German culture and traditions, and I had the privilege to serve as Shareholder Relations Administrator for an Alaskan Native Village Corporation. What all positions have in common is the joy that comes from helping others realize their dreams, reach their goals, re-define themselves and connect deeply with others. 
          nuxt-link.fs-italic.c-brand(to="/about") Learn more… 

  section.b-pb3
    .Container
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-container" height="50" width="50")
          IconBowl
        h5.Meta.Meta--rule.fw-900.u-textCenter.b-mt05 
          span About Ki
      .fs-block-lg
        p I hold in-person coaching for groups and individuals in the Greater Seattle Area, Washington. I also hold online coaching for groups and individuals worldwide via video.
        p To see if I can help you, please get in touch:
        ul
          li #[a.c-brand.fs-italic(href="tel:716-704-2072") Call 716 704 2072]
          li #[a.c-brand.fs-italic(href="mailto:ki@thekiline.com") Email ki@thekiline.com]
          li #[a.c-brand.fs-italic(href="#") Schedule with Calendly]
        p.b-mt1.u-textCenter
          a.Button.Meta.fw-700 Book 30 minutes free

</template>

<script>
import IconBase from "~/components/IconBase";
import IconContainer from "~/components/icons/IconContainer";
import IconPyramid from "~/components/icons/IconPyramid";
import IconBowl from "~/components/icons/IconBowl";
import ImageLazy from "~/components/ImageLazy";

export default {
  components: {
    IconBase,
    IconContainer,
    IconPyramid,
    IconBowl,
    ImageLazy
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/styles/variables.css";

.Blend {
  background-blend-mode: multiply;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 40%,
    rgba(0, 0, 0, 0.25) 70%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.Ki {
  float: left;
  transform: translateY(0.25em);

  & img {
    @media (--lg) {
      border: 5px solid salmon;
    }
  }
}
</style>

