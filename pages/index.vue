<template lang="pug">
div
  header.Header.b-pb2
    .AspectRatio.AspectRatio--3x1
      .AspectRatio-object
        img(src="/images2/hero-whitetips.jpg", alt="Gladness")
      .AspectRatio-object.HeroBlend.f.f-childrenCenter
        //- .b-pb2.w-100.f-expandTop
        div
          .Container.Container--lg
            //- .b-mb05.u-textCenter
              IconBase.c-bg(icon-name="icon-iso" height="36" width="36")
                IconIso
            //-h1.Supertitle.u-textCenter.c-bg I’m glad you’re here.
            h1.Supertitle.Supertitle--shadow.u-textCenter.c-bg For powerful conversations you can't have with anyone else
            //- h2.Text.fs-text-lg.fw-500.fs-italic.u-textCenter.c-bg
              //- | The answers are already within us. Sometimes we need help to uncover them.
              | For powerful conversations you can't have with anyone else, talk to Ki.

  section.b-pb2
    .Container.Header--animate
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-container" height="36" width="36")
          IconContainer
        h5.Meta.Meta--rule.u-textCenter.b-mt05 
          span The Ki Line
      .fs-block-lg
        p The Ki Line is a quite place that gives you the space to be heard. Where you can come to breathe, lean into uncertainty and stretch into discomfort in a safe, protected environment. The answers are already within us. Sometimes we need help to uncover them. The Ki Line is that help. 
        p Hi, I'm Ki Woyke. The Ki Line is my way to help people who might be stuck and need powerful conversations to discovery their potential and their calling. I hold in-person coaching for groups and individuals in the Greater Seattle Area, Washington. I also hold online coaching for groups and individuals worldwide via video. 
        p 
          | My specialty is working with introverts. I also work with life transitions and high contrast relationships, and I provide Energy Leadership™ Assessments. 
          nuxt-link.fs-italic.fw-60.c-brand(to="/services") Learn more… 

      .b-mt1
        .AspectRatio.AspectRatio--7x5
          .AspectRatio-object
            nuxt-link(to="/services")
              img(src="/images2/services-map.jpg", alt="Services")

  section.b-pb3
    .Container
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-container" height="36" width="36")
          IconPyramid
        h5.Meta.Meta--rule.u-textCenter.b-mt05 
          span About Ki
      .fs-block-lg
        .ParagraphImage.w-1x3.w-lg-3x12.m-r6.p-b3
          img(src="/images2/ki-recut.jpg", alt="")
        p 
          //- span.fw-700.fs-italic Who is Ki Woyke? 
          | Curiosity and a need to balance my head and heart had me explore a few unique careers. With a Master’s degree in Literature and Oriental Studies (Bayerische Julius-Maximilians University Würzburg, Germany) and a passion to learn other cultures and languages, I am always seeking multi-cultural destinations, partnerships, and learning. A desire for growth made me look for, and accept, new opportunities. I enjoyed almost a decade each working in International Relations in Europe, and teaching foreign languages in Alaska. I was a volunteer radio personality for the American Forces Network in Germany hosting a show that focused on German culture and traditions, and I had the privilege to serve as Shareholder Relations Administrator for an Alaskan Native Village Corporation. What all positions have in common is the joy that comes from helping others realize their dreams, reach their goals, re-define themselves and connect deeply with others. 
          nuxt-link.fs-italic.fw-60.c-brand(to="/about") Learn more… 

  section.b-pb2
    .b-py4.bg-neutral-blue.CoverImage.Heights
      .Container
        .b-mb1.u-textCenter
          h5.Meta.Meta--rule.u-textCenter
            span What people say
        
        .Slider
          no-ssr
            //- vue-tiny-slider(:mouse-drag="true" :loop="false" items="2" gutter="20")
            vue-tiny-slider(v-bind="tinySliderOptions")
              .Slide(v-for="item in quotes" :key="item.author")
                .fs-block-lg
                  p {{ item.quote }} 
                  p.Meta.m-b1.u-textCenter {{ item.author }} 
                  p.fs-text-sm.fs-italic.u-textCenter {{ item.place }}

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
let components = {
  IconBase,
  IconIso,
  IconContainer,
  IconPyramid,
  IconBowl,
  ImageLazy
};

if (process.browser) {
  let VueTinySlider = require("vue-tiny-slider");
  components["vue-tiny-slider"] = VueTinySlider;
}

const quotes = [
  {
    author: "Troy Price",
    place: "Cedar Co Dems Ice Cream Social",
    quote:
      "I have had the privilege of associating with Ki over the past several months and admire her passion in helping individuals discover and appreciate their unique gifts. Not only does Ki genuinely care about her clients but she goes the extra mile to successfully transition them into their new work environment. I would highly recommend Ki to anyone looking to improve their personal life and wanting to find greater joy and success in their career. Thank you Ki for your amazing service!"
  },
  {
    author: "Troy McGuinness",
    place: "Cedar Co Dems Ice Cream Social",
    quote:
      "I have had the privilege of associating with Ki over the past several months and admire her passion in helping individuals discover and appreciate their unique gifts. Not only does Ki genuinely care about her clients but she goes the extra mile to successfully transition them into their new work environment. I would highly recommend Ki to anyone looking to improve their personal life and wanting to find greater joy and success in their career. Thank you Ki for your amazing service!"
  },
  {
    author: "Bruce",
    place: "Psyke Lair",
    quote:
      "I have had the privilege of associating with Ki over the past several months and admire her passion in helping individuals discover and appreciate their unique gifts. Not only does Ki genuinely care about her clients but she goes the extra mile to successfully transition them into their new work environment. I would highly recommend Ki to anyone looking to improve their personal life and wanting to find greater joy and success in their career. Thank you Ki for your amazing service!"
  }
];

export default {
  /* components: {
    IconBase,
    IconIso,
    IconContainer,
    IconPyramid,
    IconBowl,
    ImageLazy
  }, */
  components: components,
  data() {
    return {
      quotes,
      tinySliderOptions: {
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
        gutter: 20,
        items: 1,
        loop: false,
        mode: "carousel",
        mouseDrag: true,
        nav: true,
        navPosition: "bottom",
        rewind: true
      }
    };
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/styles/variables.css";

.Heights {
  background-image: url("/images2/heights3.jpg");
  background-blend-mode: multiply;
}

/* tiny slider theme */
.Slider >>> .tns-outer {
  display: flex;
  flex-direction: column;
}

.Slider >>> .tns-nav {
  display: flex;
  justify-content: center;
  margin-top: var(--s-4);
}

.Slider >>> .tns-ovh {
  display: flex;
  order: -1;
}

.Slider >>> .tns-nav button {
  border-radius: 999px;
  height: 0.5em;
  width: 0.5em;
  background-color: rgba(0, 0, 0, 0.25);
}

.Slider >>> .tns-nav button + button {
  margin-left: 1em;
}

.Slider >>> .tns-nav-active {
  background-color: var(--c-text) !important;
}
</style>
