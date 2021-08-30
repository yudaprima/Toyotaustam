<template>
  <div class="bg-white">
    <Hero />
    <TwoCard />
    <ProductServices />
    <!-- <TwoCardRight /> -->
    <Banner />
    <Testimonial />
    <AnswerQuestion />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Dealer Toyota & harga mobil toyota jogja"
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Dealer Toyota Jogja. Info lengkap dan terbaru tentang harga mobil toyota baru maupun bekas di jogja semarang solo dan sekitarnya. hubungi kami sales resmi toyota."
        }
      ]
    };
  }
};
</script>

<style></style>
