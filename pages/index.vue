<template lang="pug">
div
  header.Header.b-pb2
    .AspectRatio.AspectRatio--2x1
      .AspectRatio-object
        img(src="/images2/hero.jpg", alt="Gladness")
      .AspectRatio-object.HeroBlend.f.f-childrenCenter
        //- .b-pb1.w-100.f-expandTop
        div
          .Container.Container--lg
            //- .b-mb05.u-textCenter
              IconBase.c-bg(icon-name="icon-iso" height="40" width="40")
                IconIso
            //- h1.Supertitle.u-textCenter.c-bg I’m glad you’re here.
            h1.Supertitle.u-textCenter.c-bg For powerful conversations you can't have with anyone else
            //- h2.Text.fs-text-lg.fw-500.fs-italic.u-textCenter.c-bg
              //- | The answers are already within us. Sometimes we need help to uncover them.
              | For powerful conversations you can't have with anyone else, talk to Ki.

  section.b-pb2
    .Container.Header--animate
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-container" height="40" width="40")
          IconContainer
        h5.Meta.Meta--rule.u-textCenter.b-mt05 
          span The Ki Line
      .fs-block-lg
        p A story about the Ki Line Way. It’s hard to get lost on Canna. At only five miles long and one mile wide, you can pretty much always see the sea, usually from the tops of tumbling cliffs. It’s a good thing because, especially at its western end, the island itself is fairly featureless moorland, a rising and falling strip of grassy undulations reaching out into the western ocean. 
        ul
          li A bullet point about the Ki Line Way
          li Another bullet point about the Ki Line Way
          li A final bullet point about the Ki Line Way

      .b-mt1
        .AspectRatio(style="padding-bottom:87.890625%")
          .AspectRatio-object
            img(src="/images2/services.jpg", alt="Services")

  //- section.b-pb2
    .Container.Container--md
      .b-mb1.u-textCenter
        h5.Meta.Meta--rule.u-textCenter.b-mt05 
          span Services
      .AspectRatio(style="padding-bottom:87.890625%")
        .AspectRatio-object
          img(src="/images2/services.jpg", alt="Services")

  section.b-pb2
    .Container
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-container" height="40" width="40")
          IconPyramid
        h5.Meta.Meta--rule.u-textCenter.b-mt05 
          span About Ki
      .fs-block-lg
        .ParagraphImage.w-1x2.w-lg-1x3.m-r6.p-b3
          img(src="/images2/ki-recut.jpg", alt="")
        p 
          //- span.fw-700.fs-italic Who is Ki Woyke? 
          | Curiosity and a need to balance my head and heart had me explore a few unique careers. With a Master’s degree in Literature and Oriental Studies (Bayerische Julius-Maximilians University Würzburg, Germany) and a passion to learn other cultures and languages, I am always seeking multi-cultural destinations, partnerships, and learning. A desire for growth made me look for, and accept, new opportunities. I enjoyed almost a decade each working in International Relations in Europe, and teaching foreign languages in Alaska. I was a volunteer radio personality for the American Forces Network in Germany hosting a show that focused on German culture and traditions, and I had the privilege to serve as Shareholder Relations Administrator for an Alaskan Native Village Corporation. What all positions have in common is the joy that comes from helping others realize their dreams, reach their goals, re-define themselves and connect deeply with others. 
          nuxt-link.fs-italic.c-brand(to="/about") Learn more… 

  section.b-pb2
    .b-py3.bg-neutral-blue.CoverImage.Heights
      .Container
        .b-mb1.u-textCenter
          h5.Meta.Meta--rule.u-textCenter
            span What people say
        
        //- no-ssr
          vue-slider(ref="slider" v-model="value")
        .Slide
          .fs-block-lg
            p 
              | I have had the privilege of associating with Ki over the past several months and admire her passion in helping individuals discover and appreciate their unique gifts. Not only does Ki genuinely care about her clients but she goes the extra mile to successfully transition them into their new work environment.
              | I would highly recommend Ki to anyone looking to improve their personal life and wanting to find greater joy and success in their career. 
              //- Ki has years of training and experience in the life coaching industry and her skills in developing a customized solution for her clients is exceptional.
              | Thank you Ki for your amazing service!
            p.Meta.m-b1 Troy Price 
            p.fs-text-sm.fs-italic Cedar Co Dems Ice Cream Social

  section.b-pb2
    .Container
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-container" height="40" width="40")
          IconBowl
        h5.Meta.Meta--rule.u-textCenter.b-mt05 
          span Get in touch
      .fs-block-lg
        p I hold in-person coaching for groups and individuals in the Greater Seattle Area, Washington. I also hold online coaching for groups and individuals worldwide via video. To see if I can help you, please get in touch:
        ul
          li #[a.c-brand.fs-italic(href="tel:716-704-2072") Call 716 704 2072]
          li #[a.c-brand.fs-italic(href="mailto:ki@thekiline.com") Email ki@thekiline.com]
          li #[a.c-brand.fs-italic(href="#") Schedule with Calendly]
        p.b-mt1.u-textCenter
          a.Button.Meta.fw-700 Book 30 minutes free

</template>

<script>
import IconBase from "~/components/IconBase";
import IconIso from "~/components/icons/IconIso";
import IconContainer from "~/components/icons/IconContainer";
import IconPyramid from "~/components/icons/IconPyramid";
import IconBowl from "~/components/icons/IconBowl";
import ImageLazy from "~/components/ImageLazy";
// import VueTinySlider from "vue-tiny-slider";

// ssr: false ain't enough…
// https://github.com/NightCatSama/vue-slider-component#using-it-with-nuxtjs
// let components = {
//   IconBase,
//   IconIso,
//   IconContainer,
//   IconPyramid,
//   IconBowl,
//   ImageLazy
// };

// if (process.browser) {
//   let VueTinySlider = require("vue-tiny-slider");
//   components["vue-tiny-slider"] = VueTinySlider;
// }

export default {
  components: {
    IconBase,
    IconIso,
    IconContainer,
    IconPyramid,
    IconBowl,
    ImageLazy
  },
  /* components: components, */
  data() {
    return {
      value: 1
    };
  }
};
</script>

<style scoped>
.HeroBlend {
  background-blend-mode: multiply;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.45) 40%,
    rgba(0, 0, 0, 0.25) 70%,
    rgba(0, 0, 0, 0.15) 100%
  );
}

.Heights {
  background-image: url("/images2/heights3.jpg");
  background-blend-mode: multiply;
}
</style>
