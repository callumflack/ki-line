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
                  ImageLazy(src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1540276429/epicure-hero-2a_htoyud.jpg")
                .AspectRatio-object.Hero-blacken
                .AspectRatio-object
                  .p-y3
                    .Meta.u-textCenter.c-bg since 1925
                .AspectRatio-object
                  .f-childrenCenter.w-100
                    h1.Title.u-textCenter.c-bg Gourmet complements<br>make it taste even better

        .Container.mw-100.GutterInset--b
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
              h3.Heading.fw-600.u-textCenter This list is by no means all the complements we stock. The best way is to drop in and discover them all for yourself (and surprise your better half).
              .Heading.u-textCenter
                nuxt-link.Button(to="/contact") Drop in

  BlockProduce(data-aos="flip-up")
  BlockAbout

</template>

<script>
import ImageLazy from "~/components/ImageLazy";
import BlockAbout from "~/components/BlockAbout";
import BlockProduce from "~/components/BlockProduce";
import ProduceListItem from "~/components/ProduceListItem";

export default {
  components: {
    BlockAbout,
    BlockProduce,
    ImageLazy,
    ProduceListItem
  },
  data() {
    return {
      produceItems: [
        {
          title: "Rubs, marinades, mixes & sauces",
          text:
            "We love rubs and sauces. So we keep shoving in as many rubs and sauce brands as we can fit, such as Smokey Q, Lillie's Q, Billinudgel, Jess Pryle's Hard Core Carnivore rubs range, Peter Watson sauces, Ogilvie & Co's Tuckerbox marinades, and the Murrumbooee salt & pepper mixes, chutneys and sauces.",
          image: "epicure-sauce.jpg"
        },
        {
          title: "Bacon & prepared meats",
          text:
            "We proudly stock local Tablelands pork which we prepare and make into bacon and hams using traditional methods. We also stock Sun Valley nitrate-free and free-range Bacons, and The Bilton Man's cured beef slices. After a charcuterie? Drop by and see our spread.",
          image: "epicure-bacon.jpg"
        },
        {
          title: "Pate, pickles & condiments",
          text:
            "Complement your creations with our condiment selections from Poach Pear, Ogilvie & Co Black Truffle and Tuckerbox ranges (their Ploughman's Pickle is a winner), and the evergreen Peter Watson range.",
          image: "epicure-pate-3.jpg"
        },
        {
          title: "Cheeses",
          text:
            "Drop in to persue a wide variety of cheeses from a wide variery of Australian brands—Blue Cow Cheese, Divine Dairy, Woombye Cheese Company, Woodside Cheese Wrights, Kris Lloyd Artisan, Adelaide Hills Udder Delights, and many others.",
          image: "epicure-cheese-1.jpg"
        },
        {
          title: "Gelati, sweets & syrups",
          text:
            "Seal the savoury flavours with a sweet treat. Gelista gelato ice-cream, Noble Handcrafted maple syrups, and the Ogilvie & Co range of Dessert Sauces—Brandy Butterscotch, Chocolate liquers—and Cognac Fruit preserves.",
          image: "epicure-gelista.jpg"
        },
        {
          title: "Murdering Point wines",
          text:
            "That's right. Wine. But not just any wine. We're exclusive FNQ stockists of the mysterious and mult-award winning Murdering Point Wines. It's the only wine we stock.",
          image: "epicure-wine.jpg"
        }
      ]
    };
  },
  head() {
    return {
      title: "Epicure—Edge Hill Butchery, Cairns",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Make it taste even better with epicurean gourmet complements for our fine meat produce. In store, since 1925."
        }
      ]
    };
  }
};
</script>

<style scoped lang="postcss">
</style>
