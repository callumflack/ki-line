<template lang="pug">
div
  header.Header.b-pb2
    .AspectRatio.sm-AspectRatio--4x3.mdl-AspectRatio--3x1
      .AspectRatio-object
        img(src="/images2/hero-shorebeyond.jpg", alt="Gladness")
      .AspectRatio-object.HeroBlend.f.f-childrenCenter
        div
          .GutterInsetX
            h1.Supertitle.Supertitle--shadow.u-textCenter.c-bg No one can touch your essence
            //- p.fs-text-sm.fs-italic.c-bg.u-textCenter — Carl Jung

  section.b-pb2
    .Container.Header--animate
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-container" height="36" width="36")
          IconPyramid
        h5.Meta.Meta--rule.u-textCenter.b-mt05 
          span About Ki
      .Scope-post
        .ParagraphImage.w-1x3.w-lg-3x12.m-r6.p-b3
          img(src="/images2/ki.jpg", alt="")

        :markdown-it()
          Hello, I’m Ki Woyke. 
          
          I am a coach and transition strategist. The Ki Line is my way to help you get unstuck by having powerful conversations to discovery your full potential and your calling. 

          The successful approach of The Ki Line lies in a combination of strategy, empathy, reading subtext and laying bare those lies you tell yourself about why you can’t succeed, or live purposefully, or be happy. 

          My clients are often highly gifted creatives and analytical introverts. You are visionaries, driven, empathetic, and innovative. You know that coaching is not problem-solving, but something much more powerful: a process that allows you to unfold all of your passions and talents while moving through those internal blocks that have held you back all these years.

          Having moved through an eclectic international work and life history, I developed tools and a gentle, yet direct intuitive approach in holding conversations that will transform your life.

          ## Credentials
        
        .FlexGrid.FlexGrid--sm.FlexGrid--retainGrid
          .Credential.w-1x2.w-sm-1x3
            img(src="/images2/credential-iPEC.png", alt="Institute for Excellence in Coaching, iPEC")
            p.fs-text-sm.m-t2 Certified Professional Coach (Institute for Excellence in Coaching, iPEC)

          .Credential.w-1x2.w-sm-1x3
            img(src="/images2/credential-ACC-bw.png", alt="ACC, accredited by the International Coaching Certification")
            p.fs-text-sm.m-t2 Associate Certified Coach (ACC, accredited by the International Coaching Certification)

          .Credential.w-1x2.w-sm-1x3
            //- img(src="/images2/credential-ELi-bw.png", alt="Master Practitioner, Energy Leadership Index")
            //- p.fs-text-sm.m-t2 Master Practitioner, Energy Leadership Index
            img(src="/images2/credential-MA-bw.png", alt="M.A. Master's degree in American and Oriental Studies")
            p.fs-text-sm.m-t2 M.A. Master's degree in American and Oriental Studies

          .Credential.w-1x2.w-sm-1x3.u-sm-hidden

        //- :markdown-it()
          ## Education
          
        //- .FlexGrid.FlexGrid--sm.FlexGrid--retainGrid
          .Credential.w-1x2.w-sm-1x3
            img(src="/images2/credential-ELi-bw.png", alt="Institute for Excellence in Coaching, iPEC")
            p.fs-text-sm.m-t2 M.A. Master's degree in American and Oriental Studies

          .Credential.w-1x2.w-sm-1x3
          .Credential.w-1x2.w-sm-1x3.u-mo-hidden

        :markdown-it()
          ## Publications
          * Seven Northern Lights: A Guide to Thrive in Transition (2017)
          * Echoes of Black Holes Eating Stars: A Survivor's Memoir (2019)

        //- hr.bg-rule

        //- .c-block-text-light.fs-block-sm
          p.m-b2 Abbreviations:
          ul
            li MA: Master of Arts, Bayer. Julius-Maximilians University Würzburg, Germany.
            li CPC: Certified Professional Coach, iPEC (institute for Professional Excellence in Coaching)
            li ACC: Accredited Certified Coach (accredited by the International Coaching Federation ICF)
            li E.L.I. -MP: Energy Leadership Index (Assessment) Master Practitioner

  section.b-pb2
    .b-py2.bg-neutral-blue
      .Container
        .b-mb1.u-textCenter
          IconBase(icon-name="icon-container" height="36" width="36")
            IconContainer
          h5.Meta.Meta--ruleOnImage.u-textCenter.b-mt05 
            span The Ki Line Approach

        .Scope-post
          .b-mb075
            .m-b4.mo-Extract-super
              img(src="/images2/approach-map-2-1.jpg", alt="Envision phase")
            :markdown-it()
              From tunnel vision to the big picture: in the _**envision**_ phase, we explore where you are. We map where you want to be, and see what else is there. This phase brings out hidden gems, gifts, new talents, relevant life history, backburner dreams, and connects mind, body, heart, and gut. 

          .b-mb075
            .m-b4.mo-Extract-super
              img(src="/images2/approach-map-2-2.jpg", alt="Empower phase")
            :markdown-it()
              Redesigning your foundation, shaping the goal, mapping your steps to the top: the _**empower**_ phase gets practical. You commit to action and tell me how you want to be held accountable. While you see small results immediately, true transformation happens with consistent action over time.

          .b-mb075
            .m-b4.mo-Extract-super
              img(src="/images2/approach-map-2-3.jpg", alt="Momentum phase")
            :markdown-it()
              _**Success**_ is not a point, it is, like envision and empower, a phase. This is where flow doesn’t just happen but is generated with purpose. This is where momentum carries your project or vision to a tangible place. The experience is different for everyone. What unites all is the experience of a shift in energy and awareness. Here is where you make change work in your favor and design a strategy that will help you maintain the momentum.

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
      meta: [
        {
          hid: "description",
          name: "description",
          content: "here…"
        }
      ]
    };
  }
};
</script>

<style scoped lang="postcss">
@import "../assets/styles/variables.css";

.Credential img {
  /* border: 1px solid var(--c-rule); */
  /* background-color: white; */
  mix-blend-mode: multiply;
  margin: auto;
  max-width: 70%;
}

.Meta--ruleOnImage {
  &:before {
    width: 36%;
  }
  &:after {
    width: 36%;
  }
}
</style>
