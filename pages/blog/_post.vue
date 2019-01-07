<template lang="pug">
article.b-py2
  header.Header.b-pb1
    .Container.Container--lg.mo-Extract-super 
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
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/blog/" + context.params.post, {
        version: "draft"
      })
      .then(res => {
        console.log(res.data);
        return {
          image: res.data.story.content.image,
          title: res.data.story.content.title,
          content: res.data.story.content.content,
          contentNote: res.data.story.content.contentNote
        };
      });
  }
};
</script>

<style>
</style>

