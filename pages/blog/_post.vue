<template lang="pug">
  article.b-blog-page.b-pb2.Header--animate(v-editable="post.content")
    header.Header.b-pb1
      .Container.Container--lg.mo-Extract-super 
        .AspectRatio.AspectRatio--2x1
          .AspectRatio-object
            //- img(:src="post.content.image", :alt="post.content.image_alt || post.content.title")
            //- img(:src="post.content.image | resize(this.post.content.image, '1500x0')")
            img(:src="imageResize", :alt="post.content.image_alt || post.content.title")
          .AspectRatio-object.HeroBlend
        h1.Meta.fs-text.u-textCenter.bg-black.c-bg.p-x4.p-y3.b-y4(style="margin-top:1px") {{ post.content.title }}

    .Container
      PostMarkdownContent(:content="post.content.content")

      .b-pt1
        hr.EndRule.bg-rule
        p.fs-text-sm.c-text-light(v-if="post.content.contentNote") {{ post.content.contentNote }}
        .FlexGrid.FlexGrid--sm
          .w-1x6.w-sm-1x10
            img.Avatar(src="/images/ki-dark-square.jpg", alt="Ki Woyke")
          .w-5x6
            .f.f-alignItemsCenter.h-100
              p.fs-text-sm
                span Published {{ date | moment("MMMM Do, YYYY") }}<br>
                span.fs-italic 
                  | by 
                  nuxt-link(to="/about") Ki Woyke
</template>



<script>
import moment from "vue-moment";
import PostMarkdownContent from "@/components/PostMarkdownContent";
// import { resize } from "@/plugins/helpers";
import storyblokLivePreview from "@/mixins/storyblokLivePreview";

export default {
  components: {
    moment,
    PostMarkdownContent
  },
  mixins: [storyblokLivePreview],
  computed: {
    date() {
      return new Date(this.post.first_published_at).toJSON().slice(0, 10);
    },
    imageResize() {
      if (typeof this.post.content.image !== "undefined") {
        return (
          "//img2.storyblok.com/1500x0" +
          this.post.content.image.replace("//a.storyblok.com", "")
        );
      }
      return null;
    }
  },
  /* methods: {
    resize
  },*/
  async asyncData(context) {
    // Check if we are in the editor mode
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published";

    let post = await context.app.$storyapi.get(
      `cdn/stories/blog/${context.params.post}`,
      {
        version: version,
        sort_by: "first_published_at:desc"
      }
    );

    return {
      post: post.data.story
    };
  },
  // asyncData(context) {
  //   return context.app.$storyapi
  //     .get("cdn/stories/blog/" + context.params.post, {
  //       version: context.isDev ? "draft" : "published"
  //       // resolve_links: 1
  //     })
  //     .then(res => {
  //       // console.log(res.data);
  //       return {
  //         // author: res.data.story.content.author.story,
  //         blok: res.data.story.content,
  //         content: res.data.story.content.content,
  //         contentNote: res.data.story.content.contentNote,
  //         contentExcerpt: res.data.story.content.contentExcerpt,
  //         image: res.data.story.content.image,
  //         post: res.data.story,
  //         published: res.data.story.first_published_at,
  //         title: res.data.story.content.title
  //       };
  //     })
  //     .catch(res => {
  //       if (!res.response) {
  //         console.error(res);
  //         context.error({
  //           statusCode: 404,
  //           message: "Failed to receive content form api"
  //         });
  //       } else {
  //         console.error(res.response.data);
  //         context.error({
  //           statusCode: res.response.status,
  //           message: res.response.data
  //         });
  //       }
  //     });
  // },
  head() {
    return {
      title: `${this.post.content.title} — The Ki Line Blog`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.post.content.title} — The Ki Line Blog — ${
            this.post.content.contentExcerpt
          }`
        }
      ]
    };
  }
};
</script>

<style scoped>
@import "../../assets/styles/variables.css";

.PostHeroBlend {
  background-blend-mode: multiply;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 40%,
    rgba(0, 0, 0, 0.3) 70%,
    rgba(0, 0, 0, 0.15) 100%
  );
}

.Avatar {
  border-radius: 999px;
}

.EndRule {
  margin-left: 0;
  /* width: 40%;

  @media (--mo) {
    width: 70%;
  } */
}
</style>
