<template lang="pug">
div
  header.Header.b-pb2
    .AspectRatio.sm-AspectRatio--4x3.mdl-AspectRatio--3x1
      .AspectRatio-object
        img(src="/images2/hero-orange-cut.jpg", alt="Gladness")
      .AspectRatio-object.HeroBlend.f.f-childrenCenter
        div
          .GutterInsetX
            h1.Supertitle.Supertitle--shadow.c-bg.u-textCenter Envision. Empower. Succeed.

  section.b-pb2
    .Container.Container--lg.Header--animate
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-container" height="36" width="36")
          IconContainer
        h5.Meta.Meta--rule.u-textCenter.b-mt05 
          span Services
      
      .FlexGrid.FlexGrid--noGrow
        .w-sm-1x2.w-lg-1x2(v-for="item in services" :key="item.title")
          .Card.b-mb1
            .AspectRatio.AspectRatio--2x1
              .AspectRatio-object
                img.Filter(:src="item.image", :alt="item.title")
            h2.Meta.bg-text.c-bg.p-x3.p-y2.b-y3(style="margin-top:1px") {{ item.title }}
            .fs-block-lg
              p(v-html="item.lede")

</template>

<script>
import IconBase from "~/components/IconBase";
import IconIso from "~/components/icons/IconIso";
import IconContainer from "~/components/icons/IconContainer";
import IconPyramid from "~/components/icons/IconPyramid";
import IconBowl from "~/components/icons/IconBowl";
import ImageLazy from "~/components/ImageLazy";

const services = [
  {
    image: "/images2/services-introvert.jpg",
    title: "Coaching for Introverts",
    lede:
      "<span class='fs-italic'>The Ki Line is where introverts find their voice, are heard, and understood.</span> Coaching with Ki is a journey into gratitude, understanding, self-acceptance, and growth. Show up for yourself, get beautiful results."
  },
  {
    image: "/images2/services-transitions.jpg",
    title: "Transitions",
    lede:
      "<span class='fs-italic'>Are you experiencing a major change in your life?</span> A transition in your career, a cross-cultural move? Let’s talk about how you can stay balanced and transition joyfully with Transition Coaching."
  },
  {
    image: "/images2/services-contrast.jpg",
    title: "High-Contrast Relationships",
    lede:
      "<span class='fs-italic'>High-contrast relationships have their own set of transitionary challenges.</span> Is contrast draining or energizing you? The Ki~Line helps keep your love light, steady, and growing, even when contrasts clash."
  },
  {
    image: "/images2/services-alaska.jpg",
    title: "Alaska—Transition to the Last Frontier",
    lede:
      "<span class='fs-italic'>Has life moved you to Alaska? Adjusting is a challenge, but rich with opportunity.</span> As someone who moved from Europe to Alaska and stayed for 15 years, I can help you transition gently. With coaching, you can adapt efficiently and enjoy this new chapter in your life as one of healing and growth."
  },
  {
    image: "/images2/services-leadership.jpg",
    title: "Energy Leadership™ Assessment",
    lede:
      "<span class='fs-italic'>Could your business run smoother and be more productive?</span> What is draining energy - a system, a process, or a person? Let’s talk about how you can influence energy and increase productivity, leadership and employee satisfaction after assessing your Energy Leadership Index."
  }
  /* {
    image: "/images2/services-1.jpg",
    title: "Pricing & Packages",
    lede:
      "I am committed to helping you achieve your goals and work through whatever blocks have been holding you back. Below, please find an overview of the prices and packages that are available. Each person's journey is different, and I will customize programs to your specific circumstances."
  } */
];

export default {
  components: {
    IconBase,
    IconIso,
    IconContainer,
    IconPyramid,
    IconBowl,
    ImageLazy
  },
  data() {
    return {
      services
    };
  },
  head() {
    return {
      title: "Services—The Ki Line",
      description: "Stuff here…"
    };
  }
};
</script>

<style scoped lang="postcss">
.Card {
}

.Filter {
  filter: grayscale(100%);
}
</style>
