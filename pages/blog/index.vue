<template lang="pug">
  section.b-blog-page.b-pb2.Header--animate
    .Container
      .b-mb1.u-textCenter
        IconBase(icon-name="icon-iso" height="36" width="36")
          IconIso
        h3.Meta.Meta--rule.u-textCenter.b-mt05 
          span The Ki Line blog

      .FlexGrid.FlexGrid--noGrow
        PostPreview(
          v-for="post in posts"
          :key="post.id"
          :link="post.full_slug"
          :title="post.content.title"
          :excerpt="post.content.contentExcerpt"
          :image="post.content.image"
        )

</template>

<script>
import IconBase from "@/components/IconBase";
import IconIso from "@/components/icons/IconIso";
import PostPreview from "@/components/PostPreview";
import storyblokLivePreview from "@/mixins/storyblokLivePreview";

export default {
  components: {
    IconBase,
    IconIso,
    PostPreview
  },
  mixins: [storyblokLivePreview],
  async asyncData(context) {
    // Check if we are in the editor mode
    let version = context.isDev ? "draft" : "published";

    let posts = await context.app.$storyapi.get(`cdn/stories`, {
      version: version,
      starts_with: "blog/",
      sort_by: "first_published_at:desc"
    });

    return {
      posts: posts.data.stories
    };
  },
  // asyncData(context) {
  //   return context.app.$storyapi
  //     .get("cdn/stories", {
  //       version: context.isDev ? "draft" : "published",
  //       starts_with: "blog/"
  //     })
  //     .then(res => {
  //       // console.log(res.data);
  //       return {
  //         posts: res.data.stories.map(bp => {
  //           return {
  //             id: bp.full_slug,
  //             title: bp.content.title,
  //             contentExcerpt: bp.content.contentExcerpt,
  //             image: bp.content.image
  //           };
  //         })
  //       };
  //     });
  // },
  head() {
    return {
      title: `The Ki Line Blog. Upgrade to a simpler, happier life`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `The Ki Line Blog: Life stories and lessons about Alaska, Life Transitions, High Contrast Relationships, Coaching, Leadership, Growth, Joy, Happiness.`
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
