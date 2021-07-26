<template>
  <section>
    <ProductPreview
      v-for="product in products"
      :key="product.slug"
      :title="product.title"
      :Dimensi="product.Dimensi"
      :Transmission="product.Transmission"
      :BrakeSystem="product.BrakeSystem"
      :FrontBrake="product.FrontBrake"
      :RearBrake="product.RearBrake"
      :FrontSuspension="product.FrontSuspension"
      :EngineType="product.EngineType"
      :BorexStroke="product.BorexStroke"
      :Displacement="product.Displacement"
      :MaxPower="product.MaxPower"
      :MaxTorque="product.MaxTorque"
      :image="product.image"
      :sale="product.sale"
      :price="product.price"
      :price2="product.price2"
      :price3="product.price3"
      :price4="product.price4"
      :price5="product.price6"
      :price6="product.price6"
    />
  </section>
</template>
<script>
// import FlashcardPreview from "@/components/products/FlashcardPreview.vue";
export default {
  components: {
    // FlashcardPreview
  },
  props: ["products"]
};
</script>
