<template lang="pug">
div
  header.Header.b-pb2
    .AspectRatio.AspectRatio--3x1
      .AspectRatio-object
        img(src="/images2/hero-shorebeyond.jpg", alt="Gladness")
      .AspectRatio-object.HeroBlend.f.f-childrenCenter
        div
          .Container
            //- h1.Supertitle.Supertitle--shadow.u-textCenter.c-bg Your ally in transition
            h1.Supertitle.Supertitle--shadow.u-textCenter.c-bg Who looks outside, dreams.#[br]Who looks inside, awakens.
            p.fs-text-sm.fs-italic.c-bg.u-textCenter — Carl Jung

  section.b-pb2
    .Container.Header--animate
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-container" height="36" width="36")
          IconPyramid
        h5.Meta.Meta--rule.u-textCenter.b-mt05 
          span About Ki
      .fs-block-lg
        .ParagraphImage.w-1x3.w-lg-3x12.m-r6.p-b3
          img(src="/images2/ki.jpg", alt="")

        p Curiosity and a need to balance my head and heart had me explore a few unique careers. With a Master’s degree in Literature and Oriental Studies (Bayerische Julius-Maximilians University Würzburg, Germany) and a passion to learn other cultures and languages, I am always seeking multi-cultural destinations, partnerships, and learning. A desire for growth made me look for, and accept, new opportunities. I enjoyed almost a decade each working in International Relations in Europe, and teaching foreign languages in Alaska. I was a volunteer radio personality for the American Forces Network in Germany hosting a show that focused on German culture and traditions, and I had the privilege to serve as Shareholder Relations Administrator for an Alaskan Native Village Corporation.

        p What all positions have in common is the joy that comes from helping others realize their dreams, reach their goals, re-define themselves and connect deeply with others.

        p Alaska was transformative in so many ways for me: I transitioned into a semi-subsistence life-style that required a lot more self-discovery, self-awareness, and self-subsistence.

        p Working with Native Elders, I learned to live the values of confidentiality and honor, of being prepared and respecting the land, of never taking more than we need, and of leaving no trace, and that respecting every person regardless of their standing will open hearts and doors to berry patches and the best fishing holes in the area.

        p Exploring Alaska’s wilderness reframed my outlook on life, reconnected me with myself, and taught me to trust life, the universe as a benevolent force that we can access to grow and to optimize our potential.

        p Next, a transitioning to Toronto, Ontario. I enrolled in iPEC’s extensive professional coaching certification training that allowed for yet another multicultural experience I am profoundly grateful for. Less than two weeks after my certification, life gave me a powerful lesson in involuntary transitioning and preparedness: as Canada opened borders to tens of thousands of refugees that week,  despite NAFTA, and legal advice, I was denied entry after a weekend trip to New York, and had to start over in Buffalo/Niagara. You can find some of the narrative on my blog and my youtube channel.

        p With the help of outstanding coaching tools,  the above mentioned trust in the benevolence of life forces, and by experimenting with different approaches, supported by my peer coaches, I continued building The Ki Line in Western New York until at least my personal belongings had been returned to me. I made wonderful friends and gained super life lessons in the process, but always kept in mind that Western New York was a transient place – I might not return back to Alaska full-time, but I am much closer now, finally settling joyfully in the Pacific NorthWest. I continue to coach world-wide – intuition and training knows no boundaries.

        p I invite you to become a member of my client family. I have the heart, mind, and the tools to help you grow, unearth the lies you tell yourself about why you can’t be as great or as happy or live as abundantly, so that you, too, can live your true power, be your true self.

        hr.bg-rule

        .c-block-text-light.fs-block-sm
          p.m-b2 Abbreviations:
          ul
            li MA: Master of Arts, Bayer. Julius-Maximilians University Würzburg, Germany.
            li CPC: Certified Professional Coach, iPEC (institute for Professional Excellence in Coaching)
            li ACC: Accredited Certified Coach (accredited by the International Coaching Federation ICF)
            li E.L.I. -MP: Energy Leadership Index (Assessment) Master Practitioner

  section.b-pb2
    .Container
      .b-mb1.u-textCenter
        h5.Meta.Meta--rule.u-textCenter.b-mt05 
          span The Ki Line Approach
      //- .b-mb1
        img(src="/images2/ki-dark.jpg", alt="")
      .fs-block-lg
        //- .ParagraphImage.ParagraphImage--right.w-1x2.w-lg-1x2.m-l6.p-b3
          img(src="/images2/ki-dark.jpg", alt="")
        p The Ki Line approach to coaching is all about honoring your true self and your true potential. With deep compassion for the human experience, I am committed to safeguard your most personal story, and to help you access your true power within. The Ki Line is your powerline to successful leadership, your helpline for balance in cross-cultural transition, relationships, and your hotline to increase joy and energy in all aspects of your life.
        p As an iPEC trained and certified coach and ICF member, I am committed to my profession’s highest ethical standards. I firmly believe that you can accomplish everything you can envision. The secret to success is commitment and perseverance to do the work, maintaining and increasing your energy during the process, and accountability – all accessible with a coach’s tools. As you coach with The Ki Line, these tools will be available to you throughout our journey and beyond.
        p Sometimes, this “work” means uncovering and removing blocks in your path, changing a belief that limits you, re-evaluating assumptions, or giving your inner critic a new voice.
        p As we explore your goals and aspirations together, you will rediscover your passions and envision the amazing life you are about to create. We will devise an action plan tailored to your unique abilities, set goals, and take the necessary steps to reach them.
        p Just like with a challenging hike, depending on the terrain and day form, these steps might be baby steps or giant leaps, but I will be there with you to make sure you keep moving forward. I am your accountability buddy on this trek across the glacier of dreams, this hike up the mountain of life purpose goals. As your ally, I will hand you the tools to keep moving, even when the path becomes narrow and steep. 

</template>

<script>
import IconBase from "~/components/IconBase";
import IconIso from "~/components/icons/IconIso";
import IconContainer from "~/components/icons/IconContainer";
import IconPyramid from "~/components/icons/IconPyramid";
import IconBowl from "~/components/icons/IconBowl";
import ImageLazy from "~/components/ImageLazy";

export default {
  components: {
    IconBase,
    IconIso,
    IconContainer,
    IconPyramid,
    IconBowl,
    ImageLazy
  },
  head() {
    return {
      title: "About—The Ki Line",
      description: "Stuff here…"
    };
  }
};
</script>

<style scoped lang="postcss">
</style>
