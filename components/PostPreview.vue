<template lang="pug">
  nuxt-link.w-100.w-sm-1x2.b-pb075(:to="link")
    article
      .AspectRatio.AspectRatio--16x9
        .AspectRatio-object
          img(:src="imageResize", :alt="title")
      h2.Meta.bg-text.c-bg.p-x3.p-y2.b-y3.f.f-alignItemsBaseline(style="margin-top:1px") 
        | {{ title }}
        span.m-lA.p-l3
          span.Arrow.Arrow--right
      p 
        | {{ excerpt }} 
        em.FakeLink.c-brand Continue reading
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    imageResize() {
      if (typeof this.image !== "undefined") {
        return (
          "//img2.storyblok.com/500x0" +
          this.image.replace("//a.storyblok.com", "")
        );
      }
      return null;
    }
  }
};
</script>

<style scoped>
/* a {
  text-decoration: none;
  color: black;
} */
</style>

