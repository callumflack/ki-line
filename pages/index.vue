<template lang="pug">
div
  header.Header.b-pb2
    .AspectRatio.sm-AspectRatio--4x3.mdl-AspectRatio--10x4
      .AspectRatio-object
        img(src="/images2/tobias-keller-99139-unsplash2.jpg", alt="Gladness")
      .AspectRatio-object.HeroIndex-blend.f.f-childrenCenter
        .GutterInsetX.b-mb2.b-sm-mb4
          h1.Supertitle.Supertitle--shadow.u-textCenter.c-bg.m-b0
            | I'm glad you're here.
          hr.w-1x3.w-sm-1x6.w-lg-1x12.bg-bg.m-xA.b-mt05.b-mb075
          h2.Meta.Supertitle--shadow.c-bg.u-textCenter
            | For powerful conversations you can't have#[br]
            | with anyone else, talk to Ki.

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
          h5.Meta.Meta--ruleOnImage.u-textCenter
            span What people say
        
        .Slider
          no-ssr
            //- vue-tiny-slider(:mouse-drag="true" :loop="false" items="2" gutter="20")
            vue-tiny-slider(v-bind="tinySliderOptions")
              .Slide(v-for="item in quotes" :key="item.author")
                .fs-block-lg
                  p(v-html="item.quote")
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
    author: "Ben M.",
    place: "Pittburgh, PA",
    quote:
      "Ki was the steady hand that guided me through my own personal renaissance—a transformation from neuroticism to balance, timidity to confidence. Acknowledging that everyone's journey is different, Ki met me where I was and empowered me to discover the path forward. I am eternally grateful for her help and advice during what was otherwise a very trying time. (<a href='https://youtu.be/HG-eX0yAReM' target='_blank'>Watch Ben here</a>)."
  },
  {
    author: "Troy Price",
    place: "Edmonton/AB",
    quote:
      "I admire her passion in helping individuals discover and appreciate their unique gifts. I have seen the enormous benefits from Ki ‘s expertise as a coach. Ki always provides excellent client service and does what is best for her clients in every situation. This is just one reason why she is a highly respected professional in her industry. I would highly recommend Ki to anyone looking to improve their personal life and wanting to find greater joy and success in their career; her skills in developing a customized solution for her clients are exceptional."
  },
  {
    author: "Joseph Myers",
    place: "LMT",
    quote:
      "I felt myself becoming more productive, confident, and committed to ideas as well as personal relationships over the course of four months. I learned how to achieve successful business practices and personal relationships. I shifted my perspective from external factors to internal ones and feel like I have a better understanding of how to follow my individual path to successful relationships of all kinds."
  },
  {
    author: "A.B.G.",
    place: "Brasília,  Brazil",
    quote:
      "My experience with Ki's coaching had an amazing effect - on my career plans and on my self-awareness. The coaching sessions were crucial to my decision on the career path I should follow - in a period  when I was taken by much insecurity  and so many worries and doubts. It also provided me with powerful insights on my inner self and my emotional and mind processes, and therefore guided me towards the answers I was for so long searching for. Finally, I became visibly more confident on myself and my value, both as a person and as a professional. Ki is fantastic, I strongly recommend her!"
  },
  {
    author: "Andreas Woyke",
    place: "Pianist and Composer, Graz/Austria",
    quote:
      "After only one session I was already surprised to notice more clarity with some personal and professional challenges. Ki’s conscious guidance in our coaching conversation enabled me to focus on the essential, to let go of unnecessary distractions, and to gain clarity about my goals.  The tools she gave me allowed me to shift my energy upward, and to step closer to a clearer image of my goals and vision. She responds intuitively and with high sensitivity in her gift of listening and empathizing to what I share and describe."
  },
  {
    author: "Calvin",
    place: "Ontario, Canada",
    quote:
      "Insightful, supportive, intuitive, thorough. These are the qualities that I found in Ki as she coached me over 12 sessions. Her coaching approach was non-intrusive but allowed to inspire and move me forward to achieving my goals during a particularly rough period of my life. I recommend her as a truly gifted coach."
  },
  {
    author: "Heather H.",
    place: "Seattle, WA.",
    quote:
      'Ki had a way of really cutting to the heart of the matter. She asks inquisitive questions that come at problems from angles I never would have considered. She is never judgmental and encourages you to also check your inner judge at the door and just explore topics and problems. She never allows you to remain "stuck" in a moment and has a way of propelling your thinking forward and outlining concrete action plans. It\'s amazing how once you can get out of an old thought pattern how quickly behavior follows. Best of all, she never strays from what is realistic and reasonable.'
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
        autoWidth: true,
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

.HeroIndex-blend {
  background-blend-mode: multiply;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.2) 70%,
    rgba(0, 0, 0, 0.15) 100%
  );
}

.HeroIndex-rule {
  margin: auto;
  width: 15%;
}

.Heights {
  background-image: url("/images2/heights3.jpg");
  background-blend-mode: multiply;
}

/* tiny slider theme */
.Slider >>> .tns-outer {
  display: flex;
  flex-direction: column;
}

.Slider >>> .tns-inner {
  width: 100%;
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
