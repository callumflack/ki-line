<template lang="pug">
article.b-py2(v-editable="blok")
  header.Header.b-pb1
    .Container.Container--lg.mo-Extract-super 
      //- .bg-text.c-bg.p-x3.p-y2.b-y3.u-textCenter(style="margin-bottom:1px")
        IconBase.c-bg(icon-name="icon-turn" height="36" width="36" style="transform:translateY(2px)")
          IconTurn
      .AspectRatio.AspectRatio--16x9
        .AspectRatio-object
          img(:src="image", alt="Gladness")
        .AspectRatio-object.HeroBlend.f.f-childrenCenter
          .GutterInsetX
            h1.Title.Supertitle--shadow.u-textCenter.c-bg {{ title }}

  .Container.Scope-post
    p {{ content }}

    hr.bg-rule(v-if="contentNote")
    .c-block-text-light.fs-block-sm(v-if="contentNote")
      p {{ contentNote }}

</template>

<script>
import IconBase from "~/components/IconBase";
import IconTurn from "~/components/icons/IconTurn";

export default {
  components: {
    IconBase,
    IconTurn
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/blog/" + context.params.post, {
        version: "draft"
      })
      .then(res => {
        // console.log(res.data);
        return {
          blok: res.data.story.content,
          image: res.data.story.content.image,
          title: res.data.story.content.title,
          content: res.data.story.content.content,
          contentNote: res.data.story.content.contentNote
        };
      });
  },
  mounted() {
    this.$storybridge.on(["input", "published", "change"], event => {
      if (event.action == "input") {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      } else {
        window.location.reload();
      }
    });
  }
};
</script>

<style>
</style>

