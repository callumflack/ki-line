<template lang="pug">
.Content
  section.b-pt1.b-pb3
    .Container.Container--xl.Header--animate
      .bg-bg
        .GutterInset--.GutterInset--b
          .mo-Extract-super
            .Hero-image
              .AspectRatio.AspectRatio--2x1
                .AspectRatio-object
                  img(src="/images/produce-hero-7.jpg")
                .AspectRatio-object.Hero-blacken
                .AspectRatio-object
                  .p-y3
                    .Meta.u-textCenter.c-bg since 1925
                .AspectRatio-object
                  .f-childrenCenter.w-100
                    h1.Title.u-textCenter.c-bg Sourced exclusively from<br>ethical Australian farms

        .Container.mw-100
          ProduceListItem(
            v-for="item in produceItems"
            :key="item.key"
            :title="item.title"
            :text="item.text"
            :image="item.image"
          )

        .Candy
          .Container.mw-100
            .b-py1.w-sm-8x12.m-xA
              h3.Heading.fw-600.u-textCenter Get in touch for customised bulk and private orders. And if you don’t see what you want, ask us anyway.
              .Heading.u-textCenter
                nuxt-link.Button(to="/contact") Get in touch

  BlockGourmet
  BlockAbout

</template>

<script>
import ImageLazy from "~/components/ImageLazy";
import BlockAbout from "~/components/BlockAbout";
import BlockGourmet from "~/components/BlockGourmet";
import ProduceListItem from "~/components/ProduceListItem";

export default {
  components: {
    BlockAbout,
    BlockGourmet,
    ImageLazy,
    ProduceListItem
  },
  data() {
    return {
      produceItems: [
        {
          title: "Tasmanian grass-fed Beef",
          text:
            "We stock Cape Grim Tasmanian grass-fed beef, with a marble score of 3+. It'll be a standout on your dinner table just like it is in our cabinet. Tender, juicy, delicious—an all-Australian specailty we're proud to serve.",
          image: "produce-beef-2.jpg"
        },
        {
          title: "Wagyu Beef",
          text:
            "This marbled beef is a decadent favourite, especially in Japan, with increasing popularity in Australia. We have Wagyu of various scores from both Rangers Valley Wagyu and Black Onyx marbled beef. Available all day, every day.",
          image: "produce-wagyu.jpg"
        },
        {
          title: "Award-winning sausages",
          text:
            "Winner of the Queensland Regional Sausage King Best Gourmet Sausage 2018 for our Canadian Maple and Smoky Bacon (you can Google that). We've also previously won for Pork, Beef & Italian, and our Chicken sausages. We've always got a range of handcrafted gourmet flavours on offer, changing daily.",
          image: "produce-sausages.jpg"
        },
        {
          title: "Dry Aged Beef",
          text:
            "Our special climate controlled cabinet creates dry air to mature the meat using Himalalyan salt bricks causing natural enzymes in the meat to break down the muscle fibre, giving extraordinary tenderness and intense flavours. It's the perfect steak!",
          image: "produce-dry-aged.jpg"
        },
        {
          title: "Shabu Shabu",
          text:
            "Paper-thin slices of raw beef. The name “Shabu Shabu” comes from the Japanese sound and action of the thinly sliced meat being swished with chopsticks in the hot pot. Shabu Shabu has become increasingly popular with the rise of Tepanyaki style cooking in Australia.",
          image: "produce-cattle.jpg"
        },
        {
          title: "Gourmet Meal Selections",
          text:
            "We keep a steady stock of gourmet meal selections to make it easy for you to drop in and have a superb dinner sorted quickly. Choose from Beef Wellington, Lamb Capreece, Pulled Pork Parcels and Moroccan Chicken Breasts.",
          image: "produce-gourmet-selection.jpg"
        }
      ]
    };
  },
  head() {
    return {
      title: "Produce—Edge Hill Butchery, Cairns",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "The finest primary cuts and specialty meat cuts sourced exclusively from ethical Australian farms. In store, since 1925."
        }
      ]
    };
  }
};
</script>

<style scoped lang="postcss">
/* @import "../assets/styles/variables.css"; */
</style>
