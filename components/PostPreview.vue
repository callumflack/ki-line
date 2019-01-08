<template lang="pug">
  nuxt-link.w-100.w-sm-1x2.b-pb075(:to="id")
    article
      .AspectRatio.AspectRatio--16x9
        .AspectRatio-object
          img(:src="image", alt="Gladness")
      h2.Meta.bg-text.c-bg.p-x3.p-y2.b-y3(style="margin-top:1px") {{ title }}
      p 
        | {{ excerpt }}
        | 
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
    id: {
      type: String,
      required: true
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

