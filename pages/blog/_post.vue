<template lang="pug">
article.b-py2.Header--animate(v-editable="blok")
  header.Header.b-pb1
    .Container.Container--lg.mo-Extract-super 
      //- .bg-text.c-bg.p-x3.p-y2.b-y3.u-textCenter(style="margin-bottom:1px")
        IconBase.c-bg(icon-name="icon-turn" height="36" width="36" style="transform:translateY(2px)")
          IconTurn
      .AspectRatio.AspectRatio--2x1
        .AspectRatio-object
          img(:src="image", alt="Gladness")
          //- img(:src="resize(post.content.image, '700x200')" :alt="post.content.image_alt")
        .AspectRatio-object.HeroBlend
          //- .f.f-alignItemsEnd.h-100
            .GutterInsetX.b-pb1.w-100
              //- h1.Title.flh-regular.Supertitle--shadow.u-textCenter.c-bg {{ title }}
              h1.Meta.fs-text.u-textCenter.c-bg {{ title }}
      h1.Meta.fs-text.u-textCenter.bg-black.c-bg.p-x4.p-y3.b-y4(style="margin-top:1px") {{ title }}

  .Container
    PostMarkdownContent(:content="content")

    .b-pt1
      hr.EndRule.bg-rule
      p.fs-text-sm.c-text-light(v-if="contentNote") {{ contentNote }}
      .FlexGrid.FlexGrid--sm
        .w-1x6.w-sm-1x10
          img.Avatar(src="/images2/ki-dark-square.jpg", alt="Ki Woyke")
        .w-5x6
          .f.f-alignItemsCenter.h-100
            p.fs-text-sm
              span Published {{ date | moment("MMMM Do, YYYY") }}<br>
              //- span by {{ author }}
              span.fs-italic 
                | by 
                nuxt-link(to="/about") Ki Woyke
</template>



<script>
import moment from "vue-moment";
import IconBase from "~/components/IconBase";
import IconTurn from "~/components/icons/IconTurn";
// import { isEditMode, resize } from "@/plugins/helper";
import PostMarkdownContent from "@/components/PostMarkdownContent";
import storyblokLivePreview from "@/mixins/storyblokLivePreview";

export default {
  components: {
    moment,
    PostMarkdownContent
  },
  mixins: [storyblokLivePreview],
  computed: {
    date() {
      return new Date(this.published || this.post.created_at)
        .toJSON()
        .slice(0, 10);
    }
  },
  /* methods: {
    resize
  },*/
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/blog/" + context.params.post, {
        version: context.isDev ? "draft" : "published"
        // resolve_links: 1
      })
      .then(res => {
        // console.log(res.data);
        return {
          // author: res.data.story.content.author.story,
          blok: res.data.story.content,
          content: res.data.story.content.content,
          contentNote: res.data.story.content.contentNote,
          contentExcerpt: res.data.story.content.contentExcerpt,
          image: res.data.story.content.image,
          post: res.data.story,
          published: res.data.story.first_published_at,
          title: res.data.story.content.title
        };
      })
      .catch(res => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          });
        }
      });
  },
  head() {
    return {
      title: `${this.title} — The Ki Line Blog`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.title} — ${this.contentExcerpt}`
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
