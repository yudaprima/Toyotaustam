<template>
  <div>
    <ProductAitem />
    <Product-Preview :products="product" class="" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let product;
    try {
      product = await $content("products", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      return error({ message: "Product not found" });
    }

    return {
      product
    };
  }
};
</script>
