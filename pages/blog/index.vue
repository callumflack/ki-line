<template lang="pug">
div.b-pt2
  //- header.Header.b-pb2
    .AspectRatio.sm-AspectRatio--4x3.mdl-AspectRatio--3x1
      .AspectRatio-object
        img(src="/images2/hero-mountain-mirror.jpg", alt="Gladness")
      .AspectRatio-object.HeroBlend.f.f-childrenCenter
        div
          .GutterInsetX
            h1.Supertitle.Supertitle--shadow.u-textCenter.c-bg No one can touch your essence

  section.b-pb2
    .Container.Header--animate
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-iso" height="36" width="36")
          IconIso
        h3.Meta.Meta--rule.u-textCenter.b-mt05 
          span The Ki Line blog

      .FlexGrid.FlexGrid--noGrow
        PostPreview(
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :excerpt="post.contentExcerpt"
          :image="post.image"
          :id="post.id"
        )

</template>

<script>
import IconBase from "~/components/IconBase";
import IconIso from "~/components/icons/IconIso";
import PostPreview from "@/components/PostPreview";

export default {
  components: {
    IconBase,
    IconIso,
    PostPreview
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: context.isDev ? "draft" : "published",
        starts_with: "blog/"
      })
      .then(res => {
        // console.log(res.data);
        return {
          posts: res.data.stories.map(bp => {
            return {
              id: bp.full_slug,
              title: bp.content.title,
              contentExcerpt: bp.content.contentExcerpt,
              image: bp.content.image
            };
          })
        };
      });
  }
};
</script>

<style scoped>
</style>
