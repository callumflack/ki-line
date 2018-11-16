<template lang="pug">
.ListItem
  .FlexGrid
    .w-sm-1x2.ListItem-text
      h2.ff-title.fw-700.fs-text-lg.m-b2 {{ title }}
      p(v-html="text")
    .w-sm-1x2.ListItem-image
      img(:src="`/images/${image}`", alt="")
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    image: String
  }
};
</script>

<style lang="postcss" scoped>
.ListItem {
  margin-bottom: var(--grid-gutter);

  @media (--mo) {
    & .ListItem-image {
      order: -1;
    }
    & .ListItem-text {
      margin-top: var(--s-3);
      text-align: left;
    }
  }
}

.ListItem:nth-of-type(even) {
  @media (--sm) {
    & .ListItem-image {
      order: -1;
    }
    & .ListItem-text {
      text-align: left;
    }
  }
}

.ListItem-text {
  text-align: right;
}
</style>
