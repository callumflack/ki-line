<template>
  <div class="Scope-post" v-html="parsed"></div>
</template>

<script>
import { markdown } from "@/plugins/helpers";

export default {
  props: ["content"],
  computed: {
    parsed() {
      // Parse markdown using "marked" and add a parameter for the
      // Storyblok Image Service: https://www.storyblok.com/docs/image-service
      return markdown(this.content, "700x0");
    }
  }
};
</script>
