<template>
  <div>
    <ProductAitem />
    <Product-Preview :products="product" class="" />
  </div>
</template>
<script>
import ProductPreview from "@/components/ProductPreview";

export default {
  components: {
    ProductPreview
  },
  async asyncData({ $content, params, error }) {
    let product;
    try {
      product = await $content("products", params.slug)
        .where({ slug: "Commercial" })
        .fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      return error({ message: "Product not found" });
    }

    // async asyncData({ $content, params }) {
    //   const product = await $content("products", params.slug)
    //     .where({ slug: "airport" })
    //     .fetch();
    // const tagsList = await $content("tags")
    //   .only(["name", "slug"])
    //   .where({ name: { $containsAny: article.tags } })
    //   .fetch();
    return {
      product
    };
  },
  methods: {}
};
</script>
